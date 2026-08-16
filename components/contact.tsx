import type { ComponentType } from "react";
import { Box, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type SocialIcon = ComponentType<{ className?: string }>;

const channels: {
  icon: SocialIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: "vmore2@binghamton.edu",
    href: "mailto:vmore2@binghamton.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (607) 595-9733",
    href: "tel:+16075959733",
  },
  { icon: MapPin, label: "Location", value: "Austin, Texas" },
];

const socials: {
  icon: SocialIcon;
  label: string;
  href: string;
}[] = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vrushketmore/",
  },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/vmore2" },
  {
    icon: Box,
    label: "HuggingFace",
    href: "https://huggingface.co/vrushket",
  },
  { icon: Mail, label: "Email", href: "mailto:vmore2@binghamton.edu" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Let’s Talk About Your Data"
          subtitle="Open to roles in AI/ML, data science, and business intelligence, and always up for a hard data problem."
        />

        <Reveal delay={100}>
          <Card className="relative mt-16 overflow-hidden rounded-3xl border-border/60 bg-card/80 p-6 shadow-none sm:p-12">
            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                  Reach out — I usually reply within a day.
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  Whether it’s a role, a research collaboration, or an idea for
                  an AI product, my inbox is open.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "noreferrer"
                      }
                      className={buttonVariants({
                        variant: "outline",
                        className:
                          "h-10 rounded-full border-border/60 bg-background/40 px-4 text-base font-medium hover:border-chart-1/40 hover:bg-chart-1/10 hover:text-foreground",
                      })}
                    >
                      <social.icon className="size-4" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {channels.map((channel) => {
                  const inner = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-chart-1">
                        <channel.icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs tracking-widest text-muted-foreground uppercase">
                          {channel.label}
                        </p>
                        <p className="mt-0.5 text-base font-medium text-foreground">
                          {channel.value}
                        </p>
                      </div>
                    </>
                  );
                  const cardClass =
                    "flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/40 p-4 transition-colors hover:border-border hover:bg-muted/60";
                  return channel.href ? (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className={cardClass}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={channel.label} className={cardClass}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
