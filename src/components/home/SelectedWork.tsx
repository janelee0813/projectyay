import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/work/ProjectCard";
import { getPublishedProjects } from "@/data/projects";

export default function SelectedWork() {
  const featured = getPublishedProjects()
    .filter((p) => p.featured)
    .slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-bg-soft">
      <div className="container-yay">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Selected Work"
            description="전략에서 결과까지, project yay가 만든 변화입니다."
          />
          <Reveal>
            <Button href="/work" variant="secondary">
              View All Work
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.06, 0.3)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
