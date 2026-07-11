// project yay 전체 데이터 타입 정의
// 새로운 콘텐츠를 추가할 때 이 타입에 맞춰 /data 폴더의 파일을 수정하면 됩니다.

export type GradientTone =
  | "sky-blue"
  | "cyan-lavender"
  | "pink-lavender"
  | "blue-pink"
  | "sky-cyan";

export type Service = {
  slug: string;
  index: string; // "01" ~ "06" 표기용
  title: string;
  shortTitle: string;
  description: string;
  items: string[];
  tone: GradientTone;
  // Services 상세 페이지용 (없으면 해당 섹션 UI에서 자동 숨김)
  problem?: string;
  perspective?: string;
  process?: { title: string; description: string }[];
  relatedProjectSlugs?: string[];
};

export type ProjectResult = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year?: string;
  categories: string[];
  summary: string;
  thumbnail?: string;
  heroImage?: string;
  videoUrl?: string;
  overview?: string;
  challenge?: string;
  insight?: string;
  strategy?: string;
  execution?: string;
  results?: ProjectResult[];
  gallery?: string[];
  featured?: boolean;
  published?: boolean;
  tone: GradientTone;
};

export type VideoCategory =
  | "Commercial"
  | "Brand Film"
  | "Corporate"
  | "Government"
  | "Interview"
  | "YouTube"
  | "Performance"
  | "Making & Sketch";

export type Video = {
  slug: string;
  title: string;
  client?: string;
  category: VideoCategory;
  youtubeId?: string;
  youtubeUrl?: string;
  thumbnail?: string;
  featured?: boolean;
  tone: GradientTone;
};

export type ClientCategory =
  | "Government & Public"
  | "Automotive & Mobility"
  | "Healthcare & Beauty"
  | "Consumer & Lifestyle"
  | "Technology & Platform";

export type Client = {
  name: string;
  category: ClientCategory;
  logo?: string; // 로고 이미지가 준비되면 경로를 입력하세요. 없으면 텍스트로 표시됩니다.
};

export type Stat = {
  value: string;
  suffix?: string;
  label: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  career?: string[];
  photo?: string;
};

export type Award = {
  title: string;
  year: string;
};

export type InsightCategory =
  | "Strategy"
  | "Branding"
  | "PR"
  | "Content"
  | "Film"
  | "YouTube"
  | "AI Search"
  | "Case Insight";

export type InsightPost = {
  slug: string;
  title: string;
  category: InsightCategory;
  date: string; // YYYY-MM-DD
  summary: string;
  body: string[]; // 문단 배열 (추후 MDX 전환 가능한 구조)
  coverTone: GradientTone;
  published?: boolean;
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
  items: string[];
};

export type NavLink = {
  label: string;
  href: string;
};
