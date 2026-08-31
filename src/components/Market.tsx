import { Kicker } from '../lib/brand'

const SECTORS = [
  {
    t: 'Government & defense',
    d: 'Mandates prohibit data leaving sovereign boundaries. AI must run inside the perimeter or not at all.',
  },
  {
    t: 'Financial services',
    d: 'The most sensitive commercial data in the economy. The BIS names on-prem deployment as the required path for AI under security and sovereignty constraints.',
  },
  {
    t: 'Healthcare',
    d: 'Patient data can’t be processed outside a controlled perimeter without HIPAA risk. AI in healthcare is projected at $110B by 2030.',
  },
]

const FACTS = [
  { n: '$500–600B', l: 'sovereignty-influenced AI spend by 2030 (McKinsey)' },
  { n: '+80% YoY', l: 'NVIDIA sovereign-AI revenue growth, Q1 FY2027' },
  { n: '~50%', l: 'of enterprise IT workloads still run on-prem' },
]

export function Market() {
  return (
    <section id="market" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="grid-dots absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>The market</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-[44px]">
            On-prem AI is not a niche. It’s where the regulated economy has to run.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/65">
            Enterprises, governments and sovereign programs are building AI on infrastructure they own
            and control — for privacy, for cost predictability, and because the rules leave no choice.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {SECTORS.map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-[18px] font-bold">{s.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.n} className="px-5 py-6 text-center">
              <div className="text-[30px] font-extrabold tracking-tight accent-text">{f.n}</div>
              <div className="mt-1 text-[13px] leading-snug text-white/55">{f.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
