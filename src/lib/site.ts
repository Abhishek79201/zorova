export const siteConfig = {
  name: "Zorova",
  legalName: "Zorova Wellness Pvt. Ltd.",
  tagline: "Wellness, Delivered to Your Doorstep",
  footerTagline: "Wellness for Every Home",
  description:
    "On-demand home massage, spa, and stretch therapy. Certified therapists deliver professional wellness to your doorstep — for every Indian household.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zorova.in",
  locale: "en-IN",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "91XXXXXXXXXX",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@zorova.in",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 XXXXXXXXXX",
  social: {
    instagram: "https://instagram.com/zorova",
    facebook: "https://facebook.com/zorova",
    linkedin: "https://linkedin.com/company/zorova",
    twitter: "https://twitter.com/zorova",
    youtube: "https://youtube.com/@zorova",
  },
} as const;

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/massages", label: "Massages" },
  { href: "/stretch", label: "Stretch" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
] as const;

export const footerNav = {
  explore: [
    { href: "/massages", label: "Massages" },
    { href: "/stretch", label: "Stretch" },
    { href: "/membership", label: "Membership" },
    { href: "/gifts", label: "Gifts" },
    { href: "/blog", label: "Journal" },
  ],
  company: [
    { href: "/about", label: "About Zorova" },
    { href: "/careers", label: "Work with Us" },
    { href: "/business", label: "For Business" },
    { href: "/franchise", label: "Own a Franchise" },
    { href: "/contact", label: "Help & Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/cancellation", label: "Cancellation Policy" },
  ],
} as const;
