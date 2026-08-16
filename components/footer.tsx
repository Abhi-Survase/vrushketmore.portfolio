import { GithubIcon } from "@/components/icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-black/40">
              VM
            </span>
            <div>
              <p className="text-base font-semibold text-foreground">
                Vrushket More
              </p>
              <p className="text-sm text-muted-foreground">
                AI/ML Engineer &amp; Data Analyst · Austin, TX
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-6" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/vmore2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground/70 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Vrushket More. All rights reserved.
          </p>
          <p>Turning data into published results.</p>
        </div>
      </div>
    </footer>
  );
}
