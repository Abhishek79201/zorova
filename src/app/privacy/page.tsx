import type { Metadata } from "next";

import { LegalLayout, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Flexiva Private Limited (Zorova) collects, stores, uses, processes, and discloses your personal data.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "background",
    title: "Background and key information",
    body: (
      <>
        <p>
          <strong>(a) How this Policy applies.</strong> This Policy applies to
          individuals who access or use the Services or otherwise avail the
          Professional Services. For the avoidance of doubt, references to
          &ldquo;you&rdquo; across this Policy are to an end user that uses the
          Platform. By using the Platform, you consent to the collection,
          storage, usage, and disclosure of your personal data, as described in
          and collected by us in accordance with this Policy.
        </p>
        <p>
          <strong>(b) Review and Updates.</strong> We regularly review and
          update our Privacy Policy, and we request you to regularly review
          this Policy. It is important that the personal data we hold about you
          is accurate and current. Please let us know if your personal data
          changes during your relationship with us.
        </p>
        <p>
          <strong>(c) Third-Party Services.</strong> The Platform may include
          links to third-party websites, plug-ins, services, and applications
          (&ldquo;Third-Party Services&rdquo;). Clicking on those links or
          enabling those connections may allow third parties to collect or
          share data about you. We neither control nor endorse these
          Third-Party Services and are not responsible for their privacy
          statements. When you leave the Platform or access third-party links
          through the Platform, we encourage you to read the privacy policy of
          such third-party service providers.
        </p>
      </>
    ),
  },
  {
    id: "personal-data-collected",
    title: "Personal data that we collect",
    body: (
      <>
        <p>
          <strong>(a)</strong> We collect different types of personal data
          about you. This includes, but is not limited to:
        </p>
        <ul>
          <li>
            <strong>Contact Data</strong> — your mailing or home address,
            location, email addresses, and mobile numbers.
          </li>
          <li>
            <strong>Identity and Profile Data</strong> — your name, username
            or similar identifiers, photographs, and gender.
          </li>
          <li>
            <strong>Marketing and Communications Data</strong> — your address,
            email address, information posted in service requests, offers,
            wants, feedback, comments, pictures and discussions in our blog and
            chat boxes, responses to user surveys and polls, your preferences
            in receiving marketing communications from us and our third
            parties, and your communication preferences. We also collect your
            chat and call records when you communicate with service
            professionals through the Platform.
          </li>
          <li>
            <strong>Technical Data</strong> — your IP address, browser type,
            internet service provider, details of operating system, access
            time, page views, device ID, device type, frequency of visiting
            our website and use of the Platform, website and mobile
            application activity, clicks, date and time stamps, location data,
            and other technology on the devices that you use to access the
            Platform.
          </li>
          <li>
            <strong>Transaction Data</strong> — details of the Services or
            Professional Services you have availed, a limited portion of your
            credit or debit card details for tracking transactions that are
            provided to us by payment processors, and UPI IDs for processing
            payments.
          </li>
          <li>
            <strong>Usage Data</strong> — information about how you use the
            Services and Professional Services, your activity on the Platform,
            booking history, user taps and clicks, user interests, time spent
            on the Platform, details about user journey on the mobile
            application, and page views.
          </li>
        </ul>
        <p>
          <strong>(b)</strong> We also collect, use, and share aggregated data
          such as statistical or demographic data for any purpose. Aggregated
          data could be derived from your personal data but is not considered
          personal data under law as it does not directly or indirectly reveal
          your identity. However, if we combine or connect aggregated data
          with your personal data so that it can directly or indirectly
          identify you, we treat the combined data as personal data which will
          be used in accordance with this Policy.
        </p>
        <p>
          <strong>(c) What happens if I refuse to provide my personal data?</strong>{" "}
          Where we need to collect personal data by law, or under the terms of
          a contract (such as the Terms), and you fail to provide that data
          when requested, we may not be able to perform the contract (for
          example, to provide you with the Services). In this case, we may
          have to cancel or limit your access to the Services.
        </p>
      </>
    ),
  },
  {
    id: "how-we-collect",
    title: "How do we collect personal data?",
    body: (
      <>
        <p>We use different methods to collect personal data from and about you including through:</p>
        <p>
          <strong>(a) Direct Interactions.</strong> You provide us your
          personal data when you interact with us. This includes personal data
          you provide when you:
        </p>
        <ul>
          <li>Create an account or profile with us;</li>
          <li>Use our Services or carry out other activities in connection with the Services;</li>
          <li>Enter a promotion, user poll, or online surveys;</li>
          <li>Request marketing communications to be sent to you; or</li>
          <li>Report a problem with the Platform and/or our Services, give us feedback or contact us.</li>
        </ul>
        <p>
          <strong>(b) Automated technologies or interactions.</strong> Each
          time you visit the Platform or use the Services, we will
          automatically collect Technical Data about your equipment, browsing
          actions, and patterns. We collect this personal data by using
          cookies, web beacons, pixel tags, server logs, and other similar
          technologies. We may also receive Technical Data about you if you
          visit other websites or apps that employ our cookies.
        </p>
        <p>
          <strong>(c) Third parties or publicly available sources.</strong> We
          will receive personal data about you from various third parties:
        </p>
        <ul>
          <li>Technical data from analytics providers such as Facebook and advertising networks;</li>
          <li>Identity and profile-related Data and Contact Data from service professionals, publicly available sources, etc.;</li>
          <li>Personal data about you from our affiliate entities.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How do we use your personal data?",
    body: (
      <>
        <p>
          <strong>(a)</strong> We will only use your personal data when the
          law allows us to. Most commonly, we will use your personal data
          where we need to provide you with the Services, enable you to use
          the Professional Services, or where we need to comply with a legal
          obligation. We use your personal data for the following purposes:
        </p>
        <ul>
          <li>To verify your identity to register you as a user, and create your user account with us on the Platform;</li>
          <li>To provide the Services to you;</li>
          <li>To enable the provision of Professional Services to you;</li>
          <li>To monitor trends and personalize your experience;</li>
          <li>To improve the functionality of our Services based on the information and feedback we receive from you;</li>
          <li>To improve customer service to effectively respond to your Service requests and support needs;</li>
          <li>To track transactions and process payments;</li>
          <li>To send periodic notifications to manage our relationship with you including to notify you of changes to the Services, send you information and updates pertaining to the Services you have availed, and to receive occasional company news and updates related to us or the Services;</li>
          <li>To assist with the facilitation of the Professional Services offered to you, including to send you information and updates about the Professional Services you have availed;</li>
          <li>To market and advertise the Services to you;</li>
          <li>To comply with legal obligations;</li>
          <li>To administer and protect our business and the Services, including for troubleshooting, data analysis, system testing, and performing internal operations;</li>
          <li>To improve our business and delivery models;</li>
          <li>To perform our obligations that arise out of the arrangement we are about to enter or have entered with you;</li>
          <li>To enforce our Terms; and</li>
          <li>To respond to court orders, establish or exercise our legal rights, or defend ourselves against legal claims.</li>
        </ul>
        <p>
          <strong>(b)</strong> You agree and acknowledge that by using our
          Services and creating an account with us on the Platform, you
          authorize us, our service professionals, associate partners, and
          affiliates to contact you via email, phone, or otherwise. This is to
          provide the Services to you and ensure that you are aware of all the
          features of the Services and for related purposes.
        </p>
        <p>
          <strong>(c)</strong> You agree and acknowledge that any and all
          information pertaining to you, whether or not you directly provide
          it to us (via the Services or otherwise), including but not limited
          to personal correspondence such as emails, instructions from you,
          etc., may be collected, compiled, and shared by us in order to
          render the Services to you. This may include but not be limited to
          service professionals who provide or seek to provide you with
          Professional Services, vendors, social media companies, third-party
          service providers, storage providers, data analytics providers,
          consultants, lawyers, and auditors. We may also share this
          information with other entities in the Flexiva group in connection
          with the above-mentioned purposes.
        </p>
        <p>
          <strong>(d)</strong> You agree and acknowledge that we may share
          data without your consent, when it is required by law or by any
          court or government agency or authority to disclose such
          information. Such disclosures are made in good faith and belief that
          it is reasonably necessary to do so for enforcing this Policy or the
          Terms, or in order to comply with any applicable laws and
          regulations.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <>
        <p>
          <strong>(a)</strong> Cookies are small files that a site or its
          service provider transfers to your device&rsquo;s hard drive through
          your web browser (if you permit it to) that enables the sites or
          service providers&rsquo; systems to recognize your browser and
          capture and remember certain information.
        </p>
        <p>
          <strong>(b)</strong> We use cookies to help us distinguish you from
          other users of the Platform, understand and save your preferences
          for future visits, keep track of advertisements and compile
          aggregate data about site traffic and site interaction so that we
          can offer you a seamless user experience. We may contact third-party
          service providers to assist us in better understanding our site
          visitors. These service providers are not permitted to use the
          information collected on our behalf except to help us conduct and
          improve our business.
        </p>
        <p>
          <strong>(c)</strong> Additionally, you may encounter cookies or
          other similar devices on certain pages of the Platform that are
          placed by third parties. We do not control the use of cookies by
          third parties. If you send us personal correspondence, such as
          emails, or if other users or third parties send us correspondence
          about your activities or postings on the Platform, we may collect
          such information within a file specific to you.
        </p>
      </>
    ),
  },
  {
    id: "disclosures",
    title: "Disclosures of your personal data",
    body: (
      <>
        <p>
          <strong>(a)</strong> We may share your personal data with third
          parties set out below for the purposes set out in Section 4:
        </p>
        <ul>
          <li>Service professionals to enable them to provide you with Professional Services;</li>
          <li>Internal third parties, which are other companies within the Flexiva group of companies;</li>
          <li>
            External third parties such as:
            <ul>
              <li>Trusted third parties such as our associate partners, and service providers that provide services for us or on our behalf. This includes hosting and operating our Platform, providing marketing assistance, conducting our business, processing payments and transaction-related processes, transmitting content, and providing our Services to you;</li>
              <li>Analytic service providers and advertising networks that conduct web analytics for us to help us improve the Platform. These analytics providers may use cookies and other technologies to perform their services;</li>
              <li>Other registered users on our Platform upon your request or where you explicitly consent to such disclosure; and</li>
              <li>Regulators and other bodies, as required by law or regulation.</li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>(b)</strong> We require all third parties to respect the
          security of your personal data and to treat it in accordance with
          the law. We do not allow our third-party service providers to use
          your personal data for their own purposes and only permit them to
          process your personal data for specified purposes and in accordance
          with our instructions.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights in relation to your personal data",
    body: (
      <>
        <p>
          <strong>(a) Access and Updating your Personal Data.</strong> You
          hereby warrant that all personal data that you provide us with is
          accurate, up-to-date, and true. When you use our Services, we make
          best efforts to provide you with the ability to access and correct
          inaccurate or deficient data, subject to any legal requirements. You
          can request Flexiva for a copy of your personal data by sending an
          email to <strong>privacy@zorova.in</strong>. Flexiva may take up to
          7 (seven) working days to respond to such request.
        </p>
        <p>
          <strong>(b) Opting-out of Marketing and Promotional Communications.</strong>{" "}
          When we send you marketing and promotional content through email,
          we make best efforts to provide you with the ability to opt-out of
          such communications by using the opt-out instructions provided in
          such emails. You understand and acknowledge that it may take us up
          to 10 (ten) business days to process opt-out requests. You may not
          opt out of communications related to the Services, your orders, or
          other administrative or transactional messages as these are
          necessary for providing the Services.
        </p>
        <p>
          <strong>(c) Restricting Processing.</strong> In some jurisdictions,
          applicable law may entitle you to request Flexiva and/or third
          parties to restrict the processing of your personal data under
          limited circumstances. For example, you may request us to restrict
          the processing of your personal data if you contest the accuracy of
          your personal data, or you believe that the processing is unlawful,
          or that we no longer need your personal data for the purposes of
          processing but you require the data for establishment, exercise, or
          defense of legal claims.
        </p>
        <p>
          <strong>(d) Deletion of your Personal Data.</strong> You may request
          the deletion of your personal data at any time by contacting us at{" "}
          <strong>privacy@zorova.in</strong>. We will evaluate such requests
          on a case-by-case basis, considering applicable law, legal and
          regulatory obligations. We may not be able to comply with your
          request in certain cases, such as where we need to retain your data
          for security, compliance, legal or other legitimate reasons.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data security",
    body: (
      <>
        <p>
          <strong>(a)</strong> We implement appropriate technical and
          organizational measures to ensure a level of security appropriate to
          the risk of our processing of personal data. These measures are
          aimed at ensuring the integrity, confidentiality, and availability
          of personal data. We regularly review and update these measures to
          prevent unauthorized access, loss, misuse, or alteration of your
          personal data.
        </p>
        <p>
          <strong>(b)</strong> Although we strive to protect your personal
          data, we cannot guarantee the security of any personal data
          transmitted to our Platform and you do so at your own risk. We have
          procedures in place to deal with any suspected personal data breach
          and will notify you and any applicable regulator of a breach where
          we are legally required to do so.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data retention",
    body: (
      <>
        <p>
          <strong>(a)</strong> We will only retain your personal data for as
          long as it is necessary to fulfill the purposes for which we
          collected it, including for the purposes of satisfying any legal,
          accounting, or reporting requirements. To determine the appropriate
          retention period for personal data, we consider the amount, nature,
          and sensitivity of the personal data, the potential risk of harm
          from unauthorized use or disclosure of your personal data, the
          purposes for which we process your personal data, and whether we
          can achieve those purposes through other means, and the applicable
          legal requirements.
        </p>
        <p>
          <strong>(b)</strong> In some circumstances, you can ask us to
          delete your data as set out above.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International transfers",
    body: (
      <>
        <p>
          <strong>(a)</strong> We may transfer your personal data to countries
          other than the country in which you reside, such as to our servers
          in different countries. The data protection laws of these countries
          may be different from those in your own country.
        </p>
        <p>
          <strong>(b)</strong> We take appropriate steps to ensure that the
          recipients of your personal data are bound to duties of
          confidentiality and we implement measures such as standard
          contractual clauses to ensure that any transferred personal data
          remains protected and secure.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        <strong>(a)</strong> We may update this Policy from time to time in
        response to changing legal, regulatory, or operational requirements.
        We will notify you of any such changes by updating the &ldquo;Last
        Updated&rdquo; date at the top of this Policy. We encourage you to
        review this Policy periodically to stay informed about how we are
        protecting your data.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        If you have any questions or concerns about this Policy, please
        contact us at <strong>privacy@zorova.in</strong>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal · Privacy"
      title="Privacy"
      italic="Policy."
      effective="01 April 2026"
      intro={
        <>
          Welcome to Flexiva Private Limited&rsquo;s privacy policy
          (&ldquo;Privacy Policy&rdquo; or &ldquo;Policy&rdquo;). Flexiva
          Private Limited and its affiliates (collectively, &ldquo;Flexiva&rdquo;,
          &ldquo;we&rdquo; or &ldquo;us&rdquo;) are engaged in the business of
          providing web-based solutions to facilitate connections between
          customers that seek specific services and service professionals that
          offer these services. This Policy outlines our practices in relation
          to the collection, storage, usage, processing, and disclosure of
          personal data that you have consented to share with us when you
          access, use, or otherwise interact with our Platform or avail
          products or services that Flexiva offers you on or through the
          Platform.
        </>
      }
      sections={sections}
    />
  );
}
