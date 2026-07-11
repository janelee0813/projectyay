"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const keywords = ["STRATEGY", "BRANDING", "CAMPAIGN", "PR", "CONTENT", "FILM", "AI"];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "92vh", paddingTop: "var(--header-h)" }}
    >
      <div
        className="absolute inset-0 -z-10 bg-white"
        style={{
          backgroundImage:
            "radial-gradient(60% 55% at 88% 10%, rgba(140,203,255,0.5), transparent 70%), radial-gradient(50% 45% at 100% 85%, rgba(198,167,255,0.35), transparent 70%), radial-gradient(40% 40% at 60% 100%, rgba(101,230,239,0.18), transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="container-yay py-16 lg:py-0">
        <div>
          <motion.h1
            className="font-en font-bold tracking-tight text-ink text-[clamp(1.7rem,6.2vw,5.25rem)] leading-[1.05] whitespace-nowrap"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            MARKETING ARCHITECT
            <br />
            PROJECT YAY
          </motion.h1>

          <motion.p
            className="mt-7 text-lg md:text-xl text-ink-soft leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            브랜드의 문제를 발견하고
            <br />
            전략과 콘텐츠로 성장을 설계합니다.
          </motion.p>

          <motion.ul
            className="mt-8 flex flex-wrap gap-x-3 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            aria-label="핵심 역량 키워드"
          >
            {keywords.map((k, i) => (
              <li key={k} className="flex items-center gap-3">
                <span className="text-xs font-en font-semibold tracking-[0.15em] text-ink-soft">
                  {k}
                </span>
                {i < keywords.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-glow-blue/60" aria-hidden="true" />
                )}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-11 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="/work" size="lg">
              View Our Work
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Start a Project
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
