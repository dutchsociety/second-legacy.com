import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/button";
import {
  getProjectBySlug,
  projectCategoryLabels,
  projects,
} from "@/content/projects";
import { siteConfig } from "@/content/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${siteConfig.brand}`,
      description: project.summary,
      url: `${siteConfig.url}/work/${project.slug}`,
    },
  };
}

export default function WorkDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main id="main" className="pb-20">
      <article>
        <header className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <FadeIn>
              <Link
                href="/#werk"
                className="text-sm text-muted-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                ← Terug naar opdrachten
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {projectCategoryLabels[project.category]}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                  {project.role ? ` · ${project.role}` : ""}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 text-lg text-accent">{project.tagline}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.summary}
              </p>
            </FadeIn>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 space-y-14">
          <FadeIn>
            <section
              aria-labelledby="assignment-heading"
              className="rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 md:p-8"
            >
              <h2
                id="assignment-heading"
                className="text-lg font-semibold text-foreground"
              >
                Opdrachtomschrijving
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.assignment}
              </p>
            </section>
          </FadeIn>

          {project.deliverables && project.deliverables.length > 0 && (
            <FadeIn>
              <section aria-labelledby="deliverables-heading">
                <h2
                  id="deliverables-heading"
                  className="text-lg font-semibold text-foreground"
                >
                  Deliverables
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bij deze opdracht ging het om meerdere producten en systemen — niet om één
                  website.
                </p>
                <ul className="mt-6 space-y-4">
                  {project.deliverables.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-border bg-card p-5 md:p-6"
                    >
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>
          )}

          <FadeIn>
            <section aria-labelledby="problem-heading">
              <h2
                id="problem-heading"
                className="text-lg font-semibold text-foreground"
              >
                Aanleiding
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.problem}
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="solution-heading">
              <h2
                id="solution-heading"
                className="text-lg font-semibold text-foreground"
              >
                Aanpak
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.solution}
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="result-heading">
              <h2
                id="result-heading"
                className="text-lg font-semibold text-foreground"
              >
                Resultaat
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.result}
              </p>
              {project.metrics && project.metrics.length > 0 && (
                <ul className="mt-6 space-y-2 border-l-2 border-accent/40 pl-4">
                  {project.metrics.map((m) => (
                    <li
                      key={m}
                      className="text-sm text-muted-foreground md:text-base"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </FadeIn>

          <FadeIn>
            <section
              aria-labelledby="tech-heading"
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <h2
                id="tech-heading"
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Techniek (indicatief)
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-muted/50 px-3 py-1 text-sm text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <Button href="/#contact" variant="secondary">
              Interesse in vergelijkbaar werk?
            </Button>
          </FadeIn>
        </div>
      </article>
    </main>
  );
}
