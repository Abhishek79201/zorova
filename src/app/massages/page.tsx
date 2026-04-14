import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  DoshaGlyph,
  DottedArc,
  HandTouch,
  LeafBranch,
  Lotus,
  Mandala,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Massages",
  description:
    "Professional in-home massage therapy. Ayurvedic Abhyanga, deep tissue, Swedish, sports recovery and more — delivered by certified therapists to your door.",
  alternates: { canonical: "/massages" },
};

const benefits = [
  "Stress Reduction",
  "Enhanced Flexibility",
  "Boosted Immunity",
  "Improved Digestion",
  "Mental Clarity",
  "Better Circulation",
  "Radiant Skin",
  "Pain Relief",
  "Preventive Care",
  "Detoxification",
  "Deeper Sleep",
  "Mind–Body Connection",
  "Holistic Healing",
];

const types = [
  {
    name: "Abhyanga",
    kind: "Ayurvedic · Warm Oil",
    mins: "60 / 90 min",
    body: "Traditional full-body oil massage with rhythmic, dosha-balanced strokes. The grounding classic.",
    glyph: <Lotus className="h-10 w-10" />,
    tint: "text-[var(--color-saffron)]",
  },
  {
    name: "Deep Tissue",
    kind: "Therapeutic",
    mins: "60 / 75 min",
    body: "Targeted, firm-pressure work on chronic tension — shoulders, lower back, glutes, calves.",
    glyph: <HandTouch className="h-10 w-10" />,
    tint: "text-[var(--color-primary)]",
  },
  {
    name: "Swedish",
    kind: "Relaxation",
    mins: "60 / 90 min",
    body: "Long, flowing effleurage paired with gentle kneading. The gateway into regular practice.",
    glyph: <DoshaGlyph variant="kapha" className="h-10 w-10" />,
    tint: "text-[var(--color-sage)]",
  },
  {
    name: "Sports Recovery",
    kind: "Performance",
    mins: "60 min",
    body: "Pre- and post-training work. Trigger point release, assisted stretching, and circulation flush.",
    glyph: <DoshaGlyph variant="pitta" className="h-10 w-10" />,
    tint: "text-[var(--color-saffron)]",
  },
  {
    name: "Prenatal",
    kind: "Care · Certified",
    mins: "60 min",
    body: "Side-lying, cushion-supported massage for expectant mothers — safe, tender, deeply needed.",
    glyph: <DoshaGlyph variant="vata" className="h-10 w-10" />,
    tint: "text-[var(--color-accent)]",
  },
  {
    name: "Shirodhara",
    kind: "Ayurvedic · Head",
    mins: "45 / 60 min",
    body: "A steady stream of warm oil across the forehead. For racing minds and restless sleep.",
    glyph: <Lotus className="h-10 w-10" />,
    tint: "text-[var(--color-saffron)]",
  },
] as const;

const doshas = [
  {
    v: "vata" as const,
    name: "Vata",
    subtitle: "Air · Movement",
    body: "When you feel scattered, anxious, cold, or restless. Vata work is slow, warm, grounding — heavier oils, steady rhythm.",
    tint: "text-[var(--color-accent)]",
  },
  {
    v: "pitta" as const,
    name: "Pitta",
    subtitle: "Fire · Transformation",
    body: "When you run hot — irritable, driven, inflamed. Pitta work is cooling, unhurried, generous — lighter oils and softer touch.",
    tint: "text-[var(--color-saffron)]",
  },
  {
    v: "kapha" as const,
    name: "Kapha",
    subtitle: "Water · Stability",
    body: "When you feel heavy, foggy, sluggish. Kapha work is stimulating, brisk — dry strokes, invigorating aromatics.",
    tint: "text-[var(--color-sage)]",
  },
];

