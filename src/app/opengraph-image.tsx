import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F5F5F5",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: "50%",
            transform: "translateY(-50%)",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 30%, #ffffff 0%, #8CCBFF 18%, #537CFF 48%, #C6A7FF 78%, #F1A9E9 100%)",
            filter: "blur(2px)"
          }}
        />
        <p
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#4A4A4F",
            textTransform: "uppercase",
            margin: 0
          }}
        >
          {siteConfig.nameEn}
        </p>
        <p
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#18181B",
            margin: "24px 0 0",
            lineHeight: 1.05,
            maxWidth: 760
          }}
        >
          {siteConfig.tagline}
        </p>
        <p
          style={{
            fontSize: 28,
            color: "#4A4A4F",
            margin: "28px 0 0",
            maxWidth: 640
          }}
        >
          {siteConfig.taglineKo}
        </p>
      </div>
    ),
    { ...size }
  );
}
