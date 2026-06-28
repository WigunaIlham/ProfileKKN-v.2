import {ImageResponse} from "next/og";
import {SITE_CONFIG} from "@/constants";

export const runtime = "edge";
export const alt = SITE_CONFIG.og.title;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #1C3320 0%, #2D4A2D 45%, #4A7C59 100%)",
          color: "#F5F0E8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,147,42,0.45), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,124,89,0.55), transparent 70%)",
            display: "flex",
          }}
        />

        <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#C4932A",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "22px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D4A843",
              fontWeight: 600,
            }}
          >
            KKN · UIN SGD Bandung · {SITE_CONFIG.year}
          </span>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
          <div
            style={{
              fontSize: "120px",
              fontWeight: 800,
              lineHeight: 1,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span style={{color: "#F5F0E8"}}>JamaLights&nbsp;</span>
            <span style={{color: "#D4A843"}}>206</span>
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#C4D4C4",
              maxWidth: "880px",
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            {SITE_CONFIG.motto.join(" · ")} — mengabdi nyata di{" "}
            {SITE_CONFIG.village}, {SITE_CONFIG.regency}.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#A8C8A8",
          }}
        >
          <span style={{display: "flex"}}>jamalights206.vercel.app</span>
          <span style={{display: "flex"}}>
            Desa Jamali · Kec. Mande · Kab. Cianjur
          </span>
        </div>
      </div>
    ),
    {...size},
  );
}
