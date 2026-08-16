import {
  siApacheairflow,
  siDocker,
  siGit,
  siLangchain,
  siPython,
  siPytorch,
  siSnowflake,
  siTensorflow,
  type SimpleIcon,
} from "simple-icons";
import {
  ChartColumn,
  ChartSpline,
  Cloud,
  Database,
  type LucideIcon,
} from "lucide-react";

type StackItem = { name: string; icon: SimpleIcon | LucideIcon };

const rows: { group: StackItem[]; animation: string }[] = [
  {
    group: [
      { name: "Python", icon: siPython },
      { name: "TensorFlow", icon: siTensorflow },
      { name: "PyTorch", icon: siPytorch },
      { name: "LangChain", icon: siLangchain },
    ],
    animation: "animate-marquee",
  },
  {
    group: [
      { name: "SQL", icon: Database },
      { name: "Apache Airflow", icon: siApacheairflow },
      { name: "AWS", icon: Cloud },
      { name: "Snowflake", icon: siSnowflake },
    ],
    animation: "animate-marquee-reverse",
  },
  {
    group: [
      { name: "Tableau", icon: ChartSpline },
      { name: "Power BI", icon: ChartColumn },
      { name: "Docker", icon: siDocker },
      { name: "Git", icon: siGit },
    ],
    animation: "animate-marquee-slow",
  },
];

function StackIcon({ icon }: { icon: SimpleIcon | LucideIcon }) {
  if ("path" in icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className="size-5" aria-hidden="true" />;
}

export function Marquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative border-y border-border/40 bg-muted/20 py-6"
    >
      <div className="mask-fade-x flex flex-col gap-y-6 overflow-hidden">
        {rows.map((row) => (
          <div
            key={row.animation}
            className={`flex w-max ${row.animation} motion-reduce:animate-none`}
          >
            {[0, 1].map((half) => (
              <div
                key={half}
                aria-hidden={half === 1}
                className="flex items-center"
              >
                {[0, 1, 2].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy > 0}
                    className="flex items-center"
                  >
                    {row.group.map((item) => (
                      <span
                        key={`${half}-${copy}-${item.name}`}
                        className="flex items-center gap-2.5 px-6 whitespace-nowrap text-base font-medium tracking-wide text-muted-foreground/70"
                      >
                        <StackIcon icon={item.icon} />
                        {item.name}
                        <span className="h-1 w-1 rounded-full bg-foreground/20" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
