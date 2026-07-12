import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GradientVisual from "@/components/ui/GradientVisual";
import { services } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import ProjectCard from "@/components/work/ProjectCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "전략, 브랜드·캠페인, PR, 콘텐츠·SNS, 영상 제작, AI 마케팅까지 project yay의 서비스를 소개합니다.",
  alternates: { canonical: "/services" }
};

const challenges = [
  "브랜드는 있지만 명확한 메시지가 없습니다.",
  "광고를 진행해도 성과가 연결되지 않습니다.",
  "SNS 콘텐츠가 일관성 없이 제작됩니다.",
  "좋은 영상이 있지만 마케팅에 활용되지 않습니다.",
  "신규 브랜드의 시장 진입 방법을 모르겠습니다.",
  "공공사업과 정책을 어렵지 않게 전달하고 싶습니다.",
  "AI 검색에서 우리 브랜드가 언급되지 않습니다."
];

export default function ServicesPage() {
  return (
    <div className="pb-28 md:pb-36">
      <div className="pt-[calc(var(--header-h)+56px)] pb-16 md:pb-20">
        <div className="container-yay">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                Your Challenge.
                <br />
                Our Strategy.
              </>
            }
          />
          <Reveal delay={0.1}>
            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
              {challenges.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm md:text-base text-ink-soft">
                  <span className="w-1 h-1 rounded-full bg-glow-blue mt-2.5 shrink-0" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Quick jump nav */}
      <div className="container-yay pb-16 md:pb-20">
        <nav
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          aria-label="서비스 빠른 이동"
        >
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.25)}>
              <a
                href={`#${s.slug}`}
                className="group flex flex-col justify-between gap-6 min-h-[110px] rounded-2xl p-5 text-white shadow-[0_16px_32px_-16px_rgba(83,124,255,0.5)] transition-transform duration-300 ease-glow hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #8CCBFF 0%, #537CFF 100%)" }}
              >
                <span className="font-en text-xs font-semibold tracking-[0.15em] text-white/75">
                  {s.index}
                </span>
                <span className="font-en font-bold text-sm md:text-base leading-snug">
                  {s.shortTitle}
                </span>
              </a>
            </Reveal>
          ))}
        </nav>
      </div>

      <div className="container-yay divide-y divide-bg-mute">
        {services.map((service) => {
          const relatedProjects = (service.relatedProjectSlugs ?? [])
            .map((slug) => getProjectBySlug(slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));

          return (
            <section key={service.slug} id={service.slug} className="py-16 md:py-20 scroll-mt-24">
              <div className="max-w-3xl space-y-10">
                <Reveal>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0">
                      <GradientVisual tone={service.tone} shape="orb" />
                    </div>
                    <span className="font-en text-xs font-bold tracking-[0.15em] text-white bg-glow-blue rounded-full px-3 py-1 leading-none">
                      {service.index}
                    </span>
                  </div>
                  <h2 className="font-en font-extrabold tracking-tight leading-[1.05] text-[clamp(2rem,5vw,3.5rem)] bg-gradient-to-r from-ink to-glow-blue bg-clip-text text-transparent">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-ink-soft leading-relaxed max-w-xl">{service.description}</p>
                </Reveal>

                <div className="space-y-10">
                  {service.problem && (
                    <Reveal>
                      <div className="rounded-2xl bg-bg-soft p-6 md:p-8">
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-2">
                          고객이 겪는 문제
                        </p>
                        <p className="text-lg md:text-xl text-ink font-medium leading-relaxed">
                          &ldquo;{service.problem}&rdquo;
                        </p>
                      </div>
                    </Reveal>
                  )}

                  {service.perspective && (
                    <Reveal delay={0.05}>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-3">
                          project yay의 관점
                        </p>
                        <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                          {service.perspective}
                        </p>
                      </div>
                    </Reveal>
                  )}

                  <Reveal delay={0.1}>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-3">
                        제공 서비스
                      </p>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="text-sm text-ink-soft">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  {service.process && service.process.length > 0 && (
                    <Reveal delay={0.15}>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-4">
                          진행 과정
                        </p>
                        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                          {service.process.map((step, i) => (
                            <li key={step.title} className="border-t border-ink/10 pt-4">
                              <p className="font-en text-xs font-semibold text-ink-soft/50">
                                {String(i + 1).padStart(2, "0")}
                              </p>
                              <p className="mt-1 font-semibold text-ink">{step.title}</p>
                              <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                                {step.description}
                              </p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </Reveal>
                  )}

                  {relatedProjects.length > 0 && (
                    <Reveal delay={0.2}>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-4">
                          관련 프로젝트
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {relatedProjects.map((p) => (
                            <ProjectCard key={p.slug} project={p} />
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
