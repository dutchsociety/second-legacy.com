export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  metrics?: string[];
  tech: string[];
  year?: string;
  role?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "campee",
    title: "Campee",
    tagline: "Marktplaats voor campers en caravans",
    summary:
      "Consumentenplatform dat advertenties aggregeert, dealers benadert en content structureel uitrolt.",
    problem:
      "Kopers en verkopers van campers zitten verspreid over tientallen portals en dealer-sites. Geen overzicht, veel ruis, en dealers missen zicht op wat er online staat.",
    solution:
      "Een centrale marktplaats met geautomatiseerde aggregatie, gerichte dealer-outreach en een contentpijplijn die het aanbod vindbaar houdt — zonder het gevoel van een generieke advertentiesite.",
    result:
      "Een groeiend aanbod en een platform dat kopers sneller naar relevante advertenties leidt. Dealers krijgen meer zichtbaarheid zonder elk portaal apart te moeten bedienen.",
    metrics: [
      "Doorlopende aggregatie van externe bronnen",
      "Content- en outreachpijplijn in productie",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
    year: "2023–heden",
    role: "Founder & product",
    featured: true,
  },
  {
    slug: "kampio",
    title: "Kampio",
    tagline: "B2B SaaS voor camper- en caravandealers",
    summary:
      "Voorraadbeheer en koppeling met de marktplaats, gebouwd voor dealers die geen tijd hebben voor losse tools.",
    problem:
      "Dealers beheren voorraad in spreadsheets of verouderde systemen. Koppeling met online verkoopkanalen kost handwerk en fouten lopen op.",
    solution:
      "Een dealer-dashboard voor voorraad, status en publicatie naar Campee (en vergelijkbare kanalen). Eén plek om te zien wat live staat en wat nog moet worden bijgewerkt.",
    result:
      "Dealers werken sneller en consistenter. Minder dubbele invoer, minder gemiste advertenties op de marktplaats.",
    metrics: ["Integratie met marktplaats-workflows", "Ontworpen voor dagelijks dealergebruik"],
    tech: ["Next.js", "TypeScript", "API-integraties", "PostgreSQL"],
    year: "2024–heden",
    role: "Founder & product",
    featured: true,
  },
  {
    slug: "garage-pro",
    title: "Garage Pro",
    tagline: "Beheersysteem voor onafhankelijke garages",
    summary:
      "Praktische software voor planning, klanten en werkorders — geen enterprise-ballast.",
    problem:
      "Kleine garages zitten vast tussen papier, Excel en dure pakketten die niet passen bij hoe ze echt werken.",
    solution:
      "Een lichtgewicht garagebeheersysteem: klanten, voertuigen, werkorders en overzicht in één interface, afgestemd op teams van een paar monteurs.",
    result:
      "Ongeveer 25 actieve klanten die het dagelijks gebruiken. Minder administratie, meer tijd op de werkvloer.",
    metrics: ["~25 betalende garageklanten", "Langdurige retentie door pragmatische scope"],
    tech: ["Webapp", "TypeScript", "Relationele database"],
    year: "2022–heden",
    role: "Product & engineering",
    featured: true,
  },
  {
    slug: "leadfind-ai",
    title: "LeadFind AI",
    tagline: "Lokale leads en outreach-automatisering",
    summary:
      "Zoekt relevante lokale bedrijven en ondersteunt gestructureerde cold-email outreach.",
    problem:
      "Handmatig leads zoeken en e-mails personaliseren schaalt niet. Teams verspillen uren aan lijsten die snel verouderen.",
    solution:
      "Een workflow die lokale bronnen doorzoekt, leads rangschikt en outreach ondersteunt met templates en follow-up — zonder spammy bulk.",
    result:
      "Snellere pipeline-opbouw voor founders en kleine sales-teams die geen enterprise-stack willen.",
    tech: ["TypeScript", "AI-assisted workflows", "E-mail-integraties"],
    year: "2024",
    role: "Builder",
    featured: false,
  },
  {
    slug: "hello-labs",
    title: "HELLO Labs",
    tagline: "Entertainment & crypto product studio",
    summary:
      "Games, live formats en DeFi — van Doge Dash tot realtime voting en staking.",
    problem:
      "Een entertainmentmerk met meerdere live producten tegelijk: games, shows, community voting en financiële flows — allemaal met hoge verwachtingen op stabiliteit en tempo.",
    solution:
      "Doorlopend bouwen en shipen: arcade- en survival-games (Doge Dash, Dash of the Dead), showformats (Killer Whales, Killer Whales Live), een realtime voting platform, smart contracts en een staking- en DeFi-trading webapp.",
    result:
      "Meerdere gelanceerde titels en live experiences naast elkaar, met shared infra waar het kan en aparte productlijnen waar het moet.",
    metrics: [
      "Realtime voting en live formats",
      "Smart contracts & staking/trading webapp",
    ],
    tech: ["Solidity", "React/Next.js", "Realtime backends", "Web3"],
    year: "2021–2023",
    role: "Tech director & engineering",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
