import {
  Activity,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  Car,
  ChartLine,
  ChartPie,
  CloudSun,
  Eye,
  FileText,
  Headphones,
  Languages,
  Mountain,
  ScanEye,
  Share2,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PowerBIDrawer } from "@/components/power-bi-drawer";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  span: string;
  badge?: string;
  accent?: boolean;
  drawer?: boolean;
  metrics?: { value: string; label: string }[];
  links?: { href: string; label: string }[];
  subItems?: {
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  }[];
};

const projects: Project[] = [
  {
    title: "TheraMind",
    description:
      "Multi-agent healthcare analytics pipeline processing 10,000+ PubMed case reports for NSCLC clinical evidence. First author on Research Square preprint.",
    tags: ["Python", "LangChain", "NLP", "Multi-Agent"],
    icon: Activity,
    span: "sm:col-span-2 lg:col-span-4", // removed row-span-2
    badge: "Featured Research",
    accent: true,
    metrics: [
      { value: "92%", label: "Recall" },
      { value: "99.7%", label: "Specificity" },
      { value: "70%", label: "Faster" },
    ],
    links: [
      {
        href: "https://doi.org/10.21203/rs.3.rs-6787930/v1",
        label: "Read Paper",
      },
    ],
  },
  {
    title: "RuntimeX",
    description:
      'A production-grade AI agent harness solving the "black box" problem in LLM workflows. Built for total visibility, it features deterministic replay, time-travel forks, and a self-healing memory system.',
    tags: ["Python", "LLMOps", "ReAct Agents", "Telemetry"],
    icon: Share2,
    span: "lg:col-span-2",
    badge: "Agent Framework",
    metrics: [
      { value: "100%", label: "Deterministic" },
      { value: "O(1)", label: "Replay Cost" },
      { value: "Zero", label: "Token Waste" },
    ],
    links: [
      { href: "https://github.com/vmore2/runtimex", label: "View Code & Docs" },
    ],
  },
  {
    title: "Cadence",
    description:
      "End-to-end Generative AI pipeline that autonomously transforms raw ebooks into studio-quality audiobooks. Leverages Gemini 2.5 Pro for contextual dialogue attribution and OpenAI for dynamic, emotion-driven voice synthesis.",
    tags: ["LangGraph", "Gemini 2.5 Pro", "OpenAI TTS", "Streamlit"],
    icon: Headphones,
    span: "lg:col-span-2",
    badge: "Generative AI",
    metrics: [
      { value: "100%", label: "Automated" },
      { value: "5+", label: "Emotions Mapped" },
    ],
    links: [
      {
        href: "https://github.com/vmore2/Cadence-Audiobook-Generator.git",
        label: "View Code & Samples",
      },
    ],
  },
  {
    title: "Peeker AI",
    description:
      "AI-powered customer analytics platform that expanded paying customer base by 50% through intelligent ETL pipelines and personalization.",
    tags: ["Python", "ETL", "Analytics"],
    icon: Eye,
    span: "lg:col-span-2", // changed from 3 to 2
    metrics: [
      { value: "50%", label: "Growth" },
      { value: "93%", label: "Accuracy" },
    ],
    links: [{ href: "https://peeker.ai", label: "Live Demo" }],
  },
  {
    title: "VisionMate",
    description:
      "Universal scene understanding assistant fusing SAM 2, Depth Anything V2, and CLIP to answer spatial queries about images with per-object depth estimation and zero-shot classification.",
    tags: ["PyTorch", "SAM 2", "Depth Anything V2", "CLIP", "Gradio"],
    icon: ScanEye,
    span: "lg:col-span-2", // changed from 3 to 2
    links: [
      { href: "https://github.com/vmore2/VisionMate", label: "View Code" },
    ],
  },
  {
    title: "AgentRank + CogniHive",
    description:
      "A temporal memory stack: one model that knows when memories happened, one multi-agent system that routes queries to the right expert.",
    tags: ["Embeddings", "Multi-Agent", "PyPI", "HuggingFace"],
    icon: BrainCircuit,
    span: "sm:col-span-2 lg:col-span-6", // changed from 3 to 6
    subItems: [
      {
        title: "AgentRank",
        description: "First embedding model that knows when memories happened.",
        stats: [
          { value: "0.65", label: "MRR · +21% vs ada-002" },
          { value: "99.6%", label: "Recall@5 · +8% vs MiniLM" },
          { value: "99.9%", label: "Recall@10 · +5% vs BERT" },
        ],
      },
      {
        title: "CogniHive",
        description:
          "Transactive memory for AI teams. Routes queries to the right expert with who-knows-what tracking.",
        stats: [
          { value: "6+", label: "Integrations" },
          { value: "15×", label: "Token Save" },
        ],
      },
    ],
    links: [
      {
        href: "https://huggingface.co/vrushket/agentrank-base",
        label: "AgentRank Models",
      },
      {
        href: "https://huggingface.co/spaces/vrushket/cognihive",
        label: "CogniHive Demo",
      },
    ],
  },
  {
    title: "QSVAPS",
    description:
      "Quantum Superposition Verification for Agent Plan Safety. Uses Grover's quantum search algorithm to verify AI agent plans, finding constraint violations with O(√N) speedup.",
    tags: ["Qiskit", "Quantum Computing", "Python", "OpenAI"],
    icon: Atom,
    span: "lg:col-span-2", // changed from 3 to 2
    metrics: [
      { value: "O(√N)", label: "Speedup" },
      { value: "52", label: "Tests" },
    ],
    links: [
      { href: "https://github.com/vmore2/Quantum-AI", label: "View Code" },
      { href: "https://pypi.org/project/qsvaps/", label: "PyPI" },
    ],
  },
  {
    title: "FinFlow",
    description:
      "Automated financial intelligence pipeline using Apache Airflow. Fetches real-time stock & crypto prices, calculates technical indicators (RSI, Moving Averages), and generates trading signals.",
    tags: ["Apache Airflow", "Python", "ETL", "Astronomer"],
    icon: ChartLine,
    span: "lg:col-span-2",
    links: [{ href: "https://github.com/vmore2/Finflow", label: "View Code" }],
  },
  {
    title: "DermWise",
    description:
      "AI-powered dermatology diagnostic assistant leveraging deep learning for skin condition analysis and classification.",
    tags: ["Deep Learning", "Computer Vision", "Healthcare AI"],
    icon: Stethoscope,
    span: "lg:col-span-2",
    links: [
      { href: "https://github.com/Vrushket/DermWise", label: "View Code" },
    ],
  },
  {
    title: "Self-Driving Cars",
    description:
      "Real-time lane detection and vehicle classification system using Computer Vision with 98% precision and 97% recall.",
    tags: ["OpenCV", "SVM", "Computer Vision"],
    icon: Car,
    span: "lg:col-span-2",
    metrics: [
      { value: "98%", label: "Precision" },
      { value: "97%", label: "Recall" },
    ],
    links: [
      {
        href: "https://github.com/vmore2/Self-Driving-Car",
        label: "View Code",
      },
    ],
  },
  {
    title: "ClimateWise",
    description:
      "Data-driven climate analytics platform with predictive modeling for environmental pattern analysis and visualization.",
    tags: ["Data Analysis", "Visualization", "Python"],
    icon: CloudSun,
    span: "lg:col-span-2",
    links: [
      { href: "https://github.com/vmore2/ClimateWise", label: "View Code" },
    ],
  },
  {
    title: "Clash of Trails",
    description:
      "Interactive trail recommendation system using data science to match hikers with their perfect outdoor adventures.",
    tags: ["Recommendation", "Data Science", "Analytics"],
    icon: Mountain,
    span: "lg:col-span-2",
    links: [
      { href: "https://github.com/vmore2/Clash-of-Trails", label: "View Code" },
    ],
  },
  {
    title: "EN→FR Translation",
    description:
      "Fine-tuned MarianMT model for English to French translation, trained on KDE4 dataset for high-quality translations.",
    tags: ["Transformers", "NLP", "Fine-tuning"],
    icon: Languages,
    span: "lg:col-span-2",
    badge: "HuggingFace",
    links: [
      {
        href: "https://huggingface.co/vrushket/marian-finetuned-kde4-en-to-fr",
        label: "View Model",
      },
    ],
  },
  {
    title: "Cross-lingual Summarizer",
    description:
      "MT5-small model fine-tuned for English to Spanish summarization on Amazon reviews dataset.",
    tags: ["mT5", "Summarization", "Multilingual"],
    icon: FileText,
    span: "lg:col-span-2",
    badge: "HuggingFace",
    links: [
      {
        href: "https://huggingface.co/vrushket/mt5-small-finetuned-amazon-en-es",
        label: "View Model",
      },
    ],
  },
  {
    title: "Power BI Dashboards",
    description:
      "Interactive business intelligence dashboards: survey analytics on 630+ data professionals, salary insights, and programming preferences.",
    tags: ["Power BI", "Data Viz", "Analytics"],
    icon: ChartPie,
    span: "sm:col-span-2 lg:col-span-2", // changed from 4 to 2
    drawer: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of AI/ML innovations and data-driven solutions"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 4) * 60}
              className={`h-full ${project.span}`}
            >
              <Card
                className={`group relative h-full gap-0 rounded-2xl p-6 shadow-none transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-1 ${
                  project.accent
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

                <h3 className="font-heading mt-5 flex items-center gap-2 text-xl font-semibold text-foreground">
                  <project.icon
                    aria-hidden="true"
                    className="size-5 text-chart-1"
                  />
                  {project.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {/* removed flex-1 to prevent absorbing extra space */}
                  {project.description}
                </p>

                {project.subItems ? (
                  <div className="mt-5 grid gap-6 lg:grid-cols-2">
                    {/* two-column layout for sub-items on large screens */}
                    {project.subItems.map((item) => (
                      <div
                        key={item.title}
                        className="border-t border-border/60 pt-4 lg:border-t-0 lg:pt-0"
                      >
                        <h4 className="font-heading text-base font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                          {item.stats.map((stat) => (
                            <div key={stat.label}>
                              <dd className="text-lg font-semibold text-foreground">
                                {stat.value}
                              </dd>
                              <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                                {stat.label}
                              </dt>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                ) : null}

                {project.metrics ? (
                  <dl
                    className={`mt-5 grid gap-3 ${
                      project.metrics.length === 3
                        ? "grid-cols-3"
                        : "grid-cols-2"
                    }`}
                  >
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dd className="text-xl font-semibold text-foreground">
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

                {project.links || project.drawer ? (
                  <div className="mt-auto pt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {/* mt-auto pushes links to bottom of stretched cards */}
                    {project.drawer ? <PowerBIDrawer /> : null}
                    {project.links?.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 pt-1 text-base font-semibold text-chart-1 transition hover:text-chart-2"
                      >
                        {link.label}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ))}
                  </div>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
