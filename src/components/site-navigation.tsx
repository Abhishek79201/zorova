"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ZorovaMark } from "@/components/zorova-mark";
import { cn } from "@/lib/cn";
import { primaryNav, secondaryNav, siteConfig } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,box-shadow,backdrop-filter] duration-200 ease-out",
        scrolled
          ? "bg-white/90 shadow-[var(--shadow-nav)] [backdrop-filter:saturate(1.2)_blur(12px)]"
          : "bg-white",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center rounded-[var(--radius-sm)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          aria-label={`${siteConfig.name} home`}
        >
          <ZorovaMark />
        </Link>

        {/* Desktop nav — business-critical links */}
        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "type-body relative inline-flex h-10 items-center rounded-sm px-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]",
                    active && "text-[var(--color-primary)]",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[var(--color-accent)]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Sign In / Sign Up — always visible top-right on ≥ sm */}
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="hidden h-10 px-4 text-sm sm:inline-flex"
          >
            <Link href="/contact?intent=signin">Sign In</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="accent"
            className="hidden h-10 px-4 text-sm sm:inline-flex"
          >
            <Link href="/contact?intent=signup">Sign Up</Link>
          </Button>

          {/* Mobile hamburger */}
          <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-accent-light)] lg:hidden"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-1">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  This is not a spa service. This is a complete body care system.
                </SheetDescription>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-2 px-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                    Explore
                  </p>
                  <ul className="flex flex-col gap-1">
                    {primaryNav.map((item) => {
                      const active = isActive(pathname, item.href);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            onClick={() => setDrawerOpen(false)}
                            className={cn(
                              "flex h-11 items-center rounded-[var(--radius-sm)] px-3 text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)]",
                              active &&
                                "bg-[var(--color-accent-light)] font-semibold text-[var(--color-primary)]",
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 px-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-saffron)]">
                    Services
                  </p>
                  <ul className="flex flex-col gap-1">
                    {secondaryNav.map((item) => {
                      const active = isActive(pathname, item.href);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            onClick={() => setDrawerOpen(false)}
                            className={cn(
                              "flex h-11 items-center rounded-[var(--radius-sm)] px-3 text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)]",
                              active &&
                                "bg-[var(--color-accent-light)] font-semibold text-[var(--color-primary)]",
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <Button asChild size="lg" variant="accent" className="w-full">
                  <Link
                    href="/contact?intent=signup"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Sign Up
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link
                    href="/contact?intent=signin"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Sign In
                  </Link>
                </Button>
                <Button asChild size="lg" variant="primary" className="w-full">
                  <Link href="/contact" onClick={() => setDrawerOpen(false)}>
                    Book Recovery Session
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
