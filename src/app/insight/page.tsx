import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import InsightCard from "@/components/insight/InsightCard";
import { getPublishedInsights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insight",
  description: "전략, 브랜딩, PR, 콘텐츠, 영상, AI 검색까지 project yay의 인사이트를 확인하세요.",
  alternates: { canonical: "/insight" }
};

export default function InsightPage() {
  const posts = getPublishedInsights().sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="pt-[calc(var(--header-h)+56px)] pb-28 md:pb-36">
      <div className="container-yay">
        <SectionHeading eyebrow="Insight" title="Insight" className="mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 0.05, 0.3)}>
              <InsightCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
