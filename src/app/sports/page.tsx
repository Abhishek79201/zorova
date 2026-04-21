import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  HeartPulseGlyph,
  Mandala,
  MobilityIcon,
  PerformanceIcon,
  RecoverFasterIcon,
  ShieldCheckGlyph,
  StrengthIcon,
  TrophyGlyph,
  WaveLine,
} from "@/components/illustrations";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sports",
  description:
    "Built for athletes. Backed by Zorova. Clinical recovery sessions, injury prevention, peak performance — and a commitment to grassroots sports, athlete support programs, and funding initiatives across India.",
  alternates: { canonical: "/sports" },
};

const recoveryPillars = [
  {
    label: "Faster Recovery",
    body: "Active recovery protocols between training days — trigger-point release, circulation flush, and PNF-assisted mobility work.",
    Icon: RecoverFasterIcon,
  },
  {
    label: "Injury Prevention",
    body: "Pre-season screening, load-balancing sessions, and corrective mobility work before small asymmetries become career-ending.",
    Icon: ShieldCheckGlyph,
  },
  {
    label: "Peak Performance",
    body: "Pre-competition activation and post-competition recovery — the same protocols professional teams rely on, on demand.",
    Icon: PerformanceIcon,
  },
  {
    label: "Strength & Longevity",
    body: "Mobility, conditioning, and soft-tissue work that extends how long you can play — at your best, not just in the squad.",
    Icon: StrengthIcon,
  },
  {
    label: "Full-Range Mobility",
    body: "Joint-by-joint mobility assessment and targeted range work — so your body does what your sport actually asks of it.",
    Icon: MobilityIcon,
  },
  {
    label: "Daily Well-Being",
    body: "Sleep, stress, nervous-system recovery. The quiet side of performance — the part amateur athletes most often miss.",
    Icon: HeartPulseGlyph,
  },
] as const;

const initiatives = [
  {
    tag: "Athletes",
    title: "Zorova Athlete Support Program",
    body: "Subsidised recovery sessions and mobility assessments for national-level athletes, promising juniors, and para-athletes. Nominated quarterly, by an independent committee.",
  },
  {
    tag: "Grassroots",
    title: "Community Sports Partnerships",
    body: "Free recovery clinics at district-level tournaments, inter-school meets, and women's leagues. Wherever the game is played seriously, Zorova shows up.",
  },
  {
    tag: "Education",
    title: "Recovery Education for Coaches",
    body: "Open workshops and downloadable protocols — because a sound recovery plan should not be a pro-team privilege.",
  },
  {
    tag: "Funding",
    title: "Sports Promotion Initiative",
    body: "A committed percentage of every Zorova recovery-session revenue is ring-fenced toward grants for grassroots clubs, coaches, and athletes in underserved districts.",
  },
] as const;

const beliefs = [
  "Sports are an essential part of human life — not a luxury, not an indulgence, not a pastime.",
  "A country that takes recovery seriously raises athletes who last longer, play better, and win more.",
  "Recovery science belongs to every athlete — not just the ones a sponsor happens to pick.",
  "Grassroots sport is national infrastructure. We invest in it like infrastructure.",
] as const;

