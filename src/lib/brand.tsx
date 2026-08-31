import type { ReactNode, SVGProps } from 'react'

// The Nexus mark — the same single-stroke "N" the product uses, so the site and
// the console are unmistakably the same thing.
export function Logo({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Nexus">
      <path
        d="M5 19V5l14 14V5"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Wordmark({ size = 22, tone = 'ink' }: { size?: number; tone?: 'ink' | 'paper' }) {
  const text = tone === 'paper' ? '#ffffff' : 'var(--color-ink-2)'
  return (
    <span className="inline-flex items-center gap-2 select-none">
      <Logo size={size} color="var(--color-accent)" />
      <span
        className="font-extrabold tracking-tight"
        style={{ color: text, fontSize: size * 0.82 }}
      >
        Nexus
      </span>
    </span>
  )
}

// ── inline icons (no icon dependency — one less thing to pin) ──────────────────
type IconProps = SVGProps<SVGSVGElement>
const base = (p: IconProps) => ({
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...p,
})

export const IconServer = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></svg>
)
export const IconChip = (p: IconProps) => (
  <svg {...base(p)}><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" /></svg>
)
export const IconMesh = (p: IconProps) => (
  <svg {...base(p)}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7.5 7.5 11 16M16.5 7.5 13 16M8 6h8" /></svg>
)
export const IconCluster = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l7 4v6l-7 4-7-4V7z" /><path d="M12 3v18M5 7l14 6M19 7L5 13" /></svg>
)
export const IconBox = (p: IconProps) => (
  <svg {...base(p)}><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8M12 13v8" /></svg>
)
export const IconShield = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
)
export const IconOffline = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 3l18 18" /><path d="M8.5 8.5A5 5 0 0 0 6 12M12 4a8 8 0 0 1 7 4M5 8a8 8 0 0 0-1 4M12 20h.01" /></svg>
)
export const IconBolt = (p: IconProps) => (
  <svg {...base(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
)
export const IconHeal = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 12h4l2 6 4-14 2 8h6" /></svg>
)
export const IconLock = (p: IconProps) => (
  <svg {...base(p)}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
)
export const IconArrow = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}><path d="m5 12 5 5L20 7" /></svg>
)
export const IconTerminal = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></svg>
)

// A small label used for kicker / eyebrow text.
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  )
}
