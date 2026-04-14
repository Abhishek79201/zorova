import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  LeafBranch,
  Lotus,
  Mandala,
  SunMandala,
  WaveLine,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Zorova story — why we're normalising professional massage and spa culture in Indian society, and building trust-first wellness for every household.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    t: "Trust before scale",
    b: "We verify, train, and review — obsessively. Growth waits for trust, never the other way around.",
  },
  {
    t: "Craft over convenience",
    b: "An hour of real work, not a quick routine. Every therapist on Zorova takes their craft seriously.",
  },
  {
    t: "Respect, always",
    b: "For our clients, our therapists, and for the body itself. Nothing about wellness should ever feel transactional.",
  },
  {
    t: "Quiet technology",
    b: "Software should get out of the way of a treatment. We build tools that disappear into the session.",
  },
];

const timeline = [
  { year: "2023", t: "A living-room idea", b: "Founded around the question — why is professional touch therapy so hard to access in urban India?" },
  { year: "2024", t: "First 100 clients", b: "Soft-launched in Bengaluru with five therapists and zero advertising." },
  { year: "2025", t: "Pan-India expansion", b: "Mumbai, Delhi, Pune, Hyderabad — built around women-first operations and trust-first ops." },
  { year: "2026", t: "You, today", b: "A platform ten thousand households use to bring wellness home." },
];

