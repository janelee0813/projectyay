import { Award, TeamMember } from "@/types";

// 프로필 정보가 준비되는 대로 아래 값을 채워주세요.
// photo가 없으면 카드에 이니셜 기반 placeholder가 표시됩니다.

export const team: TeamMember[] = [
  {
    slug: "ceo",
    name: "대표자명 (추후 입력)",
    role: "Founder & CEO",
    bio: "전략과 크리에이티브, 기술을 연결해 브랜드의 다음 성장을 설계합니다.",
    career: ["광고·마케팅 기획 경력 13년+", "정부·공공기관 및 대기업 프로젝트 다수 수행"]
  },
  {
    slug: "creative-director",
    name: "이름 (추후 입력)",
    role: "Creative Director",
    bio: "브랜드 메시지가 화면으로 구현되는 전 과정을 총괄합니다.",
    career: ["영상 및 콘텐츠 제작 200건+"]
  },
  {
    slug: "strategy-lead",
    name: "이름 (추후 입력)",
    role: "Strategy Lead",
    bio: "데이터와 인사이트를 기반으로 브랜드 성장 전략을 설계합니다.",
    career: ["채널 분석 및 컨설팅 150건+"]
  }
];

export const awards: Award[] = [
  { title: "국토교통부장관 표창", year: "2020" },
  { title: "국민권익위원회위원장 표창", year: "2017" },
  { title: "금융감독위원회 위원장 감사패", year: "2008" }
];

export const experienceAreas = [
  "Government & Public Affairs",
  "Brand Marketing",
  "Corporate PR",
  "Content & Social",
  "Film Production",
  "AI Marketing Technology"
];
