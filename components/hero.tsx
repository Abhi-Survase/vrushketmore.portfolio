import { ArrowRight, Sparkles } from "lucide-react";
import WebThreads from "@/components/WebThreads";
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
        <div className="absolute inset-0 bg-chart-1/10 [mask-image:radial-gradient(ellipse_60%_45%_at_50%_45%,black_10%,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-28 text-center">
        <Badge
          variant="outline"
          className="gap-2.5 rounded-full border-border/60 bg-background/40 py-1.5 pr-4 pl-2.5 text-base text-foreground/90 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </Badge>

        <h1 className="mx-auto mt-8 max-w-4xl text-[clamp(2.5rem,10vw,4rem)] leading-[1.08] font-bold tracking-tight text-balance text-foreground min-[400px]:text-5xl md:text-6xl lg:text-7xl">
          Transforming complex data into{" "}
          <span className="text-gradient">intelligent solutions</span>
        </h1>

        <p className="mx-auto mt-6 flex items-center justify-center gap-2 text-xl font-medium text-foreground/90">
          <Sparkles aria-hidden="true" className="size-5 text-chart-1" />
          AI/ML Engineer &amp; Data Analyst
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed font-medium text-foreground/90">
          Building production-grade AI systems that learn, adapt, and deliver
          measurable impact — from multi-agent healthcare pipelines to
          LLM-powered analytics.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className={buttonVariants({
              size: "lg",
              className: "h-13 gap-2 rounded-full px-8 text-lg font-semibold",
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
      </div>

      <div
        aria-hidden
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          scroll
        </span>
        <div className="h-9 w-5 rounded-full border border-border p-1.5">
          <div className="mx-auto h-1.5 w-1 animate-bounce rounded-full bg-chart-1" />
        </div>
      </div>
    </section>
  );
}
