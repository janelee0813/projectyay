// 사이트 전역 설정 파일
// 이메일 / 전화번호 / 주소 / 사업자 정보는 이 파일 한 곳에서만 수정하면
// 헤더, 푸터, Contact 페이지, 개인정보처리방침 등 전체에 반영됩니다.

import { NavLink } from "@/types";

export const siteConfig = {
  nameKo: "예이프로젝트",
  nameEn: "project yay",
  legalNameKo: "예이프로젝트", // 사업자등록증상 상호명으로 교체하세요.
  url: "https://www.projectyay.co.kr", // 실제 배포 도메인으로 교체하세요.
  tagline: "We Architect Growth.",
  taglineKo:
    "브랜드의 문제를 발견하고 전략과 콘텐츠로 성장을 설계합니다.",
  description:
    "project yay는 전략, 브랜드, PR, 콘텐츠, 영상, AI 마케팅을 연결해 브랜드의 다음 성장을 설계하는 마케팅 아키텍트 & 크리에이티브 스튜디오입니다.",
  // 기본 OG 이미지는 app/opengraph-image.tsx에서 동적으로 생성됩니다.
  // 별도의 정적 이미지를 사용하려면 이 경로에 파일을 추가하고 layout.tsx에서 연결하세요.
  ogImage: "/og-image.png",

  // ------- placeholder 연락처 (추후 실제 정보로 교체) -------
  contact: {
    email: "hello@projectyay.co.kr",
    phone: "02-0000-0000",
    address: "서울특별시", // 상세 주소 확정 시 교체
    businessNumber: "추후 입력", // 사업자등록번호
    representative: "추후 입력" // 대표자명
  },

  social: {
    instagram: "",
    youtube: "",
    linkedin: ""
  },

  aiolab: {
    name: "AIOLab",
    url: "https://aiolab.kr/",
    description: "project yay가 직접 개발한 AI 마케팅 솔루션"
  }
};

export const mainNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "AIOLab", href: "/aiolab" },
  { label: "Insight", href: "/insight" },
  { label: "Contact", href: "/contact" }
];

export const ctaLabel = "Start a Project";

export const footerNav: NavLink[] = [
  ...mainNav,
  { label: "개인정보처리방침", href: "/privacy" }
];
