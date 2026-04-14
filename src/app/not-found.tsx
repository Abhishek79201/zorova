import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Let's get you back on track.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-surface px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="type-subheading text-[var(--color-accent)]">404</span>
        <h1 className="type-display text-balance text-[var(--color-text)]">
          Page Not Found
        </h1>
        <p className="type-body text-pretty text-[var(--color-muted)]">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <Button asChild variant="accent" size="lg" className="mt-2">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </section>
  );
}