export default function AboutPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="cream" bleed grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 text-[var(--color-saffron)]/30"
        >
          <Mandala className="h-full w-full spin-slow" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow>The Zorova Story</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--color-ink)]">
                Normalising wellness —{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  one Indian household at a time
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
                Zorova was built on a simple observation: in a country with
                three thousand years of healing tradition, it's still strangely
                difficult to book a good, safe, professional massage at home.
                We're here to change that.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative lg:col-span-5">
            <figure className="relative aspect-square overflow-hidden rounded-full border-[1.5px] border-[var(--color-saffron)]/40 bg-[var(--color-primary)]">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10 text-center text-white">
                <Lotus className="h-20 w-20 text-[var(--color-saffron-soft)] breathe" />
                <p className="font-[var(--font-serif)] text-2xl italic">
                  "Wellness, for every home."
                </p>
              </div>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* ───────── ORIGIN STORY ───────── */}
      <Section tone="surface">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="01">Origin</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)]">
                Why a wellness app looked{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  nothing like one
                </span>{" "}
                existed yet.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-[var(--color-muted)]">
                Our founders come from product, operations, and healthcare.
                They'd spent years watching family members book wellness the
                hard way — through scattered phone numbers, spa promos, and
                well-meaning but unvetted strangers. Meanwhile, trained
                therapists struggled for safe, fair, dignified work.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                Zorova closes that gap with software, training, verification,
                and a stubborn belief that a good massage is infrastructure —
                not a luxury.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ───────── IDEOLOGY / MANIFESTO ───────── */}
      <Section tone="cream" grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-10 h-[360px] w-[360px] text-[var(--color-saffron)]/20"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>

        <div className="relative grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02">The Zorova Ideology</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)] sm:text-[2.75rem]">
                A quiet revolution in how India{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  thinks about massage
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                In India, the word <em>massage</em> still lives under a cloud.
                The country that wrote Ayurveda — the world's oldest manual on
                therapeutic touch — has grown up whispering about it, hiding
                it, and at worst, confusing it with the dim back-lanes of a
                body parlour.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
                Zorova exists to take that word back.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <figure className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[image:var(--gradient-ink-warm)] opacity-95"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-72 w-72 text-white/15"
                >
                  <Mandala className="h-full w-full spin-slow" />
                </div>
                <blockquote className="relative px-8 py-12 sm:px-12 sm:py-14">
                  <span className="font-[var(--font-serif)] text-6xl leading-none text-[var(--color-saffron-soft)]">
                    &ldquo;
                  </span>
                  <p className="mt-2 font-[var(--font-serif)] text-2xl italic leading-snug sm:text-[1.75rem]">
                    A good massage is not a guilty pleasure. It is not shady.
                    It is not something to be explained away. It is medicine —
                    three thousand years old, delivered by trained hands, in
                    daylight, for every household that wants it.
                  </p>
                  <figcaption className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
                    <span
                      className="h-px w-8 bg-[var(--color-saffron-soft)]"
                      aria-hidden="true"
                    />
                    The Zorova Manifesto
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>

        <Stagger
          className="mt-16 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.08}
        >
          {[
            {
              t: "The stigma we're unlearning",
              b: "For a generation, \"spa\" and \"massage\" have been whispered words in India — tangled with cultural hesitation, safety fears, and an industry too many parts of which earned its reputation.",
            },
            {
              t: "The truth we're reclaiming",
              b: "Professional touch therapy is ancient, normal, and evidence-backed. In most of the world it sits next to physiotherapy and dentistry. That's where it belongs here, too.",
            },
            {
              t: "The daylight we're bringing",
              b: "Real names, verified IDs, trained therapists, transparent pricing, and a receipt at the end. Nothing to whisper about. Nothing to explain. Just a good hour of care.",
            },
            {
              t: "A women-first category",
              b: "Half our therapists are women. All our safety systems are designed from their side of the door first — because a category that isn't safe for its female professionals isn't safe for anyone.",
            },
            {
              t: "For the whole household",
              b: "We want Zorova on the list next to the paediatrician, the yoga instructor, and the family dentist — the quiet services that keep a household well, year after year.",
            },
            {
              t: "Infrastructure, not indulgence",
              b: "Wellness should not be priced like jewellery. A session should cost what a good dinner costs, happen as often as a haircut, and feel as ordinary as either.",
            },
          ].map((pt, i) => (
            <StaggerItem key={pt.t}>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-[var(--color-divider)] py-6">
                <span className="font-[var(--font-serif)] text-3xl italic leading-none text-[var(--color-saffron)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                  {pt.t}
                </h3>
                <span aria-hidden="true" />
                <p className="text-[var(--color-muted)]">{pt.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-[var(--font-serif)] text-2xl italic leading-snug text-[var(--color-ink)] sm:text-3xl">
              When your grandmother books a Zorova session for her knees with
              the same ease she books a blood test —{" "}
              <span className="text-[var(--color-saffron)]">
                the revolution is won.
              </span>
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Until then, we keep building.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ───────── VALUES ───────── */}
      <Section tone="ink" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="03" className="justify-center text-white/70">
            Our Values
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-white">
              What we stand on when the quarter gets loud.
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2" gap={0.1}>
          {values.map((v, i) => (
            <StaggerItem key={v.t}>
              <div className="flex items-start gap-5 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-[var(--color-saffron-soft)]/40">
                <span className="font-[var(--font-serif)] text-4xl italic text-[var(--color-saffron-soft)]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-[var(--font-serif)] text-2xl font-bold text-white">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-white/75">{v.b}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── TIMELINE ───────── */}
      <Section tone="cream" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="04" className="justify-center">
            Our Story So Far
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              Three years, and counting.
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[var(--color-saffron)] via-[var(--color-primary)] to-transparent sm:left-1/2"
          />
          <Stagger className="flex flex-col gap-12" gap={0.1}>
            {timeline.map((m, i) => (
              <StaggerItem key={m.year}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 sm:flex-row sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:flex-row-reverse sm:text-right"
                      : "sm:text-left"
                  }`}
                >
                  <div
                    className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-saffron)] ring-4 ring-[var(--color-cream)] sm:left-1/2"
                    aria-hidden="true"
                  />
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <p className="eyebrow-numeral text-xl">{m.year}</p>
                    <h3 className="mt-2 font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                      {m.t}
                    </h3>
                    <p className="mt-2 text-[var(--color-muted)]">{m.b}</p>
                  </div>
                  <div className="hidden w-1/2 sm:block" aria-hidden="true" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── STATS ───────── */}
      <Section tone="surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-6 h-32 w-60 text-[var(--color-saffron)]/50"
        >
          <LeafBranch className="h-full w-full" />
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10,000+", "Sessions delivered"],
            ["120+", "Certified therapists"],
            ["5", "Cities served"],
            ["4.9 / 5", "Average rating"],
          ].map(([top, bottom]) => (
            <Reveal key={top} className="flex flex-col items-start gap-2">
              <p className="font-[var(--font-serif)] text-5xl font-bold text-[var(--color-primary)]">
                {top}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {bottom}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── CTA ───────── */}
      <Section tone="warm" grain>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SunMandala className="mx-auto h-16 w-16 text-[var(--color-primary)] breathe" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-[var(--font-serif)] text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
              Join the quiet revolution.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">Book Your Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/careers">Work With Us</Link>
              </Button>
            </div>
          </Reveal>
          <WaveLine
            aria-hidden="true"
            className="mx-auto mt-10 h-8 w-full max-w-md text-[var(--color-primary)]"
          />
        </div>
      </Section>
    </>
  );
}
