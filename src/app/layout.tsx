import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.nameEn} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.nameEn}`
  },
  description: siteConfig.description,
  keywords: [
    "project yay",
    "예이프로젝트",
    "마케팅 전략",
    "브랜드 전략",
    "PR",
    "정책홍보",
    "SNS 콘텐츠",
    "영상 제작",
    "AI 마케팅",
    "AIOLab"
  ],
  authors: [{ name: siteConfig.nameEn }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: `${siteConfig.nameEn} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.nameEn,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.nameEn }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.nameEn} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  alternates: {
    canonical: siteConfig.url
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.nameEn,
    alternateName: siteConfig.nameKo,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressLocality: siteConfig.contact.address
    },
    sameAs: [siteConfig.aiolab.url].filter(Boolean)
  };

  return (
    <html lang="ko">
      <body className="font-kr antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
