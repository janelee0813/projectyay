import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsightBySlug, getPublishedInsights } from "@/data/insights";
import GradientVisual from "@/components/ui/GradientVisual";
import Reveal from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedInsights().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/insight/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date
    }
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.summary,
    author: { "@type": "Organization", name: siteConfig.nameEn }
  };

  return (
    <article className="pb-28 md:pb-36">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="pt-[calc(var(--header-h)+56px)] pb-12">
        <div className="container-yay max-w-3xl">
          <Reveal>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-bg-mute text-ink-soft mb-6">
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-en font-bold text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.15] tracking-tight text-ink">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-sm text-ink-soft">{formatDate(post.date)}</p>
          </Reveal>
        </div>
      </header>

      <div className="container-yay max-w-3xl">
        <Reveal>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
            <GradientVisual tone={post.coverTone} shape="wave" className="absolute inset-0" />
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          {post.body.map((paragraph, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
              <p className="text-lg text-ink leading-[1.9]">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-bg-mute">
          <Link href="/insight" className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors">
            ← 전체 인사이트 보기
          </Link>
        </div>
      </div>
    </article>
  );
}
