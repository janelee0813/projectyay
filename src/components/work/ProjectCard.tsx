import Link from "next/link";
import Image from "next/image";
import GradientVisual from "@/components/ui/GradientVisual";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-glow-blue/25 bg-white transition-all duration-500 ease-glow hover:border-transparent hover:shadow-[0_28px_64px_-24px_rgba(83,124,255,0.22)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.client} — ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-glow group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 ease-glow group-hover:scale-105">
            <GradientVisual tone={project.tone} shape="wave" className="w-full h-full" />
          </div>
        )}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {project.categories.slice(0, 2).map((c) => (
            <span
              key={c}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink-soft">{project.client}</p>
          {project.year && (
            <span className="text-xs font-en text-ink-soft/60">{project.year}</span>
          )}
        </div>
        <h3 className="mt-1.5 font-en font-bold text-lg text-ink tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-2">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
