import type { Metadata } from "next";

import { LegalLayout, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Cancellation and rescheduling policy for services booked through Flexiva Private Limited (Zorova).",
  alternates: { canonical: "/cancellation" },
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          This Cancellation Policy forms part of our{" "}
          <a className="underline" href="/terms">
            Terms &amp; Conditions
          </a>{" "}
          and applies to all bookings made on the Flexiva Private Limited
          platform (referred to as the &ldquo;Service&rdquo; or
          &ldquo;Platform&rdquo;). By confirming a booking, you agree to the
          cancellation terms set out below.
        </p>
        <p>
          Our cancellation policy ensures that we can efficiently accommodate
          all our clients and manage our schedule effectively. We understand
          that unforeseen circumstances may arise, and we appreciate your
          understanding in adhering to these guidelines.
        </p>
      </>
    ),
  },
  {
    id: "cancellation-window",
    title: "Cancellation window",
    body: (
      <p>
        <strong>
          You may cancel your appointment without any charge up to 24 hours
          preceding your scheduled appointment, or within 1 hour of making
          the booking (whichever is applicable).
        </strong>{" "}
        Cancellations made inside the free window do not attract any
        cancellation fee, and any amount already collected will be refunded
        in accordance with the &ldquo;Refunds&rdquo; section below.
      </p>
    ),
  },
  {
    id: "same-day-cancellation",
    title: "Same-day cancellation",
    body: (
      <p>
        <strong>
          For cancellations made on the same day as the appointment, a 50%
          charge of the scheduled service will apply.
        </strong>{" "}
        This helps us compensate Service Professionals who have reserved the
        slot and may have declined other bookings.
      </p>
    ),
  },
  {
    id: "late-cancellation",
    title: "Late cancellation",
    body: (
      <p>
        <strong>
          For cancellations made within two (2) hours of the scheduled
          appointment time, or after the scheduled appointment time, the
          full price of the scheduled service will be charged.
        </strong>{" "}
        No-shows — where the Service Professional arrives at the appointment
        location and cannot provide the service — are treated as late
        cancellations.
      </p>
    ),
  },
  {
    id: "natural-occurrence",
    title: "Cancellation due to natural occurrence",
    body: (
      <p>
        In the event of unforeseen natural occurrences — such as severe
        weather conditions or any other natural occurrences that make
        travelling to the appointment unsafe — we will reschedule the
        service for a later date at no additional charge. No cancellation
        fee will apply to bookings that cannot proceed due to such events.
      </p>
    ),
  },
  {
    id: "substitute-providers",
    title: "Substitute providers",
    body: (
      <p>
        In case of provider unavailability or cancellation by the Service
        Professional, we will offer substitute providers from our network of
        registered professionals. If no substitute can be provided, the
        booking will be cancelled at no charge to you and any amount already
        collected will be refunded in full.
      </p>
    ),
  },
  {
    id: "how-to-cancel",
    title: "How to cancel or reschedule",
    body: (
      <>
        <p>
          To cancel or reschedule an appointment, please contact us within
          the stipulated time frame through any of the following channels:
        </p>
        <ul>
          <li>Through the &ldquo;My Bookings&rdquo; section of the Zorova platform;</li>
          <li>
            Via the booking confirmation thread on WhatsApp or SMS;
          </li>
          <li>
            By writing to our support team at <strong>care@zorova.in</strong>;
            or
          </li>
          <li>
            By calling our customer care line published on the{" "}
            <a className="underline" href="/contact">
              Help &amp; Contact
            </a>{" "}
            page.
          </li>
        </ul>
        <p>
          Please note that the applicable cancellation charge is determined
          by the time at which the cancellation request is received by us,
          not by the time you initiate the request.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "Refunds",
    body: (
      <>
        <p>
          Charges and Fees paid are final and non-refundable, unless
          determined otherwise by Flexiva or required by applicable laws. In
          line with our Terms, where a refund is due under this policy, it
          will be processed to the original payment method used at the time
          of booking.
        </p>
        <p>
          Refund timelines are driven by our Payment Processor and the
          payment method used at the time of booking. In most cases, once
          initiated, refunds reflect in your account within a reasonable
          period. We hold no liability for any delays arising from the
          Payment Processor&rsquo;s services.
        </p>
      </>
    ),
  },
  {
    id: "service-professional-conduct",
    title: "Early termination for inappropriate conduct",
    body: (
      <p>
        If a Flexiva Member engages in conduct deemed inappropriate or
        unsafe by a Service Professional — resulting in the premature
        termination of the service — Flexiva will not issue a refund. This
        is consistent with our{" "}
        <a className="underline" href="/terms">
          Terms &amp; Conditions
        </a>
        , including our customer conduct, non-discrimination, and
        zero-tolerance provisions.
      </p>
    ),
  },
  {
    id: "amendments",
    title: "Changes to this policy",
    body: (
      <p>
        Flexiva reserves the right to reasonably amend this Cancellation
        Policy at any time at its sole discretion. Any changes will be
        published on this page and will not impact confirmed bookings made
        before the revised policy is published on the platform.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        For questions, exceptions, or to raise a concern about a specific
        booking, please write to us at <strong>care@zorova.in</strong>. Our
        team reviews every message personally and responds within the
        timelines set out in our{" "}
        <a className="underline" href="/contact">
          Help &amp; Contact
        </a>{" "}
        page.
      </p>
    ),
  },
];

export default function CancellationPage() {
  return (
    <LegalLayout
      eyebrow="Legal · Cancellations"
      title="Cancellation"
      italic="Policy."
      effective="01 April 2026"
      intro={
        <>
          This page sets out how cancellations, reschedules, and related
          refunds work on the Flexiva Private Limited platform. It forms part
          of our Terms &amp; Conditions — please read both together.
        </>
      }
      sections={sections}
    />
  );
}
