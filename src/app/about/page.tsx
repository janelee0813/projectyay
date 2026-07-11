import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SphereObject from "@/components/ui/SphereObject";
import { differentiators } from "@/data/stats";
import { team, awards, experienceAreas } from "@/data/team";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.nameEn}는 브랜드와 비즈니스의 문제를 발견하고, 전략과 크리에이티브를 통해 다음 성장을 설계하는 Marketing Architect & Creative Studio입니다.`,
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="pb-28 md:pb-36">
      {/* Intro */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "80vh", paddingTop: "var(--header-h)" }}
      >
        <div className="container-yay grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-16">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-xs font-en font-semibold tracking-[0.2em] text-ink-soft uppercase mb-6">
                About {siteConfig.nameEn}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-en font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.06] tracking-tight text-ink">
                We are
                <br />
                Marketing Architects.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
                {siteConfig.nameEn}는 브랜드와 비즈니스의 문제를 발견하고, 전략과
                크리에이티브를 통해 다음 성장을 설계하는 Marketing Architect &amp;
                Creative Studio입니다.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <SphereObject size={280} variant="compact" tone="pink-lavender" />
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 md:py-28 bg-bg-soft">
        <div className="container-yay grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Brand Promise" title="Brand Promise" />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <Reveal>
              <p className="text-xl md:text-2xl text-ink font-medium leading-relaxed">
                브랜드는 한 번의 캠페인으로 완성되지 않습니다.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                {siteConfig.nameEn}는 장기적 성장을 위한 전략을 제시하고 실행하며,
                그 결과를 다시 분석해 브랜드가 지속적으로 진화할 수 있도록 돕습니다.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                치열하게 분석하고 세심하게 고민하며, 전문성과 진심을 바탕으로
                기대 이상의 결과를 만듭니다.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why project yay */}
      <section className="py-20 md:py-28">
        <div className="container-yay">
          <SectionHeading eyebrow="Why project yay" title="Why project yay" />
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={Math.min(i * 0.06, 0.3)}>
                <li className="flex gap-5">
                  <span className="font-en font-bold text-ink-soft/40 text-lg pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-en font-bold text-lg text-ink tracking-tight">{d.title}</p>
                    <p className="mt-1.5 text-sm md:text-base text-ink-soft leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-28 bg-bg-soft">
        <div className="container-yay">
          <SectionHeading eyebrow="Experience" title="Experience" />
          <div className="mt-12 flex flex-wrap gap-3">
            {experienceAreas.map((area, i) => (
              <Reveal key={area} delay={Math.min(i * 0.05, 0.25)}>
                <span className="inline-block px-5 py-2.5 rounded-full bg-white border border-ink/10 text-sm font-medium text-ink">
                  {area}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="container-yay">
          <SectionHeading
            eyebrow="Leadership"
            title="Leadership"
            description="상세 프로필은 순차적으로 업데이트될 예정입니다."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={Math.min(i * 0.08, 0.3)}>
                <div className="rounded-2xl border border-glow-blue/25 p-7">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-en font-bold text-white text-lg mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #8CCBFF 0%, #537CFF 50%, #C6A7FF 100%)"
                    }}
                    aria-hidden="true"
                  >
                    {member.name.slice(0, 1)}
                  </div>
                  <p className="font-en font-bold text-lg text-ink">{member.name}</p>
                  <p className="text-sm text-ink-soft mt-0.5">{member.role}</p>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">{member.bio}</p>
                  {member.career && member.career.length > 0 && (
                    <ul className="mt-4 space-y-1 border-t border-bg-mute pt-4">
                      {member.career.map((c) => (
                        <li key={c} className="text-xs text-ink-soft/80">
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 md:py-28 bg-bg-soft">
        <div className="container-yay">
          <SectionHeading eyebrow="Awards" title="Awards" />
          <ul className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
            {awards.map((award, i) => (
              <Reveal key={award.title} delay={Math.min(i * 0.06, 0.2)} as="li">
                <div className="flex items-center justify-between py-5">
                  <span className="text-base md:text-lg text-ink">{award.title}</span>
                  <span className="font-en text-sm text-ink-soft">{award.year}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32">
        <div className="container-yay text-center">
          <Reveal>
            <h2 className="font-en font-bold text-[clamp(2rem,4.5vw,3.25rem)] tracking-tight text-ink">
              Let&rsquo;s Build What&rsquo;s Next.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
