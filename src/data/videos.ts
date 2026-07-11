import { Video } from "@/types";

// 영상을 추가하려면 아래 배열에 객체를 추가하세요.
// youtubeId가 있으면 썸네일은 유튜브 썸네일을 우선 사용하고, 없으면 그라데이션 비주얼을 사용합니다.
// 실제 공개 가능한 영상이 준비되면 youtubeId / youtubeUrl 값을 채워주세요.

export const videos: Video[] = [
  {
    slug: "jouz-brand-film",
    title: "JOUZ Brand Film",
    client: "JOUZ",
    category: "Brand Film",
    featured: true,
    tone: "pink-lavender"
  },
  {
    slug: "korea-integrity-campaign",
    title: "국민권익위원회 정책홍보 캠페인",
    client: "국민권익위원회",
    category: "Government",
    tone: "sky-blue"
  },
  {
    slug: "hydrafacial-ceo-interview",
    title: "Hydrafacial Global CEO Interview",
    client: "Hydrafacial",
    category: "Interview",
    tone: "cyan-lavender"
  },
  {
    slug: "amway-corporate",
    title: "암웨이코리아 기업 홍보영상",
    client: "Amway Korea",
    category: "Corporate",
    tone: "blue-pink"
  },
  {
    slug: "idea-platform-sketch",
    title: "아이디어 플랫폼 캠페인 메이킹",
    client: "한국발명진흥회",
    category: "Making & Sketch",
    tone: "sky-cyan"
  },
  {
    slug: "world-water-week-highlight",
    title: "대한민국 국제물주간 하이라이트",
    client: "환경부",
    category: "Performance",
    tone: "cyan-lavender"
  }
];

export function getFeaturedVideo() {
  return videos.find((v) => v.featured) ?? videos[0];
}

export const videoCategories = [
  "Commercial",
  "Brand Film",
  "Corporate",
  "Government",
  "Interview",
  "YouTube",
  "Performance",
  "Making & Sketch"
] as const;
