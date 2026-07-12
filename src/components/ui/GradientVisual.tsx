"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import { gradientTones } from "@/lib/gradients";
import { GradientTone } from "@/types";

type GradientVisualProps = {
  tone: GradientTone;
  className?: string;
  shape?: "blob" | "wave" | "orb";
};

// 이미지 자료가 없는 프로젝트/영상/인사이트를 위한 추상 비주얼.
// 회색 placeholder 대신 브랜드 팔레트 기반 그라데이션 + 입자감으로 표현합니다.
export default function GradientVisual({ tone, className, shape = "blob" }: GradientVisualProps) {
  const id = useId();
  const [c1, c2, c3] = gradientTones[tone];

  return (
    <div className={cn("gradient-visual w-full h-full", className)}>
      <svg
        viewBox="0 0 400 300"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id={`lg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="55%" stopColor={c2} />
            <stop offset="100%" stopColor={c3} />
          </linearGradient>
          <radialGradient id={`rg-${id}`} cx="75%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#lg-${id})`} />
        <rect width="400" height="300" fill={`url(#rg-${id})`} />
        {shape === "orb" && (
          <circle cx="290" cy="90" r="120" fill="#ffffff" opacity="0.12" />
        )}
        {shape === "wave" && (
          <path
            d="M0 200 C 100 140, 300 260, 400 180 L 400 300 L 0 300 Z"
            fill="#ffffff"
            opacity="0.1"
          />
        )}
      </svg>
    </div>
  );
}
