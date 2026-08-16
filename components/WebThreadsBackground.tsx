"use client";

import { useEffect, useState } from "react";
import WebThreads, { type WebThreadsProps } from "@/components/WebThreads";

const DESKTOP_PROPS: WebThreadsProps = {
  color1: "#6366F1", // indigo-500 → var(--chart-1)
  color2: "#A78BFA", // violet-400 → var(--chart-2)
  color3: "#FFFFFF",
  speed: 0.2,
  threadCount: 6,
  frequency: 5,
  spread: 0.18,
  taper: 1.0,
  position: 0.55,
  fanMode: "center",
  glow: 0.03,
  falloff: 0.5,
  thickness: 1.2,
  brightness: 0.55,
  opacity: 0.85,
  mirror: true,
  grain: true,
  grainIntensity: 0.04,
  mouseInteraction: true,
  mouseStrength: 0.35,
};

const MOBILE_PROPS: WebThreadsProps = {
  ...DESKTOP_PROPS,
  // Move the fan core up behind the name/role and anchor it to the left
  // edge so it stays away from the centered paragraph, and dim it.
  position: 0.28,
  fanMode: "left",
  brightness: 0.35,
  opacity: 0.6,
};

/**
 * Renders the WebThreads background with viewport-adaptive values:
 * the desktop fan (centered) and a dimmer, left-anchored fan on mobile
 * so the hero paragraph stays legible.
 */
export function WebThreadsBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reducedMotion) return null;

  return <WebThreads {...(isMobile ? MOBILE_PROPS : DESKTOP_PROPS)} />;
}
