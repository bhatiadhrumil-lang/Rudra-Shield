import { Link } from "react-router-dom";

type LogoProps = {
  variant?: "horizontal" | "stacked";
  className?: string;
};

export function Logo({ variant = "horizontal", className = "" }: LogoProps) {
  if (variant === "stacked") {
    return (
      <Link
        to="/"
        className={`brand brand--footer ${className}`}
        aria-label="RudraShield Cyber Systems — home"
      >
        <img
          src="/brand/logo-full.webp"
          alt="RudraShield Cyber Systems"
          width={936}
          height={820}
          className="w-[190px] h-auto"
          style={{ filter: "drop-shadow(0 0 26px rgba(0,207,255,0.16))" }}
          loading="lazy"
        />
      </Link>
    );
  }

  return (
    <Link to="/" className={`brand ${className}`} aria-label="RudraShield Cyber Systems — home">
      <img
        src="/brand/logo-emblem.webp"
        alt=""
        width={540}
        height={597}
        className="brand__emblem"
      />
      <img
        src="/brand/logo-wordmark.webp"
        alt="RudraShield Cyber Systems"
        width={936}
        height={225}
        className="brand__wordmark"
      />
    </Link>
  );
}
