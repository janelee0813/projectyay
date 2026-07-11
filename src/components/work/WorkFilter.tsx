"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const filters = ["All", "Strategy", "Branding", "Campaign", "PR", "Government", "Social", "Film", "AI"];

export default function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-12 md:mb-16"
        role="group"
        aria-label="프로젝트 카테고리 필터"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "px-4 py-2 min-h-[40px] rounded-full text-sm font-medium transition-colors duration-300 border",
              active === f
                ? "bg-ink text-white border-ink"
                : "bg-transparent text-ink-soft border-ink/15 hover:border-ink/40"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-24 text-center text-ink-soft text-sm">
          해당 카테고리의 프로젝트가 아직 없습니다. 곧 업데이트될 예정입니다.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
