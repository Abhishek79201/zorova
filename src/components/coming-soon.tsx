"use client";

import Link from "next/link";
import * as React from "react";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  LeafBranch,
  Lotus,
  Mandala,
  WaveLine,
} from "@/components/illustrations";

type Preview = { t: string; b: string };

interface ComingSoonProps {
  eyebrow: string;
  headline: string;
  italic: string;
  lede: string;
  preview: Preview[];
  waitlistLabel: string;
  note?: string;
}

export function ComingSoon({
  eyebrow,
  headline,
  italic,
  lede,
  preview,
  waitlistLabel,
  note,
}: ComingSoonProps) {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="ink" bleed grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[520px] w-[520px] text-white/10"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>

        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionEyebrow className="text-white/70">{eyebrow}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
              {headline}{" "}
              <span className="serif-italic text-[var(--color-saffron-soft)]">
                {italic}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{lede}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <span className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-saffron-soft)]/40 bg-[var(--color-saffron-soft)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-saffron-soft)]">
              <span
                aria-hidden="true"
                className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-saffron-soft)]"
              />
              In development · launching soon
            </span>
          </Reveal>
        </div>
        <WaveLine
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-10 w-full text-white/10"
        />
      </Section>

      {/* ───────── PREVIEW ───────── */}
      <Section tone="cream" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="01" className="justify-center">
            A peek at what's coming
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              We're building it carefully — so it's worth the wait.
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {preview.map((p, i) => (
            <StaggerItem key={p.t}>
              <div className="group flex h-full flex-col bg-white p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
                <span className="font-[var(--font-serif)] text-4xl italic leading-none text-[var(--color-saffron)]">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                  {p.t}
                </h3>
                <p className="mt-3 text-[var(--color-muted)]">{p.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── WAITLIST ───────── */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02">Join the waitlist</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)]">
                Be first —{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  before we announce it anywhere else
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                Drop your details and we'll reach out personally the moment
                early access opens. {note}
              </p>
            </Reveal>
            <div className="mt-8 hidden lg:block">
              <LeafBranch className="h-20 w-56 text-[var(--color-saffron)]" />
            </div>
          </div>

          <Reveal delay={0.08} className="lg:col-span-7">
            <form
              className="grid gap-4 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-[var(--color-cream)] p-8 sm:p-10"
              aria-label={waitlistLabel}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input id="ws-name" label="Name" required />
                <Input id="ws-city" label="City" />
              </div>
              <Input id="ws-email" label="Email" type="email" required />
              <Input id="ws-phone" label="Phone / WhatsApp" type="tel" />
              <div>
                <label
                  htmlFor="ws-note"
                  className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  Anything specific you're hoping we'll build?
                </label>
                <textarea
                  id="ws-note"
                  rows={3}
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 py-3 text-[var(--color-ink)]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="accent"
                className="mt-2 w-full sm:w-auto"
              >
                {waitlistLabel} →
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>

      {/* ───────── CTA ───────── */}
      <Section tone="warm" grain>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Lotus className="mx-auto h-14 w-14 text-[var(--color-primary)] breathe" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-[var(--font-serif)] text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Meanwhile — the rest of Zorova is very much open.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?intent=book">Book Recovery Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/stretch">Try Mobility Therapy</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Input({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
      >
        {label}
        {required && (
          <span
            className="ml-1 text-[var(--color-saffron)]"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 text-[var(--color-ink)]"
      />
    </div>
  );
}
