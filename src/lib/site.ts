export const siteConfig = {
  name: "Zorova",
  legalName: "Zorova Wellness Pvt. Ltd.",
  tagline: "Complete Care for Your Body — At Every Stage of Life",
  footerTagline: "Recovery. Performance. Body Care for Every Life Stage.",
  description:
    "Zorova is a modern body care, recovery, and performance platform — supporting children, youth, working professionals, women, and seniors with clinical-grade recovery sessions and mobility therapy.",
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
  { href: "/sports", label: "Sports" },
  { href: "/membership", label: "Membership" },
  { href: "/gifts", label: "Gifts" },
  { href: "/careers", label: "Work With Us" },
  { href: "/business", label: "For Business" },
] as const;

export const secondaryNav = [
  { href: "/massages", label: "Recovery Sessions" },
  { href: "/stretch", label: "Mobility Therapy" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
] as const;

export const footerNav = {
  explore: [
    { href: "/massages", label: "Recovery Sessions" },
    { href: "/stretch", label: "Mobility Therapy" },
    { href: "/sports", label: "Sports" },
    { href: "/membership", label: "Membership" },
    { href: "/gifts", label: "Gifts" },
    { href: "/blog", label: "Journal" },
  ],
  company: [
    { href: "/about", label: "About Zorova" },
    { href: "/careers", label: "Work With Us" },
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
