import * as React from "react";

import { cn } from "@/lib/cn";

type Tone = "surface" | "bg" | "cream" | "ink" | "warm";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  as?: "section" | "div" | "article";
  bleed?: boolean;
  grain?: boolean;
  containerClassName?: string;
  inner?: React.ReactNode;
};

const toneClass: Record<Tone, string> = {
  surface: "section-surface",
  bg: "section-bg",
  cream: "section-cream",
  ink: "section-ink",
  warm: "section-warm",
};

export function Section({
  tone = "surface",
  as: Tag = "section",
  bleed = false,
  grain = false,
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden",
        toneClass[tone],
        grain && "grain",
        bleed ? "" : "px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          bleed ? "" : "mx-auto w-full max-w-7xl",
          containerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

export function SectionEyebrow({
  children,
  className,
  number,
}: {
  children: React.ReactNode;
  className?: string;
  number?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-sm uppercase tracking-[0.22em]",
        className,
      )}
    >
      {number && (
        <span className="eyebrow-numeral text-xl not-italic">{number}</span>
      )}
      <span className="h-px w-8 bg-[var(--color-saffron)]" aria-hidden="true" />
      <span className="font-semibold">{children}</span>
    </div>
  );
}
