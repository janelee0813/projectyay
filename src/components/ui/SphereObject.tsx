"use client";

import { useEffect, useRef, useState, useId } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { gradientTones } from "@/lib/gradients";
import { GradientTone } from "@/types";

type SphereObjectProps = {
  size?: number;
  variant?: "hero" | "compact" | "inline";
  tone?: GradientTone;
  className?: string;
  interactive?: boolean;
};

// 데이터·인사이트·전략·아이디어·크리에이티브·기술·성장 가능성을 상징하는
// 브랜드 공통 비주얼. 무거운 3D 모델 대신 SVG 그라디언트 + CSS 블러로 구현해
// 초기 로딩 속도를 지키면서도 "빛이 자연스럽게 섞이는" 느낌을 표현합니다.
export default function SphereObject({
  size = 560,
  variant = "hero",
  tone = "sky-blue",
  className,
  interactive = true
}: SphereObjectProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);
  const gradId = useId();
  const [c1, c2, c3] = gradientTones[tone];

  useEffect(() => {
    if (typeof window === "undefined") return;
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!interactive || reduceMotion || !finePointer) return;
    const el = wrapperRef.current;
    if (!el) return;
    let frame = 0;

    function handleMove(e: MouseEvent) {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el!.style.setProperty("--glow-x", `${Math.max(0, Math.min(100, x))}%`);
        el!.style.setProperty("--glow-y", `${Math.max(0, Math.min(100, y))}%`);
        frame = 0;
      });
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [interactive, reduceMotion, finePointer]);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"]
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  const shouldDrift = !reduceMotion && (variant === "hero" || !finePointer);

  return (
    <motion.div
      ref={wrapperRef}
      className={cn("sphere-object", variant, shouldDrift && "animate-drift", className)}
      style={{
        width: size,
        height: size,
        rotate: reduceMotion ? 0 : rotate
      }}
      initial={{ opacity: 0, filter: "blur(28px)", scale: 0.94 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <div className="sphere-glow" />
      <div className="sphere-core">
        <svg viewBox="0 0 200 200" width="100%" height="100%" role="presentation">
          <defs>
            <radialGradient id={`grad-${gradId}`} cx="36%" cy="30%" r="78%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="16%" stopColor={c1} />
              <stop offset="46%" stopColor={c2} />
              <stop offset="100%" stopColor={c3} />
            </radialGradient>
            <filter id={`grain-${gradId}`}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="2"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.045 0"
              />
            </filter>
          </defs>
          <circle cx="100" cy="100" r="98" fill={`url(#grad-${gradId})`} />
          <circle cx="100" cy="100" r="98" filter={`url(#grain-${gradId})`} />
        </svg>
      </div>
    </motion.div>
  );
}
