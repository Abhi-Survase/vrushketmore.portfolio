import { Cpu, GraduationCap, type LucideIcon } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const highlights: {
  icon: LucideIcon;
  title: string;
  text: string;
  meta: string;
}[] = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "MS Computer Science @ SUNY Binghamton",
    meta: "3.87/4.0 GPA, all A’s in AI/ML coursework",
  },
  {
    icon: Cpu,
    title: "Expertise",
    text: "ML/AI · Data Engineering · ETL",
    meta: "Python, SQL, Airflow, TensorFlow, PyTorch",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Crafting Intelligence From Data" />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-xl leading-relaxed text-foreground/90">
              I’m a{" "}
              <strong className="font-semibold text-foreground">
                AI/ML engineer &amp; data analyst
              </strong>{" "}
              graduating{" "}
              <strong className="font-semibold text-foreground">
                December 2026
              </strong>{" "}
              with my MS in Computer Science from Binghamton University (GPA:{" "}
              <strong className="font-semibold text-foreground">3.87</strong>),
              currently based in Austin, TX.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My passion lies at the intersection of Machine Learning, Data
              Science, and Generative AI. I’ve built systems like TheraMind, a
              multi-agent healthcare pipeline achieving 92% recall and 99.7%
              specificity, acquired by NASA-affiliated firm SOSTOS.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <Card
                  key={highlight.title}
                  className="gap-0 rounded-2xl border-border/70 bg-card/80 p-5 shadow-none"
                >
                  <h3 className="font-heading flex items-center gap-2 text-base font-semibold text-foreground">
                    <highlight.icon
                      aria-hidden="true"
                      className="size-4 text-chart-1"
                    />
                    {highlight.title}
                  </h3>
                  <p className="mt-1 text-base text-muted-foreground">
                    {highlight.text}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground/70">
                    {highlight.meta}
                  </p>
                </Card>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/vrushketmore/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                className:
                  "mt-8 h-12 rounded-full border-border/70 bg-transparent px-6 text-base hover:border-chart-1/40 hover:bg-chart-1/10 hover:text-foreground",
              })}
            >
              <LinkedinIcon className="size-4" />
              Connect on LinkedIn
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 font-mono text-[15px] shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted-foreground">
                  vrushket@ml-engineer ~
                </span>
              </div>
              <div className="space-y-3 p-5 text-[13px] leading-relaxed">
                <p>
                  <span className="text-chart-1">$</span>{" "}
                  <span className="text-foreground">whoami</span>
                </p>
                <p className="text-muted-foreground">
                  vrushket — AI/ML engineer &amp; data analyst
                </p>
                <p>
                  <span className="text-chart-1">$</span>{" "}
                  <span className="text-foreground">focus --list</span>
                </p>
                <p className="text-muted-foreground">
                  production AI systems · multi-agent pipelines · GenAI · ETL
                </p>
                <p>
                  <span className="text-chart-1">$</span>{" "}
                  <span className="text-foreground">cat location.txt</span>
                </p>
                <p className="text-muted-foreground">
                  Austin, TX · MS CS @ Binghamton · Dec 2026
                </p>
                <p>
                  <span className="text-chart-1">$</span>{" "}
                  <span className="animate-pulse-soft inline-block text-chart-3 motion-reduce:animate-none">
                    ▌
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
