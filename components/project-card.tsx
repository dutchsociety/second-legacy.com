import Link from "next/link";
import type { Project } from "@/content/projects";
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
        "group flex flex-col justify-between rounded-xl border border-border bg-card p-6 md:p-8 transition-colors hover:border-foreground/20 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.summary}
        </p>
      </div>
      {project.year && (
        <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
          {project.year}
        </p>
      )}
    </Link>
  );
}
