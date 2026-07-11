import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GradientVisual from "@/components/ui/GradientVisual";

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-yay">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              One Direction.
              <br />
              Every Execution.
            </>
          }
          description="하나의 방향 아래 필요한 모든 실행을 연결합니다."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 0.06, 0.3)}>
              <Link
                href={`/services#${service.slug}`}
                className="group block h-full rounded-3xl border border-bg-mute bg-white p-7 md:p-8 transition-all duration-500 ease-glow hover:border-transparent hover:shadow-[0_24px_60px_-20px_rgba(83,124,255,0.25)]"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-en text-sm font-semibold text-ink-soft/60">
                    {service.index}
                  </span>
                  <div className="w-10 h-10 rounded-full gradient-visual overflow-hidden">
                    <GradientVisual tone={service.tone} shape="orb" />
                  </div>
                </div>
                <h3 className="font-en font-bold text-xl text-ink tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-1.5">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item} className="text-xs text-ink-soft/80 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-ink-soft/40" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-ink opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  자세히 보기 <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
