# project yay — 기업 홈페이지

전략, 브랜드, PR, 콘텐츠, 영상, AI 마케팅을 연결하는 통합 마케팅 파트너
**project yay(예이프로젝트)**의 공식 홈페이지입니다.

디자인 콘셉트: **Intelligent Glow** — 밝은 화이트/그레이 배경 위에 데이터·인사이트·전략을
상징하는 빛나는 구형 오브젝트와 블루·시안·라벤더·핑크 그라데이션을 사용한
정제되고 미래지향적인 비주얼 시스템.

---

## 1. 기술 스택

- **Next.js 15** (App Router, TypeScript)
- **React 19**
- **Tailwind CSS 3**
- **Framer Motion 12** — 스크롤 리빌, 페이지 전환, 카운트업 등 모든 모션
- 3D 없는 경량 구형 오브젝트 — SVG 그라디언트 + CSS 블러 + 마우스/스크롤 반응 (`SphereObject` 컴포넌트). React Three Fiber, 무거운 3D 모델은 사용하지 않습니다.
- 정적 배포 최적화, Vercel 배포 기준으로 설계

---

## 2. 설치 방법

```bash
# Node.js 18.18 이상 필요 (권장: 20 LTS)
npm install
```

## 3. 실행 방법

```bash
# 개발 서버 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트
npm run lint
```

## 4. 환경변수

`.env.example`을 복사해 `.env.local`을 만드세요.

```bash
cp .env.example .env.local
```

현재 문의 폼은 별도 백엔드 없이 mock 응답을 반환합니다. 실제 이메일 발송
서비스를 연결할 때 필요한 값들을 `.env.example`에 미리 정의해두었습니다.
(자세한 내용은 아래 "10. 문의 폼 연결 방법" 참고)

---

## 5. 폴더 구조

```
project-yay/
├── src/
│   ├── app/                      # 라우트 (App Router)
│   │   ├── page.tsx               # 메인 페이지
│   │   ├── about/                 # /about
│   │   ├── services/              # /services
│   │   ├── work/                  # /work, /work/[slug]
│   │   ├── aiolab/                # /aiolab
│   │   ├── insight/                # /insight, /insight/[slug]
│   │   ├── contact/               # /contact
│   │   ├── privacy/               # /privacy
│   │   ├── api/contact/route.ts   # 문의 폼 mock 제출 API
│   │   ├── sitemap.ts / robots.ts
│   │   ├── icon.tsx / opengraph-image.tsx   # 동적 파비콘 · OG 이미지
│   │   ├── layout.tsx / template.tsx / globals.css
│   ├── components/
│   │   ├── layout/                # Header, Footer, MobileMenu
│   │   ├── ui/                    # SphereObject, GradientVisual, Button, Reveal 등 공통 UI
│   │   ├── home/                  # 메인 페이지 섹션 컴포넌트
│   │   ├── work/                  # ProjectCard, WorkFilter
│   │   ├── insight/                # InsightCard
│   │   └── contact/               # ContactForm
│   ├── data/                      # ⭐ 콘텐츠 데이터 (아래 6번 참고)
│   ├── lib/                       # 유틸, 그라데이션 톤 매핑
│   └── types/                     # 전체 타입 정의
├── public/                        # 정적 파일 (로고 이미지 등을 추가할 위치)
└── README.md
```

---

## 6. 콘텐츠 수정 위치 안내 (`/src/data`)

모든 콘텐츠는 하드코딩 없이 데이터 파일에서 관리됩니다. 코드를 건드리지
않고 아래 파일만 수정하면 사이트 전체에 반영됩니다.

