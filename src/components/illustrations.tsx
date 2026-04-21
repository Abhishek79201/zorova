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

/* ---------------------------------------------------------------------------
 * LIFE-STAGE ICONS — stylised human silhouettes for the 5-stage card rail.
 * All follow the same visual system: single-stroke + soft currentColor fill.
 * --------------------------------------------------------------------------- */

function StageFrame({
  children,
  className,
  ...rest
}: SvgProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        strokeWidth="0.75"
        opacity="0.3"
        strokeDasharray="2 4"
      />
      {children}
    </svg>
  );
}

export function ChildGlyph({ className, ...rest }: SvgProps) {
  return (
    <StageFrame className={className} {...rest}>
      {/* Head */}
      <circle cx="60" cy="42" r="9" fill="currentColor" fillOpacity="0.12" />
      {/* Torso — mid-stretch, arms outstretched */}
      <path d="M60 51 L 60 80" />
      <path d="M60 60 Q 45 58 35 68" />
      <path d="M60 60 Q 75 58 85 68" />
      {/* Legs — playful, bent */}
      <path d="M60 80 Q 50 90 46 100" />
      <path d="M60 80 Q 70 90 74 100" />
      {/* Ball / play motif */}
      <circle cx="34" cy="94" r="4" opacity="0.7" />
    </StageFrame>
  );
}

export function YouthGlyph({ className, ...rest }: SvgProps) {
  return (
    <StageFrame className={className} {...rest}>
      {/* Runner in stride */}
      <circle cx="62" cy="34" r="7" fill="currentColor" fillOpacity="0.12" />
      <path d="M62 41 L 58 68" />
      {/* Forward arm */}
      <path d="M58 52 Q 48 50 40 56" />
      {/* Back arm */}
      <path d="M60 50 Q 72 54 78 64" />
      {/* Front leg — kicked forward */}
      <path d="M58 68 Q 70 78 82 80" />
      {/* Back leg — pushed back */}
      <path d="M58 68 Q 46 82 38 96" />
      {/* Speed lines */}
      <path d="M14 50 L 28 50" opacity="0.5" />
      <path d="M18 60 L 30 60" opacity="0.4" />
    </StageFrame>
  );
}

export function ProfessionalGlyph({ className, ...rest }: SvgProps) {
  return (
    <StageFrame className={className} {...rest}>
      {/* Desk posture — seated, shoulders squared */}
      <circle cx="60" cy="36" r="8" fill="currentColor" fillOpacity="0.12" />
      <path d="M60 44 L 60 68" />
      {/* Shoulders */}
      <path d="M46 52 L 74 52" />
      {/* Arm to laptop */}
      <path d="M46 52 Q 40 62 46 74" />
      <path d="M74 52 Q 80 62 74 74" />
      {/* Desk surface */}
      <path d="M30 82 L 90 82" strokeWidth="1.6" />
      {/* Laptop */}
      <path d="M46 82 L 46 74 L 74 74 L 74 82" fill="currentColor" fillOpacity="0.1" />
      {/* Chair legs */}
      <path d="M50 82 L 48 102" />
      <path d="M70 82 L 72 102" />
    </StageFrame>
  );
}

export function WomanGlyph({ className, ...rest }: SvgProps) {
  return (
    <StageFrame className={className} {...rest}>
      {/* Woman — confident stance, flowing silhouette */}
      <circle cx="60" cy="32" r="8" fill="currentColor" fillOpacity="0.14" />
      <path d="M60 40 L 60 66" />
      {/* Arms — one on hip, one gesturing */}
      <path d="M60 48 Q 48 52 42 62" />
      <path d="M60 48 Q 72 50 76 60" />
      {/* Flowing skirt / confident base */}
      <path d="M50 66 L 42 102 L 78 102 L 70 66 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Protective ring / empowerment halo */}
      <path d="M30 38 Q 60 18 90 38" opacity="0.4" />
      <path d="M26 46 Q 60 22 94 46" opacity="0.25" />
    </StageFrame>
  );
}

export function SeniorGlyph({ className, ...rest }: SvgProps) {
  return (
    <StageFrame className={className} {...rest}>
      {/* Senior — upright, walking with cane */}
      <circle cx="56" cy="34" r="8" fill="currentColor" fillOpacity="0.12" />
      <path d="M56 42 Q 58 56 58 72" />
      {/* Arm on cane */}
      <path d="M58 54 Q 68 58 72 66" />
      {/* Other arm — swinging */}
      <path d="M56 54 Q 46 58 42 68" />
      {/* Legs — steady gait */}
      <path d="M58 72 Q 52 86 48 100" />
      <path d="M58 72 Q 64 86 66 100" />
      {/* Cane */}
      <path d="M72 66 L 78 102" />
      <circle cx="78" cy="102" r="2" fill="currentColor" stroke="none" />
      {/* Ground line */}
      <path d="M28 104 L 96 104" strokeDasharray="2 4" opacity="0.4" />
    </StageFrame>
  );
}

