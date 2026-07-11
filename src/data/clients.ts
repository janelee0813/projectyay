import { Client } from "@/types";

// 고객사 로고 이미지가 준비되면 logo 필드에 경로를 입력하세요. (예: "/logos/toyota.png")
// logo가 없으면 텍스트 기반 로고 그리드로 자동 표시됩니다.

export const clients: Client[] = [
  { name: "한국수입자동차협회", category: "Automotive & Mobility" },
  { name: "유럽자동차제조협회", category: "Automotive & Mobility" },
  { name: "한국토요타자동차", category: "Automotive & Mobility" },
  { name: "혼다코리아", category: "Automotive & Mobility" },
  { name: "Hydrafacial", category: "Healthcare & Beauty" },
  { name: "테라젠바이오", category: "Healthcare & Beauty" },
  { name: "Ferrari", category: "Automotive & Mobility" },
  { name: "K2 Korea", category: "Consumer & Lifestyle" },
  { name: "Columbia Sportswear Korea", category: "Consumer & Lifestyle" },
  { name: "GSK Korea", category: "Healthcare & Beauty" },
  { name: "Bayer Korea", category: "Healthcare & Beauty" },
  { name: "Amway Korea", category: "Consumer & Lifestyle" },
  { name: "서울주택도시공사", category: "Government & Public" },
  { name: "특허청", category: "Government & Public" },
  { name: "한국발명진흥회", category: "Government & Public" },
  { name: "국민권익위원회", category: "Government & Public" },
  { name: "환경부", category: "Government & Public" },
  { name: "한국국제협력단", category: "Government & Public" }
];

export const clientCategories = [
  "Government & Public",
  "Automotive & Mobility",
  "Healthcare & Beauty",
  "Consumer & Lifestyle",
  "Technology & Platform"
] as const;
