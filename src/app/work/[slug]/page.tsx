import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getPublishedProjects, getRelatedProjects } from "@/data/projects";
import GradientVisual from "@/components/ui/GradientVisual";
import ProjectCard from "@/components/work/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${project.client}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.nameEn}`,
      description: project.summary,
      images: project.heroImage ? [project.heroImage] : undefined
    }
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);

  const narrativeBlocks: { title: string; body?: string }[] = [
    { title: "Overview", body: project.overview },
    { title: "Challenge", body: project.challenge },
    { title: "Insight", body: project.insight },
    { title: "Strategy", body: project.strategy },
    { title: "Execution", body: project.execution }
  ].filter((b) => b.body);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    about: project.client,
    datePublished: project.year,
    description: project.summary
  };

  return (
    <article className="pb-28 md:pb-36">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="pt-[calc(var(--header-h)+56px)] pb-12 md:pb-16">
        <div className="container-yay">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.categories.map((c) => (
                <span
                  key={c}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-bg-mute text-ink-soft"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-en font-bold text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] tracking-tight text-ink max-w-3xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
              <span>
                <span className="text-ink-soft/60">Client · </span>
                {project.client}
              </span>
              {project.year && (
                <span>
                  <span className="text-ink-soft/60">Year · </span>
                  {project.year}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </header>

      <div className="container-yay">
        <Reveal>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-bg-soft">
            {project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            ) : (
              <GradientVisual tone={project.tone} shape="wave" className="absolute inset-0" />
            )}
          </div>
        </Reveal>
      </div>

      {narrativeBlocks.length > 0 && (
        <div className="container-yay mt-20 md:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-en font-bold text-xl text-ink sticky top-28">
                  {project.client}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-14">
              {narrativeBlocks.map((block, i) => (
                <Reveal key={block.title} delay={Math.min(i * 0.05, 0.2)}>
                  <div>
                    <h2 className="font-en font-bold text-sm tracking-[0.15em] uppercase text-ink-soft/60 mb-3">
                      {block.title}
                    </h2>
                    <p className="text-lg md:text-xl text-ink leading-relaxed">{block.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}

      {project.results && project.results.length > 0 && (
        <div className="container-yay mt-20 md:mt-28">
          <Reveal>
            <h2 className="font-en font-bold text-sm tracking-[0.15em] uppercase text-ink-soft/60 mb-8">
              Result
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 border-t border-ink/10 pt-10">
            {project.results.map((r, i) => (
              <Reveal key={r.label} delay={Math.min(i * 0.06, 0.24)}>
                <p className="font-en font-bold text-ink text-[clamp(2rem,4vw,3rem)] leading-none">
                  {r.value}
                </p>
                <p className="mt-2 text-sm text-ink-soft">{r.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div className="container-yay mt-20 md:mt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-soft">
                <Image src={src} alt={project.title} fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container-yay mt-24 md:mt-32">
        <Reveal>
          <div className="rounded-3xl bg-bg-soft p-10 md:p-16 text-center">
            <p className="font-en font-bold text-2xl md:text-3xl text-ink tracking-tight">
              비슷한 도전을 하고 계신가요?
            </p>
            <div className="mt-7">
              <Button href="/contact">Start a Project</Button>
            </div>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="container-yay mt-24 md:mt-32">
          <Reveal>
            <h2 className="font-en font-bold text-2xl text-ink tracking-tight mb-8">
              Related Work
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.2)}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <div className="container-yay mt-16">
        <Link href="/work" className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors">
          ← 전체 프로젝트 보기
        </Link>
      </div>
    </article>
  );
}
