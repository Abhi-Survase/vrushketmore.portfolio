import { About } from "@/components/about";
import { Chatbot } from "@/components/chatbot";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
