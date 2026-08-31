const STATS = [
  { n: '9-node', l: 'live fleet, crate to cluster — proven, not a slide' },
  { n: 'Zero', l: 'egress — every byte from your own storage' },
  { n: '1', l: 'operator — no DevOps, no SRE org' },
  { n: '~4 mo', l: 'payback vs. cloud GPU spend' },
]

export function Stats() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {STATS.map((s) => (
          <div key={s.n} className="border-t border-line px-6 py-8 md:border-t-0">
            <div className="text-[28px] font-extrabold tracking-tight text-ink-2">{s.n}</div>
            <div className="mt-1 text-[13px] leading-snug text-muted">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