export default function SportsPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="ink" bleed grain className="isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[640px] w-[640px] text-white/10"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] text-[var(--color-saffron-soft)]/20"
        >
          <Mandala className="h-full w-full spin-reverse" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow className="text-white/70">
                Sports · Recovery · Performance
              </SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.5rem,6.4vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
                Built for Athletes.{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  Backed by Zorova.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">
                Faster recovery. Fewer injuries. Longer careers. A performance
                system designed for the athlete, the weekend warrior, and the
                school captain — and a commitment to the grassroots sports
                that feed all of them.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact?intent=sports">
                    Book Athlete Recovery
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <Link href="#partner">Apply for Support →</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary-dark)]">
              <Image
                src={images.sportsHero.src}
                alt={images.sportsHero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
                  Athlete in Motion
                </p>
                <p className="mt-2 font-[var(--font-serif)] text-xl italic">
                  Recovery is how champions last.
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

      {/* ───────── PART A · HOW RECOVERY DRIVES PERFORMANCE ───────── */}
      <Section tone="cream" grain>
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow number="01">
              How Recovery Drives Performance
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
                Training breaks you down.{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  Recovery builds you up.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">
              You don't become fitter during practice — you become fitter
              during recovery. The difference between a good athlete and a
              great one is how seriously they take the hours between sessions.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {recoveryPillars.map((p, i) => (
            <StaggerItem key={p.label}>
              <div className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-saffron-light)] text-[var(--color-saffron)]">
                    <p.Icon className="h-6 w-6" />
                  </div>
                  <span className="font-[var(--font-serif)] text-2xl italic text-[var(--color-saffron)]/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                  {p.label}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── THE QUOTE / BELIEF ───────── */}
      <Section tone="surface">
        <Reveal>
          <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary)] p-8 text-white shadow-[var(--shadow-card-hover)] sm:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[image:var(--gradient-ink-warm)] opacity-90"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 text-white/15"
            >
              <Mandala className="h-full w-full spin-slow" />
            </div>
            <blockquote className="relative">
              <span className="font-[var(--font-serif)] text-6xl leading-none text-[var(--color-saffron-soft)]">
                &ldquo;
              </span>
              <p className="mt-2 font-[var(--font-serif)] text-2xl italic leading-snug sm:text-[1.75rem]">
                Sports are not a side-interest. They build healthier bodies,
                stronger minds, better communities — and a country that shows
                up, for itself and for the world stage. Zorova is in this for
                the long game.
              </p>
              <figcaption className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
                <span
                  className="h-px w-8 bg-[var(--color-saffron-soft)]"
                  aria-hidden="true"
                />
                The Zorova Sports Commitment
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>
      </Section>

      {/* ───────── PART B · INITIATIVES & FUNDING ───────── */}
      <Section tone="bg" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="02" className="justify-center">
            Our Sports Initiatives & Funding
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
              A platform.{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                A patron.
              </span>{" "}
              A partner.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-2xl text-[var(--color-muted)]">
              Zorova is not just a recovery service for athletes. We actively
              contribute to the sports ecosystem — through athlete support,
              grassroots partnerships, coach education, and funding.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2" gap={0.08}>
          {initiatives.map((i, idx) => (
            <StaggerItem key={i.title}>
              <article className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-7 transition-all hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex items-center gap-3">
                  <span className="eyebrow-numeral text-2xl">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-[var(--color-saffron)]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-saffron)]">
                    {i.tag}
                  </span>
                </div>
                <h3 className="font-[var(--font-serif)] text-2xl font-bold text-[var(--color-ink)]">
                  {i.title}
                </h3>
                <p className="text-[var(--color-muted)]">{i.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── BELIEFS ───────── */}
      <Section tone="ink" grain>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="03" className="text-white/70">
              What We Believe
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-white sm:text-[2.5rem]">
                Four beliefs that{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  drive every decision
                </span>{" "}
                we make around sport.
              </h2>
            </Reveal>
          </div>

          <Stagger className="lg:col-span-7" gap={0.08}>
            {beliefs.map((b, i) => (
              <StaggerItem key={b}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-6 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/10">
                  <span className="font-[var(--font-serif)] text-4xl italic leading-none text-[var(--color-saffron-soft)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-white/85">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── PARTNER / APPLY FOR SUPPORT ───────── */}
      <Section tone="cream" grain id="partner">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="04">Partner With Us</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.5rem]">
                Are you an athlete, club, or coach?{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  Let's work together.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted)]">
                Whether you need recovery support for your team, want to
                nominate a promising athlete for the support program, or run a
                grassroots club that deserves backing — we want to hear from
                you.
              </p>
            </Reveal>

            <div className="mt-10 hidden lg:block">
              <TrophyGlyph
                aria-hidden="true"
                className="h-32 w-32 text-[var(--color-saffron)]"
              />
            </div>
          </div>

          <Reveal className="lg:col-span-7" delay={0.06}>
            <form
              className="grid gap-5 rounded-[var(--radius-lg)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10"
              aria-label="Sports partnership application form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" id="sp-name" required />
                <Field label="Role" id="sp-role" placeholder="Athlete · Coach · Club · Federation" required />
                <Field label="Sport / Discipline" id="sp-sport" required />
                <Field label="City" id="sp-city" required />
                <Field label="Email" id="sp-email" type="email" required />
                <Field label="Phone / WhatsApp" id="sp-phone" type="tel" required />
              </div>
              <div>
                <label
                  htmlFor="sp-interest"
                  className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  What are you applying for?
                </label>
                <select
                  id="sp-interest"
                  required
                  defaultValue=""
                  className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 text-[var(--color-ink)] focus-visible:border-[var(--color-accent)]"
                >
                  <option value="" disabled>
                    Select an initiative…
                  </option>
                  <option>Athlete Support Program</option>
                  <option>Team / Club Recovery Partnership</option>
                  <option>Grassroots Tournament Support</option>
                  <option>Coach Education Workshop</option>
                  <option>Funding / Grant Nomination</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="sp-note"
                  className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  Tell us about the athlete, team, or program
                </label>
                <textarea
                  id="sp-note"
                  rows={4}
                  required
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 py-3 text-[var(--color-ink)] focus-visible:border-[var(--color-accent)]"
                  placeholder="Level of competition, recent achievements, what support would unlock for you…"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="accent"
                className="mt-2 w-full sm:w-auto"
              >
                Apply for Support →
              </Button>
              <p className="text-xs text-[var(--color-muted)]">
                Submissions reviewed quarterly by the Zorova Sports Committee.
                We respond to every application within 30 days.
              </p>
            </form>
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
            <p className="mt-6 text-lg text-[var(--color-ink)]/75">
              Whether you're chasing a national title or a weekend 10K —
              recovery is how you get there, and how you stay there.
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

function Field({
  label,
  id,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--color-saffron)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 text-[var(--color-ink)] focus-visible:border-[var(--color-accent)]"
      />
    </div>
  );
}
