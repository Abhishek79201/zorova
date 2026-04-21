import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionEyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Lotus, Mandala, WaveLine } from "@/components/illustrations";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help & Contact",
  description:
    "Get in touch with Zorova by email, phone, or WhatsApp. Book a recovery session, ask a question, or raise a concern — we respond within a few hours, every day.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "WhatsApp",
    detail: "Fastest — typically under 10 minutes",
    value: "Chat with us",
    href: `https://wa.me/${siteConfig.whatsappNumber}`,
    external: true,
  },
  {
    label: "Call",
    detail: "9 AM – 9 PM IST, every day",
    value: siteConfig.contactPhone,
    href: `tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`,
    external: false,
  },
  {
    label: "Email",
    detail: "Replies within 4 business hours",
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    external: false,
  },
];

const faqs = [
  {
    q: "What happens after I book a recovery session?",
    a: "You'll receive an immediate WhatsApp confirmation with your therapist's name, photo, and ID, along with a live arrival timer. A brief health questionnaire is shared 30 minutes before the session so your therapist can tailor the experience.",
  },
  {
    q: "Do I need to prepare anything at home?",
    a: "Just a quiet room, approximately 2.5m × 2.5m of floor space, and access to electricity and water. Your therapist brings linens, recovery oils, the portable table, and everything needed. If you'd prefer to use your own sheets, simply let us know.",
  },
  {
    q: "How do I reschedule or cancel?",
    a: "You can reschedule free of charge up to 2 hours before your session via the confirmation WhatsApp thread. Cancellations within 2 hours incur a 25% fee — full details on the Cancellation Policy page.",
  },
  {
    q: "Are your therapists insured and background-checked?",
    a: "Every therapist on Zorova undergoes ID, address, and work-history verification, holds a current certification from an accredited program, and is covered by Zorova's professional liability insurance.",
  },
  {
    q: "Which cities do you currently serve?",
    a: "We're active in Mumbai, Bengaluru, Delhi-NCR, Pune, and Hyderabad. Expansion to Chennai, Kolkata, and Ahmedabad is planned for 2026. Enter your pincode on the booking page for a live availability check.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, credit and debit cards, and all major wallets. Corporate wellness invoices and post-paid arrangements are available for Zorova for Business clients.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <Section tone="ink" bleed grain>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] text-white/10"
        >
          <Mandala className="h-full w-full spin-slower" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionEyebrow className="text-white/70">
              Help & Contact
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-[var(--font-serif)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.04] tracking-[-0.02em] text-white">
              We're here —{" "}
              <span className="serif-italic text-[var(--color-saffron-soft)]">
                however you'd rather reach us
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Book a recovery session, raise a concern, or just ask — the
              Zorova team answers every message, usually within a few minutes.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ───────── CHANNELS ───────── */}
      <Section tone="cream" grain className="-mt-16 sm:-mt-24">
        <Stagger className="grid gap-5 md:grid-cols-3" gap={0.08}>
          {channels.map((c, i) => (
            <StaggerItem key={c.label}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="card-warm group relative block h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="eyebrow-numeral text-sm">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-[var(--font-serif)] text-2xl font-bold text-[var(--color-ink)]">
                  {c.label}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {c.detail}
                </p>
                <p className="mt-6 font-semibold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-saffron)]">
                  {c.value} →
                </p>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── FORM + ASIDE ───────── */}
      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="01">Send a Message</SectionEyebrow>
            <Reveal>
              <h2 className="type-heading mt-5 text-[var(--color-ink)]">
                Tell us what you need —{" "}
                <span className="serif-italic text-[var(--color-saffron)]">
                  we'll take it from here
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="type-body mt-5 text-[var(--color-muted)]">
                Whether it's a booking request, feedback, or a question about a
                past session — drop it here. We read every message personally.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-[var(--color-cream)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                  Office
                </p>
                <p className="mt-2 text-[var(--color-ink)]">
                  Zorova Wellness Pvt. Ltd.
                  <br />
                  HSR Layout Sector 2, Bengaluru 560102
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                  Support Hours
                </p>
                <p className="mt-2 text-[var(--color-ink)]">
                  9 AM – 9 PM IST, every day
                  <br />
                  24 / 7 via the in-app SOS for active sessions
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              className="grid gap-5 rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10"
              aria-label="Contact Zorova"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="c-name" label="Name" required />
                <Field id="c-city" label="City" />
                <Field id="c-email" label="Email" type="email" required />
                <Field id="c-phone" label="Phone / WhatsApp" type="tel" />
              </div>
              <div>
                <label
                  htmlFor="c-topic"
                  className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  What's it about?
                </label>
                <select
                  id="c-topic"
                  defaultValue=""
                  className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 text-[var(--color-ink)]"
                >
                  <option value="" disabled>
                    Choose a topic…
                  </option>
                  <option>Book a recovery session</option>
                  <option>Question about a past session</option>
                  <option>Billing / payments</option>
                  <option>Corporate / bulk booking</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="c-msg"
                  className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  Message
                </label>
                <textarea
                  id="c-msg"
                  rows={5}
                  required
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 py-3 text-[var(--color-ink)]"
                  placeholder="Tell us a little about what you need…"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="accent"
                className="mt-2 w-full sm:w-auto"
              >
                Send Message →
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>

      {/* ───────── FAQ ───────── */}
      <Section tone="cream" grain>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow number="02" className="justify-center">
            Frequent Questions
          </SectionEyebrow>
          <Reveal>
            <h2 className="type-heading mt-5 text-[var(--color-ink)]">
              Most answers,{" "}
              <span className="serif-italic text-[var(--color-saffron)]">
                before you ask
              </span>
              .
            </h2>
          </Reveal>
        </div>

        <Stagger className="mx-auto mt-14 max-w-3xl space-y-3" gap={0.06}>
          {faqs.map((f, i) => (
            <StaggerItem key={f.q}>
              <details className="group rounded-[var(--radius-lg)] border border-[var(--color-divider)] bg-white p-6 open:shadow-[var(--shadow-card-hover)]">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <div className="flex items-baseline gap-4">
                    <span className="eyebrow-numeral text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-[var(--font-serif)] text-lg font-bold text-[var(--color-ink)] sm:text-xl">
                      {f.q}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-2xl leading-none text-[var(--color-saffron)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-10 text-[var(--color-muted)]">{f.a}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ───────── CTA ───────── */}
      <Section tone="warm" grain>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Lotus className="mx-auto h-14 w-14 text-[var(--color-primary)] breathe" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-[var(--font-serif)] text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
              Still have a question?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="primary">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Read Our Story</Link>
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
        className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-divider)] bg-white px-4 text-[var(--color-ink)]"
      />
    </div>
  );
}
