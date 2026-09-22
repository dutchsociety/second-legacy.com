export type ProjectCategory = "product" | "saas" | "lokaal" | "studio";

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  product: "Eigen product",
  saas: "B2B SaaS",
  lokaal: "Lokale opdracht",
  studio: "Studio & meerdere deliverables",
};

export type ProjectDeliverable = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  summary: string;
  assignment: string;
  problem: string;
  solution: string;
  result: string;
  deliverables?: ProjectDeliverable[];
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
    category: "product",
    summary:
      "Consumentenplatform dat advertenties aggregeert, dealers benadert en content structureel uitrolt.",
    assignment:
      "Als founder en product lead de volledige lijn opzetten: van marktonderzoek en positionering tot platformarchitectuur, aggregatiepipelines, dealer-outreach en doorlopend onderhoud. Geen losse website, maar een marktplaats die dagelijks moet kloppen voor kopers, verkopers en dealers.",
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
    category: "saas",
    summary:
      "Voorraadbeheer en koppeling met de marktplaats, gebouwd voor dealers die geen tijd hebben voor losse tools.",
    assignment:
      "Het dealer-kant van het ecosysteem uitbouwen: inventarisatie met het team, workflows in kaart brengen en een SaaS-dashboard ontwerpen dat voorraad, status en publicatie naar Campee (en vergelijkbare kanalen) samenbrengt. Focus op dagelijks gebruik op de dealer-vloer, niet op feature-parades.",
    problem:
      "Dealers beheren voorraad in spreadsheets of verouderde systemen. Koppeling met online verkoopkanalen kost handwerk en fouten lopen op.",
    solution:
      "Een dealer-dashboard voor voorraad, status en publicatie naar Campee. Eén plek om te zien wat live staat en wat nog moet worden bijgewerkt.",
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
    category: "saas",
    summary:
      "Praktische software voor planning, klanten en werkorders — geen enterprise-ballast.",
    assignment:
      "Samen met garage-eigenaren het echte werkproces vertalen naar software: klanten en voertuigen, werkorders, planning en facturatie-light. Het product moest klein genoeg blijven om snel te shippen, maar stevig genoeg om ~25 garages structureel te laten werken.",
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
    category: "product",
    summary:
      "Zoekt relevante lokale bedrijven en ondersteunt gestructureerde cold-email outreach.",
    assignment:
      "Een intern product bouwen om lokale B2B-leads te vinden en outreach te structureren: bronnen koppelen, lijsten schoonhouden, berichten personaliseren met AI waar het helpt — zonder de menselijke toon te verliezen.",
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
    slug: "yes-beauty-beek",
    title: "YES! Beauty",
    tagline: "Schoonheidssalon · Beek",
    category: "lokaal",
    summary:
      "Website en online vindbaarheid voor een salon met vaste klanten en nieuwe bezoekers uit de regio.",
    assignment:
      "Opdracht: een representatieve website voor YES! Beauty in Beek — behandelingen helder uitlichten, vertrouwen uitstralen en contact laagdrempelig maken. Geen generiek beauty-template, maar typografie en ritme die passen bij een lokale salon die kwaliteit voorop zet.",
    problem:
      "Potentiële klanten zoeken online naar behandelingen en openingstijden, maar vonden vooral losse social posts of verouderde info.",
    solution:
      "Mobiel-eerst site met diensten, sfeer en duidelijke contactroutes. Contentstructuur zodat de salon zelf eenvoudig kan bijwerken.",
    result:
      "Een professionele online aanwezigheid in Beek: snel te begrijpen, makkelijk te delen, klaar om verder aan te vullen.",
    metrics: ["Lokaal: Beek en omgeving", "Diensten, sfeer en contact centraal"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "—",
    role: "Design & bouw",
    featured: true,
  },
  {
    slug: "mbrugman-schilderwerken-beek",
    title: "MBrugman Schilderwerken",
    tagline: "Schilderbedrijf · Beek",
    category: "lokaal",
    summary:
      "Bedrijfssite die vakmanschap en bereikbaarheid uitstraalt voor opdrachtgevers in de regio.",
    assignment:
      "Opdracht: MBrugman online serieus en benaderbaar neerzetten — werkgebied, type projecten en contact in één heldere paginastructuur. Doelgroep: huiseigenaren en bedrijven in Beek die eerst online oriënteren.",
    problem:
      "Mond-tot-mond werkte goed, maar zonder sterke site gingen opdrachten verloren aan concurrenten met een duidelijker online profiel.",
    solution:
      "No-nonsense site met referenties, werkgebied en direct contact. Snel ladend, ook op mobiel op de bouwplaats.",
    result:
      "Vindbare, professionele uitstraling; bezoekers zien meteen wat MBrugman doet en hoe ze een offerte kunnen vragen.",
    metrics: ["Werkgebied Beek", "Contact en vertrouwen centraal"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "—",
    role: "Design & bouw",
    featured: true,
  },
  {
    slug: "frits-jurrius-aerdt",
    title: "Frits Jurrius",
    tagline: "Lokaal ondernemerschap · Aerdt",
    category: "lokaal",
    summary:
      "Persoonlijke bedrijfssite: wie je bent, wat je doet en hoe klanten je bereiken.",
    assignment:
      "Opdracht: een betrouwbare online basis voor Frits Jurrius in Aerdt — persoonlijk genoeg om bij de ondernemer te passen, professioneel genoeg voor nieuwe klanten via Google of doorverwijzing.",
    problem:
      "Informatie over diensten en bereikbaarheid versnipperde over telefoon, kaartjes en losse berichten.",
    solution:
      "Rustige site met intro, aanbod en contact; opgezet om later eenvoudig uit te breiden.",
    result:
      "Eén centrale plek die vertrouwen geeft en makkelijk te delen is.",
    metrics: ["Lokaal verankerd: Aerdt", "Uitbreidbaar contentmodel"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "—",
    role: "Design & bouw",
    featured: true,
  },
  {
    slug: "hello-labs",
    title: "HELLO Labs",
    tagline: "Entertainment & crypto product studio",
    category: "studio",
    summary:
      "Tech director-rol over meerdere gelijktijdige productlijnen: games, live TV, voting, smart contracts en DeFi — geen enkele website, maar een portfolio aan live software.",
    assignment:
      "Bij HELLO Labs was de opdracht breder dan één site bouwen. Als tech director en lead engineer meerdere producten en formats parallel laten draaien: arcade- en survival-games shippen, live showformats ondersteunen met realtime systemen, community voting op schaal, smart contracts en een staking- en trading-ervaring voor gebruikers. Shared patterns waar mogelijk, aparte teams en releases waar nodig.",
    problem:
      "Een entertainmentmerk met games, shows, community en financiële flows tegelijk live — elk met eigen piekbelasting, compliance-druk en verwachting rond stabiliteit.",
    solution:
      "Per productlijn een duidelijke scope en ownership, met gedeelde engineering-standaarden. Doorlopend shippen in plaats van één big bang.",
    result:
      "Meerdere titels en platforms live gehouden naast elkaar; van casual games tot live voting en DeFi-frontends.",
    deliverables: [
      {
        title: "Doge Dash",
        description:
          "Arcade-game in het HELLO-ecosysteem: gameplay loops, releases en onderhoud naast andere titels.",
      },
      {
        title: "Dash of the Dead",
        description:
          "Survival/action-titel met eigen mechanics en release-cyclus; engineering en iteratie op live spelersfeedback.",
      },
      {
        title: "Killer Whales",
        description:
          "Showformat en merkuiting — digitale ondersteuning voor het programma en de community rond de show.",
      },
      {
        title: "Killer Whales Live",
        description:
          "Live-variant van het format: realtime componenten en tooling om uitzending en interactie te dragen.",
      },
      {
        title: "Realtime voting platform",
        description:
          "Stem- en participatiesysteem voor live momenten: lage latency, betrouwbaarheid tijdens piekbelasting.",
      },
      {
        title: "Smart contracts",
        description:
          "On-chain logica voor tokenomics, rewards en integraties binnen het HELLO-universum.",
      },
      {
        title: "Staking & DeFi trading webapp",
        description:
          "Gebruikersfrontend voor staking en trading flows — wallets, transacties en heldere UX rond complexe financiële acties.",
      },
    ],
    metrics: [
      "7+ afzonderlijke productlijnen / deliverables",
      "Games, live formats en Web3 parallel",
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
