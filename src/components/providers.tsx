"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Global motion providers.
 * - `LazyMotion + domAnimation` loads only transform/opacity features (≈5kb)
 *   so the full `motion` package isn't shipped to every page.
 * - `reducedMotion="user"` honours the OS-level `prefers-reduced-motion` flag.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
