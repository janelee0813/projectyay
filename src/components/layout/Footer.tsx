import Link from "next/link";
import { mainNav, siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-mute bg-bg-soft">
      <div className="container-yay py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-en font-bold text-2xl tracking-tight text-ink">
              {siteConfig.nameEn}
            </p>
            <p className="mt-3 text-ink-soft text-sm leading-relaxed max-w-xs">
              전략을 설계하고, 콘텐츠로 구현하며, 성장으로 연결하는
              통합 마케팅 파트너, {siteConfig.nameKo}입니다.
            </p>
            <a
              href={siteConfig.aiolab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:opacity-70 transition-opacity"
            >
              {siteConfig.aiolab.name} 바로가기
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(새 탭에서 열림)</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.15em] text-ink-soft uppercase mb-4">
              Menu
            </p>
            <ul className="space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  {item.href === "/about" ? (
                    <span className="text-sm text-ink-soft/40 select-none" aria-disabled="true">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-ink-soft hover:text-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-[0.15em] text-ink-soft uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-ink-soft">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/-/g, "")}`} className="hover:text-ink transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-bg-mute flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-soft">
            © {year} {siteConfig.nameEn}. All rights reserved.
          </p>
          <Link href="/privacy" className="text-xs text-ink-soft hover:text-ink transition-colors">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