export default function MassagesPage() {
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
              <SectionEyebrow>Massages · Body · Mind · Soul</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
                Nurture yourself —{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  body, mind, and soul
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
                Massage isn't just relaxation — it's a holistic practice for
                nurturing every part of you. Your home, your workplace, or our
                center. The choice is yours.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact">Book a Therapist</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#types">View All Modalities</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative aspect-square overflow-hidden rounded-full border-[1.5px] border-[var(--color-saffron)]/40 bg-[var(--color-primary)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[image:var(--gradient-dusk)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 text-white/25"
                >
                  <Mandala className="h-full w-full spin-slower" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10 text-center text-white">
                  <Lotus className="h-16 w-16 text-[var(--color-saffron-soft)] breathe" />
                  <p className="font-[var(--font-serif)] text-2xl italic leading-snug">
                    &ldquo;The quiet craft of massage — ancient on one side,
                    clinical on the other — offers a timeless answer.&rdquo;
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

      {/* ───────── TYPES OF MASSAGES ───────── */}
      <Section tone="surface" id="types">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="01" className="justify-center">
            Modalities
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              A{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                practice
              </span>{" "}
              matched to your body — not the other way around.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="type-body mt-5 text-[var(--color-muted)]">
              Your therapist arrives with clean linens, warm oils, portable
              table, and the right technique for where your body is today.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.08}
        >
          {types.map((t) => (
            <StaggerItem key={t.name}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex items-start justify-between">
                  <div className={t.tint}>{t.glyph}</div>
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
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-saffron)]"
                >
                  Book this session
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── HOW WE TUNE A SESSION ───────── */}
      <Section tone="ink" grain>
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02" className="text-white/70">
              How we tune a session
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-white sm:text-[2.5rem]">
                Two languages for reading a body —{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  your therapist speaks both.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-white/70 sm:text-lg">
                Before your first session, your therapist takes five quiet
                minutes to understand where your body is. Pressure, pace, oil
                warmth, aromatics and technique are tuned accordingly — every
                single visit — using the ayurvedic dosha lens and the
                anatomical assessment used in modern sports therapy.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
              The ayurvedic lens — three constitutions
            </p>
            <Stagger className="mt-5 grid gap-4" gap={0.08}>
              {doshas.map((d) => (
                <StaggerItem key={d.v}>
                  <div className="flex items-start gap-5 rounded-[var(--radius-lg)] bg-white/[0.04] p-6 backdrop-blur-sm">
                    <div className={d.tint}>
                      <DoshaGlyph variant={d.v} className="h-14 w-14" />
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
              The clinical lens — four assessments
            </p>
            <Stagger
              className="mt-5 grid gap-3 sm:grid-cols-2"
              gap={0.06}
            >
              {[
                ["Posture screen", "Shoulder line, pelvic tilt, head-forward index"],
                ["Movement range", "Active and passive range across 8 joints"],
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

      {/* ───────── BENEFITS CLOUD ───────── */}
      <Section tone="cream" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="03" className="justify-center">
            What it changes
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              Small hour.{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                Long shadow.
              </span>
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mt-12 flex flex-wrap justify-center gap-3"
          gap={0.035}
        >
          {benefits.map((b) => (
            <StaggerItem key={b}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-divider)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[var(--color-saffron)]"
                />
                {b}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <DottedArc
          aria-hidden="true"
          className="mx-auto mt-14 h-12 w-full max-w-lg text-[var(--color-saffron)] opacity-60"
        />
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
                    A certified therapist — background-verified, trained, and
                    respected for their craft.
                  </p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <div>
            <SectionEyebrow number="04">Our Therapists</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)]">
                Trained hands.
                <br />
                <span className="serif-italic text-[var(--color-saffron)]">
                  Trusted hearts.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                At Zorova, your well-being is our highest priority. Every
                therapist on our platform is carefully selected for their
                expertise, care, and commitment to helping you feel your best.
              </p>
            </Reveal>

            <Stagger className="mt-10 flex flex-col" gap={0.08}>
              {[
                ["Certified", "Trained in professional massage techniques, ensuring safety and skill."],
                ["Background-verified", "Identity, address, and work history checks before the first session."],
                ["Continuously trained", "Quarterly workshops on new modalities, safety, and client care."],
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
      </Section>

      {/* ───────── CTA ───────── */}
      <Section tone="warm" grain>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-[var(--font-serif)] text-4xl font-bold leading-tight text-[var(--color-ink)] sm:text-5xl">
              A room. An hour.{" "}
              <span className="serif-italic text-[var(--color-primary)]">
                A different body.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg text-[var(--color-ink)]/75">
              Book a certified therapist in three taps. Reschedule free up to 2
              hours before.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/stretch">Or try Stretch →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
