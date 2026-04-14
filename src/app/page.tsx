import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  DoshaGlyph,
  LeafBranch,
  Lotus,
  Mandala,
  SunMandala,
  WaveLine,
} from "@/components/illustrations";

const audienceCards = [
  {
    label: "For Children",
    tagline: "Start gentle. Start early.",
    age: "Ages 4 – 12",
    duration: "30 min",
    body: "A short, playful session of light touch, guided stretching, and breath games. Builds body awareness and sets a healthy relationship with rest — early.",
    concerns: [
      "Growing-pain relief",
      "Sleep & attention support",
      "Gentle posture correction",
    ],
    glyph: <Lotus className="h-full w-full" />,
    tone: "text-[var(--color-saffron)]",
    panelBg: "bg-[var(--color-cream)]",
    panelInk: "text-[var(--color-saffron)]",
    onDark: false,
  },
  {
    label: "For Youth",
    tagline: "Strong body. Clearer mind.",
    age: "Ages 13 – 25",
    duration: "45 min",
    body: "For the exam weeks, the tournament weeks, the first-job weeks. Targeted work on shoulders, back, and the tension that lives in a body pushing itself.",
    concerns: [
      "Tech-neck & eye strain",
      "Sports & gym recovery",
      "Anxiety & sleep reset",
    ],
    glyph: <DoshaGlyph variant="vata" className="h-full w-full" />,
    tone: "text-[var(--color-accent)]",
    panelBg: "bg-[var(--color-accent-light)]",
    panelInk: "text-[var(--color-primary)]",
    onDark: false,
  },
  {
    label: "For Adults",
    tagline: "An hour you'll feel all week.",
    age: "Ages 26 – 55",
    duration: "60 / 90 min",
    body: "The years the body quietly pays for everything — the commute, the kids, the job, the parents. A real hour of care, with the pressure and pace you actually need.",
    concerns: [
      "Chronic back & shoulder pain",
      "Prenatal & postnatal care",
      "Burnout & sleep quality",
    ],
    glyph: <DoshaGlyph variant="pitta" className="h-full w-full" />,
    tone: "text-[var(--color-primary)]",
    panelBg: "bg-[var(--color-primary)]",
    panelInk: "text-[var(--color-saffron-soft)]",
    onDark: true,
  },
  {
    label: "For Seniors",
    tagline: "Dignity, in every movement.",
    age: "Ages 55+",
    duration: "60 min",
    body: "Slow, supported, dignified. Therapists trained specifically in senior care — for stiff joints, cold feet, old injuries, and the mobility that makes every day easier.",
    concerns: [
      "Arthritis & joint stiffness",
      "Circulation & swelling",
      "Balance & confident movement",
    ],
    glyph: <SunMandala className="h-full w-full" />,
    tone: "text-[var(--color-saffron)]",
    panelBg: "bg-[var(--color-cream)]",
    panelInk: "text-[var(--color-saffron)]",
    onDark: false,
  },
] as const;

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

