import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  HeartPulseGlyph,
  Mandala,
  ShieldCheckGlyph,
  WomanGlyph,
} from "@/components/illustrations";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Build your career with a company that has your back. Zorova is women-first, safety-first, and committed to growth and independence for every professional on our platform.",
  alternates: { canonical: "/careers" },
};

const commitments = [
  {
    t: "Growth, by design",
    b: "Structured progression — assistant, therapist, senior therapist, mentor. Every role has a next rung, a visible path, and the training to earn it.",
  },
  {
    t: "Independence in your hours",
    b: "Choose your hours. Choose your clients. Choose your neighbourhoods. Zorova runs on the schedule that works for your life, not the other way around.",
  },
  {
    t: "Best-in-industry earnings",
    b: "Keep up to 80% of every session. Transparent ledger. Weekly settlements. Performance bonuses that show up monthly — not promised annually.",
  },
  {
    t: "Career, not just work",
    b: "Paid upskilling, certification reimbursement, mentorship from senior therapists, and a real route into full-time leadership if you want it.",
  },
];

const safetyPillars = [
  {
    badge: "Verified Safe Workplace",
    title: "Verified Clients Only",
    body: "Government-ID verification before the first booking. Rating history reviewed before every assignment. Three-strike removal policy.",
  },
  {
    badge: "Women-First Policies",
    title: "Pre-Session Home Audit",
    body: "First-visit homes are screened. Red flags — solo male residents, previous complaints, unclear addresses — are filtered before the booking is confirmed.",
  },
  {
    badge: "24/7 SOS Support",
    title: "In-App Panic Button",
    body: "Discreet, always accessible. Tap, shake, or voice-trigger — a dedicated trust & safety specialist calls you back in under 90 seconds.",
  },
  {
    badge: "GPS Co-Presence",
    title: "Real-Time Safety Monitoring",
    body: "Session start and end check-ins. GPS co-presence with the office. Automatic escalation if something feels wrong — even before you call.",
  },
  {
    badge: "Zero Tolerance",
    title: "Instant Client Removal",
    body: "Any inappropriate behaviour — a tone, a comment, a glance — and the client is permanently off the platform. No warnings, no grey areas, no revenue override.",
  },
  {
    badge: "Independent Audit",
    title: "Third-Party Safety Review",
    body: "Our safety systems are audited twice a year by an independent women's safety organisation. Findings are published openly — even when they hurt.",
  },
];

const voices = [
  {
    name: "Anjali",
    role: "Senior Recovery Therapist",
    body: "I left a salon job where I was scared to walk back to the bus stop. At Zorova I finish at 9pm and a cab is already booked. It's that simple, and it changed my life.",
  },
  {
    name: "Priya",
    role: "Mobility Trainer",
    body: "I'm a single mother. The schedule flexibility here means I drop my son at school, work three sessions, and am back for pickup. And I earn more than I did in my last full-time role.",
  },
  {
    name: "Fatima",
    role: "Sports Recovery Specialist",
    body: "The training budget is real — I got my sports-taping certification fully reimbursed. Nobody asked me to justify the cost. The company assumed I'd use it well.",
  },
];

const roles = [
  { label: "Recovery Therapist", open: "12 openings", cities: "Mumbai · Delhi · Bengaluru" },
  { label: "Mobility / Stretch Coach", open: "6 openings", cities: "Pan-India" },
  { label: "Sports Recovery Specialist", open: "4 openings", cities: "Bengaluru · Pune · Hyderabad" },
  { label: "Ayurveda Practitioner", open: "4 openings", cities: "Bengaluru · Pune" },
  { label: "Operations Lead", open: "2 openings", cities: "HQ — Bengaluru" },
  { label: "Customer Experience", open: "3 openings", cities: "Remote" },
  { label: "Content & Marketing", open: "2 openings", cities: "Remote / Hybrid" },
];

const benefits = [
  "Top-of-industry payouts (up to 80%)",
  "Weekly settlements",
  "Free upskilling & certifications",
  "Paid parental leave",
  "Health insurance from day one",
  "Performance bonuses — monthly",
  "Home-safe-commute budget",
  "Mental-health support access",
];

