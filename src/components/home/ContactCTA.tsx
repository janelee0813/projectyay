import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SphereObject from "@/components/ui/SphereObject";

export default function ContactCTA() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden bg-ink">
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <SphereObject size={720} variant="hero" tone="blue-pink" interactive={false} />
      </div>
      <div className="container-yay relative text-center">
        <Reveal>
          <h2 className="font-en font-bold text-white text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.08] tracking-tight">
            Let&rsquo;s Build
            <br />
            What&rsquo;s Next.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            새로운 브랜드를 시작하거나, 정체된 성장을 다시 움직이거나, 복잡한
            메시지를 효과적으로 전달해야 한다면 project yay와 이야기해 주세요.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <Button href="/contact" size="lg" className="!bg-white !text-ink hover:!bg-white/90">
              Start a Project
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