const choices = [
  { label: "Your Home", body: "Step out of your routine without stepping out." },
  { label: "Your Workplace", body: "A pause that resets the rest of the week." },
  { label: "Our Center", body: "A room designed quiet. A practice held sacred." },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="ink" grain bleed className="isolate">
        {/* Ambient mandala — offset right, slow spin */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 hidden h-[680px] w-[680px] text-white/15 md:block"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 h-[340px] w-[340px] text-[var(--color-saffron-soft)]/30"
        >
          <Mandala className="h-full w-full spin-reverse" />
        </div>

        <div className="relative mx-auto flex min-h-[88dvh] w-full max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[var(--color-saffron-soft)]">
              <span
                className="h-px w-8 bg-[var(--color-saffron-soft)]"
                aria-hidden="true"
              />
              Massage · Spa · Stretch Therapy
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-[var(--font-serif)] text-[clamp(2.5rem,6.8vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
              Wellness,
              <br />
              <span className="serif-italic text-[var(--color-saffron-soft)]">
                delivered
              </span>{" "}
              to your door.
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Professional massage and stretch therapy, practised in the
              stillness of your own home — or at our center, when you're ready
              to be somewhere else.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" variant="onDark">
                <Link href="/contact">Book Your Session</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Link href="/massages">Explore Massages →</Link>
              </Button>
            </div>
          </Reveal>

          {/* Tiny stat rail */}
          <Reveal delay={0.42}>
            <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {[
                ["Certified", "Therapists"],
                ["24 / 7", "Trust & Safety"],
                ["100%", "Home-Ready Kits"],
                ["Verified", "Clients Only"],
              ].map(([top, bottom]) => (
                <div key={top} className="flex flex-col gap-1">
                  <dt className="font-[var(--font-serif)] text-2xl text-white">
                    {top}
                  </dt>
                  <dd className="text-xs uppercase tracking-[0.18em] text-white/60">
                    {bottom}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <WaveLine
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-16 w-full text-white/15"
        />
      </Section>

      {/* ───────── ART OF LIVING WELL ───────── */}
      <Section tone="cream" grain className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-8 h-48 w-72 text-[var(--color-saffron)]/40 sm:right-8"
        >
          <LeafBranch className="h-full w-full" />
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="01">
              Discover the Art of Living Well
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
                Tired, stressed,
                <br />
                <span className="serif-italic text-[var(--color-saffron)]">
                  or feeling stiff?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-6 max-w-md text-[var(--color-muted)] sm:text-lg">
                Zorova helps you relax, recover, and rejuvenate with expert
                massage and stretch therapy — drawing equally from ancient
                tradition and modern sports medicine.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <figure className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-card-hover)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 text-white/20"
                >
                  <Mandala className="h-full w-full spin-slow" />
                </div>
                <blockquote className="relative px-8 py-12 sm:px-12 sm:py-16">
                  <span className="font-[var(--font-serif)] text-6xl leading-none text-[var(--color-saffron-soft)]">
                    &ldquo;
                  </span>
                  <p className="mt-2 font-[var(--font-serif)] text-2xl italic leading-snug text-white sm:text-[1.75rem]">
                    In the hustle of modern life, where stress and tension
                    take their toll, the quiet craft of massage — three
                    thousand years old, and backed by a century of clinical
                    research — offers a timeless answer.
                  </p>
                  <figcaption className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
                    <span
                      className="h-px w-8 bg-[var(--color-saffron-soft)]"
                      aria-hidden="true"
                    />
                    A Zorova belief
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Choice row */}
        <Stagger className="mt-20 grid gap-6 sm:grid-cols-3">
          {choices.map((c, i) => (
            <StaggerItem key={c.label}>
              <div className="group relative flex h-full flex-col bg-white p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
                <span className="font-[var(--font-serif)] text-5xl italic leading-none text-[var(--color-saffron)]">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-[var(--font-serif)] text-2xl font-bold text-[var(--color-primary)]">
                  {c.label}
                </h3>
                <p className="mt-3 text-[var(--color-muted)]">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── CARE FOR YOU ───────── */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02">
              Care for You and Your Loved Ones
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)] sm:text-[2.75rem]">
                A practice for every{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  age and season
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                A household isn't one body. It's a child with a school bag, a
                teenager hunched over a screen, a parent holding the week
                together, and a grandparent whose knees remember everything.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
                Zorova is built for all four — the same trusted platform, the
                same verified therapists, four very different hours of care.
                Every session is adjusted for age, pressure, modality, and
                medical context before your therapist even rings the doorbell.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative h-full rounded-[var(--radius-lg)] bg-[var(--color-cream)] p-8 sm:p-10">
              <p className="font-[var(--font-serif)] text-2xl italic leading-snug text-[var(--color-ink)]">
                &ldquo;A good wellness service isn't one thing delivered
                everywhere. It's four different things, delivered with the same
                standard of care.&rdquo;
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["Tailored per visit", "Pressure, oils, pace, modality — recalibrated against today's body, not your last session."],
                  ["Family-safe therapists", "Every therapist is trained specifically for paediatric and senior care — not just retrofitted."],
                  ["Medical context", "A short, private health screen before the first session flags diabetes, pregnancy, injuries, and cardiac history."],
                  ["One household, one platform", "Switch between a session for your child and one for your mother without changing apps, therapists, or standards."],
                ].map(([h, p]) => (
                  <div
                    key={h}
                    className="border-t border-[var(--color-divider)] pt-4"
                  >
                    <p className="font-[var(--font-serif)] text-lg font-bold text-[var(--color-ink)]">
                      {h}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col gap-24 lg:gap-32">
          {audienceCards.map((card, i) => {
            const isReversed = i % 2 === 1;
            return (
              <Reveal key={card.label} delay={0.04}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Illustration panel */}
                  <div className="lg:col-span-5">
                    <div
                      className={`relative aspect-square overflow-hidden rounded-[var(--radius-lg)] ${card.panelBg}`}
                    >
                      <div
                        aria-hidden="true"
                        className={`absolute inset-0 ${
                          card.onDark
                            ? "text-white/15"
                            : "text-[var(--color-saffron)]/20"
                        }`}
                      >
                        <Mandala className="absolute inset-0 m-auto h-[115%] w-[115%] spin-slower" />
                      </div>
                      <div
                        className={`absolute inset-0 flex items-center justify-center p-16 ${card.panelInk} breathe`}
                      >
                        <div className="h-40 w-40 sm:h-52 sm:w-52">
                          {card.glyph}
                        </div>
                      </div>
                      <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                        <p
                          className={`text-xs font-bold uppercase tracking-[0.22em] ${
                            card.onDark
                              ? "text-[var(--color-saffron-soft)]"
                              : "text-[var(--color-saffron)]"
                          }`}
                        >
                          {card.age}
                        </p>
                        <p
                          className={`mt-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                            card.onDark ? "text-white/70" : "text-[var(--color-muted)]"
                          }`}
                        >
                          {card.duration}
                        </p>
                      </div>
                      <p
                        className={`absolute bottom-6 left-6 right-6 font-[var(--font-serif)] text-xl italic leading-snug sm:bottom-8 sm:left-8 sm:right-8 sm:text-2xl ${
                          card.onDark ? "text-white/90" : "text-[var(--color-ink)]/80"
                        }`}
                      >
                        &ldquo;{card.tagline}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="lg:col-span-7">
                    <span className="eyebrow-numeral text-sm not-italic tracking-[0.22em] text-[var(--color-saffron)]">
                      {String(i + 1).padStart(2, "0")} / 04
                    </span>
                    <h3 className="mt-4 font-[var(--font-serif)] text-4xl font-bold leading-[1.05] tracking-[-0.01em] text-[var(--color-ink)] sm:text-5xl lg:text-[3.25rem]">
                      {card.label}
                    </h3>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                      {card.body}
                    </p>

                    <div className="mt-10 border-t border-[var(--color-divider)] pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-saffron)]">
                        Typical concerns we address
                      </p>
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {card.concerns.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-3 text-[var(--color-ink)]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.65rem] inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--color-saffron)]"
                            />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-primary)] transition-colors hover:text-[var(--color-saffron)]"
                      >
                        Book a session
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="font-[var(--font-serif)] text-xl italic leading-snug text-[var(--color-ink)] sm:text-2xl">
              One subscription.{" "}
              <span className="text-[var(--color-saffron)]">Every generation.</span>
            </p>
            <p className="max-w-xl text-sm text-[var(--color-muted)]">
              The Zorova Family plan covers up to four members in your
              household — so the grandparents' monthly massage, the teenager's
              exam-week recovery, and your own post-deadline hour all live in
              one place.
            </p>
            <Button asChild size="md" variant="outline" className="mt-2">
              <Link href="/membership">Explore Family Memberships →</Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ───────── TWO TRADITIONS ───────── */}
      <Section tone="bg" className="relative">
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionEyebrow number="03" className="justify-center">
            Two Traditions · One Practice
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              Ancient craft.{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                Modern science.
              </span>{" "}
              One steady pair of hands.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="type-body mt-5 text-[var(--color-muted)]">
              Every Zorova session draws from two toolkits — the three-thousand-year
              practice of Ayurveda, and a century of Western sports medicine,
              physiotherapy, and clinical massage research. You don&rsquo;t have
              to pick a side.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-[var(--radius-lg)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 text-[var(--color-saffron)]/10"
              >
                <Mandala className="h-full w-full spin-slow" />
              </div>
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron)]">
                  The Eastern lens
                </p>
                <h3 className="mt-3 font-[var(--font-serif)] text-3xl font-bold text-[var(--color-ink)]">
                  Ayurveda &amp; <br className="hidden sm:block" />
                  Traditional Therapy
                </h3>
                <p className="mt-4 text-[var(--color-muted)]">
                  A three-thousand-year system for reading the body as it is
                  today — not a fixed chart. Your therapist tailors pressure,
                  oils, pace and aromatics to how your body feels this week.
                </p>
                <ul className="mt-6 flex flex-col gap-3 border-t border-[var(--color-divider)] pt-5">
                  {[
                    ["Abhyanga", "Warm oil, dosha-balanced strokes"],
                    ["Shirodhara", "Steady stream across the brow"],
                    ["Marma point therapy", "Pressure on 107 energy junctions"],
                    ["Dosha reading", "A five-minute pre-session assessment"],
                  ].map(([name, note]) => (
                    <li
                      key={name}
                      className="grid grid-cols-[auto_1fr] items-baseline gap-4"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rotate-45 bg-[var(--color-saffron)]"
                      />
                      <span className="text-[var(--color-ink)]">
                        <strong className="font-semibold">{name}</strong>
                        <span className="text-[var(--color-muted)]">
                          {" "}
                          — {note}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="relative h-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)] p-8 text-white shadow-[var(--shadow-card)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-dusk)] opacity-80"
              />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
                  The Western toolkit
                </p>
                <h3 className="mt-3 font-[var(--font-serif)] text-3xl font-bold text-white">
                  Sports Medicine &amp; <br className="hidden sm:block" />
                  Clinical Massage
                </h3>
                <p className="mt-4 text-white/80">
                  Evidence-based techniques refined over the last century —
                  the same work that keeps athletes, surgeons, and pianists
                  in condition. Diagnostic, measured, and endlessly
                  researched.
                </p>
                <ul className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-5">
                  {[
                    ["Deep tissue & trigger point", "Targeted relief of knots & adhesions"],
                    ["Myofascial release", "Slow-tempo work on the fascial web"],
                    ["Sports recovery / PNF", "Assisted stretching & circulation flush"],
                    ["Prenatal-certified touch", "Side-lying, cushion-supported safety"],
                  ].map(([name, note]) => (
                    <li
                      key={name}
                      className="grid grid-cols-[auto_1fr] items-baseline gap-4"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rotate-45 bg-[var(--color-saffron-soft)]"
                      />
                      <span>
                        <strong className="font-semibold">{name}</strong>
                        <span className="text-white/70"> — {note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-[var(--font-serif)] text-xl italic text-[var(--color-ink)] sm:text-2xl">
            Your therapist brings both —{" "}
            <span className="text-[var(--color-saffron)]">
              you get the hour you need.
            </span>
          </p>
        </Reveal>

        <Stagger
          className="relative mt-16 flex flex-wrap justify-center gap-3"
          gap={0.035}
        >
          {benefits.map((b) => (
            <StaggerItem key={b}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-divider)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] backdrop-blur-sm transition-colors hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[var(--color-saffron)]"
                />
                {b}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── DIABETES / HEALTH ALLY ───────── */}
      <Section tone="cream" grain>
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[image:var(--gradient-ink-warm)] opacity-95"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 text-white/20"
              >
                <Mandala className="absolute -right-24 top-10 h-96 w-96 spin-slow" />
              </div>
              <figcaption className="relative flex h-full flex-col justify-end gap-3 p-8 text-white sm:p-10">
                <p className="font-[var(--font-serif)] text-5xl leading-none text-[var(--color-saffron-soft)]">
                  463M
                </p>
                <p className="max-w-xs text-white/80">
                  adults worldwide live with diabetes today — and that number
                  keeps rising.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionEyebrow number="04">
              An Ally in Your Fight for Balance
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)] sm:text-[2.5rem]">
                Massage isn't just relaxation.
                <br />
                It's{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  medicine, quietly worked
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-6 text-[var(--color-muted)] sm:text-lg">
                For people living with diabetes, the right touch — applied with
                care and evidence — can genuinely change the day.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" gap={0.08}>
              {[
                "Improved insulin sensitivity",
                "Stable glucose through stress reduction",
                "Enhanced circulation to extremities",
                "Relief from neuropathic discomfort",
              ].map((b) => (
                <StaggerItem key={b}>
                  <div className="flex items-start gap-3 rounded-[var(--radius-md)] bg-white/60 p-4 backdrop-blur-sm">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-2 w-2 shrink-0 rotate-45 bg-[var(--color-saffron)]"
                    />
                    <span className="text-[var(--color-ink)]">{b}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* ───────── CLOSING CTA ───────── */}
      <Section tone="ink" grain bleed>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 text-white/10"
        >
          <Mandala className="h-full w-full spin-reverse" />
        </div>
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <Lotus className="h-16 w-16 text-[var(--color-saffron-soft)] breathe" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-[var(--font-serif)] text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Your body has been{" "}
              <span className="serif-italic text-[var(--color-saffron-soft)]">
                waiting
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl text-lg text-white/70">
              Book a therapist. Keep your schedule. Feel like yourself again —
              often within the same hour.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="onDark">
                <Link href="/contact">Book Your Session</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Link href="/stretch">Try Stretch Therapy</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
