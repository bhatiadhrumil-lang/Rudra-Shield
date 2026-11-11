import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  icon?: LucideIcon | null;
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  onClick,
}: ButtonLinkProps) {
  const Icon = icon === undefined ? ArrowRight : icon;
  const classes = [
    "btn",
    variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost",
    size === "sm" ? "btn-sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" /> : null}
    </>
  );

  if (to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:")) {
    return (
      <a href={to} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
