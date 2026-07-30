import { Redis } from "@upstash/redis";

export type OrderStatus = "pending" | "paid" | "expired";

export type Order = {
  code: string;
  productSlug: string;
  productName: string;
  amount: number;
  blobPathname: string;
  buyerName: string;
  buyerPhone: string;
  status: OrderStatus;
  createdAt: number;
  paidAt?: number;
  downloadUrl?: string;
};

const PENDING_TTL_SECONDS = 60 * 60; // 1h to complete payment
const PAID_TTL_SECONDS = 60 * 60 * 24 * 30; // keep paid orders 30 days

function redis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export function isOrdersConfigured() {
  return redis() !== null;
}

function orderKey(code: string) {
  return `order:${code}`;
}

function generateOrderCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // không dùng ký tự dễ nhầm (0/O, 1/I)
  let code = "VAS";
  for (let i = 0; i < 6; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

export async function createOrder(input: {
  productSlug: string;
  productName: string;
  amount: number;
  blobPathname: string;
  buyerName: string;
  buyerPhone: string;
}): Promise<Order> {
  const client = redis();
  if (!client) throw new Error("Orders store chưa được cấu hình.");

  const code = generateOrderCode();
  const order: Order = {
    code,
    ...input,
    status: "pending",
    createdAt: Date.now(),
  };

  await client.set(orderKey(code), order, { ex: PENDING_TTL_SECONDS });
  return order;
}

export async function getOrder(code: string): Promise<Order | null> {
  const client = redis();
  if (!client) return null;
  const order = await client.get<Order>(orderKey(code));
  return order ?? null;
}

export async function markOrderPaid(code: string, downloadUrl: string): Promise<Order | null> {
  const client = redis();
  if (!client) return null;
  const order = await client.get<Order>(orderKey(code));
  if (!order) return null;

  const updated: Order = { ...order, status: "paid", paidAt: Date.now(), downloadUrl };
  await client.set(orderKey(code), updated, { ex: PAID_TTL_SECONDS });
  return updated;
}
