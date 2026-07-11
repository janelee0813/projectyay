import { GradientTone } from "@/types";

// Intelligent Glow 팔레트에서 파생된 톤 조합.
// 카드/썸네일/구형 오브젝트 변형에 공통으로 사용됩니다.
export const gradientTones: Record<GradientTone, [string, string, string]> = {
  "sky-blue": ["#8CCBFF", "#537CFF", "#C6A7FF"],
  "cyan-lavender": ["#65E6EF", "#8CCBFF", "#C6A7FF"],
  "pink-lavender": ["#F1A9E9", "#C6A7FF", "#537CFF"],
  "blue-pink": ["#537CFF", "#C6A7FF", "#F1A9E9"],
  "sky-cyan": ["#8CCBFF", "#65E6EF", "#537CFF"]
};

export function toneGradientCss(tone: GradientTone, angle = 135) {
  const [a, b, c] = gradientTones[tone];
  return `linear-gradient(${angle}deg, ${a} 0%, ${b} 50%, ${c} 100%)`;
}
