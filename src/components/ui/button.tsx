import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] font-sans font-bold text-[1rem] leading-none transition-[transform,background-color,box-shadow,color] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
  {
    variants: {
      variant: {
        accent:
          "bg-[var(--color-accent)] text-white shadow-[var(--shadow-cta)] hover:bg-[#6e2fe0] hover:shadow-[0_12px_32px_rgba(132,66,245,0.35)]",
        primary:
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-[var(--shadow-cta)]",
        outline:
          "border border-[var(--color-divider)] bg-transparent text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
        ghost:
          "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-accent-light)]",
        onDark:
          "bg-white text-[var(--color-primary)] hover:bg-[var(--color-accent-light)]",
      },
      size: {
        sm: "h-9 min-h-9 px-4 text-[0.9375rem]",
        md: "h-11 min-h-11 px-5",
        lg: "h-12 min-h-12 px-7 text-[1.0625rem]",
        icon: "h-11 w-11 min-h-11 min-w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
