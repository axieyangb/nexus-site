import { Kicker, IconCheck, IconArrow } from '../lib/brand'

type Tier = {
  name: string
  who: string
  price: string
  note: string
  cta: string
  featured?: boolean
  features: string[]
}

const TIERS: Tier[] = [
  {
    name: 'Community',
    who: 'Evaluators & homelab',
    price: 'Free',
    note: 'Self-hosted, single operator',
    cta: 'Get the container',
    features: [
      'The full crate-to-cluster journey',
      'k3s clustering & workload serving',
      'One hub, one operator account',
      'Community support',
    ],
  },
  {
    name: 'Enterprise',
    who: 'Regulated & sovereign programs',
    price: 'Let’s talk',
    note: 'Air-gapped, HA, supported',
    cta: 'Request a demo',
    featured: true,
    features: [
      'Everything in Community',
      'Fully air-gapped installs & HA control plane',
      'Multi-user, RBAC & audit trail',
      'BMC/bare-metal provisioning at rack scale',
      'Onboarding, SLAs & on-site support',
    ],
  },
  {
    name: 'OEM & partners',
    who: 'Hardware & platform vendors',
    price: 'Custom',
    note: 'Embed Nexus in your appliance',
    cta: 'Talk to us',
    features: [
      'White-label control plane',
      'Accelerator enablement & certification',
      'Co-engineering & joint roadmap',
      'Volume licensing',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>Pricing</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
            Start free. Scale to a sovereign deployment.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Run the whole journey yourself today, or bring us in when it needs to be air-gapped,
            highly available and supported to an audit.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                t.featured
                  ? 'border-accent bg-ink text-white shadow-[0_20px_60px_rgba(91,84,232,0.25)] lg:-translate-y-3'
                  : 'border-line bg-surface'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-[20px] font-extrabold ${t.featured ? 'text-white' : 'text-ink-2'}`}>{t.name}</h3>
                {t.featured && (
                  <span className="rounded-full bg-accent/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                    Most teams
                  </span>
                )}
              </div>
              <p className={`mt-1 text-[13px] ${t.featured ? 'text-white/60' : 'text-muted'}`}>{t.who}</p>

              <div className="mt-6">
                <div className={`text-[32px] font-extrabold tracking-tight ${t.featured ? 'text-white' : 'text-ink-2'}`}>
                  {t.price}
                </div>
                <div className={`text-[13px] ${t.featured ? 'text-white/55' : 'text-dim'}`}>{t.note}</div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        t.featured ? 'bg-accent/25 text-accent' : 'bg-green/10 text-green'
                      }`}
                    >
                      <IconCheck width={13} height={13} />
                    </span>
                    <span className={`text-[14px] leading-snug ${t.featured ? 'text-white/85' : 'text-ink-2'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-7 inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-[14px] font-semibold transition-transform hover:-translate-y-0.5 ${
                  t.featured ? 'accent-grad text-white' : 'border border-line-strong text-ink-2 hover:border-accent'
                }`}
              >
                {t.cta}
                <IconArrow width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
