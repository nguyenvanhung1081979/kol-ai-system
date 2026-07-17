import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #E8342B 0%, #FF5A3C 100%)",
          color: "#fff",
          fontSize: 88,
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        AI
      </div>
    ),
    { ...size }
  );
}
