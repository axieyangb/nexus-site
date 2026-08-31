import { Kicker, IconBolt, IconServer, IconHeal } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

type Day = {
  tag: string
  title: string
  from: string
  to: string
  desc: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const DAYS: Day[] = [
  {
    tag: 'Day 0',
    title: 'Deploy',
    from: 'days',
    to: 'hours',
    Icon: IconServer,
    desc: 'One-click install. A single node bootstraps a full cluster — the whole crate-to-cluster journey, unattended.',
  },
  {
    tag: 'Day 1',
    title: 'Activate',
    from: 'weeks',
    to: 'hours',
    Icon: IconBolt,
    desc: 'One-click workload deployment. GPU-aware scheduling puts models into production the same afternoon, not the next quarter.',
  },
  {
    tag: 'Day 2',
    title: 'Operate',
    from: 'an SRE team',
    to: 'one person',
    Icon: IconHeal,
    desc: 'Self-healing, automated repair, rolling upgrades, secure by default — meeting CISA’s Secure-by-Design mandate. No DevOps, no SREs.',
  },
]

export function DayN() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>The operating model</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
            Deploy, activate, operate — all by one administrator.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            The reason it pays for itself in about four months isn’t only the GPU savings — it’s that
            the ongoing operation doesn’t need a team.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {DAYS.map((d) => (
            <div key={d.tag} className="relative overflow-hidden rounded-2xl border border-line bg-paper p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <d.Icon width={22} height={22} />
                </span>
                <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-dim">{d.tag}</span>
              </div>
              <h3 className="mt-5 text-[22px] font-extrabold tracking-tight text-ink-2">{d.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{d.desc}</p>
              <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 font-mono text-[13px]">
                <span className="text-dim line-through">{d.from}</span>
                <span className="text-dim">→</span>
                <span className="font-semibold text-accent">{d.to}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
