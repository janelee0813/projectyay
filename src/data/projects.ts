import { Project } from "@/types";

// 새 프로젝트를 추가하려면 아래 배열에 객체를 추가하세요.
// thumbnail / heroImage / gallery 경로가 없으면 추상 그라데이션 비주얼이 자동으로 표시됩니다.
// 값이 없는 필드(overview, results 등)는 상세 페이지에서 해당 섹션이 자동으로 숨겨집니다.

export const projects: Project[] = [
  {
    slug: "jouz-launch",
    title: "JOUZ 국내 론칭",
    client: "JOUZ",
    year: "2023",
    categories: ["Branding", "PR", "Campaign"],
    summary: "런칭 100일 만에 업계 상위권에 진입한 브랜드 론칭 캠페인",
    overview:
      "신규 브랜드 JOUZ의 국내 시장 진입을 위한 브랜드 론칭 캠페인을 전략 수립부터 실행까지 총괄했습니다.",
    challenge:
      "인지도가 없는 신규 브랜드가 짧은 기간 안에 시장에 존재감을 각인시켜야 했습니다.",
    strategy:
      "언론과 인플루언서를 결합한 통합 론칭 캠페인을 설계하고, 사전예약 흐름을 만들어 초기 화제성을 확보했습니다.",
    execution:
      "런칭 행사 기획 및 미디어 초청, 인플루언서 캠페인, 사전예약 프로모션을 순차적으로 실행했습니다.",
    results: [
      { value: "50+", label: "런칭 행사 언론 매체 참석" },
      { value: "200+", label: "기사 보도" },
      { value: "4회", label: "연속 사전예약 완판" },
      { value: "100일", label: "업계 상위권 진입 기간" }
    ],
    featured: true,
    published: true,
    tone: "pink-lavender"
  },
  {
    slug: "hydrafacial-relaunch",
    title: "Hydrafacial 국내 재진입",
    client: "Hydrafacial",
    categories: ["Strategy", "PR", "Branding"],
    summary: "럭셔리 미디어와 글로벌 CEO 인터뷰를 결합한 재진입 마케팅",
    overview:
      "기존 국내 시장 진입에 어려움을 겪었던 Hydrafacial의 브랜드 포지셔닝을 재정립하고 재진입 전략을 수립했습니다.",
    challenge:
      "기존 진입 실패의 원인을 규명하고, 프리미엄 시장에서의 신뢰를 다시 확보해야 했습니다.",
    insight:
      "국내 뷰티 시장에서 럭셔리 포지셔닝은 제품력만큼이나 브랜드가 전달되는 채널과 방식이 중요하다는 점을 발견했습니다.",
    strategy:
      "럭셔리 미디어와 인플루언서, 글로벌 CEO 인터뷰를 결합한 B2B·B2C 통합 커뮤니케이션 전략을 설계했습니다.",
    execution:
      "글로벌 CEO 내한 인터뷰 기획, 럭셔리 매체 관계 구축, 인플루언서 캠페인을 수행했습니다.",
    featured: true,
    published: true,
    tone: "cyan-lavender"
  },
  {
    slug: "amway-korea",
    title: "암웨이코리아 기업 이미지 개선",
    client: "Amway Korea",
    categories: ["PR", "Campaign"],
    summary: "언론 관계와 공익 캠페인을 결합한 장기 기업 이미지 개선",
    overview:
      "기업에 대한 부정적 인식을 개선하기 위한 장기 커뮤니케이션 프로젝트를 수행했습니다.",
    strategy:
      "언론 관계, 공익 캠페인, CEO 커뮤니케이션을 장기적 관점에서 통합 운영하는 전략을 설계했습니다.",
    execution:
      "지속적인 언론 관계 구축, 공익 캠페인 기획 및 운영, CEO 메시지 커뮤니케이션을 수행했습니다.",
    published: true,
    tone: "blue-pink"
  },
  {
    slug: "korea-integrity-commission",
    title: "국민권익위원회 정책홍보",
    client: "국민권익위원회",
    categories: ["Government", "PR", "Campaign"],
    summary: "소통 평가 등급을 하위에서 상위로 끌어올린 정책 커뮤니케이션",
    overview: "국민권익위원회의 정책 소통을 강화하기 위한 통합 캠페인을 수행했습니다.",
    strategy: "데이터 기반 커뮤니케이션 전략을 수립하고 캠페인과 콘텐츠를 A to Z로 설계했습니다.",
    execution: "채널별 콘텐츠 기획, 캠페인 운영, 성과 측정을 통합적으로 수행했습니다.",
    results: [{ value: "하→상", label: "소통 평가 등급 상승" }],
    featured: true,
    published: true,
    tone: "sky-blue"
  },
  {
    slug: "world-water-week",
    title: "대한민국 국제물주간",
    client: "환경부",
    categories: ["Government", "PR"],
    summary: "주요 방송과 중앙 일간지를 포함한 약 200건의 보도를 이끈 글로벌 이벤트 PR",
    overview: "국제 행사의 국내외 미디어 커뮤니케이션을 총괄했습니다.",
    execution: "주요 방송사와 중앙 일간지를 포함한 미디어 관계를 구축하고 행사 전반의 PR을 수행했습니다.",
    results: [{ value: "200+", label: "보도 건수" }],
    published: true,
    tone: "sky-cyan"
  },
  {
    slug: "idea-platform",
    title: "아이디어 플랫폼 활성화",
    client: "한국발명진흥회",
    categories: ["Government", "Social", "Campaign"],
    summary: "브랜드 메시지부터 SNS, 영상, 인쇄물까지 통합 운영한 플랫폼 활성화 캠페인",
    overview: "아이디어·발명 플랫폼의 이용 활성화를 위한 통합 마케팅을 수행했습니다.",
    execution: "브랜드 메시지 설계, 광고, SNS, 영상, 인쇄물, PR을 통합적으로 운영했습니다.",
    published: true,
    tone: "cyan-lavender"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug && p.published !== false);
}

export function getPublishedProjects() {
  return projects.filter((p) => p.published !== false);
}

export function getRelatedProjects(current: Project, count = 3) {
  return getPublishedProjects()
    .filter(
      (p) =>
        p.slug !== current.slug &&
        p.categories.some((c) => current.categories.includes(c))
    )
    .slice(0, count);
}
