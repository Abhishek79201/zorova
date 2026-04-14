import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/social-icons";
import { ZorovaMark } from "@/components/zorova-mark";
import { footerNav, siteConfig } from "@/lib/site";

const socials = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: siteConfig.social.twitter, label: "Twitter / X", Icon: TwitterIcon },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YouTubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <ZorovaMark onDark className="!text-white" />
          <p className="type-body text-white/80">{siteConfig.footerTagline}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Explore">
          {footerNav.explore.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          {footerNav.company.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Get in Touch">
          <li>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="type-body text-white/80 transition-colors hover:text-white"
            >
              {siteConfig.contactEmail}
            </a>
          </li>
          <li>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
              className="type-body text-white/80 transition-colors hover:text-white"
            >
              {siteConfig.contactPhone}
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="type-body text-white/80 transition-colors hover:text-white"
            >
              WhatsApp us
            </a>
          </li>
          <li className="mt-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-sm text-white/70">
              App — Coming Soon
            </span>
          </li>
        </FooterColumn>

        <FooterColumn title="Legal">
          {footerNav.legal.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto w-full max-w-7xl px-4 py-5 text-center text-sm text-white/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {siteConfig.legalName}. All rights
          reserved. | Made with care in India.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="type-subheading text-white">{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="type-body text-white/80 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
