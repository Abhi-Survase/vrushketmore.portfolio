"use client";

import { ArrowUpRight } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function PowerBIDrawer() {
  return (
    <Drawer swipeDirection="down">
      <DrawerTrigger className="inline-flex cursor-pointer items-center gap-1.5 pt-1 text-base font-semibold text-chart-1 transition hover:text-chart-2">
        View Gallery
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-lg font-semibold">
            Data Professional Survey Breakdown
          </DrawerTitle>
          <DrawerDescription className="mt-1 text-base leading-relaxed">
            Analysis of 630+ data professionals with salary insights and
            programming preferences.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 pb-4">
          <img
            src="/powerbi-survey-dashboard.png"
            alt="Power BI dashboard visualizing the Data Professional Survey Breakdown"
            className="max-h-[55dvh] w-auto max-w-full rounded-xl border border-border/60 object-contain"
          />
        </div>
        <DrawerFooter className="flex-row items-center justify-between">
          <a
            href="https://github.com/vmore2/Power-bi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-chart-1 transition hover:text-chart-2"
          >
            View Files on GitHub
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <DrawerClose className="cursor-pointer rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
