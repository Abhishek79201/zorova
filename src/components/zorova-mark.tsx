import { cn } from "@/lib/cn";

interface ZorovaMarkProps {
  className?: string;
  onDark?: boolean;
}

/**
 * Zorova wordmark — custom letterform treatment with a lotus-dot accent
 * and a warm saffron underline. Replaces logo placeholder until final asset.
 */
export function ZorovaMark({ className, onDark = false }: ZorovaMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 font-[var(--font-serif)] text-[1.55rem] font-bold leading-none tracking-[-0.02em]",
        onDark ? "text-white" : "text-[var(--color-primary)]",
        className,
      )}
      aria-label="Zorova"
    >
      <span className="relative">
        <span>zor</span>
        <span className="relative inline-block">
          <span>o</span>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[0.05em] h-[0.18em] w-[0.18em] -translate-x-1/2 rounded-full bg-[var(--color-saffron)]"
          />
        </span>
        <span>va</span>
        <span
          aria-hidden="true"
          className={cn(
            "absolute -bottom-1 left-0 h-[2px] w-full rounded-full",
            onDark
              ? "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]"
              : "bg-[linear-gradient(90deg,transparent,var(--color-saffron),transparent)]",
          )}
        />
      </span>
    </span>
  );
}
