import Image from "next/image";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  EnergyIcon,
  HeartPulseGlyph,
  Mandala,
  MobilityIcon,
  PainReliefIcon,
  PerformanceIcon,
  RecoverFasterIcon,
  ShieldCheckGlyph,
  StrengthIcon,
  WaveLine,
} from "@/components/illustrations";
import { images } from "@/lib/images";

const lifeStages = [
  {
    label: "Children",
    tag: "Ages 4 – 12",
    benefit: "Posture, flexibility, healthy growth",
    body: "Guided mobility and body-awareness games that build a strong foundation — early.",
    image: images.lifeStageChildren,
    href: "/massages",
    tint: "text-[var(--color-saffron)]",
  },
  {
    label: "Youth",
    tag: "Ages 13 – 25",
    benefit: "Fitness, recovery, confidence",
    body: "Sports recovery, mobility training, and injury prevention for a body pushing itself.",
    image: images.lifeStageYouth,
    href: "/sports",
    tint: "text-[var(--color-accent)]",
  },
  {
    label: "Professionals",
    tag: "Ages 26 – 55",
    benefit: "Stress relief, posture, energy",
    body: "Targeted recovery for the back, shoulders, and neck — undo eight-hour sits and late deadlines.",
    image: images.lifeStageProfessional,
    href: "/business",
    tint: "text-[var(--color-primary)]",
  },
  {
    label: "Women",
    tag: "Every stage",
    benefit: "Safety, care, self-care",
    body: "A women-first platform — female therapists, verified homes, prenatal and postnatal care.",
    image: images.lifeStageWomen,
    href: "/careers",
    tint: "text-[var(--color-saffron)]",
  },
  {
    label: "Seniors",
    tag: "Ages 55+",
    benefit: "Pain relief, mobility, movement",
    body: "Slow, supported, dignified — therapists trained in senior care for stiff joints and everyday mobility.",
    image: images.lifeStageSeniors,
    href: "/membership",
    tint: "text-[var(--color-primary)]",
  },
] as const;

const performanceBenefits = [
  {
    label: "Reduce Pain",
    body: "Chronic back, neck, and joint pain — worked on, not just covered up.",
    Icon: PainReliefIcon,
  },
  {
    label: "Recover Faster",
    body: "Post-training, post-injury, post-childbirth, post-surgery. Return to your body, sooner.",
    Icon: RecoverFasterIcon,
  },
  {
    label: "Improve Mobility",
    body: "Joints that move. Muscles that lengthen. A body that does what you ask of it.",
    Icon: MobilityIcon,
  },
  {
    label: "Increase Strength",
    body: "Conditioning and corrective work that builds a more resilient you.",
    Icon: StrengthIcon,
  },
  {
    label: "Better Sports Performance",
    body: "The recovery protocols elite athletes rely on — now in your living room.",
    Icon: PerformanceIcon,
  },
  {
    label: "Better Daily Energy",
    body: "Sleep deeper, focus longer, show up stronger. Every day of the week.",
    Icon: EnergyIcon,
  },
] as const;

const services = [
  {
    name: "Full Body Recovery Session",
    length: "60 / 90 min",
    body: "A complete, clinical-grade body recovery — targeted at tension, circulation, and full-range muscle release.",
    href: "/massages",
  },
  {
    name: "Muscle Recovery Therapy",
    length: "60 / 75 min",
    body: "Deep-tissue work for chronic load, sports recovery, and post-injury rehabilitation. Focused. Measured. Effective.",
    href: "/massages",
  },
  {
    name: "Mobility Improvement Session",
    length: "45 / 60 min",
    body: "One-on-one assisted mobility work for joints, posture, and range of motion — the foundation of a body that lasts.",
    href: "/stretch",
  },
  {
    name: "Stress Relief Recovery",
    length: "45 / 60 min",
    body: "Nervous-system-focused recovery for burnout, poor sleep, and stress-driven body pain. Quiet. Supported. Restorative.",
    href: "/massages",
  },
] as const;