| 파일 | 내용 |
|---|---|
| `site.ts` | 회사명, 이메일·전화번호·주소 등 연락처, 내비게이션, AIOLab 링크 |
| `services.ts` | 6개 서비스 (Strategy, Brand & Campaign, PR, Content & Social, Film, AI Marketing) |
| `projects.ts` | Work 프로젝트 목록 및 상세 콘텐츠 |
| `videos.ts` | Film & Content 섹션 영상 목록 |
| `clients.ts` | 고객사 로고/텍스트 그리드 |
| `stats.ts` | Why project yay 숫자(13+, 200+, 150+) 및 차별점 |
| `process.ts` | Discover–Research–Build–Deliver–Grow 5단계 |
| `team.ts` | 리더십 프로필, 수상 내역, Experience 영역 |
| `insights.ts` | Insight 아티클 (6편 샘플 포함) |
| `aiolab.ts` | AIOLab 소개 문구 및 기능 리스트 |
| `contact.ts` | 문의 폼의 "문의 분야" / "예상 예산" 선택지 |

**연락처(이메일/전화/주소) 변경**은 `src/data/site.ts`의 `siteConfig.contact`
한 곳만 수정하면 헤더, 푸터, Contact 페이지, 개인정보처리방침에 모두
반영됩니다.

---

## 7. 프로젝트(Work) 추가 방법

`src/data/projects.ts`의 배열에 아래 형태로 객체를 추가하세요.

```ts
{
  slug: "new-project",              // URL: /work/new-project
  title: "프로젝트명",
  client: "클라이언트명",
  year: "2026",
  categories: ["Strategy", "PR"],   // Work 페이지 필터와 연동됩니다.
  summary: "카드에 노출될 한 줄 요약",
  overview: "...", challenge: "...", insight: "...",
  strategy: "...", execution: "...",   // 없는 필드는 상세 페이지에서 자동으로 숨겨집니다.
  results: [{ value: "200+", label: "보도 건수" }],
  thumbnail: "/projects/new-project/thumb.jpg", // 없으면 그라데이션 비주얼 자동 표시
  heroImage: "/projects/new-project/hero.jpg",
  gallery: ["/projects/new-project/1.jpg"],
  featured: true,                   // 메인 Selected Work에 노출 여부
  published: true,
  tone: "sky-blue"                  // 그라데이션 톤: sky-blue / cyan-lavender / pink-lavender / blue-pink / sky-cyan
}
```

이미지가 준비되면 `thumbnail` / `heroImage` / `gallery` 경로만 입력하면
자동으로 `next/image`가 최적화된 이미지를 렌더링합니다. 이미지가 없는
동안에는 회색 placeholder 대신 프로젝트별 추상 그라데이션 비주얼이
자동으로 표시됩니다.

---

## 8. 고객사 추가 방법

`src/data/clients.ts`에 항목을 추가하세요.

```ts
{ name: "새 고객사명", category: "Technology & Platform" }
```

로고 이미지가 준비되면 `logo: "/logos/company.png"`를 추가하면 텍스트
대신 로고 이미지로 자동 전환되도록 `ClientsSection` 컴포넌트를 확장할 수
있습니다. (현재는 텍스트 그리드 기준으로 구현되어 있습니다.)

---

## 9. 영상 추가 방법

`src/data/videos.ts`에 항목을 추가하세요.

```ts
{
  slug: "new-video",
  title: "영상 제목",
  client: "클라이언트명",
  category: "Brand Film",
  youtubeId: "dQw4w9WgXcQ",   // 유튜브 영상 ID (공개 영상만)
  youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  featured: true,             // Film & Content 대표 영상으로 노출
  tone: "sky-blue"
}
```

`youtubeId`가 없는 영상은 재생 버튼이 비활성화된 정적 썸네일로 표시되며,
값이 채워지면 클릭 시에만 iframe이 로드되는 facade 패턴으로 성능을
보호합니다(자동재생 다수 배치로 인한 성능 저하 방지).

---

## 10. 문의 폼 연결 방법

현재 `src/app/api/contact/route.ts`는 실제 이메일 발송 없이 서버 로그만
남기는 **mock 엔드포인트**입니다. 실제 운영 시 아래처럼 교체하세요.

```ts
// src/app/api/contact/route.ts 내부 TODO 위치
import { Resend } from "resend"; // 예시: Resend 사용 시
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "project yay <noreply@projectyay.co.kr>",
  to: process.env.CONTACT_EMAIL_TO!,
  subject: `[문의] ${payload.name}님의 프로젝트 문의`,
  text: JSON.stringify(payload, null, 2)
});
```

