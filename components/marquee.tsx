const stack = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "LangChain",
  "SQL",
  "Apache Airflow",
  "AWS",
  "Tableau",
  "Power BI",
  "Docker",
  "Git",
  "Snowflake",
];

export function Marquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative border-y border-border/60 bg-muted/30 py-5"
    >
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex items-center"
            >
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center whitespace-nowrap text-base font-medium tracking-wide text-muted-foreground"
                >
                  {tech}
                  <span className="mx-5 text-chart-1/40">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
