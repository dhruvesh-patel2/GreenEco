import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#081923",
          display: "flex",
          padding: 64,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#ffffff",
            borderRadius: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 64,
          }}
        >
          <div
            style={{
              color: "#32484b",
              display: "flex",
              fontSize: 58,
              fontWeight: 900,
              marginBottom: 48,
            }}
          >
            Green<span style={{ color: "#00d8de" }}>eco</span>
          </div>
          <div
            style={{
              color: "#081923",
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            Réparation de trottinettes électriques à Saint-Maur
          </div>
          <div
            style={{
              color: "#32484b",
              fontSize: 32,
              fontWeight: 700,
              marginTop: 38,
            }}
          >
            Diagnostic, entretien, pneus, freins et batterie.
          </div>
        </div>
      </div>
    ),
  );
}
