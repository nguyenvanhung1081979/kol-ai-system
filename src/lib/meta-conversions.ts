import { createHash } from "node:crypto";
import type { Order } from "@/lib/orders";

const DEFAULT_GRAPH_API_VERSION = "v26.0";
const META_REQUEST_TIMEOUT_MS = 8_000;

type MetaConversionsResponse = {
  events_received?: number;
  fbtrace_id?: string;
  messages?: string[];
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
};

type MetaUserData = {
  ph?: string[];
  client_ip_address?: string;
  client_user_agent?: string;
  fbp?: string;
  fbc?: string;
};

export type MetaPurchaseResult =
  | { sent: false; reason: "not_configured" }
  | { sent: true; eventsReceived: number; traceId?: string };

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function normalizeVietnamPhoneForMeta(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (/^0\d{9}$/.test(digits)) return `84${digits.slice(1)}`;
  if (/^84\d{9}$/.test(digits)) return digits;
  if (/^\d{9}$/.test(digits)) return `84${digits}`;
  return null;
}

function graphApiVersion(): string {
  const configured = process.env.META_GRAPH_API_VERSION?.trim();
  return configured && /^v\d+\.\d+$/.test(configured)
    ? configured
    : DEFAULT_GRAPH_API_VERSION;
}

/**
 * Gửi Purchase từ máy chủ sau khi SePay đã xác nhận tiền vào.
 * Hàm này không ném lỗi khi chưa cấu hình Meta để website vẫn có thể triển khai trước,
 * nhưng sẽ ném lỗi mạng/API để webhook ghi log và cảnh báo mà không làm hỏng đơn hàng.
 */
export async function sendMetaPurchase(order: Order): Promise<MetaPurchaseResult> {
  const pixelId = process.env.META_PIXEL_ID?.trim();
  const accessToken = process.env.META_CONVERSIONS_API_TOKEN?.trim();
  if (!pixelId || !accessToken) {
    return { sent: false, reason: "not_configured" };
  }

  const normalizedPhone = normalizeVietnamPhoneForMeta(order.buyerPhone);
  const userData: MetaUserData = {};

  if (normalizedPhone) userData.ph = [sha256(normalizedPhone)];
  if (order.metaAttribution?.clientIpAddress) {
    userData.client_ip_address = order.metaAttribution.clientIpAddress;
  }
  if (order.metaAttribution?.clientUserAgent) {
    userData.client_user_agent = order.metaAttribution.clientUserAgent;
  }
  if (order.metaAttribution?.fbp) userData.fbp = order.metaAttribution.fbp;
  if (order.metaAttribution?.fbc) userData.fbc = order.metaAttribution.fbc;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor((order.paidAt ?? Date.now()) / 1000),
        event_source_url:
          order.metaAttribution?.eventSourceUrl ??
          `https://vungalishop.vercel.app/san-pham/${order.productSlug}`,
        event_id: order.code,
        action_source: "website",
        user_data: userData,
        custom_data: {
          currency: "VND",
          value: order.amount,
          content_ids: [order.productSlug],
          content_type: "product",
          content_name: order.productName,
          order_id: order.code,
        },
      },
    ],
  };

  const testEventCode = process.env.META_TEST_EVENT_CODE?.trim();
  if (testEventCode) payload.test_event_code = testEventCode;

  const endpoint = new URL(
    `https://graph.facebook.com/${graphApiVersion()}/${encodeURIComponent(pixelId)}/events`
  );
  endpoint.searchParams.set("access_token", accessToken);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(META_REQUEST_TIMEOUT_MS),
  });
  const result = (await response.json()) as MetaConversionsResponse;

  if (!response.ok || result.error) {
    const message = result.error?.message ?? `HTTP ${response.status}`;
    const code = result.error?.code ? ` (Meta code ${result.error.code})` : "";
    throw new Error(`Meta Conversions API từ chối Purchase: ${message}${code}`);
  }

  return {
    sent: true,
    eventsReceived: result.events_received ?? 0,
    traceId: result.fbtrace_id,
  };
}
