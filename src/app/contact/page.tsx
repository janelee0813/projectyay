import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${siteConfig.nameEn}와 새로운 프로젝트를 시작하세요.`,
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="pt-[calc(var(--header-h)+56px)] pb-28 md:pb-36">
      <div className="container-yay grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Contact" title="Start a Project" />
          <div className="mt-10 space-y-6 text-sm text-ink-soft">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-1.5">
                Email
              </p>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-1.5">
                Phone
              </p>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/-/g, "")}`}
                className="hover:text-ink transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft/60 mb-1.5">
                Address
              </p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
