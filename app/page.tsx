import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main id="main">
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {siteConfig.brand}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Producten bouwen en doorontwikkelen — van marktplaats tot B2B SaaS.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ik ben {siteConfig.name}, onafhankelijk developer en founder. Ik run meerdere
              producten parallel: ontwerp, bouw, ship en onderhoud — pragmatisch, zonder
              onnodige complexiteit.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/#werk" size="lg">
                Bekijk werk
              </Button>
              <Button href="/#contact" variant="secondary" size="lg">
                Neem contact op
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section
        id="werk"
        title="Use cases"
        description="Geen tech-cv, maar concrete situaties: welk probleem, wat is gebouwd, wat het oplevert."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} className="h-full" />
            </FadeIn>
          ))}
        </div>
        {rest.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((project) => (
              <FadeIn key={project.slug}>
                <ProjectCard project={project} className="h-full" />
              </FadeIn>
            ))}
          </div>
        )}
      </Section>

      <Section
        id="over"
        title="Hoe ik werk"
        description="Eén founder, meerdere productlijnen — dat vraagt om keuzes maken en snel schakelen."
        narrow
      >
        <FadeIn>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Ik werk het liefst end-to-end: van eerste gesprek met gebruikers tot deploy en
              onderhoud. Geen grote teams, geen eindeloze roadmaps — wel duidelijke problemen
              en software die daar dagelijks tegenaan ligt.
            </p>
            <p>
              Meerdere producten naast elkaar houdt me scherp: wat schaalt hergebruik ik, wat
              uniek is krijgt een eigen lijn. Ik switch snel tussen marktplaats-denken,
              dealer-SaaS en niche B2B — altijd met hetzelfde uitgangspunt: iets laten werken
              voor echte gebruikers.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section
        id="contact"
        title="Contact"
        description="Een korte mail over je product, team of idee is genoeg om het gesprek te starten."
        className="border-t border-border bg-muted/30"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <ContactForm />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-sm text-muted-foreground lg:pt-2">
              <p>
                <span className="font-medium text-foreground">E-mail</span>
                <br />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">LinkedIn</span>
                <br />
                <a
                  href={siteConfig.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Profiel (placeholder-URL in content)
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </main>
  );
}
