import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0D",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #E8342B 0%, #FF5A3C 100%)",
            color: "#fff",
            fontSize: 56,
            fontWeight: 900,
            marginBottom: 36,
          }}
        >
          AI
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#F5F5F7" }}>
          KOL&nbsp;
          <span
            style={{
              background: "linear-gradient(90deg, #E8342B 0%, #FF5A3C 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI SYSTEM
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9A9AA5", marginTop: 20 }}>
          Hệ thống AI dành cho KOL &amp; Nhà sáng tạo nội dung
        </div>
      </div>
    ),
    { ...size }
  );
}
