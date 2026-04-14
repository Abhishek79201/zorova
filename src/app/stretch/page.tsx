import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Mandala,
  StretchFigure,
  WaveLine,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Stretch Therapy",
  description:
    "Guided one-on-one stretch therapy at home — for athletes, desk workers, parents, and seniors. Unlock effortless movement and lasting mobility with certified personal trainers.",
  alternates: { canonical: "/stretch" },
};

const benefitGrid = [
  { t: "Flexibility · Injury Prevention", d: "Prevent injuries by improving flexibility and full-range mobility." },
  { t: "Circulation & Posture", d: "Enhance circulation and posture for better overall health." },
  { t: "Stress Relief", d: "Reduce stress and promote relaxation through sustained practice." },
  { t: "Relaxation", d: "Arrive at a state of release — the nervous system softens, the body follows." },
  { t: "Muscle Recovery", d: "Support muscle recovery after training, long walks, or long commutes." },
  { t: "Balance & Coordination", d: "Sharpen proprioception for better control on and off the mat." },
  { t: "Joint Health & Energy Flow", d: "Promote joint health and sustained energy throughout the body." },
  { t: "Better Performance", d: "Boost performance in physical, mental, and creative work." },
  { t: "Mind–Body Connection", d: "Cultivate a more alert, more honest conversation between mind and body." },
  { t: "Quality Sleep", d: "Improve sleep quality and overall restfulness — night after night." },
  { t: "Pain Management", d: "Manage and alleviate everyday pain through guided practice." },
  { t: "Functional Movement", d: "Move through your day — stairs, lifts, chairs — without thinking about it." },
];

const audiences = [
  {
    label: "The Athlete",
    body: "Dynamic stretching, PNF, and active recovery protocols around your training.",
  },
  {
    label: "The Desk Worker",
    body: "Undo the eight-hour sit. Open hips, shoulders, and posterior chain.",
  },
  {
    label: "The Parent",
    body: "Low-effort, high-return routines you can fit between school runs.",
  },
  {
    label: "The Senior",
    body: "Patient, supported stretches for mobility, balance, and confident movement.",
  },
] as const;

export default function StretchPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="surface" bleed grain>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow>Stretch Therapy · One-on-One</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)]">
                The art of{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  effortless
                </span>{" "}
                movement.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
                Stretching helps your body find its natural flow again. With
                expert techniques, we help you improve flexibility, release
                built-up tension, and feel lighter, calmer, and more at ease.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact">Book a Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#benefits">See the Benefits</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-cream)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 text-[var(--color-saffron)]/20"
              >
                <Mandala className="h-full w-full spin-reverse" />
              </div>
              <StretchFigure
                aria-hidden="true"
                className="absolute inset-0 m-auto h-3/4 w-3/4 text-[var(--color-primary)]"
              />
              <WaveLine
                aria-hidden="true"
                className="absolute bottom-6 left-0 h-10 w-full text-[var(--color-saffron)]"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ───────── BENEFIT GRID ───────── */}
      <Section tone="cream" grain id="benefits">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="01" className="justify-center">
            Why Stretch
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              Twelve quiet wins — built, one session at a time.
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.055}
        >
          {benefitGrid.map((b, i) => (
            <StaggerItem key={b.t}>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-[var(--color-divider)] py-6">
                <span className="font-[var(--font-serif)] text-3xl italic leading-none text-[var(--color-saffron)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                  {b.t}
                </h3>
                <span aria-hidden="true" />
                <p className="text-[var(--color-muted)]">{b.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── STRETCH FOR EVERYBODY ───────── */}
      <Section tone="ink" grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] text-white/10"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>

        <div className="relative grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02" className="text-white/70">
              Stretching for Everybody
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-white">
                From the desk to the{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  marathon
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-white/75 sm:text-lg">
                Whether you're an athlete or someone spending long hours at a
                desk, our tailored stretching sessions meet you where your body
                actually lives.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 lg:col-span-7 sm:grid-cols-2" gap={0.08}>
            {audiences.map((a) => (
              <StaggerItem key={a.label}>
                <div className="group h-full rounded-[var(--radius-lg)] bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <h3 className="font-[var(--font-serif)] text-xl font-bold text-white">
                    {a.label}
                  </h3>
                  <p className="mt-2 text-white/70">{a.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── TRAINERS ───────── */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow number="03">Your Trainer</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)]">
                Coached — not{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  left alone with a YouTube video
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                At Zorova Stretch, every trainer is handpicked for expertise,
                commitment, and a real sense of care. They hold certifications
                from accredited programs — the baseline for knowledge, safety,
                and the quiet art of the right cue at the right moment.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" gap={0.08}>
              {[
                ["Accredited Certifications", "Recognised programs in mobility, PNF, and corrective exercise."],
                ["Assessment-First", "Your first session begins with a posture & movement screen."],
                ["Tailored Every Visit", "No canned routines — progression is tracked and personalised."],
                ["Home-Friendly Kit", "Straps, foam roller, block — brought by the trainer."],
              ].map(([h, b]) => (
                <StaggerItem key={h}>
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-divider)] bg-[var(--color-cream)] p-5">
                    <h3 className="type-subheading text-[var(--color-ink)]">
                      {h}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {b}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[image:var(--gradient-dusk)]"
              />
              <StretchFigure
                aria-hidden="true"
                className="absolute inset-0 m-auto h-3/4 w-3/4 text-[var(--color-saffron-soft)]"
              />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 p-5 text-white backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-saffron-soft)]">
                  Core Credential
                </p>
                <p className="mt-1 font-[var(--font-serif)] italic">
                  NASM / ACE / ISSA — or equivalent, always verified.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ───────── CTA ───────── */}
      <Section tone="warm" grain>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-[var(--font-serif)] text-4xl font-bold leading-tight text-[var(--color-ink)] sm:text-5xl">
              One session.{" "}
              <span className="serif-italic text-[var(--color-primary)]">
                A body that says thank you.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">Book Stretch Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/massages">Try Massage Instead</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
