import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  ChildGlyph,
  MobilityIcon,
  PerformanceIcon,
  ProfessionalGlyph,
  RecoverFasterIcon,
  SeniorGlyph,
  StrengthIcon,
  StretchFigure,
  YouthGlyph,
  Mandala,
  WaveLine,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Mobility Improvement Session",
  description:
    "Guided one-on-one Mobility Improvement Sessions — assisted stretching, joint mobility, and corrective movement work for athletes, professionals, parents, and seniors.",
  alternates: { canonical: "/stretch" },
};

const benefitGrid = [
  { t: "Full-Range Mobility", d: "Reach joints your body has quietly forgotten. Unlock range — hip, thoracic, shoulder, ankle." },
  { t: "Injury Prevention", d: "Catch asymmetries before they catch you. Lower-back, hamstring, and shoulder load — balanced." },
  { t: "Posture Correction", d: "Undo the eight-hour sit. Open the chest, settle the shoulders, lengthen the posterior chain." },
  { t: "Sports Performance", d: "Better depth in a squat. Cleaner stride. A serve with your full range — not a compromised one." },
  { t: "Muscle Recovery", d: "Active recovery protocols that flush circulation and release tissue load after training or long days." },
  { t: "Balance & Coordination", d: "Sharpen proprioception — better control on stairs, in sport, and in the everyday." },
  { t: "Joint Health & Longevity", d: "Smarter loading, more movement, fewer complaints. The stuff that keeps a body moving at 60, 70, 80." },
  { t: "Functional Strength", d: "Mobility plus stability plus control — the combination athletes train for, useful everywhere." },
  { t: "Pain Management", d: "Work the trigger points, un-stick the fascia, calm the nervous system. Genuine pain relief." },
  { t: "Stress Release", d: "The nervous system softens when the body lets go. The sleep afterwards is the best tell." },
  { t: "Energy Flow", d: "Promote circulation and joint health — sustained daily energy, not a caffeinated approximation of it." },
  { t: "Mind–Body Connection", d: "A more alert, more honest conversation between mind and body. You feel what's happening sooner." },
];

const audiences = [
  {
    label: "The Athlete",
    body: "Dynamic mobility, PNF, and active recovery protocols around your training schedule.",
    Icon: YouthGlyph,
  },
  {
    label: "The Working Professional",
    body: "Undo eight-hour sits. Open hips, thoracic spine, shoulders, posterior chain — then keep them there.",
    Icon: ProfessionalGlyph,
  },
  {
    label: "The Parent",
    body: "Low-effort, high-return mobility routines that fit between school runs and dinner prep.",
    Icon: ChildGlyph,
  },
  {
    label: "The Senior",
    body: "Patient, supported mobility work for hip and shoulder range, balance, and confident daily movement.",
    Icon: SeniorGlyph,
  },
] as const;

const outcomes = [
  { label: "✔ Improve Mobility", Icon: MobilityIcon },
  { label: "✔ Recover Faster", Icon: RecoverFasterIcon },
  { label: "✔ Increase Strength", Icon: StrengthIcon },
  { label: "✔ Better Performance", Icon: PerformanceIcon },
] as const;

export default function MobilityPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="surface" bleed grain>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow>
                Mobility Improvement Session · One-on-One
              </SectionEyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)]">
                A body that{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  does what you ask of it.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
                Assisted mobility, PNF, and corrective movement work — guided
                by a certified coach. Improve range, prevent injury, and
                reclaim the way your body moves. At home, at work, or in
                centre.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact?intent=book">Book Recovery Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#benefits">See the outcomes</Link>
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

      {/* ───────── OUTCOMES STRIP ───────── */}
      <Section tone="surface" className="!pt-0 sm:!pt-0">
        <Stagger
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          gap={0.04}
        >
          {outcomes.map((o) => (
            <StaggerItem key={o.label}>
              <div className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-[var(--color-cream)] p-4 transition-all hover:border-[var(--color-saffron)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-saffron)]">
                  <o.Icon className="h-5 w-5" />
                </div>
                <p className="font-[var(--font-serif)] text-base font-bold text-[var(--color-ink)]">
                  {o.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── BENEFIT GRID ───────── */}
      <Section tone="cream" grain id="benefits">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="01" className="justify-center">
            Why Mobility
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-6 text-[var(--color-ink)]">
              Twelve quiet wins —{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                built, one session at a time.
              </span>
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

      {/* ───────── MOBILITY FOR EVERYBODY ───────── */}
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
              Mobility for Every Body
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-white">
                From the desk to the{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  marathon
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-white/75 sm:text-lg">
                Whether you're an athlete or someone who spends long hours at
                a desk, our tailored mobility sessions meet you where your
                body actually lives.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 lg:col-span-7 sm:grid-cols-2" gap={0.08}>
            {audiences.map((a) => (
              <StaggerItem key={a.label}>
                <div className="group flex h-full flex-col gap-4 rounded-[var(--radius-lg)] bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <div className="h-14 w-14 text-[var(--color-saffron-soft)]">
                    <a.Icon className="h-full w-full" />
                  </div>
                  <h3 className="font-[var(--font-serif)] text-xl font-bold text-white">
                    {a.label}
                  </h3>
                  <p className="text-white/70">{a.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── COACHES ───────── */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow number="03">Your Coach</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)]">
                Coached — not{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  left alone with a YouTube video
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                Every Zorova Mobility coach is handpicked for expertise, care,
                and a real sense of craft. They hold accredited certifications
                — the baseline for knowledge, safety, and the quiet art of
                the right cue at the right moment.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" gap={0.08}>
              {[
                ["Accredited Certifications", "Recognised programs in mobility, PNF, and corrective exercise."],
                ["Assessment-First", "Every first session begins with a posture & movement screen."],
                ["Tailored Every Visit", "No canned routines — progression is tracked and personalised."],
                ["Home-Friendly Kit", "Straps, foam roller, block — brought by the coach."],
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
              Take care of your body —{" "}
              <span className="serif-italic text-[var(--color-primary)]">
                it is your greatest asset.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?intent=signup">Start Your Body Care</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact?intent=book">Book Recovery Session</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
