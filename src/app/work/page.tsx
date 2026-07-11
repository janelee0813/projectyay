import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkFilter from "@/components/work/WorkFilter";
import { getPublishedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "전략에서 결과까지, project yay가 수행한 프로젝트를 소개합니다.",
  alternates: { canonical: "/work" }
};

export default function WorkPage() {
  const projects = getPublishedProjects();

  return (
    <div className="pt-[calc(var(--header-h)+56px)] pb-28 md:pb-36">
      <div className="container-yay">
        <SectionHeading
          eyebrow="Work"
          title="Work that moves brands forward."
          className="mb-16"
        />
        <WorkFilter projects={projects} />
      </div>
    </div>
  );
}
