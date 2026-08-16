"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";

/**
 * Floating chatbot widget. Same behavior and iframe target as the
 * original static site, restyled to the current project theme.
 */
export function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-5 z-[9999] sm:right-8 sm:bottom-8">
      {/* Floating button */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Chat with Vrushket's AI"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`group relative flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/40 transition-[transform,background-color] duration-200 ease-out hover:bg-primary/95 sm:size-[70px] ${
          open ? "scale-90" : "hover:scale-105"
        }`}
      >
        {/* Pulse ring */}
        <span
          aria-hidden
          className={`absolute inset-0 animate-ring-pulse rounded-full border-2 border-chart-1/50 motion-reduce:animate-none ${
            open ? "hidden" : ""
          }`}
        />
        <span className="relative block size-7" aria-hidden>
          <Bot
            className={`absolute inset-0 transition-[opacity,transform] duration-[150ms] ease-out motion-reduce:transition-none ${
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <X
            className={`absolute inset-0 transition-[opacity,transform] duration-[150ms] ease-out motion-reduce:transition-none ${
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </span>
        {/* Hover tooltip */}
        <span
          aria-hidden
          className={`absolute top-1/2 right-[85px] hidden -translate-y-1/2 translate-x-2.5 rounded-xl border border-border/60 bg-card/95 px-4 py-2.5 text-sm font-medium whitespace-nowrap text-foreground opacity-0 transition-all duration-300 sm:block group-hover:translate-x-0 group-hover:opacity-100 ${
            open ? "group-hover:opacity-0" : ""
          }`}
        >
          Chat with AI
        </span>
      </button>

      {/* Chat window */}
      <div
        aria-hidden={!open}
        inert={!open}
        className={`absolute right-0 bottom-[88px] flex h-[min(720px,calc(100dvh-8.5rem))] w-[min(440px,calc(100vw-30px))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/60 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open
            ? "translate-y-0 scale-100 opacity-100 shadow-2xl shadow-black/50 backdrop-blur-2xl"
            : "pointer-events-none translate-y-8 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center gap-3.5 border-b border-border/60 bg-transparent px-6 py-5">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary">
            <Bot className="size-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-lg font-semibold text-foreground">
              Chat with Vrushket&apos;s AI
            </h4>
            <span className="mt-1 flex items-center gap-2 text-xs font-medium text-emerald-500">
              <span
                aria-hidden
                className="size-2.5 rounded-full bg-emerald-500"
              />
              Online
            </span>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            className="ml-auto flex size-9 cursor-pointer items-center justify-center rounded-xl border border-border/60 bg-background/40 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Body */}
        <div className="min-h-0 flex-1 bg-transparent">
          <iframe
            src="https://vrushket-vrushket-assistant.hf.space"
            title="Chat with Vrushket's AI"
            className="h-full w-full border-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
