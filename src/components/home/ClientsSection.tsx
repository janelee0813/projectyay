import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { clients } from "@/data/clients";

export default function ClientsSection() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft">
      <div className="container-yay">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by Brands and Institutions"
          description="공공기관부터 글로벌 기업, 대기업, 성장 브랜드까지 다양한 파트너와 함께해 왔습니다."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-glow-blue/15 border border-glow-blue/20 rounded-2xl overflow-hidden">
          {clients.map((client, i) => (
            <Reveal key={client.name} delay={Math.min(i * 0.02, 0.3)} y={12}>
              <div className="bg-bg-soft h-28 md:h-32 flex items-center justify-center px-4 text-center">
                <span className="text-sm md:text-[15px] font-medium text-ink-soft">
                  {client.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
