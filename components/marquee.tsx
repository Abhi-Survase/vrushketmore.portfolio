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
      className="relative border-y border-border/40 bg-muted/20 py-4"
    >
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex items-center"
            >
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center whitespace-nowrap text-base font-medium tracking-wide text-muted-foreground/70"
                >
                  {tech}
                  <span className="mx-6 h-1 w-1 rounded-full bg-foreground/20" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