- SMTP를 사용하려면 `nodemailer`를 설치하고 `.env.local`의 `SMTP_*` 값을 사용하세요.
- 첨부파일(`attachment`)은 현재 파일명만 로그에 남깁니다. 실제로 파일을
  저장하려면 S3/Cloudflare R2 등 오브젝트 스토리지에 업로드 후 URL을
  이메일 본문에 포함하는 방식을 권장합니다.
- 폼 자체(`src/components/contact/ContactForm.tsx`)는 이미 클라이언트
  검증, 로딩 상태, 성공/오류 메시지, 접근성 라벨을 모두 갖추고 있어
  API 응답 형식(`{ ok: boolean, error?: string }`)만 유지하면 백엔드
  교체만으로 그대로 동작합니다.

---

## 11. Vercel 배포 방법

1. GitHub 저장소에 푸시
2. [vercel.com](https://vercel.com)에서 New Project → 저장소 선택
3. Framework Preset: **Next.js** (자동 감지)
4. Environment Variables에 `.env.example` 기준 값 입력
5. Deploy

이후 커스텀 도메인을 연결하고 `src/data/site.ts`의 `siteConfig.url`을
실제 배포 도메인으로 변경한 뒤 재배포하세요. (sitemap.xml, robots.txt,
Open Graph 메타데이터가 이 값을 기준으로 생성됩니다.)

---

## 12. 사용한 라이브러리

| 라이브러리 | 용도 |
|---|---|
| `next` | App Router, 이미지 최적화, 메타데이터/사이트맵/robots, 동적 OG 이미지(`next/og`) |
| `react` / `react-dom` | UI 렌더링 (v19) |
| `framer-motion` | 스크롤 리빌, 페이지 전환, 숫자 카운트업, 모바일 메뉴 애니메이션 |
| `tailwindcss` | 디자인 시스템 토큰(컬러/타이포/간격) 기반 스타일링 |
| `clsx` | 조건부 클래스 조합 |

무거운 3D 라이브러리(Three.js, React Three Fiber)는 사용하지 않았습니다.
브랜드 시그니처 오브젝트는 SVG 그라디언트 + CSS 블러로 구현해 초기
로딩 성능을 지켰습니다.

---

## 13. 향후 CMS 연결 방법

현재 `/src/data`의 TypeScript 파일이 곧 콘텐츠 스키마입니다. 추후
Headless CMS(Sanity, Contentful, Notion API 등)로 전환할 때는:

1. 각 `data/*.ts` 파일의 타입(`/src/types/index.ts`)을 CMS 스키마로 그대로 이관
2. `getPublishedProjects()`, `getInsightBySlug()` 같은 헬퍼 함수의 내부
   구현만 "정적 배열 조회" → "CMS API fetch"로 교체
3. 컴포넌트는 데이터 shape가 동일하게 유지되는 한 수정할 필요가 없습니다.

즉, 지금 구조 자체가 이미 CMS 마이그레이션을 염두에 둔 데이터/뷰 분리
구조입니다.

---

## 14. 접근성 · 성능 체크리스트

- 키보드 탐색, 포커스 스타일(`:focus-visible`), 스킵 링크 구현
- 모바일 메뉴: ESC 닫기, 포커스 트랩, `aria-expanded`/`aria-modal`
- `prefers-reduced-motion` 전역 대응 (Framer Motion `MotionConfig
  reducedMotion="user"` + CSS 미디어쿼리)
- 이미지: `next/image` 기반 lazy loading, WebP/AVIF 자동 대응
- 영상: 클릭 전까지 iframe 미로드 (facade 패턴)
- 구형 오브젝트: 저사양/터치 환경에서는 마우스 트래킹 비활성화, 느린
  autoplay drift로 대체

---

## 15. 회사명 표기 규칙

- 국문명: **예이프로젝트**
- 영문명: **project yay** (모든 로고/텍스트에서 이 표기로 통일, `yay
  Project`, `PROJECT YAY` 등 혼용 금지 — `src/data/site.ts`의
  `siteConfig.nameEn` 값을 그대로 사용하도록 전체 컴포넌트가 구성되어
  있습니다.)
