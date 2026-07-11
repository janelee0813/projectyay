import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SphereObject from "@/components/ui/SphereObject";
import { aiolabFeatures } from "@/data/aiolab";
import { siteConfig } from "@/data/site";

export default function AiolabSection() {
  return (
    <section className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="container-yay relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-en font-semibold tracking-[0.2em] text-white/50 uppercase mb-5">
              Developed by {siteConfig.nameEn}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-en font-bold text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] tracking-tight">
              Marketing for the
              <br />
              AI Answer Era
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
              검색 결과의 링크를 클릭하던 시대에서 AI가 답변을 선택하는 시대로
              이동하고 있습니다. project yay는 자체 개발 서비스 {siteConfig.aiolab.name}를
              통해 브랜드가 AI 검색과 답변 안에서 어떻게 발견되고, 언급되고,
              인용되는지를 분석합니다.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {aiolabFeatures.slice(0, 6).map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                  <span className="w-1 h-1 rounded-full bg-glow-cyan mt-2 shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/aiolab" variant="secondary" className="!bg-white !text-ink !border-transparent">
                Explore AIOLab
              </Button>
              <Button href={siteConfig.aiolab.url} variant="ghost" external className="!text-white">
                Check Your AI Visibility ↗
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <SphereObject size={340} variant="compact" tone="cyan-lavender" />
        </div>
      </div>
    </section>
  );
}
