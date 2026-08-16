import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <Badge
          variant="outline"
          className="border-chart-1/30 bg-chart-1/10 px-3.5 py-1 text-xs font-semibold tracking-[0.2em] text-chart-1 uppercase"
        >
          {tag}
        </Badge>
        <h2 className="mt-5 text-4xl leading-[1.1] font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
