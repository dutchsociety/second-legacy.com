import Image from "next/image";
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
      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
          <FadeIn>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-8 flex items-center gap-4">
                  <Image
                    src="/brand/logo-mark.png"
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-2xl ring-1 ring-border shadow-sm"
                    priority
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                      {siteConfig.brand}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.name} · onafhankelijk bouwen
                    </p>
                  </div>
                </div>
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                  {siteConfig.tagline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Van marktplaats en B2B SaaS tot lokale ondernemers in Limburg — ik ontwerp,
                  bouw en onderhoud producten die in de praktijk moeten werken. Geen
                  template-showcase: elke opdracht begint bij het probleem.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/#werk" size="lg">
                    Bekijk opdrachten
                  </Button>
                  <Button href="/#contact" variant="secondary" size="lg">
                    Neem contact op
                  </Button>
                </div>
              </div>
              <aside
                className="max-w-sm rounded-2xl border border-border bg-card/80 p-6 text-sm leading-relaxed text-muted-foreground shadow-sm backdrop-blur-sm lg:mb-2"
              >
                <p className="font-medium text-foreground">Waar ik op inzet</p>
                <ul className="mt-3 space-y-2">
                  <li>Eigen producten (Campee, Kampio, Garage Pro)</li>
                  <li>Lokale sites met duidelijke opdrachtomschrijving</li>
                  <li>Studio-rollen met meerdere live deliverables</li>
                </ul>
              </aside>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section
        id="werk"
        title="Opdrachten & producten"
        description="Per case: context, opdracht, aanpak en resultaat. Klik door voor de volledige omschrijving — bij HELLO Labs staan alle deliverables apart benoemd."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.04}>
              <ProjectCard project={project} className="h-full" />
            </FadeIn>
          ))}
        </div>
        {rest.length > 0 && (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
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
          <div className="space-y-6 rounded-2xl border border-border bg-card/50 p-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Ik werk end-to-end: van eerste gesprek met gebruikers of opdrachtgevers tot deploy
              en onderhoud. Voor SaaS en marktplaatsen denk ik in flows en metrics; voor lokale
              ondernemers in vertrouwen, vindbaarheid en een site die zij niet dagelijks hoeven
              te beheren.
            </p>
            <p>
              Branding en typografie horen daarbij: rustig, leesbaar, professioneel. Geen
              AI-glitter — wel consistente identiteit, zoals je op deze site ziet met het
              Second Legacy-logo en een beperkt kleurpalet.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section
        id="contact"
        title="Contact"
        description="Een korte mail over je product, team of lokale opdracht is genoeg om het gesprek te starten."
        className="border-t border-border bg-muted/25"
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
                  className="text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
