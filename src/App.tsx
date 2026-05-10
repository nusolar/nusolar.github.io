import sunLogo from "./assets/sun_logo.svg";

export default function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="https://pub-d2be5830f50f4ae092049757dbad77fe.r2.dev/landing_video.mp4"
          type="video/mp4"
        />
      </video>

      <img
        src={sunLogo}
        alt="NUSolar logo"
        style={{
          position: "absolute",
          top: "24px",
          left: "24px",
          width: "250px",
          height: "250px",
          zIndex: 10,
        }}
      />
    </div>
  );
}
