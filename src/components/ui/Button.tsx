import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  size?: "md" | "lg";
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  size = "md"
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-en font-semibold tracking-tight transition-all duration-300 ease-glow focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[44px]";

  const variants: Record<string, string> = {
    primary:
      "bg-ink text-white hover:bg-[#2c2c31] active:scale-[0.98]",
    secondary:
      "bg-white text-ink border border-ink/15 hover:border-ink/40",
    ghost: "text-ink hover:opacity-70"
  };

  const sizes: Record<string, string> = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={`${children} (새 탭에서 열림)`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
