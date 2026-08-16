import {
  Activity,
  ArrowUpRight,
  ChartLine,
  Database,
  Eye,
  Headphones,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  tile: string;
  featured?: boolean;
  badge?: string;
  metrics?: { value: string; label: string }[];
  href?: string;
  linkLabel: string;
};

const projects: Project[] = [
  {
    title: "TheraMind",
    description:
      "Multi-agent healthcare analytics pipeline processing 10,000+ PubMed case reports for NSCLC clinical evidence. First author on Research Square preprint.",
    tags: ["Python", "LangChain", "NLP", "Multi-Agent"],
    icon: Activity,
    tile: "bg-[linear-gradient(135deg,var(--chart-1),var(--chart-2))]",
    featured: true,
    badge: "Featured Research",
    metrics: [
      { value: "92%", label: "Recall" },
      { value: "99.7%", label: "Specificity" },
      { value: "70%", label: "Faster" },
    ],
    href: "https://doi.org/10.21203/rs.3.rs-6787930/v1",
    linkLabel: "Read Paper",
  },
  {
    title: "Peeker AI",
    description:
      "AI-powered customer analytics platform that expanded the paying customer base by 50% through intelligent ETL pipelines and personalization.",
    tags: ["Python", "ETL", "Analytics"],
    icon: Eye,
    tile: "bg-[linear-gradient(135deg,var(--chart-3),var(--chart-1))]",
    metrics: [
      { value: "50%", label: "Growth" },
      { value: "93%", label: "Accuracy" },
    ],
    href: "https://peeker.ai",
    linkLabel: "Live Demo",
  },
  {
    title: "AgentRank + CogniHive",
    description:
      "The first temporal embedding model that knows when memories happened, powering a multi-agent memory system that routes queries to the right expert.",
    tags: ["Embeddings", "Multi-Agent", "PyPI", "HuggingFace"],
    icon: Database,
    tile: "bg-[linear-gradient(135deg,var(--chart-2),var(--chart-5))]",
    badge: "Open Source",
    metrics: [
      { value: "0.65", label: "MRR" },
      { value: "99.6%", label: "Recall@5" },
      { value: "15×", label: "Token Savings" },
    ],
    href: "https://huggingface.co/vrushket/agentrank-base",
    linkLabel: "View Models",
  },
  {
    title: "RuntimeX",
    description:
      "Production-grade AI agent harness solving the “black box” problem in LLM workflows — deterministic replay, time-travel forks, and a self-healing memory system.",
    tags: ["Python", "LLMOps", "ReAct Agents", "Telemetry"],
    icon: Share2,
    tile: "bg-[linear-gradient(135deg,var(--chart-4),var(--chart-3))]",
    metrics: [
      { value: "100%", label: "Deterministic" },
      { value: "O(1)", label: "Replay Cost" },
      { value: "Zero", label: "Token Waste" },
    ],
    href: "https://github.com/vmore2/runtimex",
    linkLabel: "View Code",
  },
  {
    title: "Cadence",
    description:
      "End-to-end GenAI pipeline that autonomously transforms raw ebooks into studio-quality audiobooks with emotion-driven voice synthesis.",
    tags: ["LangGraph", "Gemini 2.5 Pro", "OpenAI TTS", "Streamlit"],
    icon: Headphones,
    tile: "bg-[linear-gradient(135deg,var(--chart-5),var(--chart-2))]",
    metrics: [
      { value: "100%", label: "Automated" },
      { value: "5+", label: "Emotions Mapped" },
    ],
    href: "https://github.com/vmore2/Cadence-Audiobook-Generator",
    linkLabel: "View Code",
  },
  {
    title: "FinFlow",
    description:
      "Automated financial intelligence pipeline on Apache Airflow — real-time prices, technical indicators (RSI, moving averages), and trading signals.",
    tags: ["Apache Airflow", "Python", "ETL", "Astronomer"],
    icon: ChartLine,
    tile: "bg-[linear-gradient(135deg,var(--chart-3),var(--chart-4))]",
    href: "https://github.com/vmore2/Finflow",
    linkLabel: "View Code",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-chart-2/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="Portfolio"
          title={
            <>
              Featured <span className="text-gradient">Projects</span>
            </>
          }
          subtitle="A showcase of AI/ML innovations and data-driven solutions"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 3) * 80}
              className="h-full"
            >
              <Card
                className={`group relative h-full gap-0 rounded-2xl p-6 shadow-none transition duration-300 hover:-translate-y-1 ${
                  project.featured
                    ? "border-chart-1/30 bg-chart-1/[0.06] hover:border-chart-1/40"
                    : "border-border/80 bg-card/50 hover:border-foreground/20 hover:bg-card/80"
                }`}
              >
                {project.badge ? (
                  <Badge
                    variant="outline"
                    className="absolute top-5 right-5 border-chart-1/40 bg-chart-1/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-chart-1"
                  >
                    {project.badge}
                  </Badge>
                ) : null}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${project.tile}`}
                >
                  <project.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.metrics ? (
                  <dl
                    className={`mt-5 grid gap-3 rounded-xl border border-border/60 bg-muted/40 p-4 ${
                      project.metrics.length === 3
                        ? "grid-cols-3"
                        : "grid-cols-2"
                    }`}
                  >
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dd className="text-xl font-semibold text-gradient">
                          {metric.value}
                        </dd>
                        <dt className="mt-0.5 text-xs tracking-wide text-muted-foreground uppercase">
                          {metric.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-md border-border/60 bg-background/40 px-2.5 py-1 text-sm font-medium text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 pt-1 text-base font-semibold text-chart-1 transition hover:text-chart-2"
                  >
                    {project.linkLabel}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
