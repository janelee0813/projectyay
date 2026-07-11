import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "현재의 문제와 가능성을 발견합니다.",
    items: [
      "고객 데이터 분석",
      "브랜드 속성 분석",
      "시장 상황 분석",
      "경쟁사 분석",
      "기존 성과 분석"
    ]
  },
  {
    index: "02",
    title: "Research",
    description: "내부와 외부의 목소리를 조사합니다.",
    items: [
      "관계자 인터뷰",
      "고객 특성 조사",
      "잠재고객 니즈",
      "페르소나 설정",
      "핵심 인사이트 도출"
    ]
  },
  {
    index: "03",
    title: "Build",
    description: "발견된 인사이트를 전략으로 만듭니다.",
    items: ["브랜드 방향", "메시지와 콘셉트", "타깃 접근 전략", "고객 여정", "실행 로드맵"]
  },
  {
    index: "04",
    title: "Deliver",
    description: "전략을 실제 결과물로 구현합니다.",
    items: ["광고", "콘텐츠", "SNS", "PR", "영상", "행사 및 캠페인"]
  },
  {
    index: "05",
    title: "Grow",
    description: "결과를 분석하고 다음 실행을 설계합니다.",
    items: ["유입 데이터", "전환 및 이탈 분석", "캠페인 성과", "재방문 및 충성도", "지속적인 개선"]
  }
];
