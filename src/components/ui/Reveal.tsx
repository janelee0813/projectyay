"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  blur?: boolean;
  as?: "div" | "span" | "li";
};

const buildVariants = (y: number, blur: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y,
    filter: blur ? "blur(10px)" : "blur(0px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  }
});

// 공통 스크롤 리빌 래퍼: 아래에서 위로, 블러에서 선명하게.
// framer-motion의 reducedMotion="user" 전역 설정이 layout에서 적용되어
// 모션 감소 환경에서는 자동으로 즉시 나타납니다.
export default function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  blur = true,
  as = "div"
}: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={buildVariants(y, blur)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
