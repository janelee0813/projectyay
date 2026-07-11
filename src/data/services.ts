import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "strategy",
    index: "01",
    title: "Strategy",
    shortTitle: "전략",
    description:
      "브랜드와 비즈니스의 현재를 분석하고 성장 방향과 실행 전략을 설계합니다.",
    items: [
      "시장 및 경쟁사 분석",
      "브랜드 진단",
      "고객 데이터 분석",
      "페르소나 설정",
      "고객 여정 설계",
      "마케팅 전략",
      "실행 로드맵"
    ],
    tone: "sky-blue",
    problem: "브랜드는 있지만 명확한 메시지가 없습니다.",
    perspective:
      "감이 아닌 데이터에서 시작할 때, 전략은 비로소 실행 가능한 무기가 됩니다. project yay는 흩어진 지표와 현상을 하나의 방향으로 정리하는 데서 시작합니다.",
    process: [
      { title: "진단", description: "브랜드와 시장, 데이터를 다각도로 분석합니다." },
      { title: "설계", description: "성장 가설을 세우고 우선순위를 정합니다." },
      { title: "로드맵", description: "실행 조직이 바로 움직일 수 있는 계획으로 정리합니다." }
    ],
    relatedProjectSlugs: ["korea-integrity-commission", "amway-korea"]
  },
  {
    slug: "brand-campaign",
    index: "02",
    title: "Brand & Campaign",
    shortTitle: "브랜드·캠페인",
    description:
      "브랜드가 시장에서 어떤 메시지와 모습으로 기억되어야 하는지 설계합니다.",
    items: [
      "브랜드 콘셉트",
      "메시지 및 슬로건",
      "신규 브랜드 론칭",
      "온·오프라인 캠페인",
      "광고 및 프로모션",
      "통합 캠페인 운영"
    ],
    tone: "pink-lavender",
    problem: "신규 브랜드의 시장 진입 방법을 모르겠습니다.",
    perspective:
      "첫인상은 한 번뿐입니다. project yay는 브랜드가 시장에 처음 등장하는 순간부터 기억되는 방식까지 설계합니다.",
    process: [
      { title: "콘셉트", description: "브랜드가 가져야 할 태도와 메시지를 정의합니다." },
      { title: "캠페인 설계", description: "채널별 실행안과 일정을 구체화합니다." },
      { title: "운영", description: "런칭 이후 반응을 추적하며 캠페인을 조정합니다." }
    ],
    relatedProjectSlugs: ["jouz-launch", "hydrafacial-relaunch"]
  },
  {
    slug: "pr-public-affairs",
    index: "03",
    title: "PR & Public Affairs",
    shortTitle: "PR·정책홍보",
    description:
      "기업과 기관의 메시지가 언론과 대중에게 효과적으로 전달되도록 합니다.",
    items: [
      "기업 PR",
      "정책 홍보",
      "언론 홍보",
      "이슈 커뮤니케이션",
      "M&A 커뮤니케이션",
      "미디어 트레이닝"
    ],
    tone: "sky-cyan",
    problem: "공공사업과 정책을 어렵지 않게 전달하고 싶습니다.",
    perspective:
      "정책과 공공의 언어는 대중의 언어와 다릅니다. project yay는 그 간극을 좁혀 메시지가 실제로 닿게 만듭니다.",
    process: [
      { title: "이슈 진단", description: "이해관계자와 여론 환경을 분석합니다." },
      { title: "메시지 설계", description: "타깃별로 전달력 있는 언어로 재구성합니다." },
      { title: "미디어 실행", description: "언론과 채널을 통해 지속적으로 전달합니다." }
    ],
    relatedProjectSlugs: ["korea-integrity-commission", "world-water-week"]
  },
  {
    slug: "content-social",
    index: "04",
    title: "Content & Social",
    shortTitle: "콘텐츠·SNS",
    description:
      "브랜드 목표와 채널 특성에 맞는 콘텐츠를 기획하고 운영합니다.",
    items: [
      "콘텐츠 전략",
      "SNS 기획 및 운영",
      "숏폼 콘텐츠",
      "유튜브 컨설팅",
      "인플루언서 마케팅",
      "채널 데이터 분석"
    ],
    tone: "cyan-lavender",
    problem: "SNS 콘텐츠가 일관성 없이 제작됩니다.",
    perspective:
      "콘텐츠는 개별 게시물이 아니라 채널 전체의 흐름입니다. project yay는 하나의 방향 아래 콘텐츠가 쌓이도록 설계합니다.",
    process: [
      { title: "채널 진단", description: "현재 콘텐츠와 성과 데이터를 분석합니다." },
      { title: "기획", description: "톤앤매너와 포맷, 발행 구조를 설계합니다." },
      { title: "운영", description: "데이터를 기반으로 지속적으로 개선합니다." }
    ],
    relatedProjectSlugs: ["idea-platform", "jouz-launch"]
  },
  {
    slug: "film-production",
    index: "05",
    title: "Film Production",
    shortTitle: "영상 제작",
    description:
      "마케팅 전략과 브랜드 메시지를 이해한 제작진이 목적에 맞는 영상을 제작합니다.",
    items: [
      "TVC",
      "디지털 광고",
      "브랜드 필름",
      "기업 및 기관 홍보영상",
      "유튜브 콘텐츠",
      "인터뷰",
      "메이킹 및 스케치"
    ],
    tone: "blue-pink",
    problem: "좋은 영상이 있지만 마케팅에 활용되지 않습니다.",
    perspective:
      "영상은 완성이 아니라 시작입니다. project yay는 전략에 맞게 기획된 영상이 실제 마케팅 성과로 이어지도록 설계합니다.",
    process: [
      { title: "기획", description: "메시지와 타깃에 맞는 연출 방향을 설정합니다." },
      { title: "제작", description: "촬영과 편집을 통해 완성도 있는 영상을 만듭니다." },
      { title: "확산", description: "채널별 편집본과 운영 전략을 함께 설계합니다." }
    ],
    relatedProjectSlugs: ["amway-korea", "idea-platform"]
  },
  {
    slug: "ai-marketing",
    index: "06",
    title: "AI Marketing",
    shortTitle: "AI 마케팅",
    description:
      "AI 검색과 답변 환경에서 브랜드가 발견되고 인용될 수 있는 구조를 설계합니다.",
    items: [
      "AI 검색 노출 진단",
      "GEO 및 AEO 대응",
      "브랜드 인용 구조 분석",
      "AI 친화적 콘텐츠 구조",
      "웹사이트 구조 개선",
      "지속적인 AI 가시성 관리"
    ],
    tone: "sky-blue",
    problem: "AI 검색에서 우리 브랜드가 언급되지 않습니다.",
    perspective:
      "AI가 답변을 선택하는 시대, 브랜드는 클릭이 아니라 인용을 목표로 해야 합니다. project yay는 자체 서비스 AIOLab을 통해 이 구조를 진단하고 개선합니다.",
    process: [
      { title: "진단", description: "AI 엔진 내 브랜드 노출 현황을 분석합니다." },
      { title: "구조 개선", description: "콘텐츠와 웹사이트 구조를 AI 친화적으로 재설계합니다." },
      { title: "모니터링", description: "지속적으로 가시성을 추적하고 개선합니다." }
    ],
    relatedProjectSlugs: []
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
