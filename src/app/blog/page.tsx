import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  DoshaGlyph,
  HandTouch,
  Lotus,
  Mandala,
  SunMandala,
  StretchFigure,
  WaveLine,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The Zorova Journal — honest, researched writing on recovery, mobility, body care, sleep, stress, and modern Indian performance.",
  alternates: { canonical: "/blog" },
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  illus: React.ReactNode;
  tone: string;
  bg: string;
};

const featured: Post = {
  slug: "abhyanga-beginners-guide",
  title: "Abhyanga, Unhurried — A Beginner's Guide to Ayurvedic Oil Massage",
  excerpt:
    "The practice is three thousand years old. The case for starting it this month is less complicated than you'd think.",
  category: "Ayurveda",
  readTime: "8 min",
  date: "04 April 2026",
  illus: <Mandala className="h-full w-full spin-slow" />,
  tone: "text-[var(--color-saffron-soft)]",
  bg: "bg-[var(--color-primary)]",
};

const posts: Post[] = [
  {
    slug: "desk-hip-openers",
    title: "Five Hip Openers for the Hundred-Meeting Week",
    excerpt:
      "If you sit for a living, your hips know more about your calendar than you do. Here's how to get ahead of it.",
    category: "Stretch",
    readTime: "6 min",
    date: "29 March 2026",
    illus: <StretchFigure className="h-full w-full" />,
    tone: "text-[var(--color-saffron)]",
    bg: "bg-[var(--color-cream)]",
  },
  {
    slug: "stress-cortisol-touch",
    title: "Cortisol, Touch, and Why a 60-Minute Massage Out-Performs a Weekend Away",
    excerpt:
      "A short tour through the hormone chart — and what professional touch actually does to it.",
    category: "Science",
    readTime: "9 min",
    date: "21 March 2026",
    illus: <HandTouch className="h-full w-full" />,
    tone: "text-[var(--color-primary)]",
    bg: "bg-[var(--color-accent-light)]",
  },
  {
    slug: "doshas-modern-reader",
    title: "Vata, Pitta, Kapha — A Modern Reader's Guide to the Three Doshas",
    excerpt:
      "Skip the mysticism. Here is the body-literacy layer Ayurveda actually offers — and when it's useful.",
    category: "Ayurveda",
    readTime: "7 min",
    date: "14 March 2026",
    illus: <DoshaGlyph variant="pitta" className="h-full w-full" />,
    tone: "text-[var(--color-saffron)]",
    bg: "bg-[var(--color-cream)]",
  },
  {
    slug: "senior-mobility",
    title: "The Quiet Case for Stretch Therapy in Your Parents' 60s",
    excerpt:
      "Falls, arthritis, and the two exercises a trained stretch coach will add to the routine you didn't know they had.",
    category: "Seniors",
    readTime: "6 min",
    date: "07 March 2026",
    illus: <SunMandala className="h-full w-full breathe" />,
    tone: "text-[var(--color-saffron)]",
    bg: "bg-[var(--color-accent-light)]",
  },
  {
    slug: "prenatal-safe-touch",
    title: "Prenatal Massage — What's Safe, What's Not, and What Women Actually Report",
    excerpt:
      "A practical, evidence-first guide for expectant mothers (and the people booking on their behalf).",
    category: "Prenatal",
    readTime: "10 min",
    date: "22 February 2026",
    illus: <Lotus className="h-full w-full breathe" />,
    tone: "text-[var(--color-primary)]",
    bg: "bg-[var(--color-cream)]",
  },
  {
    slug: "sleep-ritual",
    title: "A 20-Minute Pre-Sleep Ritual — Engineered for Indian Apartments",
    excerpt:
      "Lights, air, skin, breath, stretch. A short, honest routine that works on monsoon nights and July heat waves alike.",
    category: "Sleep",
    readTime: "5 min",
    date: "10 February 2026",
    illus: <WaveLine className="h-full w-full" />,
    tone: "text-[var(--color-saffron-soft)]",
    bg: "bg-[var(--color-primary)]",
  },
];

const categories = ["All", "Ayurveda", "Stretch", "Science", "Seniors", "Prenatal", "Sleep"];

export default function BlogPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="cream" bleed grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[440px] w-[440px] text-[var(--color-saffron)]/25"
        >
          <Mandala className="h-full w-full spin-slow" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <SectionEyebrow>The Zorova Journal</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--color-ink)]">
              Writing you can{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                actually act on
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg text-[var(--color-muted)]">
              Essays and guides on recovery, mobility, body care, sleep and
              modern performance — researched and edited by the Zorova care
              team.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ───────── FEATURED ───────── */}
      <Section tone="surface">
        <Link
          href={`/blog/${featured.slug}`}
          className="group block overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-divider)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]"
        >
          <div className="grid gap-0 lg:grid-cols-12">
            <div
              className={`relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto ${featured.bg}`}
            >
              <div
                className={`absolute inset-0 ${featured.tone} opacity-70 transition-opacity group-hover:opacity-100`}
                aria-hidden="true"
              >
                {featured.illus}
              </div>
              <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] backdrop-blur-sm">
                Featured · {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-5 bg-white p-8 lg:col-span-5 lg:p-12">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                <span>{featured.date}</span>
                <span
                  aria-hidden="true"
                  className="h-3 w-px bg-[var(--color-divider)]"
                />
                <span>{featured.readTime}</span>
              </div>
              <h2 className="font-[var(--font-serif)] text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">
                {featured.title}
              </h2>
              <p className="text-[var(--color-muted)]">{featured.excerpt}</p>
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-saffron)]">
                Read the essay
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </Link>
      </Section>

      {/* ───────── FILTERS + GRID ───────── */}
      <Section tone="bg">
        <div className="flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              type="button"
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                i === 0
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-divider)] bg-white text-[var(--color-primary)] hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <Stagger
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          gap={0.08}
        >
          {posts.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-saffron)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${p.bg}`}
                >
                  <div
                    className={`absolute inset-0 ${p.tone} opacity-70 transition-opacity group-hover:opacity-100`}
                    aria-hidden="true"
                  >
                    {p.illus}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                    <span>{p.category}</span>
                    <span
                      aria-hidden="true"
                      className="h-3 w-px bg-[var(--color-divider)]"
                    />
                    <span className="text-[var(--color-muted)]">
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-serif)] text-xl font-bold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-primary)]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{p.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[var(--color-primary)]">
                    Read
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── NEWSLETTER ───────── */}
      <Section tone="ink" grain>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Lotus className="mx-auto h-14 w-14 text-[var(--color-saffron-soft)] breathe" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-[var(--font-serif)] text-3xl font-bold text-white sm:text-5xl">
              Letters, monthly. Never more.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-white/70">
              One essay, one practice, one podcast recommendation — delivered on
              the first Sunday of every month.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                required
                placeholder="you@yourmail.com"
                className="h-12 flex-1 rounded-[var(--radius-sm)] border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/40 focus-visible:border-[var(--color-saffron-soft)]"
                aria-label="Email address"
              />
              <Button type="submit" size="lg" variant="onDark">
                Subscribe
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
