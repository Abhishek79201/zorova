import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  DottedArc,
  EnergyIcon,
  HandTouch,
  HeartPulseGlyph,
  LeafBranch,
  Mandala,
  MobilityIcon,
  PainReliefIcon,
  PerformanceIcon,
  RecoverFasterIcon,
  StrengthIcon,
  YouthGlyph,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Recovery Sessions",
  description:
    "Professional recovery sessions — Full Body Recovery, Muscle Recovery Therapy, Sports Recovery, and Stress Relief Recovery. Clinical protocols, delivered at home or in centre.",
  alternates: { canonical: "/massages" },
};

const sessions = [
  {
    name: "Full Body Recovery Session",
    kind: "Core · Every Body",
    mins: "60 / 90 min",
    body: "A complete, clinical-grade body recovery — targeted at circulation, full-range muscle release, and total-load balancing.",
    Icon: RecoverFasterIcon,
  },
  {
    name: "Muscle Recovery Therapy",
    kind: "Therapeutic · Deep Work",
    mins: "60 / 75 min",
    body: "Deep-tissue and trigger-point work for chronic tension, sports load, and post-injury rehabilitation. Focused. Measured. Effective.",
    Icon: HandTouch,
  },
  {
    name: "Stress Relief Recovery",
    kind: "Nervous-System · Restorative",
    mins: "45 / 60 min",
    body: "Nervous-system-focused recovery for burnout, poor sleep, and stress-driven body pain. Calm. Supported. Genuinely restorative.",
    Icon: HeartPulseGlyph,
  },
  {
    name: "Sports Recovery Session",
    kind: "Performance · Athletes",
    mins: "60 min",
    body: "Pre- and post-training work. Trigger-point release, assisted mobility, and circulation flush — the same protocols pro teams use.",
    Icon: PerformanceIcon,
  },
  {
    name: "Prenatal & Postnatal Recovery",
    kind: "Women's Care · Certified",
    mins: "60 min",
    body: "Side-lying, cushion-supported recovery for expectant and new mothers. Carefully screened, safely delivered, deeply needed.",
    Icon: EnergyIcon,
  },
  {
    name: "Senior Mobility Recovery",
    kind: "Senior Care · Gentle",
    mins: "45 / 60 min",
    body: "Patient, supported work for stiff joints, circulation, and confident daily movement. Arthritis-safe techniques, dignified pace.",
    Icon: MobilityIcon,
  },
] as const;

const outcomes = [
  { label: "✔ Reduce Pain", Icon: PainReliefIcon },
  { label: "✔ Recover Faster", Icon: RecoverFasterIcon },
  { label: "✔ Improve Mobility", Icon: MobilityIcon },
  { label: "✔ Increase Strength", Icon: StrengthIcon },
  { label: "✔ Better Performance", Icon: PerformanceIcon },
  { label: "✔ Better Daily Energy", Icon: EnergyIcon },
] as const;

const audiences = [
  {
    v: "athlete" as const,
    name: "Athletes",
    subtitle: "Performance · Longevity",
    body: "Pre-season screening, in-season recovery, and post-competition work. Less downtime, fewer injuries, longer careers.",
  },
  {
    v: "professional" as const,
    name: "Working Professionals",
    subtitle: "Posture · Stress · Energy",
    body: "Undo the eight-hour sit. Release tech neck, shoulder load, and sleep-sabotaging stress — without taking a day off.",
  },
  {
    v: "women" as const,
    name: "Women at Every Stage",
    subtitle: "Prenatal · Postnatal · Every Week",
    body: "A women-first platform. Female therapists. Verified homes. Care tuned for cycles, prenatal needs, and postpartum recovery.",
  },
  {
    v: "family" as const,
    name: "Families & Seniors",
    subtitle: "Childhood to Old Age",
    body: "Sessions for children, parents, and grandparents — one platform, one standard, every generation accounted for.",
  },
];

