import * as React from "react";

import { cn } from "@/lib/cn";

type SvgProps = React.SVGProps<SVGSVGElement>;

/* ---------------------------------------------------------------------------
 * Mandala — concentric petal rings; used as hero / section ornament.
 * Purely decorative. Stroke uses currentColor so parent can tint.
 * --------------------------------------------------------------------------- */
export function Mandala({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <g strokeWidth="0.75" opacity="0.9">
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="95" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="185" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI) / 8;
          return (
            <line
              key={`l-${i}`}
              x1={200 + Math.cos(a) * 60}
              y1={200 + Math.sin(a) * 60}
              x2={200 + Math.cos(a) * 185}
              y2={200 + Math.sin(a) * 185}
            />
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const cx = 200 + Math.cos(a) * 120;
          const cy = 200 + Math.sin(a) * 120;
          return (
            <g key={`p-${i}`} transform={`translate(${cx} ${cy}) rotate(${(i * 30)})`}>
              <path
                d="M 0 -18 Q 10 0 0 18 Q -10 0 0 -18 Z"
                strokeWidth="0.75"
                fill="currentColor"
                fillOpacity="0.06"
              />
            </g>
          );
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const cx = 200 + Math.cos(a) * 160;
          const cy = 200 + Math.sin(a) * 160;
          return <circle key={`d-${i}`} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />;
        })}
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * Lotus — stylised 5-petal lotus bloom
 * --------------------------------------------------------------------------- */
export function Lotus({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <g strokeWidth="1.25" strokeLinecap="round">
        <path d="M100 150 C 60 120 60 80 100 50" fill="currentColor" fillOpacity="0.08" />
        <path d="M100 150 C 140 120 140 80 100 50" fill="currentColor" fillOpacity="0.08" />
        <path d="M100 150 C 40 140 30 110 60 80" fill="currentColor" fillOpacity="0.12" />
        <path d="M100 150 C 160 140 170 110 140 80" fill="currentColor" fillOpacity="0.12" />
        <path d="M100 150 C 50 165 30 140 50 120" fill="currentColor" fillOpacity="0.06" />
        <path d="M100 150 C 150 165 170 140 150 120" fill="currentColor" fillOpacity="0.06" />
        <circle cx="100" cy="150" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * WaveLine — flowing single-stroke wave; used as section divider / motion.
 * --------------------------------------------------------------------------- */
export function WaveLine({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 800 60"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <path
        d="M0 30 C 100 0, 180 60, 280 30 S 460 0, 560 30 S 740 60, 800 30"
        strokeWidth="1.5"
      />
      <path
        d="M0 40 C 100 10, 180 70, 280 40 S 460 10, 560 40 S 740 70, 800 40"
        strokeWidth="0.75"
        opacity="0.5"
      />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * DoshaGlyph — abstract symbol for Vata / Pitta / Kapha
 * --------------------------------------------------------------------------- */
export function DoshaGlyph({
  variant = "vata",
  className,
  ...rest
}: SvgProps & { variant?: "vata" | "pitta" | "kapha" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      {variant === "vata" && (
        <>
          {/* air — spiraling wind */}
          <path d="M15 25 Q 35 25, 50 35 T 70 45" />
          <path d="M10 40 Q 30 40, 45 50 T 68 58" />
          <path d="M18 55 Q 35 55, 48 63 T 65 68" />
          <circle cx="60" cy="35" r="3" fill="currentColor" stroke="none" />
        </>
      )}
      {variant === "pitta" && (
        <>
          {/* fire — flame */}
          <path d="M40 65 C 20 55, 25 35, 40 20 C 45 30, 55 35, 55 50 C 55 60, 50 66, 40 65 Z" />
          <path d="M40 55 C 30 50, 32 40, 40 32 C 43 38, 48 42, 46 50 C 45 55, 43 56, 40 55 Z" fill="currentColor" fillOpacity="0.15" />
          <circle cx="40" cy="72" r="2" fill="currentColor" stroke="none" />
        </>
      )}
      {variant === "kapha" && (
        <>
          {/* water / earth — droplet with ripple */}
          <path d="M40 18 C 26 38, 20 50, 30 60 C 36 66, 44 66, 50 60 C 60 50, 54 38, 40 18 Z" />
          <path d="M22 68 Q 40 74, 58 68" opacity="0.7" />
          <path d="M18 74 Q 40 80, 62 74" opacity="0.4" />
        </>
      )}
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * StretchFigure — abstract line figure in stretch pose
 * --------------------------------------------------------------------------- */
export function StretchFigure({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <circle cx="100" cy="45" r="10" />
      {/* torso */}
      <path d="M100 55 C 100 90, 95 110, 80 140" />
      {/* raised arm */}
      <path d="M100 70 C 115 60, 135 55, 155 40" />
      {/* lowered arm / reach */}
      <path d="M100 75 C 85 90, 80 105, 70 115" />
      {/* lead leg */}
      <path d="M80 140 C 75 160, 60 170, 40 180" />
      {/* back leg extended */}
      <path d="M90 130 C 120 135, 150 135, 175 140" />
      {/* floor */}
      <path d="M20 185 L 185 185" strokeDasharray="2 4" opacity="0.4" />
      {/* motion arc */}
      <path d="M40 45 Q 100 10, 160 45" strokeDasharray="2 3" opacity="0.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * HandTouch — hand-on-shoulder abstract icon (signals therapist touch)
 * --------------------------------------------------------------------------- */
export function HandTouch({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <path d="M40 70 C 40 55, 45 45, 58 42 L 58 30 Q 58 24, 64 24 T 70 30 L 70 50 L 74 40 Q 76 34, 82 36 T 84 46 L 82 60 L 88 52 Q 92 48, 96 52 T 94 62 L 88 74 C 86 84, 78 94, 66 94 L 56 94 C 48 94, 42 88, 40 80 Z" />
      <circle cx="66" cy="60" r="3" fill="currentColor" stroke="none" opacity="0.8" />
      <path d="M20 90 Q 40 100, 60 90" opacity="0.4" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * SunMandala — sun-rayed circle (seniors / vitality)
 * --------------------------------------------------------------------------- */
export function SunMandala({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <circle cx="80" cy="80" r="26" />
      <circle cx="80" cy="80" r="18" fill="currentColor" fillOpacity="0.1" stroke="none" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * Math.PI) / 12;
        const r1 = i % 2 === 0 ? 36 : 34;
        const r2 = i % 2 === 0 ? 58 : 48;
        return (
          <line
            key={i}
            x1={80 + Math.cos(a) * r1}
            y1={80 + Math.sin(a) * r1}
            x2={80 + Math.cos(a) * r2}
            y2={80 + Math.sin(a) * r2}
          />
        );
      })}
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * LeafBranch — botanical accent
 * --------------------------------------------------------------------------- */
export function LeafBranch({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <path d="M10 100 Q 80 70, 190 30" />
      <g fill="currentColor" fillOpacity="0.15">
        <path d="M40 86 Q 55 68, 50 54 Q 30 62, 40 86 Z" />
        <path d="M75 72 Q 90 56, 85 42 Q 65 50, 75 72 Z" />
        <path d="M110 60 Q 125 44, 120 30 Q 100 38, 110 60 Z" />
        <path d="M145 48 Q 160 32, 155 18 Q 135 26, 145 48 Z" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * DottedArc — decorative dotted arc
 * --------------------------------------------------------------------------- */
export function DottedArc({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 300 60"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <path
        d="M10 50 Q 150 -10, 290 50"
        strokeDasharray="1 6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
