import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl leading-[1.1] font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
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