const trustMarkers = [
  { label: "Certified", sub: "Clinical Therapists" },
  { label: "Verified", sub: "Safe Homes" },
  { label: "Women-First", sub: "Safety Standards" },
  { label: "Every Stage", sub: "of Life" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="ink" grain bleed className="isolate">
        {/* Ambient art — kept on-palette, no spa imagery */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 hidden h-[720px] w-[720px] text-white/10 md:block"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -bottom-24 h-[420px] w-[420px] text-[var(--color-saffron-soft)]/20"
        >
          <Mandala className="h-full w-full spin-reverse" />
        </div>

        <div className="relative mx-auto grid min-h-[92dvh] w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full border border-[var(--color-saffron-soft)]/40 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-saffron-soft)] backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[var(--color-saffron-soft)]"
                  aria-hidden="true"
                />
                Recovery · Performance · Body Care
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 font-[var(--font-serif)] text-[clamp(2.5rem,6.4vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
                From Childhood to Old Age —{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  Complete Care
                </span>{" "}
                for Your Body.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-lg font-semibold tracking-wide text-white/85 sm:text-xl">
                <span>Stay Healthy</span>
                <span className="text-[var(--color-saffron-soft)]">•</span>
                <span>Look Better</span>
                <span className="text-[var(--color-saffron-soft)]">•</span>
                <span>Perform Better</span>
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Zorova is a complete body care, recovery, and performance
                platform — for athletes, working professionals, families, and
                women at every stage of life.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact?intent=book">Book Recovery Session</Link>
                </Button>
                <Button asChild size="lg" variant="onDark">
                  <Link href="/contact?intent=signup">Start Your Body Care</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.42}>
              <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
                {trustMarkers.map((t) => (
                  <div key={t.label} className="flex flex-col gap-1">
                    <dt className="font-[var(--font-serif)] text-xl text-white sm:text-2xl">
                      {t.label}
                    </dt>
                    <dd className="text-xs uppercase tracking-[0.18em] text-white/60">
                      {t.sub}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Visual — athlete photo carrying the performance story */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card-hover)]">
              <Image
                src={images.heroAthlete.src}
                alt={images.heroAthlete.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
                  Built for Every Body
                </p>
                <p className="mt-2 font-[var(--font-serif)] text-2xl italic leading-tight">
                  Athletes. Professionals. Families. Seniors.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <WaveLine
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-16 w-full text-white/15"
        />
      </Section>

      {/* ───────── DIFFERENTIATION · NOT A SPA ───────── */}
      <Section tone="cream" grain className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <SectionEyebrow number="01" className="justify-center">
              Why Zorova is Different
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[3rem]">
              This is{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                not a spa service.
              </span>
              <br />
              This is a complete body care system.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-[var(--color-muted)]">
              Zorova delivers results — not just relaxation. We combine sports
              medicine, physiotherapy, and long-term care into one platform
              that serves your body across every stage of life, not just a
              luxurious hour.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-3 text-left sm:grid-cols-3" gap={0.08}>
            {[
              ["Relaxation ≠ Results", "Spas pamper. We rebuild — pain reduction, mobility, strength, and daily energy you can measure."],
              ["Care across life", "From a child's posture to a senior's mobility — one platform, one trusted team, every age."],
              ["Performance culture", "The recovery work elite athletes rely on, applied to working professionals, parents, and active seniors."],
            ].map(([h, p]) => (
              <StaggerItem key={h}>
                <div className="flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-saffron)]/20 bg-white/70 p-6 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron)]">
                    {h}
                  </p>
                  <p className="text-[var(--color-ink)]">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── PERFORMANCE / USP — 6 BENEFITS ───────── */}
      <Section tone="surface">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow number="02">Performance, not luxury</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
                Measurable outcomes,{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  in every session.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">
              The difference between relaxation and recovery is the difference
              between a nice hour and a better month. Here's what Zorova
              sessions actually change.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {performanceBenefits.map((b, i) => (
            <StaggerItem key={b.label}>
              <div className="group flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-saffron-light)] text-[var(--color-saffron)]">
                    <b.Icon className="h-6 w-6" />
                  </div>
                  <span className="font-[var(--font-serif)] text-2xl italic text-[var(--color-saffron)]/60">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                    ✔ {b.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {b.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── LIFE-STAGE · CARE FOR EVERY STAGE ───────── */}
      <Section tone="bg" grain className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="03" className="justify-center">
            Care for Every Stage of Life
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
              Built for{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                people like you
              </span>{" "}
              — at every age.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-xl text-[var(--color-muted)]">
              Childhood through seniors. Athletes, working professionals,
              families, and women. Zorova's care is not one-size-fits-all — it
              adapts to whoever needs it.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {lifeStages.map((s) => (
            <StaggerItem key={s.label}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 32vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  />
                  <span
                    className={`absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${s.tint}`}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-[var(--font-serif)] text-2xl font-bold text-[var(--color-ink)]">
                    {s.label}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                    {s.benefit}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">{s.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-saffron)]">
                    Explore care
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── SERVICES (RENAMED) ───────── */}
      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="04">Our Sessions</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
                Four sessions.{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  One outcome —
                </span>{" "}
                a body that works better.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                Every Zorova session is an engineered protocol — not a
                scripted routine. Therapists assess, adjust, and work to a
                measurable outcome, every visit.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact?intent=book">Book Recovery Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/massages">See all sessions →</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7" gap={0.08}>
            {services.map((s) => (
              <StaggerItem key={s.name}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-[var(--color-cream)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-saffron)]">
                      {s.length}
                    </p>
                    <span className="rounded-full border border-[var(--color-saffron)]/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                      Recovery
                    </span>
                  </div>
                  <h3 className="font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                    {s.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{s.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-saffron)]">
                    Book this session
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── SPORTS PROMO STRIP ───────── */}
      <Section tone="ink" grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[420px] text-white/10"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>

        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary-dark)]">
              <Image
                src={images.sportsHero.src}
                alt={images.sportsHero.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/30 p-6 text-white backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
                  Built for Athletes
                </p>
                <p className="mt-2 font-[var(--font-serif)] text-xl italic">
                  Recovery that keeps the country moving.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionEyebrow number="05" className="text-white/70">
              Sports & Performance
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-white sm:text-[2.75rem]">
                Zorova backs the athletes —{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  and the country
                </span>{" "}
                they play for.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Faster recovery after training. Fewer injuries over a career.
                Peak performance when it counts. And beyond the session — we
                actively support athletes, grassroots programs, and funding
                initiatives that make sports a real option in every Indian
                household.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="onDark">
                  <Link href="/sports">Explore Sports</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <Link href="/sports#partner">Partner With Us →</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ───────── WOMEN EMPOWERMENT PROMO ───────── */}
      <Section tone="cream" grain>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow number="06">Women Empowerment</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
                A company that{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  has your back
                </span>{" "}
                — on the job, and off it.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                Zorova is built so women can confidently join the platform —
                as clients and professionals. Verified safe homes. Women-first
                policies. 24/7 support. Career growth. The safety you deserve
                is the floor we build on, not a feature we bolt on.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-3 sm:grid-cols-3" gap={0.06}>
              {[
                "Verified Safe Workplace",
                "Women-First Policies",
                "24/7 SOS Support",
              ].map((b) => (
                <StaggerItem key={b}>
                  <div className="flex items-center gap-3 rounded-full border border-[var(--color-saffron)]/40 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--color-ink)] backdrop-blur-sm">
                    <ShieldCheckGlyph className="h-5 w-5 text-[var(--color-saffron)]" />
                    {b}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.16}>
              <div className="mt-8">
                <Button asChild size="lg" variant="primary">
                  <Link href="/careers">Build Your Career With Zorova →</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <figure className="relative aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)]">
              <Image
                src={images.careersWomen.src}
                alt={images.careersWomen.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/30 p-6 text-white backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
                  Women at Zorova
                </p>
                <p className="mt-2 font-[var(--font-serif)] text-xl italic">
                  Growth. Independence. Respect. Safety.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* ───────── CLOSING CTA ───────── */}
      <Section tone="ink" grain bleed>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 text-white/8"
        >
          <Mandala className="h-full w-full spin-reverse" />
        </div>
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <HeartPulseGlyph className="h-16 w-16 text-[var(--color-saffron-soft)] breathe" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-[var(--font-serif)] text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Take care of your body —{" "}
              <span className="serif-italic text-[var(--color-saffron-soft)]">
                it is your greatest asset.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl text-lg text-white/70">
              One subscription. Every generation. Every life stage. A better
              body, built over time — not booked in panic.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="accent">
                <Link href="/contact?intent=signup">Start Your Body Care</Link>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <Link href="/contact?intent=book">Book Recovery Session</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
