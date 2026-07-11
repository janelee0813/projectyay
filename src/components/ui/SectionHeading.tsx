import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      {eyebrow && (
        <Reveal>
          <p className="mb-4 text-xs font-en font-semibold tracking-[0.2em] text-ink-soft uppercase">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-en font-bold tracking-tight text-ink text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-2xl",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
