"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 md:py-32">
      <div className="container-yay">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              Discover. Research. Build.
              <br />
              Deliver. Grow.
            </>
          }
        />

        {/* Desktop */}
        <div ref={trackRef} className="hidden lg:block mt-20 relative">
          <div className="absolute top-[15px] left-0 right-0 h-px bg-glow-blue/15" aria-hidden="true" />
          <motion.div
            className="absolute top-[15px] left-0 h-px bg-glow-blue origin-left"
            style={{ scaleX: lineScale, right: 0 }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.08}>
                <div className="relative pt-10">
                  <span
                    className="absolute top-0 left-0 w-[9px] h-[9px] rounded-full bg-glow-blue ring-4 ring-glow-blue/15"
                    aria-hidden="true"
                  />
                  <p className="font-en text-xs font-semibold text-glow-blue/80 mb-2">
                    {step.index}
                  </p>
                  <h3 className="font-en font-bold text-xl text-ink tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {step.items.map((item) => (
                      <li key={item} className="text-xs text-ink-soft/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <ol className="lg:hidden mt-14 relative border-l border-glow-blue/15 pl-8 space-y-12">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={Math.min(i * 0.06, 0.24)} as="li" className="relative">
              <span
                className="absolute -left-[calc(2rem+4px)] top-1 w-2 h-2 rounded-full bg-glow-blue ring-4 ring-glow-blue/15"
                aria-hidden="true"
              />
              <p className="font-en text-xs font-semibold text-glow-blue/80 mb-1">
                {step.index}
              </p>
              <h3 className="font-en font-bold text-xl text-ink tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{step.description}</p>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {step.items.map((item) => (
                  <li key={item} className="text-xs text-ink-soft/70">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
