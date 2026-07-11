import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { differentiators, stats } from "@/data/stats";

export default function WhyProjectYay() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft">
      <div className="container-yay">
        <SectionHeading
          eyebrow="Why project yay"
          title="Why project yay"
          description="누구나 만들 수 있는 결과물이 아니라, 누구도 쉽게 만들 수 없는 연결을 만듭니다."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <ul className="space-y-8">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={Math.min(i * 0.06, 0.3)}>
                <li className="flex gap-5 pb-8 border-b border-ink/10 last:border-none">
                  <span className="font-en font-bold text-ink-soft/40 text-lg pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-en font-bold text-lg text-ink tracking-tight">
                      {d.title}
                    </p>
                    <p className="mt-1.5 text-sm md:text-base text-ink-soft leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-10 content-start">
            {stats.map((stat, i) => {
              const [numberLabel, subLabel] = stat.label.split("\n");
              return (
                <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                  <div className="lg:border-l lg:border-ink/10 lg:pl-8">
                    <p className="font-en font-bold text-ink text-[clamp(2.5rem,5vw,4rem)] leading-none">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">
                      <span className="font-en font-semibold text-ink">{numberLabel}</span>
                      <br />
                      {subLabel}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
