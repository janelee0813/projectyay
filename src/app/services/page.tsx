import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "전략, 브랜드·캠페인, PR, 콘텐츠·SNS, 영상 제작, AI 마케팅까지 project yay의 서비스를 소개합니다.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <div className="pb-28 md:pb-36">
      <div className="pt-[calc(var(--header-h)+56px)] pb-16 md:pb-20">
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
          />
        </div>
      </div>

      <div className="container-yay">
        <nav
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          aria-label="서비스 목록"
        >
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.25)}>
              <div
                className="flex flex-col justify-between gap-6 min-h-[110px] rounded-2xl p-5 text-white shadow-[0_16px_32px_-16px_rgba(83,124,255,0.5)]"
                style={{ background: "linear-gradient(135deg, #8CCBFF 0%, #537CFF 100%)" }}
              >
                <span className="font-en text-xs font-semibold tracking-[0.15em] text-white/75">
                  {s.index}
                </span>
                <span className="font-en font-bold text-sm md:text-base leading-snug">
                  {s.shortTitle}
                </span>
              </div>
            </Reveal>
          ))}
        </nav>
      </div>
    </div>
  );
}
