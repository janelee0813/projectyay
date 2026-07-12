"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { mainNav, ctaLabel, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        본문으로 바로가기
      </a>
      <header
        className="site-header fixed top-0 left-0 right-0 z-50"
        data-scrolled={scrolled}
      >
        <div className="container-yay flex items-center justify-between" style={{ height: "var(--header-h)" }}>
          <Link
            href="/"
            className="font-en font-bold text-lg md:text-xl tracking-tight text-ink"
            aria-label={`${siteConfig.nameEn} 홈으로 이동`}
          >
            {siteConfig.nameEn}
          </Link>

          <nav className="hidden md:flex items-center gap-9" aria-label="주요 메뉴">
            {mainNav.map((item) => {
              if (item.href === "/about") {
                return (
                  <span
                    key={item.href}
                    className="text-sm font-medium tracking-tight text-ink-soft/50 cursor-default select-none"
                    aria-disabled="true"
                  >
                    {item.label}
                  </span>
                );
              }
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-tight transition-colors duration-300",
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-ink text-white text-sm font-semibold px-5 py-2.5 min-h-[44px] hover:bg-[#2c2c31] transition-colors duration-300"
            >
              {ctaLabel}
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden relative w-11 h-11 flex items-center justify-center -mr-2"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
            <div className="w-6 flex flex-col gap-[5px]" aria-hidden="true">
              <span
                className={cn(
                  "block h-[1.5px] bg-ink transition-transform duration-300",
                  menuOpen && "translate-y-[6.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] bg-ink transition-opacity duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] bg-ink transition-transform duration-300",
                  menuOpen && "-translate-y-[6.5px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
