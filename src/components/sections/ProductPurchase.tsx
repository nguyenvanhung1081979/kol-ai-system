"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { bankInfo, siteConfig, type Product } from "@/lib/constants";
import { BankIcon, CopyIcon } from "@/components/ui/Icons";
import { copyToClipboard } from "@/lib/clipboard";
import { VipContentUnlocked } from "@/components/sections/VipContentUnlocked";

type Mode = "form" | "waiting" | "paid" | "fallback";

type OrderInfo = {
  code: string;
  amount: number;
};

const POLL_INTERVAL_MS = 4000;
const POLL_TIMEOUT_MS = 20 * 60 * 1000; // ngừng poll sau 20 phút

function unlockedOrderKey(productSlug: string) {
  return `order_${productSlug}`;
}

const OWNER_UNLOCK_KEY = "owner_unlock";

function QrBlock({
  qrUrl,
  amountLabel,
  addInfo,
  children,
}: {
  qrUrl: string;
  amountLabel: ReactNode;
  addInfo: string;
  children?: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="card-hover max-w-md mx-auto bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
      <div className="w-14 h-14 rounded-xl grad-btn flex items-center justify-center mx-auto mb-5">
        <BankIcon className="w-7 h-7 text-white" />
      </div>
      <p className="text-txt2 text-sm mb-1">Số tiền cần chuyển</p>
      <p className="mb-5">{amountLabel}</p>

      <div className="bg-white rounded-2xl p-3 w-56 mx-auto mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qrUrl}
          alt="Mã QR chuyển khoản"
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="space-y-3 text-left bg-card2 border border-border rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-txt2 text-xs">Ngân hàng</p>
            <p className="font-semibold truncate">{bankInfo.bankName}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
          <div className="min-w-0">
            <p className="text-txt2 text-xs">Chủ tài khoản</p>
            <p className="font-semibold truncate">{bankInfo.accountName}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
          <div className="min-w-0">
            <p className="text-txt2 text-xs">Số tài khoản</p>
            <p className="font-semibold">{bankInfo.accountNumber}</p>
          </div>
          <button
            onClick={async () => {
              await copyToClipboard(bankInfo.accountNumber);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className={`btn-ghost shrink-0 border border-border text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 ${
              copied ? "scale-95" : ""
            }`}
          >
            <CopyIcon className="w-3.5 h-3.5" />
            <span>{copied ? "Đã sao chép ✓" : "Sao chép"}</span>
          </button>
        </div>
        <div className="border-t border-border pt-3">
          <p className="text-txt2 text-xs">Nội dung chuyển khoản (bắt buộc)</p>
          <p className="font-semibold">{addInfo}</p>
        </div>
      </div>

      {children}
    </div>
  );
}

export function ProductPurchase({ product }: { product: Product }) {
  const [mode, setMode] = useState<Mode>(() => {
    if (
      product.contentUnlock &&
      typeof window !== "undefined" &&
      localStorage.getItem(OWNER_UNLOCK_KEY) === "1"
    ) {
      return "paid";
    }
    return "form";
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [order, setOrder] = useState<OrderInfo | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showLookup, setShowLookup] = useState(false);
  const [lookupPhone, setLookupPhone] = useState("");
  const [lookingUp, setLookingUp] = useState(false);
  const [lookupError, setLookupError] = useState("");

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  // Sản phẩm dạng mở khoá nội dung: nếu trình duyệt này đã thanh toán trước đó,
  // tự động mở khoá lại mà không cần trả tiền lần 2.
  useEffect(() => {
    if (!product.contentUnlock) return;
    if (localStorage.getItem(OWNER_UNLOCK_KEY) === "1") return;
    const savedCode = localStorage.getItem(unlockedOrderKey(product.slug));
    if (!savedCode) return;
    (async () => {
      try {
        const res = await fetch(`/api/orders/${savedCode}`);
        const json = await res.json();
        if (json.ok && json.status === "paid") {
          setMode("paid");
        } else if (json.ok) {
          // Server xác nhận rõ ràng đơn này tồn tại nhưng không phải "paid"
          // (VD: pending đã hết hạn) -> mã cũ không còn dùng được, dọn key.
          localStorage.removeItem(unlockedOrderKey(product.slug));
        }
        // Không xoá key khi API trả lỗi/không rõ ràng (404 tạm thời, lỗi server...)
        // để tránh mất oan trạng thái đã mở khoá vì một lần request thất bại.
      } catch {
        // bỏ qua lỗi mạng tạm thời, giữ nguyên form
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startPolling(code: string) {
    const startedAt = Date.now();
    pollRef.current = setInterval(async () => {
      if (Date.now() - startedAt > POLL_TIMEOUT_MS) {
        if (pollRef.current) clearInterval(pollRef.current);
        return;
      }
      try {
        const res = await fetch(`/api/orders/${code}`);
        const json = await res.json();
        const isPaid =
          json.ok && json.status === "paid" && (product.contentUnlock || json.downloadUrl);
        if (isPaid) {
          setDownloadUrl(json.downloadUrl ?? null);
          setMode("paid");
          if (product.contentUnlock) {
            localStorage.setItem(unlockedOrderKey(product.slug), code);
          }
          if (pollRef.current) clearInterval(pollRef.current);
        }
      } catch {
        // bỏ qua lỗi mạng tạm thời, vòng lặp sẽ tự thử lại
      }
    }, POLL_INTERVAL_MS);
  }

  async function handleOwnerUnlock() {
    const password = window.prompt("Mật khẩu chủ shop:");
    if (!password) return;
    try {
      const res = await fetch("/api/owner-unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (json.ok) {
        localStorage.setItem(OWNER_UNLOCK_KEY, "1");
        setMode("paid");
      } else {
        alert(json.error ?? "Sai mật khẩu.");
      }
    } catch {
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  }

  async function handleLookup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!lookupPhone.trim()) return;

    setLookingUp(true);
    setLookupError("");

    try {
      const res = await fetch("/api/orders/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug: product.slug, phone: lookupPhone.trim() }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Không tìm thấy đơn hàng đã thanh toán với số điện thoại này.");
      }

      if (product.contentUnlock) {
        localStorage.setItem(unlockedOrderKey(product.slug), json.code);
      }
      setDownloadUrl(json.downloadUrl ?? null);
      setMode("paid");
    } catch (err) {
      setLookupError(
        err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại."
      );
    } finally {
      setLookingUp(false);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug: product.slug, name, phone }),
      });

      if (res.status === 503) {
        // Thanh toán tự động chưa được cấu hình -> dùng luồng thủ công như cũ.
        setMode("fallback");
        return;
      }

      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Không thể tạo đơn hàng.");
      }

      setOrder({ code: json.code, amount: json.amount });
      setMode("waiting");
      startPolling(json.code);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  }

  if (mode === "form") {
    return (
      <div className="max-w-md mx-auto bg-card border border-border rounded-3xl p-8 md:p-10">
        <p className="text-center text-txt2 text-sm mb-6">
          Điền thông tin để tạo đơn hàng — hệ thống tự xác nhận thanh toán và gửi link tải ngay
          khi bạn chuyển khoản.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="buy-name" className="text-txt2 text-xs mb-1.5 block">
              Họ tên *
            </label>
            <input
              id="buy-name"
              name="name"
              required
              placeholder="Nguyễn Văn A"
              className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="buy-phone" className="text-txt2 text-xs mb-1.5 block">
              Số điện thoại *
            </label>
            <input
              id="buy-phone"
              name="phone"
              required
              type="tel"
              placeholder="09xx xxx xxx"
              className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="grad-btn w-full text-white font-semibold px-7 py-3.5 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Đang tạo đơn..." : "Tạo đơn — Lấy mã QR"}
          </button>
          {errorMsg && (
            <p className="text-sm text-center text-accent2 bg-accent/10 border border-accent/30 rounded-xl px-4 py-2.5">
              {errorMsg}
            </p>
          )}
        </form>
        {product.contentUnlock && (
          <button
            type="button"
            onClick={handleOwnerUnlock}
            className="block mx-auto mt-5 text-txt2 text-xs hover:text-accent2 transition-colors"
          >
            Chủ shop? Mở khoá xem không cần thanh toán
          </button>
        )}

        <div className="mt-3 pt-3 border-t border-border">
          <button
            type="button"
            onClick={() => setShowLookup((v) => !v)}
            className="block mx-auto text-txt2 text-xs hover:text-accent2 transition-colors"
          >
            Đã thanh toán rồi? Tra cứu lại bằng số điện thoại
          </button>
          {showLookup && (
            <form onSubmit={handleLookup} className="mt-3 flex gap-2">
              <input
                value={lookupPhone}
                onChange={(e) => setLookupPhone(e.target.value)}
                required
                type="tel"
                placeholder="Số điện thoại đã dùng khi mua"
                className="flex-1 min-w-0 bg-card2 border border-border rounded-xl px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                disabled={lookingUp}
                className="btn-ghost shrink-0 border border-border text-xs font-semibold px-4 py-2 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {lookingUp ? "Đang tra..." : "Tra cứu"}
              </button>
            </form>
          )}
          {lookupError && (
            <p className="mt-2 text-sm text-center text-accent2 bg-accent/10 border border-accent/30 rounded-xl px-4 py-2.5">
              {lookupError}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (mode === "waiting" && order) {
    const addInfo = order.code;
    const qrUrl = `https://img.vietqr.io/image/${bankInfo.bankBin}-${bankInfo.accountNumber}-compact2.png?amount=${order.amount}&addInfo=${encodeURIComponent(
      addInfo
    )}&accountName=${encodeURIComponent(bankInfo.accountName)}`;

    return (
      <QrBlock
        qrUrl={qrUrl}
        addInfo={addInfo}
        amountLabel={
          <>
            <span className="font-extrabold text-2xl grad-text">
              {order.amount.toLocaleString("vi-VN")}
            </span>
            <span className="text-txt2 text-sm font-medium">đ</span>
          </>
        }
      >
        <div className="flex items-center justify-center gap-2 text-sm text-txt2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse" />
          Đang chờ xác nhận thanh toán tự động...
        </div>
        <p className="text-txt2 text-xs mb-4">
          Ghi <strong className="text-txt">đúng nội dung &quot;{order.code}&quot;</strong> khi chuyển khoản
          để hệ thống tự nhận diện.{" "}
          {product.contentUnlock
            ? "Nội dung sẽ mở khoá ngay tại đây sau khi xác nhận (thường trong vài chục giây)."
            : "Link tải sẽ hiện ngay tại đây sau khi xác nhận (thường trong vài chục giây)."}
        </p>
        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener"
          className="btn-ghost block border border-border font-semibold px-7 py-3 rounded-full text-sm"
        >
          Đã chuyển khoản nhưng chưa thấy cập nhật? Nhắn Zalo
        </a>
      </QrBlock>
    );
  }

  if (mode === "paid" && product.contentUnlock) {
    return <VipContentUnlocked />;
  }

  if (mode === "paid" && downloadUrl) {
    return (
      <div className="max-w-md mx-auto bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
        <p className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
          THANH TOÁN THÀNH CÔNG 🎉
        </p>
        <h3 className="font-bold text-lg mb-2">{product.name} đã sẵn sàng</h3>
        <p className="text-txt2 text-sm leading-relaxed mb-6">
          Bấm nút bên dưới để tải sản phẩm. Link có hiệu lực trong 72 giờ.
        </p>
        <a
          href={downloadUrl}
          className="grad-btn block text-white font-semibold px-7 py-3.5 rounded-full mb-3"
        >
          Tải sản phẩm ngay
        </a>
        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener"
          className="text-accent2 text-sm font-semibold hover:underline"
        >
          Cần hỗ trợ? Nhắn Zalo
        </a>
      </div>
    );
  }

  // Fallback: giữ nguyên luồng thủ công khi thanh toán tự động chưa được cấu hình.
  const addInfo = `${product.name} - ${siteConfig.shopName}`;
  const qrUrl = `https://img.vietqr.io/image/${bankInfo.bankBin}-${bankInfo.accountNumber}-compact2.png?amount=${product.amount}&addInfo=${encodeURIComponent(
    addInfo
  )}&accountName=${encodeURIComponent(bankInfo.accountName)}`;

  return (
    <QrBlock
      qrUrl={qrUrl}
      addInfo={addInfo}
      amountLabel={
        <>
          <span className="font-extrabold text-2xl grad-text">{product.price}</span>
          <span className="text-txt2 text-sm font-medium">{product.priceSuffix}</span>
        </>
      }
    >
      <a
        href={siteConfig.zaloUrl}
        target="_blank"
        rel="noopener"
        className="grad-btn block text-white font-semibold px-7 py-3.5 rounded-full mb-3"
      >
        Đã chuyển khoản — Nhắn Zalo nhận sản phẩm
      </a>
      <p className="text-txt2 text-xs">
        Sau khi chuyển khoản, nhắn Zalo kèm ảnh biên lai để được kích hoạt và gửi hướng dẫn sử
        dụng trong vòng 24h.
      </p>
    </QrBlock>
  );
}