export default function RecoveryPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="cream" grain bleed>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[520px] text-[var(--color-saffron)]/20"
        >
          <Mandala className="h-full w-full spin-slow" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow>Recovery Sessions · Body Care</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
                Recovery that{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  rebuilds you
                </span>{" "}
                — not just relaxes you.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
                This is not a spa service. Every Zorova session is an
                engineered recovery protocol — clinical, measured, and tuned
                to the body it meets. At your home, your workplace, or our
                centre.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact?intent=book">Book Recovery Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#sessions">View all sessions</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[image:var(--gradient-dusk)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 text-white/20"
                >
                  <Mandala className="h-full w-full spin-slower" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10 text-center text-white">
                  <YouthGlyph className="h-28 w-28 text-[var(--color-saffron-soft)] breathe" />
                  <p className="font-[var(--font-serif)] text-2xl italic leading-snug">
                    &ldquo;Results, not just relaxation. Recovery you can
                    measure in a better tomorrow.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
            <LeafBranch
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-4 h-28 w-52 text-[var(--color-saffron)]/80"
            />
          </div>
        </div>
      </Section>

      {/* ───────── OUTCOMES STRIP ───────── */}
      <Section tone="surface">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="01" className="justify-center">
            Outcomes, not indulgences
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
              Six measurable changes —{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                in the first few sessions.
              </span>
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.055}
        >
          {outcomes.map((o) => (
            <StaggerItem key={o.label}>
              <div className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-[var(--color-cream)] p-5 transition-all hover:border-[var(--color-saffron)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-saffron)]">
                  <o.Icon className="h-6 w-6" />
                </div>
                <p className="font-[var(--font-serif)] text-lg font-bold text-[var(--color-ink)]">
                  {o.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── SESSIONS ───────── */}
      <Section tone="bg" grain id="sessions">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="02" className="justify-center">
            Our Sessions
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-6 text-[var(--color-ink)]">
              A protocol matched to your body —{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                not the other way around.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="type-body mt-5 text-[var(--color-muted)]">
              Your therapist arrives with clean linens, warm oils, a portable
              table, and the right protocol for where your body is today.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.08}
        >
          {sessions.map((t) => (
            <StaggerItem key={t.name}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-saffron-light)] text-[var(--color-saffron)]">
                    <t.Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {t.mins}
                  </span>
                </div>
                <h3 className="mt-6 font-[var(--font-serif)] text-2xl font-bold text-[var(--color-ink)]">
                  {t.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-saffron)]">
                  {t.kind}
                </p>
                <p className="mt-4 text-[var(--color-muted)]">{t.body}</p>
                <Link
                  href="/contact?intent=book"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-saffron)]"
                >
                  Book Recovery Session
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── HOW WE TUNE ───────── */}
      <Section tone="ink" grain>
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="03" className="text-white/70">
              How we tune every session
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-white sm:text-[2.5rem]">
                Clinical assessment first.{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  Every visit.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-white/70 sm:text-lg">
                Before we touch the body, we read it. Pressure, pace, range
                of motion, soft-tissue state, recent load — each is measured
                and the session is tuned accordingly. Every visit. No
                canned routines.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
              Who we work with
            </p>
            <Stagger className="mt-5 grid gap-4" gap={0.08}>
              {audiences.map((d) => (
                <StaggerItem key={d.v}>
                  <div className="flex items-start gap-5 rounded-[var(--radius-lg)] bg-white/[0.04] p-6 backdrop-blur-sm">
                    <div className="text-[var(--color-saffron-soft)]">
                      <RecoverFasterIcon className="h-10 w-10" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-[var(--font-serif)] text-2xl font-bold text-white">
                          {d.name}
                        </h3>
                        <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                          {d.subtitle}
                        </span>
                      </div>
                      <p className="mt-2 text-white/75">{d.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
              The clinical screen — four assessments
            </p>
            <Stagger
              className="mt-5 grid gap-3 sm:grid-cols-2"
              gap={0.06}
            >
              {[
                ["Posture screen", "Shoulder line, pelvic tilt, head-forward index"],
                ["Range of motion", "Active and passive range across 8 joints"],
                ["Soft-tissue palpation", "Trigger points, adhesions, chronic-load markers"],
                ["Recent-load review", "Training, travel, sleep, stress in the last 7 days"],
              ].map(([name, note]) => (
                <StaggerItem key={name}>
                  <div className="rounded-[var(--radius-md)] bg-white/[0.04] p-4 backdrop-blur-sm">
                    <p className="font-[var(--font-serif)] text-lg font-bold text-white">
                      {name}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{note}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* ───────── THERAPISTS / TRUST ───────── */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-accent-light)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 text-[var(--color-primary)]/15"
                >
                  <Mandala className="h-full w-full spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-10 text-[var(--color-primary)]">
                  <HandTouch className="h-48 w-48" />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 border-t border-[var(--color-primary)]/15 bg-white/80 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                    Who arrives at your door
                  </p>
                  <p className="mt-1 font-[var(--font-serif)] text-lg italic text-[var(--color-ink)]">
                    A clinically trained recovery therapist —
                    background-verified, certified, and respected for their
                    craft.
                  </p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <div>
            <SectionEyebrow number="04">Our Therapists</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)]">
                Trained hands.
                <br />
                <span className="serif-italic text-[var(--color-saffron)]">
                  Trusted hearts.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                At Zorova, your well-being is the highest priority. Every
                therapist on the platform is carefully selected for clinical
                skill, care, and commitment to an outcome — not a routine.
              </p>
            </Reveal>

            <Stagger className="mt-10 flex flex-col" gap={0.08}>
              {[
                ["Clinically certified", "Trained in recovery, mobility, and soft-tissue techniques — safety and skill, verified."],
                ["Background-verified", "Identity, address, and work history checks before the first session."],
                ["Continuously upskilled", "Quarterly workshops on new protocols, safety, and client care."],
                ["Supplies their own kit", "Sanitised linens, fresh oils, portable table — nothing for you to prepare."],
              ].map(([label, body]) => (
                <StaggerItem key={label}>
                  <div className="grid grid-cols-[0.9fr_1.6fr] items-baseline gap-6 py-5 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--color-divider)]">
                    <h3 className="font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                      {label}
                    </h3>
                    <p className="text-[var(--color-muted)]">{body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
        <DottedArc
          aria-hidden="true"
          className="mx-auto mt-14 h-12 w-full max-w-lg text-[var(--color-saffron)] opacity-60"
        />
      </Section>

      {/* ───────── CTA ───────── */}
      <Section tone="warm" grain>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-[var(--font-serif)] text-4xl font-bold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Take care of your body —{" "}
              <span className="serif-italic text-[var(--color-primary)]">
                it is your greatest asset.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg text-[var(--color-ink)]/75">
              Book a certified therapist in three taps. Reschedule free up to
              2 hours before.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
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
