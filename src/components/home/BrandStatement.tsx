"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.7]);

  return (
    <section ref={ref} className="py-28 md:py-40 bg-bg-soft overflow-hidden">
      <div className="container-yay">
        <Reveal>
          <p className="text-xs font-en font-semibold tracking-[0.2em] text-ink-soft uppercase mb-6">
            Brand Philosophy
          </p>
        </Reveal>

        <h2 className="font-en font-bold text-ink text-[clamp(2.75rem,8vw,6rem)] leading-none flex items-center flex-wrap gap-x-4">
          <Reveal as="span" className="inline-block">
            BRAND
          </Reveal>
          <motion.span
            aria-hidden="true"
            className="relative inline-block"
            style={{ width: 22, height: 22, scale, opacity }}
          >
            <span className="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#8CCBFF,#537CFF_55%,#C6A7FF)]" />
            <span className="absolute top-0 bottom-0 left-1/2 w-[6px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#8CCBFF,#537CFF_55%,#C6A7FF)]" />
          </motion.span>
          <Reveal as="span" className="inline-block" delay={0.1}>
            ING
          </Reveal>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-ink leading-relaxed font-medium">
              브랜드는 완성되는 것이 아니라
              <br />
              시장과 고객의 변화에 따라
              <br />
              계속 진화해야 합니다.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed">
              project yay는 브랜드가 가진 가능성을 발견하고, 데이터와 인사이트를
              바탕으로 전략을 설계하며, 콘텐츠와 실행을 통해 성장을 만들어갑니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
