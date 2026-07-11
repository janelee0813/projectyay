import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import BrandStatement from "@/components/home/BrandStatement";
import ServicesSection from "@/components/home/ServicesSection";
import WhyProjectYay from "@/components/home/WhyProjectYay";
import ProcessSection from "@/components/home/ProcessSection";
import SelectedWork from "@/components/home/SelectedWork";
import FilmContent from "@/components/home/FilmContent";
import AiolabSection from "@/components/home/AiolabSection";
import ClientsSection from "@/components/home/ClientsSection";
import ContactCTA from "@/components/home/ContactCTA";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.tagline} — ${siteConfig.nameEn}`,
  description: siteConfig.description,
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ServicesSection />
      <WhyProjectYay />
      <ProcessSection />
      <SelectedWork />
      <FilmContent />
      <AiolabSection />
      <ClientsSection />
      <ContactCTA />
    </>
  );
}