export default function CareersPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="ink" bleed grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[620px] w-[620px] text-white/10"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full border border-[var(--color-saffron-soft)]/40 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-saffron-soft)] backdrop-blur-sm">
                <ShieldCheckGlyph className="h-4 w-4" />
                Work With Zorova · Women First
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
                Build Your Career With a Company That{" "}
                <span className="serif-italic text-[var(--color-saffron-soft)]">
                  Has Your Back.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
                Zorova is built, end-to-end, to protect and uplift the people
                who work here — especially women. Growth, independence,
                earnings, safety. Not as policies on a careers page, but as
                the default.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="#apply">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <Link href="#safety">See Our Safety Standards →</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  "Verified Safe Workplace",
                  "Women-First Policies",
                  "24/7 SOS Support",
                ].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur-sm"
                  >
                    <ShieldCheckGlyph className="h-4 w-4 text-[var(--color-saffron-soft)]" />
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-primary-dark)]">
              <Image
                src={images.careersWomen.src}
                alt={images.careersWomen.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/30 p-6 text-white backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-saffron-soft)]">
                  Confident. Independent. Respected.
                </p>
                <p className="mt-2 font-[var(--font-serif)] text-xl italic">
                  "I don't negotiate for safety here. It's already done."
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* ───────── COMMITMENT TO WOMEN ───────── */}
      <Section tone="cream" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="01" className="justify-center">
            Our Commitment to Women
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
              Growth. Independence. Opportunity.{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                Not negotiated — default.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-2xl text-[var(--color-muted)]">
              Zorova genuinely supports women's growth, independence, and
              career opportunities — because a recovery & body-care category
              that isn't safe or empowering for its female professionals isn't
              one worth building.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2" gap={0.08}>
          {commitments.map((c, i) => (
            <StaggerItem key={c.t}>
              <div className="flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-saffron)]/20 bg-white p-7 shadow-[var(--shadow-card)]">
                <div className="flex items-baseline gap-4">
                  <span className="eyebrow-numeral text-2xl">
                    0{i + 1}
                  </span>
                  <h3 className="type-subheading text-[var(--color-primary)]">
                    {c.t}
                  </h3>
                </div>
                <p className="text-[var(--color-muted)]">{c.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── SAFETY FIRST ───────── */}
      <Section tone="surface" id="safety">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02">
              Safety First — not a feature
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.5rem]">
                Your safety is{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  the floor
                </span>
                , not the ceiling.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                At Zorova, safety and dignity come before growth, revenue, and
                convenience. We are prepared to lose clients, money, and
                bookings to keep that promise — and we have, more than once.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-saffron)]/40 bg-[var(--color-saffron-light)]/40 px-5 py-3 text-sm font-semibold text-[var(--color-ink)]">
                <ShieldCheckGlyph className="h-5 w-5 text-[var(--color-saffron)]" />
                Reviewed twice yearly by an independent women's safety auditor
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 hidden lg:block">
                <HeartPulseGlyph
                  aria-hidden="true"
                  className="h-40 w-40 text-[var(--color-saffron)]"
                />
              </div>
            </Reveal>
          </div>

          <Stagger className="lg:col-span-7" gap={0.06}>
            {safetyPillars.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-6 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--color-divider)]">
                  <span className="font-[var(--font-serif)] text-4xl italic leading-none text-[var(--color-saffron)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-saffron)]/40 bg-[var(--color-saffron-light)]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                      <ShieldCheckGlyph className="h-3 w-3" />
                      {s.badge}
                    </span>
                    <h3 className="mt-3 type-subheading text-[var(--color-ink)]">
                      {s.title}
                    </h3>
                  </div>
                  <span aria-hidden="true" />
                  <p className="text-[var(--color-muted)]">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── VOICES ───────── */}
      <Section tone="bg" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="03" className="justify-center">
            Voices from the team
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.5rem]">
              What women at Zorova{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                actually say.
              </span>
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid gap-5 md:grid-cols-3"
          gap={0.08}
        >
          {voices.map((v) => (
            <StaggerItem key={v.name}>
              <figure className="flex h-full flex-col gap-5 rounded-[var(--radius-lg)] bg-white p-7 shadow-[var(--shadow-card)]">
                <span className="font-[var(--font-serif)] text-5xl leading-none text-[var(--color-saffron)]">
                  &ldquo;
                </span>
                <blockquote className="font-[var(--font-serif)] text-lg italic leading-snug text-[var(--color-ink)]">
                  {v.body}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--color-divider)] pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-saffron-light)] text-[var(--color-saffron)]">
                    <WomanGlyph className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-[var(--font-serif)] text-lg font-bold text-[var(--color-ink)]">
                      {v.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {v.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── BENEFITS + OPEN ROLES ───────── */}
      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="04">Benefits</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.5rem]">
                What you get,{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  on every rung.
                </span>
              </h2>
            </Reveal>
            <Stagger className="mt-8 flex flex-wrap gap-3" gap={0.04}>
              {benefits.map((b) => (
                <StaggerItem key={b}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-divider)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-saffron)]"
                    />
                    {b}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="lg:col-span-7" id="roles">
            <SectionEyebrow number="05">Open Roles</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.5rem]">
                Work you'll{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  recognise yourself in
                </span>
                .
              </h2>
            </Reveal>

            <Stagger
              className="mt-8 divide-y divide-[var(--color-divider)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white"
              gap={0.04}
            >
              {roles.map((r) => (
                <StaggerItem key={r.label}>
                  <div className="group flex flex-col justify-between gap-4 p-6 transition-colors hover:bg-[var(--color-accent-light)] sm:flex-row sm:items-center">
                    <div>
                      <h3 className="font-[var(--font-serif)] text-xl font-bold text-[var(--color-ink)]">
                        {r.label}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {r.cities}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-saffron)]">
                        {r.open}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-xl text-[var(--color-primary)] transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* ───────── APPLY ───────── */}
      <Section tone="cream" grain id="apply">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="06">Apply Now</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-6 text-[var(--color-ink)] sm:text-[2.75rem]">
                Have a skill to offer?
                <br />
                <span className="serif-italic text-[var(--color-saffron)]">
                  We'd love to work with you.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
                Whether you specialise in recovery, mobility, sports therapy,
                Ayurveda, or operations — share your background below and our
                team will reach back within 48 hours.
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.06}>
            <form
              className="grid gap-5 rounded-[var(--radius-lg)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10"
              aria-label="Professional application form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" id="ap-name" required />
                <Field label="City" id="ap-city" required />
                <Field label="Email" id="ap-email" type="email" required />
                <Field label="Phone / WhatsApp" id="ap-phone" type="tel" required />
              </div>
              <div>
                <label
                  htmlFor="ap-role"
                  className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  Role you're applying for
                </label>
                <select
                  id="ap-role"
                  required
                  defaultValue=""
                  className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 text-[var(--color-ink)] focus-visible:border-[var(--color-accent)]"
                >
                  <option value="" disabled>
                    Select a role…
                  </option>
                  {roles.map((r) => (
                    <option key={r.label}>{r.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="ap-exp"
                  className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  Years of experience & certifications
                </label>
                <textarea
                  id="ap-exp"
                  rows={4}
                  required
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 py-3 text-[var(--color-ink)] focus-visible:border-[var(--color-accent)]"
                  placeholder="e.g. 4 years sports recovery, NASM-CPT, PNF certification…"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="accent"
                className="mt-2 w-full sm:w-auto"
              >
                Send Application →
              </Button>
              <p className="text-xs text-[var(--color-muted)]">
                By applying, you agree to our{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>
                . We never share your details with clients before you accept a
                booking.
              </p>
            </form>
          </Reveal>
        </div>
      </Section>

      {/* ───────── CLOSING CTA ───────── */}
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

function Field({
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
          <span className="ml-1 text-[var(--color-saffron)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 text-[var(--color-ink)] focus-visible:border-[var(--color-accent)]"
      />
    </div>
  );
}
