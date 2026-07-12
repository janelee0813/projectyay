"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { mainNav, ctaLabel } from "@/data/site";

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const firstLinkIndex = mainNav.findIndex((item) => item.href !== "/about");

  useEffect(() => {
    firstLinkRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      id="mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="모바일 메뉴"
      className="fixed inset-0 z-40 bg-white md:hidden flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{ paddingTop: "var(--header-h)" }}
    >
      <nav className="flex-1 flex flex-col justify-center px-8" aria-label="모바일 주요 메뉴">
        <ul className="space-y-1">
          {mainNav.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {item.href === "/about" ? (
                <span
                  className="block py-4 text-4xl font-en font-bold tracking-tight text-ink/40 border-b border-bg-mute select-none"
                  aria-disabled="true"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  ref={i === firstLinkIndex ? firstLinkRef : undefined}
                  onClick={onClose}
                  className="block py-4 text-4xl font-en font-bold tracking-tight text-ink border-b border-bg-mute"
                >
                  {item.label}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="px-8 pb-10">
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center justify-center w-full rounded-full bg-ink text-white text-base font-semibold py-4 min-h-[56px]"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.div>
  );
}
