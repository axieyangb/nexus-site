const STATS = [
  { n: '≤ 30 min', l: 'from unracked server to a served AI workload' },
  { n: 'One image', l: 'on every machine — no separate control plane' },
  { n: 'One operator', l: 'no DevOps, no SRE organization' },
  { n: 'Zero egress', l: 'every byte from your own storage' },
]

export function Stats() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {STATS.map((s) => (
          <div key={s.n} className="border-t border-line px-6 py-8 md:border-t-0">
            <div className="text-[26px] font-extrabold tracking-tight text-ink-2">{s.n}</div>
            <div className="mt-1 text-[13px] leading-snug text-muted">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
