"use client";

import { useState } from "react";
import { bankInfo, siteConfig, type Product } from "@/lib/constants";
import { BankIcon, CopyIcon } from "@/components/ui/Icons";

export function ProductPurchase({ product }: { product: Product }) {
  const [copied, setCopied] = useState(false);

  const amount = product.price.replace(/\./g, "");
  const addInfo = `${product.name} - ${siteConfig.shopName}`;
  const qrUrl = `https://img.vietqr.io/image/${bankInfo.bankBin}-${bankInfo.accountNumber}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(
    addInfo
  )}&accountName=${encodeURIComponent(bankInfo.accountName)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(bankInfo.accountNumber);
    } catch {
      const temp = document.createElement("textarea");
      temp.value = bankInfo.accountNumber;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="card-hover max-w-md mx-auto bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
      <div className="w-14 h-14 rounded-xl grad-btn flex items-center justify-center mx-auto mb-5">
        <BankIcon className="w-7 h-7 text-white" />
      </div>
      <p className="text-txt2 text-sm mb-1">Số tiền cần chuyển</p>
      <p className="mb-5">
        <span className="font-extrabold text-2xl grad-text">{product.price}</span>
        <span className="text-txt2 text-sm font-medium">{product.priceSuffix}</span>
      </p>

      <div className="bg-white rounded-2xl p-3 w-56 mx-auto mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qrUrl}
          alt={`Mã QR chuyển khoản ${bankInfo.bankName} cho ${product.name}`}
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
            onClick={handleCopy}
            className={`btn-ghost shrink-0 border border-border text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 ${
              copied ? "scale-95" : ""
            }`}
          >
            <CopyIcon className="w-3.5 h-3.5" />
            <span>{copied ? "Đã sao chép ✓" : "Sao chép"}</span>
          </button>
        </div>
        <div className="border-t border-border pt-3">
          <p className="text-txt2 text-xs">Nội dung chuyển khoản</p>
          <p className="font-semibold">{addInfo}</p>
        </div>
      </div>

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
    </div>
  );
}
