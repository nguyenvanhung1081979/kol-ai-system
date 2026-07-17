"use client";

import { useState } from "react";
import { bankInfo } from "@/lib/constants";
import { BankIcon, CopyIcon } from "@/components/ui/Icons";

export function Payment() {
  const [copied, setCopied] = useState(false);

  const qrUrl = `https://img.vietqr.io/image/${bankInfo.bankBin}-${bankInfo.accountNumber}-compact2.png?accountName=${encodeURIComponent(
    bankInfo.accountName
  )}`;

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
    <section id="thanh-toan" className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold tracking-widest text-accent2">THANH TOÁN</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
          Quét mã để thanh toán nhanh chóng
        </h2>
        <p className="text-txt2 leading-relaxed">
          Chuyển khoản trực tiếp qua VietQR — quét bằng app ngân hàng bất kỳ, thông tin tự động
          điền sẵn.
        </p>
      </div>

      <div className="card-hover max-w-md mx-auto bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-xl grad-btn flex items-center justify-center mx-auto mb-5">
          <BankIcon className="w-7 h-7 text-white" />
        </div>
        <p className="text-txt2 text-sm mb-1">Ngân hàng</p>
        <p className="font-bold text-lg mb-5">{bankInfo.bankName}</p>

        <div className="bg-white rounded-2xl p-3 w-56 mx-auto mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrUrl}
            alt={`Mã QR chuyển khoản ${bankInfo.bankName} - ${bankInfo.accountName}`}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="space-y-3 text-left bg-card2 border border-border rounded-xl p-4 mb-2">
          <div className="flex items-center justify-between gap-3">
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
        </div>
        <p className="text-txt2 text-xs">
          Nội dung chuyển khoản: ghi rõ tên + dịch vụ đăng ký
        </p>
      </div>
    </section>
  );
}
