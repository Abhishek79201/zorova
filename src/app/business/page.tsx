import type { Metadata } from "next";

import { ComingSoon } from "@/components/coming-soon";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Zorova for Business",
  description:
    "Bring Zorova to your workplace. On-site recovery sessions, mobility clinics, and recurring body-care programmes that reduce burnout, boost retention, and take employee performance seriously.",
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  return (
    <ComingSoon
      eyebrow="Zorova for Business"
      headline="Make body care part of the job —"
      italic="without making it an HR chore."
      lede="On-site recovery sessions, monthly mobility clinics, and quarterly performance retreats for teams that measure retention in quiet acts of care."
      preview={[
        {
          t: "On-Site Recovery Sessions",
          b: "A quiet room, our therapists, fifteen minutes per employee. Measurable impact by Friday.",
        },
        {
          t: "Monthly Mobility Clinics",
          b: "Small group sessions tuned to your team's posture patterns — developer shoulders, designer wrists, founder jaws.",
        },
        {
          t: "Executive Programs",
          b: "Discreet, dedicated therapist coverage for leadership teams and high-travel roles.",
        },
        {
          t: "Performance Retreats",
          b: "Full-day off-sites at partner properties — recovery, mobility, breathwork, and food that earns its place.",
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
      heroImage={images.businessTeam}
    />
  );
}
