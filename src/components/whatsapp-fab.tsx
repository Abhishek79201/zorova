import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-[var(--shadow-fab)] transition-transform duration-200 ease-out hover:scale-[1.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
