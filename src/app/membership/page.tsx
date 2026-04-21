import type { Metadata } from "next";

import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Zorova Membership — recurring recovery sessions, priority booking, and family-friendly body-care plans that make ongoing care effortless.",
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return (
    <ComingSoon
      eyebrow="Zorova Membership"
      headline="A quiet monthly practice —"
      italic="at a price that finally makes sense."
      lede="Recurring sessions, priority scheduling, a dedicated therapist, and gentle price breaks for the people who use Zorova most."
      preview={[
        {
          t: "Priority Scheduling",
          b: "Members book first, across the widest time windows — including the impossible evening and Sunday slots.",
        },
        {
          t: "Your Therapist, Kept",
          b: "A dedicated therapist matched to your preferences, with an optional backup for leave windows.",
        },
        {
          t: "Quiet Price Breaks",
          b: "Up to 20% off every session — no coupons, no apps-within-apps, no gamification.",
        },
        {
          t: "Family Plans",
          b: "One subscription, up to four members in your household — share sessions freely across the family.",
        },
        {
          t: "Rollover Sessions",
          b: "Life happens. Sessions carry forward for up to three months — no expiry games.",
        },
        {
          t: "Members-Only Modalities",
          b: "Quarterly access to specialist recovery modalities — prenatal, senior mobility, sports recovery — as they enter rotation.",
        },
      ]}
      waitlistLabel="Join Membership Waitlist"
      note="You'll receive a personal onboarding call before anyone else."
    />
  );
}
