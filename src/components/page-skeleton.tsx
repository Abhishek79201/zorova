import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface PageSkeletonProps {
  eyebrow?: string;
  title: string;
  description?: string;
  background?: "surface" | "bg";
  cta?: { href: string; label: string };
}

/**
 * Phase 1 placeholder. Establishes type scale, section rhythm, and shared
 * navigation chrome for every route. Replaced with real composition in
 * Phases 3 & 4.
 */
export function PageSkeleton({
  eyebrow,
  title,
  description = "We're putting the finishing touches on this page. Check back soon.",
  background = "surface",
  cta,
}: PageSkeletonProps) {
  return (
    <section
      className={cn(
        "px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32",
        background === "surface" ? "section-surface" : "section-bg",
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        {eyebrow && (
          <span className="type-body inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-light)] px-4 py-1.5 font-semibold text-[var(--color-primary)]">
            {eyebrow}
          </span>
        )}

        <h1 className="type-display text-balance text-[var(--color-text)]">
          {title}
        </h1>

        <p className="type-body text-pretty text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>

        {cta && (
          <Button asChild variant="accent" size="lg" className="mt-4">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        )}
      </div>
    </section>
  );
}
