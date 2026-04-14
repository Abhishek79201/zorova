import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  HandTouch,
  LeafBranch,
  Lotus,
  Mandala,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Work with Zorova",
  description:
    "Build a flexible, well-paid, safe career delivering professional wellness to Indian homes. Zorova partners with certified therapists, stretch trainers, and wellness professionals.",
  alternates: { canonical: "/careers" },
};

const earnings = [
  { t: "Top-of-industry Payouts", b: "Keep up to 80% of every session. No hidden cuts, no shifting commissions." },
  { t: "Transparent Ledger", b: "Real-time earnings view — every booking, tip, and bonus visible in your app." },
  { t: "Weekly Settlements", b: "Money moves to your account every Monday. No seven-day waits, no approvals." },
  { t: "Performance Bonuses", b: "Consistent quality is rewarded monthly — not annually, not arbitrarily." },
];

const safety = [
  {
    title: "Dedicated Trust & Safety",
    body: "A live 24/7 team, trained specifically for our industry, ready at the press of a button.",
  },
  {
    title: "Zero Tolerance Policy",
    body: "Immediate, visible action on any inappropriate client behaviour. No warnings. No grey areas.",
  },
  {
    title: "Real-Time Secure Assistance",
    body: "Discreet in-app SOS. Dial, tap, or shake — help routed to you in under 90 seconds.",
  },
  {
    title: "Verified Clients Only",
    body: "Government-ID verification before the first booking. Rating history reviewed before every assignment.",
  },
  {
    title: "Continuous Safety Monitoring",
    body: "Session start / end check-ins, GPS co-presence, and automatic red-flag escalation.",
  },
];

const roles = [
  { label: "Massage Therapist", open: "12 openings", cities: "Mumbai · Delhi · Bengaluru" },
  { label: "Stretch / Mobility Coach", open: "6 openings", cities: "Pan-India" },
  { label: "Ayurveda Practitioner", open: "4 openings", cities: "Bengaluru · Pune" },
  { label: "Operations Lead", open: "2 openings", cities: "HQ — Bengaluru" },
  { label: "Customer Experience", open: "3 openings", cities: "Remote" },
  { label: "Content & Marketing", open: "2 openings", cities: "Remote / Hybrid" },
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

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionEyebrow className="text-white/70">
              Work with Zorova
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
              Empower your earnings —{" "}
              <span className="serif-italic text-[var(--color-saffron-soft)]">
                and your hours
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
              At Zorova, we believe you should be in control of what you earn —
              and who you earn it with. Our payment structure is the best in the
              industry. Our safety is the strictest. Our clients, the most
              respectful you'll ever meet.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="onDark">
                <Link href="#apply">Apply as a Professional</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Link href="#roles">See All Roles →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ───────── EARNINGS ───────── */}
      <Section tone="cream" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="01" className="justify-center">
            The Earnings Promise
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              A payment structure that's{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                unmatched
              </span>{" "}
              in the industry.
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2" gap={0.1}>
          {earnings.map((e, i) => (
            <StaggerItem key={e.t}>
              <div className="card-warm flex h-full flex-col gap-3 p-7">
                <div className="flex items-baseline gap-4">
                  <span className="eyebrow-numeral text-2xl">
                    0{i + 1}
                  </span>
                  <h3 className="type-subheading text-[var(--color-primary)]">
                    {e.t}
                  </h3>
                </div>
                <p className="text-[var(--color-muted)]">{e.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── SAFETY ───────── */}
      <Section tone="surface" className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 h-40 w-80 text-[var(--color-saffron)]/50"
        >
          <LeafBranch className="h-full w-full" />
        </div>

        <div className="relative grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02">
              Safety & Care for Female Professionals
            </SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)] sm:text-[2.5rem]">
                Your safety is not a{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  feature
                </span>
                . It's the floor.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                At Zorova, your safety, dignity, and comfort come first. We are
                deeply committed to creating a secure and respectful environment
                for every female professional on our platform — and we are
                prepared to lose clients, money, and growth to keep that
                promise.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-saffron)]/40 bg-[var(--color-saffron-light)]/30 px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[var(--color-saffron)]"
                />
                Women-first design — reviewed by third-party auditors
              </div>
            </Reveal>
          </div>

          <Stagger className="lg:col-span-7" gap={0.08}>
            {safety.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-6 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--color-divider)]">
                  <span className="font-[var(--font-serif)] text-4xl italic leading-none text-[var(--color-saffron)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-subheading text-[var(--color-ink)]">
                    {s.title}
                  </h3>
                  <span aria-hidden="true" />
                  <p className="text-[var(--color-muted)]">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ───────── OPEN ROLES ───────── */}
      <Section tone="bg" id="roles">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="03" className="justify-center">
            Open Roles
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              Work you'll{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                recognise yourself in
              </span>
              .
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mx-auto mt-14 max-w-4xl divide-y divide-[var(--color-divider)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white"
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
      </Section>

      {/* ───────── APPLICATION FORM ───────── */}
      <Section tone="cream" grain id="apply">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="04">Apply</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)]">
                Have a skill to offer?
                <br />
                <span className="serif-italic text-[var(--color-saffron)]">
                  Let's work together.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                Whether you specialise in massage therapy, stretching, wellness
                services, or marketing — share your expertise below and our team
                will reach back within 48 hours.
              </p>
            </Reveal>

            <div className="mt-10 hidden lg:block">
              <HandTouch
                aria-hidden="true"
                className="h-40 w-40 text-[var(--color-primary)]"
              />
              <Lotus
                aria-hidden="true"
                className="-mt-8 ml-24 h-24 w-24 text-[var(--color-saffron)] breathe"
              />
            </div>
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
                  placeholder="e.g. 4 years in Ayurvedic abhyanga, NASM-CPT, IAHA-accredited…"
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
