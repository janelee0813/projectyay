import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { team, awards, experienceAreas } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-yay">
        <SectionHeading eyebrow="Team" title="Who We Are" />

        <div className="mt-10 flex flex-wrap gap-3">
          {experienceAreas.map((area, i) => (
            <Reveal key={area} delay={Math.min(i * 0.05, 0.25)}>
              <span className="inline-block px-5 py-2.5 rounded-full bg-bg-soft text-sm font-medium text-ink">
                {area}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={Math.min(i * 0.08, 0.3)}>
              <div className="rounded-2xl border border-glow-blue/25 p-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-en font-bold text-white text-xl mb-6"
                  style={{
                    background: "linear-gradient(135deg, #8CCBFF 0%, #537CFF 50%, #C6A7FF 100%)"
                  }}
                  aria-hidden="true"
                >
                  {member.name.slice(0, 1)}
                </div>
                <p className="font-en font-bold text-2xl text-ink tracking-tight">{member.name}</p>
                <p className="text-sm text-glow-blue font-semibold mt-1">{member.role}</p>
                <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={Math.min(i * 0.06, 0.2)}>
              <p className="text-sm text-ink-soft">
                <span className="font-en font-semibold text-ink">{award.year}</span> {award.title}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