/* ---------------------------------------------------------------------------
 * PERFORMANCE GLYPHS — used in the 6-benefit USP row.
 * Small, badge-shaped icons. ViewBox 40 for uniform sizing.
 * --------------------------------------------------------------------------- */

function BenefitFrame({
  children,
  className,
  ...rest
}: SvgProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      {children}
    </svg>
  );
}

export function PainReliefIcon({ className, ...rest }: SvgProps) {
  return (
    <BenefitFrame className={className} {...rest}>
      {/* Shield with cross inside — pain shield */}
      <path d="M20 5 L 32 10 V 22 C 32 28 27 33 20 35 C 13 33 8 28 8 22 V 10 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M15 20 L 25 20" strokeWidth="2" />
    </BenefitFrame>
  );
}

export function RecoverFasterIcon({ className, ...rest }: SvgProps) {
  return (
    <BenefitFrame className={className} {...rest}>
      {/* Circular arrow — recovery loop */}
      <path d="M8 20 A 12 12 0 1 1 20 32" />
      <path d="M17 32 L 20 32 L 20 29" />
      <circle cx="20" cy="20" r="3" fill="currentColor" stroke="none" />
    </BenefitFrame>
  );
}

export function MobilityIcon({ className, ...rest }: SvgProps) {
  return (
    <BenefitFrame className={className} {...rest}>
      {/* Joint rotation — hinge */}
      <path d="M10 30 L 20 18 L 30 30" />
      <path d="M10 30 Q 20 36 30 30" strokeDasharray="2 3" opacity="0.6" />
      <circle cx="20" cy="18" r="3" fill="currentColor" stroke="none" />
    </BenefitFrame>
  );
}

export function StrengthIcon({ className, ...rest }: SvgProps) {
  return (
    <BenefitFrame className={className} {...rest}>
      {/* Dumbbell */}
      <path d="M6 20 L 34 20" strokeWidth="2" />
      <rect x="4" y="14" width="5" height="12" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="31" y="14" width="5" height="12" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="10" y="17" width="3" height="6" rx="0.5" />
      <rect x="27" y="17" width="3" height="6" rx="0.5" />
    </BenefitFrame>
  );
}

export function PerformanceIcon({ className, ...rest }: SvgProps) {
  return (
    <BenefitFrame className={className} {...rest}>
      {/* Upward trend / graph */}
      <path d="M6 30 L 14 22 L 20 26 L 34 10" />
      <path d="M28 10 L 34 10 L 34 16" />
      <circle cx="14" cy="22" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="20" cy="26" r="1.8" fill="currentColor" stroke="none" />
    </BenefitFrame>
  );
}

export function EnergyIcon({ className, ...rest }: SvgProps) {
  return (
    <BenefitFrame className={className} {...rest}>
      {/* Lightning bolt */}
      <path d="M22 4 L 10 22 L 18 22 L 16 36 L 30 16 L 22 16 Z" fill="currentColor" fillOpacity="0.15" />
    </BenefitFrame>
  );
}

/* ---------------------------------------------------------------------------
 * SPORTS GLYPHS — for the dedicated Sports page.
 * --------------------------------------------------------------------------- */

export function TrophyGlyph({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <path d="M26 14 L 54 14 L 52 38 C 52 46 46 52 40 52 C 34 52 28 46 28 38 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M26 20 L 16 20 Q 12 20 12 26 Q 12 32 20 34" />
      <path d="M54 20 L 64 20 Q 68 20 68 26 Q 68 32 60 34" />
      <path d="M40 52 L 40 60" />
      <path d="M30 60 L 50 60" />
      <path d="M26 66 L 54 66" strokeWidth="1.8" />
    </svg>
  );
}

export function BallGlyph({ className, ...rest }: SvgProps) {
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
      <circle cx="40" cy="40" r="24" fill="currentColor" fillOpacity="0.08" />
      <path d="M16 40 L 64 40" />
      <path d="M40 16 L 40 64" />
      <path d="M23 23 L 57 57" opacity="0.5" />
      <path d="M57 23 L 23 57" opacity="0.5" />
    </svg>
  );
}

export function HeartPulseGlyph({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <path d="M40 62 C 20 50 12 38 12 28 Q 12 18 22 18 Q 32 18 40 28 Q 48 18 58 18 Q 68 18 68 28 C 68 38 60 50 40 62 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M14 36 L 26 36 L 30 28 L 38 44 L 44 34 L 50 36 L 66 36" strokeWidth="2" />
    </svg>
  );
}

export function ShieldCheckGlyph({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("text-current", className)}
      {...rest}
    >
      <path d="M40 12 L 64 20 V 40 C 64 54 54 64 40 70 C 26 64 16 54 16 40 V 20 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M28 42 L 36 50 L 54 30" strokeWidth="2.2" />
    </svg>
  );
}
