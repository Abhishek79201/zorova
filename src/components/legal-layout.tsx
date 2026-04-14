import * as React from "react";

import { Reveal } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Mandala, WaveLine } from "@/components/illustrations";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  italic?: string;
  effective: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

export function LegalLayout({
  eyebrow,
  title,
  italic,
  effective,
  intro,
  sections,
}: LegalLayoutProps) {
  return (
    <>
      <Section tone="ink" bleed grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] text-white/10"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>
        <div className="relative mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <SectionEyebrow className="text-white/70">{eyebrow}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
              {title}{" "}
              {italic && (
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  {italic}
                </span>
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-saffron-soft)]">
              Effective · {effective}
            </p>
          </Reveal>
        </div>
        <WaveLine
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-10 w-full text-white/10"
        />
      </Section>

      <Section tone="cream" grain>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* TOC */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-saffron)]">
                On this page
              </p>
              <ul className="mt-4 space-y-2">
                {sections.map((s, i) => (
                  <li key={s.id} className="flex gap-3">
                    <span className="eyebrow-numeral text-xs pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-saffron)]"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* BODY */}
          <article className="prose-legal lg:col-span-8">
            <Reveal>
              <p className="font-[var(--font-serif)] text-xl italic leading-relaxed text-[var(--color-ink)]">
                {intro}
              </p>
            </Reveal>
            <hr className="my-10 border-t border-[var(--color-divider)]" />
            <div className="flex flex-col gap-12">
              {sections.map((s, i) => (
                <Reveal
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24"
                >
                  <span className="eyebrow-numeral text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-[var(--font-serif)] text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[var(--color-muted)] [&_p]:leading-relaxed [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_strong]:text-[var(--color-ink)]">
                    {s.body}
                  </div>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
