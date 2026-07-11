import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SphereObject from "@/components/ui/SphereObject";
import {
  aiolabFeatures,
  aiolabConnection,
  aiolabHeroCopyEn,
  aiolabHeroCopyKo
} from "@/data/aiolab";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "AIOLab",
  description: `${siteConfig.nameEn}가 직접 개발한 AI 마케팅 솔루션 AIOLab을 소개합니다. AI 검색과 답변 환경에서 브랜드가 발견되고 인용되는 구조를 진단하고 개선합니다.`,
  alternates: { canonical: "/aiolab" }
};

export default function AiolabPage() {
  return (
    <div className="pb-28 md:pb-36">
      <section
        className="relative flex items-center overflow-hidden bg-ink text-white"
        style={{ minHeight: "78vh", paddingTop: "var(--header-h)" }}
      >
        <div className="container-yay grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-en font-semibold tracking-[0.2em] text-white/50 uppercase mb-6">
                Developed by {siteConfig.nameEn}
              </p>
            </Reveal>
            <h1 className="font-en font-bold text-[clamp(2rem,5.5vw,4rem)] leading-[1.1] tracking-tight">
              {aiolabHeroCopyEn.map((line, i) => (
                <Reveal key={line} as="span" className="block" delay={i * 0.08}>
                  {line}
                </Reveal>
              ))}
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-7 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                {aiolabHeroCopyKo}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  href={siteConfig.aiolab.url}
                  external
                  className="!bg-white !text-ink !border-transparent"
                >
                  Check Your AI Visibility ↗
                </Button>
                <Button href="/contact" variant="ghost" className="!text-white">
                  Talk to project yay
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <SphereObject size={320} variant="compact" tone="cyan-lavender" />
          </div>
        </div>
      </section>

      {/* AI 검색 환경의 변화 */}
      <section className="py-20 md:py-28">
        <div className="container-yay grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="The Shift" title="AI 검색 환경의 변화" />
          </div>
          <div className="lg:col-span-8 space-y-5">
            <Reveal>
              <p className="text-lg md:text-xl text-ink leading-relaxed">
                검색 결과의 링크를 클릭하던 시대에서 AI가 답변을 선택하는
                시대로 이동하고 있습니다.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                {siteConfig.nameEn}는 자체 개발 서비스 {siteConfig.aiolab.name}를
                통해 브랜드가 AI 검색과 답변 안에서 어떻게 발견되고, 언급되고,
                인용되는지를 분석합니다.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why We Built It */}
      <section className="py-20 md:py-28 bg-bg-soft">
        <div className="container-yay grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Why We Built It" title="Why We Built It" />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                AI 시대에 적응하는 데 그치지 않고, 새로운 마케팅 환경을 위한
                솔루션을 만들었습니다. 기존 SEO 도구는 AI 검색과 생성형 답변
                환경에서 브랜드가 어떻게 다뤄지는지를 설명하지 못했습니다.
                {siteConfig.aiolab.name}은 이 공백을 채우기 위해 project yay가
                직접 설계하고 개발한 솔루션입니다.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What AIOLab Does */}
      <section className="py-20 md:py-28">
        <div className="container-yay">
          <SectionHeading eyebrow="What AIOLab Does" title="AIOLab 주요 기능" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiolabFeatures.map((f, i) => (
              <Reveal key={f} delay={Math.min(i * 0.05, 0.3)}>
                <div className="rounded-2xl border border-bg-mute p-6 h-full">
                  <span className="font-en text-xs font-semibold text-ink-soft/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm md:text-base text-ink leading-relaxed">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Connects with project yay */}
      <section className="py-20 md:py-28 bg-bg-soft">
        <div className="container-yay">
          <SectionHeading
            eyebrow="How It Connects"
            title={`How It Connects with ${siteConfig.nameEn}`}
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {aiolabConnection.map((c, i) => (
              <Reveal key={c.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="flex gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-glow-blue mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{c.title}</p>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">{c.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ink text-white text-center">
        <div className="container-yay">
          <Reveal>
            <h2 className="font-en font-bold text-[clamp(2rem,4.5vw,3.25rem)] tracking-tight">
              Check Your AI Visibility
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-white/70 max-w-lg mx-auto leading-relaxed">
              지금 우리 브랜드가 AI 검색에서 어떻게 발견되고 있는지 {siteConfig.aiolab.name}에서
              확인해 보세요.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9">
              <Button
                href={siteConfig.aiolab.url}
                external
                size="lg"
                className="!bg-white !text-ink !border-transparent"
              >
                Explore {siteConfig.aiolab.name} ↗
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
