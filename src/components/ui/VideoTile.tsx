"use client";

import { useState } from "react";
import GradientVisual from "./GradientVisual";
import { cn } from "@/lib/utils";
import { Video } from "@/types";

type VideoTileProps = {
  video: Video;
  size?: "large" | "small";
};

// 성능을 위해 iframe은 클릭 전까지 로드하지 않는 facade 패턴을 사용합니다.
// youtubeId가 없는 경우(아직 공개 영상이 준비되지 않은 경우) 정적 썸네일만 표시합니다.
export default function VideoTile({ video, size = "small" }: VideoTileProps) {
  const [playing, setPlaying] = useState(false);
  const playable = Boolean(video.youtubeId);

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden bg-bg-soft group",
        size === "large" ? "aspect-[16/10]" : "aspect-square"
      )}
    >
      {playing && video.youtubeId ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title}
          loading="lazy"
          allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => playable && setPlaying(true)}
          className="absolute inset-0 w-full h-full text-left"
          aria-label={playable ? `${video.title} 재생` : `${video.title} (영상 준비 중)`}
          disabled={!playable}
        >
          <GradientVisual tone={video.tone} shape="orb" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          {playable && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 2.5L15 9L4 15.5V2.5Z" fill="#18181B" />
                </svg>
              </span>
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <p className="text-[11px] font-semibold tracking-wide text-white/80 uppercase">
              {video.category}
            </p>
            <p className="mt-0.5 font-en font-bold text-white text-sm md:text-base leading-snug">
              {video.title}
            </p>
          </div>
        </button>
      )}
    </div>
  );
}
