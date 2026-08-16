import { ArrowRight, ArrowUpRight } from "lucide-react";
import WebThreads from "@/components/WebThreads";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "12+", label: "Projects Shipped" },
  { value: "2", label: "First-Author Papers" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* WebThreads canvas background (React Bits) */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <WebThreads
          color1="#6366F1" // indigo-500 → var(--chart-1)
          color2="#A78BFA" // violet-400 → var(--chart-2)
          color3="#FFFFFF"
          speed={0.2}
          threadCount={6}
          frequency={5}
          spread={0.18}
          taper={1.0}
          position={0.55}
          fanMode="center"
          glow={0.03}
          falloff={0.5}
          thickness={1.2}
          brightness={0.55}
          opacity={0.85}
          mirror
          grain
          grainIntensity={0.04}
          mouseInteraction
          mouseStrength={0.35}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-28 text-center">
        <Reveal delay={0}>
          <Badge
            variant="outline"
            className="gap-2.5 rounded-full border-border/60 bg-background/40 py-1.5 pr-4 pl-2.5 text-base text-foreground/90"
          >
            <span className="size-2 rounded-full bg-emerald-400" />
            Available for opportunities
          </Badge>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="font-heading mx-auto mt-8 text-[clamp(2.5rem,9vw,4rem)] leading-[1.05] font-bold tracking-tight text-balance text-foreground md:text-7xl">
            Vrushket More
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-5 text-2xl font-medium text-foreground/90">
            AI/ML Engineer &amp; Data Analyst
          </p>
        </Reveal>

        <Reveal delay={180}>
          <a
            href="https://doi.org/10.21203/rs.3.rs-6787930/v1"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-base text-foreground/90 backdrop-blur-md transition-colors hover:border-chart-1/40 hover:bg-background/60"
          >
            First author, TheraMind · npj Precision Oncology
            <ArrowUpRight aria-hidden="true" className="size-4 text-chart-1" />
          </a>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/85">
            I build production-grade AI systems that learn, adapt, and deliver
            measurable impact, from multi-agent healthcare pipelines to
            LLM-powered analytics.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className={buttonVariants({
                size: "lg",
                className:
                  "h-13 gap-2 rounded-full bg-primary/95 px-8 text-lg font-semibold backdrop-blur-md hover:bg-primary",
              })}
            >
              View My Work
              <ArrowRight
                aria-hidden="true"
                className="transition-transform group-hover/button:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "h-13 rounded-full border-border/70 bg-transparent px-8 text-lg font-semibold hover:bg-accent/40",
              })}
            >
              Get In Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="mx-auto mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-border/70">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 px-2 text-center"
              >
                <span className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
                  {stat.value}
                </span>
                <span className="text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          scroll
        </span>
        <div className="h-9 w-5 rounded-full border border-border p-1.5">
          <div className="mx-auto h-1.5 w-1 rounded-full bg-chart-1" />
        </div>
      </div>
    </section>
  );
}
