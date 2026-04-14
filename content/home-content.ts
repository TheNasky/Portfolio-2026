export type HeroHighlightLayer = {
  src: string;
  alt: string;
};

export const heroContent = {
  eyebrow: "VALENTIN BALLESTEROS",
  title: "Full Stack Engineer & Product Designer",
  description:
    "From architecture to interface, I build scalable, production-ready systems optimized for performance and real-world scale.",
  ctas: [
    { label: "Contact Me", href: "#contact", variant: "primary" as const },
    { label: "Download CV", href: "#", variant: "secondary" as const },
  ],
  highlightLayers: [
    { src: "", alt: "Hero project highlight image 1" },
    { src: "", alt: "Hero project highlight image 2" },
    { src: "", alt: "Hero project highlight image 3" },
  ] satisfies HeroHighlightLayer[],
};

export type PhilosophyItem = {
  number: string;
  label: string;
  title: string;
  description: string;
  points: string[];
};

export const philosophyItems: PhilosophyItem[] = [
  {
    number: "01",
    label: "Foundation",
    title: "Define the Problem Worth Solving",
    description: "Good engineering begins with clarity. Requirements, timelines, and constraints define what \"good\" actually means. Every architectural decision is grounded in product and business context.",
    points: [
      "Clarify scope, ownership, and success criteria",
      "Separate fixed constraints from negotiable ones",
      "Align technical direction with product reality",
    ],
  },
  {
    number: "02",
    label: "Architecture",
    title: "Design for the Team",
    description: "Architecture must scale with both the system and the people building it. Patterns and technologies are chosen based on stage, ecosystem maturity, and long-term maintenance cost.",
    points: [
      "Match complexity to product trajectory",
      "Evaluate tools by total cost, not novelty",
      "Optimize for maintainability and team continuity",
    ],
  },
  {
    number: "03",
    label: "Implementation",
    title: "Ship Clean. Stay Pragmatic.",
    description: "Production code should be clear, predictable, and resilient. Velocity and quality are aligned when unnecessary complexity is removed.",
    points: [
      "Favor readability over cleverness",
      "Treat development speed as a design constraint",
      "Build systems that are observable and deployable",
    ],
  },
];

export type SelectedWorkItem = {
  title: string;
  architecturalDescriptor: string;
  description: string;
  highlights: string[];
  authoritySignal?: string;
  image?: string;
  githubLink?: string;
  deployLink?: string;
};

export const selectedWorkItems: SelectedWorkItem[] = [
  {
    title: "AI Insights Platform",
    architecturalDescriptor: "Intelligent Text Analysis for Product Teams",
    description:
      "Web app that turns raw feedback, notes, or long-form text into summaries, keywords, categories, and suggestions, aimed at teams who want structured insight without a clunky workflow. Progress is easy to follow from start to finish, and there is a dedicated view to inspect how each analysis step runs when you want to go deeper.",
    highlights: [
      "Built an end-to-end flow from input text to structured results and recommendations",
      "Designed background processing so the interface stays responsive while heavier work runs asynchronously",
      "Added a transparency view for timelines, per-step timing, and decision detail for debugging and trust",
      "Implemented with Vue, NestJS, and a queue-backed worker model that mirrors production-style pipelines",
    ],
    authoritySignal:
      "Designed to pair a polished product surface with observable, debuggable internals",
    image: "/Projects/Insight app.png",
    githubLink: "https://github.com/TheNasky/Ai-Insights-RabbitMQ-VUE",
  },
  {
    title: "DamePelis",
    architecturalDescriptor: "Scalable Media Streaming Architecture",
    description:
      "Movie streaming platform powered by a complex web scraping pipeline for movies and subtitles, paired with a smooth and responsive animated React interface.",
    highlights: [
      "Built a scraping pipeline aggregating data from 10+ sources",
      "Designed a backend architecture optimized for high read traffic with aggressive caching",
      "Scales to 50k+ concurrent users with minimal infrastructure changes",
      "Implemented image caching with CDN delivery for fast asset loads",
      "Auto-updating catalog that refreshes on-demand from user requests (no manual maintenance)",
    ],
    authoritySignal: "Designed to scale horizontally with minimal infrastructure changes",
    image: "/Projects/Damepelis.png",
    githubLink: "https://github.com/TheNasky/DamePelis",
    deployLink: "https://damepelis.vercel.app/",
  },
  {
    title: "DevHive",
    architecturalDescriptor: "Collaborative Platform for Indie Game Development",
    description:
      "Platform for indie developers to form teams, share progress, and collaborate through profiles, project spaces, devlogs, and feedback loops.",
    highlights: [
      "Built profile and team-creation flows to match developers by role and goals",
      "Implemented project spaces with screenshots and threaded comments",
      "Added devlog publishing to support iterative progress updates",
    ],
    authoritySignal: "Designed to improve team formation and shipping velocity for small studios",
    image: "/Projects/Devhive.png",
    githubLink: "https://github.com/TheNasky",
    deployLink: "https://devhive-platform.vercel.app/",
  },
];

export type EngineeringCapabilitySection = {
  title: string;
  intro: string;
  points: string[];
};

export const engineeringCapabilitySections: EngineeringCapabilitySection[] = [
  {
    title: "Interfaces & Frontend Systems",
    intro: "Build responsive, high-performance interfaces with React & Next.js",
    points: [
      "Design smooth UI/UX with Tailwind and animation systems",
      "Optimize rendering, loading states, and perceived performance",
    ],
  },
  {
    title: "APIs, Services & Data Pipelines",
    intro: "Design REST APIs and scalable service architectures",
    points: [
      "Build data pipelines and scraping systems (multi-source aggregation)",
      "Handle authentication flows (OAuth, sessions, access control)",
    ],
  },
  {
    title: "Infrastructure, Deployment & Scaling",
    intro: "Design caching strategies for read-heavy systems",
    points: [
      "Deploy and manage production environments (AWS, GCP, Vercel, cloud)",
      "Build CI/CD pipelines and monitoring setups",
    ],
  },
];

export const techStackItems = [
  // Frontend
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  // Backend
  "Node.js",
  "NestJS / Express",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  // Infra
  "AWS",
  "Docker",
  "Vercel",
  "GitHub Actions",
  // Architecture
  "REST APIs",
  "WebSockets",
  "Microservices",
  "Event-driven",
  "Caching",
] as const;

export const contactContent = {
  headline: "Let's Build Something",
  description:
    "I enjoy building scalable systems, designing product architecture, and turning ideas into real applications. If you think I could be a good fit for your team or project, feel free to reach out.",
  availability:
    "Available for freelance, contract, or full-time opportunities.",
  email: "TheNasky@gmail.com",
  cards: [
    {
      label: "Email",
      value: "TheNasky@gmail.com",
      href: "mailto:TheNasky@gmail.com",
      external: false,
    },
    {
      label: "GitHub",
      value: "github.com/TheNasky",
      href: "https://github.com/TheNasky",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/valentin-ballesteros",
      href: "https://www.linkedin.com/in/valentin-ballesteros/",
      external: true,
    },
    {
      label: "Location",
      value: "Buenos Aires, Argentina",
      href: "",
      external: false,
    },
  ],
};
