import Link from "next/link";
import GradientVisual from "@/components/ui/GradientVisual";
import { InsightPost } from "@/types";
import { formatDate } from "@/lib/utils";

export default function InsightCard({ post }: { post: InsightPost }) {
  return (
    <Link
      href={`/insight/${post.slug}`}
      className="group block rounded-2xl overflow-hidden border border-bg-mute bg-white transition-shadow duration-500 ease-glow hover:shadow-[0_28px_64px_-24px_rgba(24,24,27,0.18)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <GradientVisual
          tone={post.coverTone}
          shape="orb"
          className="absolute inset-0 transition-transform duration-700 ease-glow group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-ink">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs text-ink-soft/70">{formatDate(post.date)}</p>
        <h3 className="mt-2 font-en font-bold text-lg text-ink tracking-tight leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-2">{post.summary}</p>
      </div>
    </Link>
  );
}
