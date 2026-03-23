import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0d1117",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: 12,
        fontWeight: "bold",
        color: "#06b6d4",
        letterSpacing: "-0.5px",
      }}
    >
      {"</>"}
    </div>,
    { ...size },
  );
}
