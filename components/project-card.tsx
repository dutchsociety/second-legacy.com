import Link from "next/link";
import type { Project } from "@/content/projects";
import { projectCategoryLabels } from "@/content/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm shadow-foreground/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-8",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {projectCategoryLabels[project.category]}
          </span>
          {project.year && (
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">
              {project.year}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{project.tagline}</p>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.summary}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground/90">
          {project.assignment}
        </p>
      </div>
      {project.deliverables && project.deliverables.length > 0 && (
        <p className="mt-6 text-xs font-medium text-accent">
          {project.deliverables.length} deliverables · details op projectpagina
        </p>
      )}
    </Link>
  );
}
