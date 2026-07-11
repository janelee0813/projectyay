import { InsightPost } from "@/types";

// 새 글을 추가하려면 아래 배열에 객체를 추가하세요.
// body는 문단 단위 배열이며, 추후 MDX로 전환할 때 이 구조를 그대로 매핑할 수 있습니다.

export const insights: InsightPost[] = [
  {
    slug: "strategy-and-film-together",
    title: "광고 전략과 영상 제작을 함께 설계해야 하는 이유",
    category: "Strategy",
    date: "2025-03-12",
    summary:
      "영상은 전략과 분리된 결과물이 아닙니다. 기획 단계부터 함께 설계할 때 메시지는 힘을 갖습니다.",
    body: [
      "많은 브랜드가 영상 제작을 마케팅 전략과 별개의 프로세스로 다룹니다. 전략팀이 방향을 정하고, 제작사는 그 방향을 시각적으로 옮기는 역할만 맡는 구조입니다. 하지만 이런 분업은 종종 메시지와 화면 사이의 간극을 만듭니다.",
      "전략을 이해한 제작진은 단순히 예쁜 화면이 아니라, 타깃이 반응할 지점을 알고 연출합니다. 카피 한 줄, 컷 하나의 리듬이 브랜드가 전달하려는 포지셔닝과 정확히 맞물릴 때 영상은 마케팅 자산으로서 힘을 발휘합니다.",
      "project yay는 전략 수립 단계부터 제작진이 함께 참여하는 구조를 갖추고 있습니다. 이는 결과물의 완성도뿐 아니라, 전략이 실제로 실행 가능한 형태로 구현되는지를 검증하는 과정이기도 합니다."
    ],
    coverTone: "sky-blue",
    published: true
  },
  {
    slug: "why-brand-films-fail-to-convert",
    title: "브랜드 영상이 실제 마케팅 성과로 연결되지 않는 이유",
    category: "Film",
    date: "2025-04-02",
    summary:
      "완성도 높은 영상이 성과로 이어지지 않는다면, 문제는 대부분 제작 이후의 활용 전략에 있습니다.",
    body: [
      "영상 자체의 완성도는 높지만 조회수나 전환으로 이어지지 않는 경우, 원인은 촬영이나 편집이 아니라 배포와 활용 전략의 부재인 경우가 많습니다.",
      "어떤 채널에서, 어떤 길이로, 어떤 순서로 노출되는지에 따라 동일한 영상도 완전히 다른 성과를 냅니다. 메인 영상과 숏폼 편집본, 광고 소재는 각기 다른 목적을 가지고 설계되어야 합니다.",
      "project yay는 촬영 이전부터 배포 전략을 함께 설계해, 완성된 영상이 실제 캠페인 성과 지표와 연결되도록 합니다."
    ],
    coverTone: "cyan-lavender",
    published: true
  },
  {
    slug: "why-government-pr-films-get-boring",
    title: "공공기관 홍보영상이 지루해지는 대표적인 원인",
    category: "Case Insight",
    date: "2025-04-20",
    summary:
      "공공의 신뢰성과 대중의 흥미는 상충하지 않습니다. 문제는 둘을 같은 방식으로 다루려는 접근에 있습니다.",
    body: [
      "공공기관 홍보영상은 종종 '정확해야 한다'는 압박 속에서 정보 나열식 구성에 그치곤 합니다. 이는 신뢰를 주기보다 오히려 메시지 전달력을 떨어뜨립니다.",
      "정확성과 흥미는 대립하는 가치가 아닙니다. 핵심은 정보를 어떤 서사 구조로 배치하느냐에 있습니다. 시청자가 궁금해할 지점을 먼저 던지고, 그 답을 데이터와 함께 제시하는 구성이 훨씬 효과적입니다.",
      "project yay는 다수의 정부·공공기관 프로젝트를 수행하며, 공공의 신뢰도를 유지하면서도 대중이 끝까지 시청하는 콘텐츠 구조를 설계해왔습니다."
    ],
    coverTone: "sky-cyan",
    published: true
  },
  {
    slug: "youtube-channel-plateau-points",
    title: "유튜브 채널이 정체되는 주요 지점",
    category: "YouTube",
    date: "2025-05-08",
    summary:
      "구독자 수가 아니라 시청 지속률과 콘텐츠 구조를 먼저 점검해야 정체 구간을 넘을 수 있습니다.",
    body: [
      "많은 채널이 일정 구독자 수에 도달한 뒤 성장이 멈추는 구간을 겪습니다. 이 시점에서 흔히 하는 실수는 콘텐츠의 양을 늘리는 것이지만, 근본 원인은 대개 콘텐츠 구조에 있습니다.",
      "썸네일과 제목의 클릭률, 초반 15초의 이탈률, 시리즈 간 연결성 등 세부 지표를 함께 분석해야 정체의 실제 원인을 찾을 수 있습니다.",
      "project yay의 유튜브 컨설팅은 단순 조회수 개선이 아니라, 채널이 브랜드 목표와 연결된 구조로 운영되도록 진단하고 재설계하는 데 초점을 둡니다."
    ],
    coverTone: "pink-lavender",
    published: true
  },
  {
    slug: "why-homepages-must-change-for-ai-search",
    title: "AI 검색 시대에 브랜드 홈페이지가 달라져야 하는 이유",
    category: "AI Search",
    date: "2025-06-01",
    summary:
      "검색 결과 링크를 클릭하던 시대에서, AI가 답변을 대신 선택하는 시대로 이동하고 있습니다.",
    body: [
      "이용자는 더 이상 검색 결과 목록을 훑어보지 않고, AI가 요약하고 인용한 답변을 그대로 신뢰하는 경우가 늘고 있습니다. 이는 브랜드가 노출되는 방식 자체를 바꾸고 있습니다.",
      "기존 SEO가 키워드와 링크 구조에 집중했다면, AI 검색 환경에서는 콘텐츠의 명확성과 데이터의 신뢰도, 구조화된 정보가 훨씬 중요해집니다.",
      "project yay는 자체 개발 서비스 AIOLab을 통해 브랜드가 AI 엔진 안에서 어떻게 발견되고 인용되는지를 진단하고, 홈페이지와 콘텐츠 구조를 개선하는 작업을 수행합니다."
    ],
    coverTone: "blue-pink",
    published: true
  },
  {
    slug: "geo-vs-seo",
    title: "GEO와 SEO는 무엇이 다른가",
    category: "AI Search",
    date: "2025-06-18",
    summary:
      "SEO가 검색엔진을 위한 최적화라면, GEO는 생성형 AI의 답변 안에 브랜드가 등장하도록 만드는 최적화입니다.",
    body: [
      "SEO(Search Engine Optimization)는 검색 결과 페이지에서 상위에 노출되는 것을 목표로 합니다. 반면 GEO(Generative Engine Optimization)는 AI가 생성하는 답변 안에 브랜드가 언급되고 인용되는 것을 목표로 합니다.",
      "두 접근은 완전히 분리되지 않습니다. 다만 GEO는 콘텐츠의 구조적 명확성, 사실 기반의 데이터, 신뢰할 수 있는 출처로서의 브랜드 포지셔닝을 더 중요하게 다룹니다.",
      "project yay는 AIOLab을 통해 GEO와 AEO(Answer Engine Optimization) 관점에서 브랜드의 현재 위치를 진단하고, SEO와 함께 운영할 수 있는 통합 로드맵을 제시합니다."
    ],
    coverTone: "cyan-lavender",
    published: true
  }
];

export function getPublishedInsights() {
  return insights.filter((i) => i.published !== false);
}

export function getInsightBySlug(slug: string) {
  return insights.find((i) => i.slug === slug && i.published !== false);
}

export const insightCategories = [
  "Strategy",
  "Branding",
  "PR",
  "Content",
  "Film",
  "YouTube",
  "AI Search",
  "Case Insight"
] as const;
