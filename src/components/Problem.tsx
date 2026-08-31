import { Kicker } from '../lib/brand'

const BLOCKERS = [
  {
    t: 'No in-house cluster team',
    d: 'Standing up and operating GPU/TPU clusters takes a distributed-systems team most enterprises do not have — and cannot hire fast enough.',
  },
  {
    t: 'Data cannot leave the perimeter',
    d: 'Sovereignty and industry rules — defense mandates, HIPAA, financial controls — forbid sensitive data touching someone else’s cloud.',
  },
  {
    t: 'Agentic AI cost is unpredictable',
    d: 'Reasoning models burn orders of magnitude more tokens than a plain API call. On rented GPUs, the bill is impossible to forecast or cap.',
  },
  {
    t: 'Stuck with brownfield hardware',
    d: 'Datacenter GPUs need purpose-built facilities. Half of enterprise workloads still run on legacy on-prem gear that can’t be easily upgraded.',
  },
]

export function Problem() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>The on-prem AI gap</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
            The teams who most need AI on their own metal are the ones who can least stand it up.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Today the answer is to assemble a stack from six moving parts — a mesh VPN, an ingress
            gateway, a Kubernetes distribution, a bare-metal provisioner, an artifact registry and a
            monitoring stack — and hire the team that keeps them in step. That team is the product
            they are actually buying, and it does not scale.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {BLOCKERS.map((b, i) => (
            <div
              key={b.t}
              className="rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(20,21,26,0.06)]"
            >
              <div className="font-mono text-[13px] text-dim">0{i + 1}</div>
              <h3 className="mt-3 text-[17px] font-bold text-ink-2">{b.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
