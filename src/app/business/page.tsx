import type { Metadata } from "next";

import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Zorova for Business",
  description:
    "Bring Zorova to your workplace. On-site massage, stretch clinics, and recurring programmes that reduce burnout, boost retention, and take benefits seriously.",
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  return (
    <ComingSoon
      eyebrow="Zorova for Business"
      headline="Make wellness part of the job —"
      italic="without making it an HR chore."
      lede="On-site chair massage, monthly stretch clinics, and quarterly wellness retreats for teams that measure retention in quiet acts of care."
      preview={[
        {
          t: "On-Site Chair Massage",
          b: "A quiet room, our therapists, fifteen minutes per employee. Measurable impact by Friday.",
        },
        {
          t: "Monthly Stretch Clinics",
          b: "Small group sessions tuned to your team's posture patterns — developer shoulders, designer wrists, founder jaws.",
        },
        {
          t: "Executive Programs",
          b: "Discreet, dedicated therapist coverage for leadership teams and high-travel roles.",
        },
        {
          t: "Wellness Retreats",
          b: "Full-day off-sites at partner properties — massage, stretch, breathwork, and food that earns its place.",
        },
        {
          t: "Reporting You Can Share",
          b: "Anonymised utilisation dashboards for the people who have to justify the line item.",
        },
        {
          t: "Flexible Billing",
          b: "Monthly invoicing, GST-compliant, department split codes, and a single account manager.",
        },
      ]}
      waitlistLabel="Request a Business Proposal"
      note="Our corporate team will share a deck, pricing, and pilot options within 48 hours."
    />
  );
}
