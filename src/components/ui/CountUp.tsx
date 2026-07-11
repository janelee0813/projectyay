"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: string;
  suffix?: string;
  className?: string;
};

// value가 숫자가 아닌 경우(예: "하→상") 그대로 표시합니다.
export default function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const numeric = Number(value);
  const isNumeric = !Number.isNaN(numeric);
  const [display, setDisplay] = useState(isNumeric && !reduceMotion ? 0 : numeric);

  useEffect(() => {
    if (!isNumeric || reduceMotion || !inView) {
      if (isNumeric) setDisplay(numeric);
      return;
    }
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(numeric * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, numeric, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">{isNumeric ? display : value}</span>
      {suffix}
    </span>
  );
}
