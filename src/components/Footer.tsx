import { Wordmark } from '../lib/brand'

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#journey' },
      { label: 'Platform', href: '#platform' },
      { label: 'Why Nexus', href: '#why' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Market', href: '#market' },
      { label: 'Team', href: '#contact' },
      { label: 'Request a demo', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Air-gapped by design', href: '#why' },
      { label: 'Secure by default', href: '#platform' },
      { label: 'Your storage, your weights', href: '#why' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark size={22} />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
              The AI operating system for infrastructure you own. Crate to cluster, offline.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[14px] text-muted transition-colors hover:text-ink-2">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-[13px] text-dim sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Nexus.AI — One platform. Infinite opportunities.</span>
          <span className="font-mono">Built for sovereign, air-gapped and regulated environments.</span>
        </div>
      </div>
    </footer>
  )
}
