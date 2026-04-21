import type { Metadata } from "next";

import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Zorova Gifts",
  description:
    "Give the gift of in-home recovery and body care. Beautifully crafted digital Zorova gift cards for performance, recovery, and everyday care. Launching soon.",
  alternates: { canonical: "/gifts" },
};

export default function GiftsPage() {
  return (
    <ComingSoon
      eyebrow="Zorova Gifts"
      headline="The gift of a —"
      italic="quieter body."
      lede="A beautifully designed digital gift card, redeemable against any Zorova recovery session. For birthdays, anniversaries, new parents, graduations, and the times nothing else quite fits."
      preview={[
        {
          t: "Any Denomination",
          b: "From a single session to a quarter of quiet care — priced from ₹2,000 to ₹50,000.",
        },
        {
          t: "Instant or Scheduled",
          b: "Send immediately, or schedule delivery for a birthday, anniversary, or first-day.",
        },
        {
          t: "Editorial Designs",
          b: "Six illustrated gift cards across the year — each tied to a season, a moment, or a mood.",
        },
        {
          t: "Personal Note",
          b: "A quiet, well-typeset handwritten-style note — not emoji confetti.",
        },
        {
          t: "Redeemable Anywhere",
          b: "Any Zorova city, any session type, any therapist — no lock-ins, no expiry games.",
        },
        {
          t: "Physical Keepsake Option",
          b: "A printed, letterpress keepsake card posted to the recipient — optional add-on.",
        },
      ]}
      waitlistLabel="Notify Me at Launch"
      note="Early subscribers receive 10% off their first gift."
    />
  );
}
