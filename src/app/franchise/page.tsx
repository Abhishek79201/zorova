import type { Metadata } from "next";

import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Own a Zorova Franchise",
  description:
    "Bring the Zorova wellness model to your city. A proven on-demand platform, therapist training, brand support, and a clear path to purpose-driven ownership.",
  alternates: { canonical: "/franchise" },
};

export default function FranchisePage() {
  return (
    <ComingSoon
      eyebrow="Own a Zorova Franchise"
      headline="A wellness business —"
      italic="built on trust, not treadmills."
      lede="Bring the Zorova platform to a city that isn't ours yet. We supply the operating system, the therapist network, the brand, and the quiet hand behind every session."
      preview={[
        {
          t: "Proven Unit Economics",
          b: "Audited per-session P&L from our five existing cities — shared before you sign anything.",
        },
        {
          t: "Full-Stack Platform",
          b: "Booking, therapist management, safety protocols, and payments — all running day one.",
        },
        {
          t: "Therapist Training Academy",
          b: "Four-week onboarding at our Bengaluru HQ for every therapist who joins your city.",
        },
        {
          t: "Brand & Marketing",
          b: "National campaigns, editorial calendar, and a local playbook for the first 12 months.",
        },
        {
          t: "Territory Exclusivity",
          b: "Postcode-based exclusivity within your launch city — no overlap, no intra-brand competition.",
        },
        {
          t: "Founder-Led Mentorship",
          b: "Direct line to our co-founders for the first year. Monthly reviews, quarterly on-site visits.",
        },
      ]}
      waitlistLabel="Request Franchise Info Pack"
      note="Our expansion team reviews applications in the order they arrive."
    />
  );
}
