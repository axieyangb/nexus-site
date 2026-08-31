import { Kicker, IconOffline, IconChip, IconCluster, IconLock, IconHeal } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

const POINTS: { Icon: ComponentType<SVGProps<SVGSVGElement>>; t: string; d: string }[] = [
  {
    Icon: IconOffline,
    t: 'Air-gap is the default, not a tier',
    d: 'A five-node HA Kubernetes cluster installed with no internet at all — validated live. It falls out of the architecture: the hub reaches the internet once, every node pulls from the hub.',
  },
  {
    Icon: IconChip,
    t: 'Accelerator-first, hardware-agnostic',
    d: 'New PCIe GPU vendors reach production faster than any enterprise can integrate them. Nexus bridges heterogeneous accelerators into one platform — no lock-in to a single silicon vendor.',
  },
  {
    Icon: IconLock,
    t: 'Your weights never touch our disk',
    d: 'We catalogue; your storage holds. A 57&nbsp;GB repository is registered in seconds having downloaded nothing. The bytes stay exactly where your compliance team put them.',
  },
  {
    Icon: IconCluster,
    t: 'Bare metal to running model, one plane',
    d: 'No stitching MAAS to Rancher to Harbor. The span from a powered-off server to a served model lives in a single control plane — which is where the ops headcount used to live.',
  },
  {
    Icon: IconHeal,
    t: 'Operable without an SRE org',
    d: 'Desired state is reconciled on a loop; a hub restart or a moved BMC self-heals. The routine work is done by the platform, not described to a team that has to do it.',
  },
]

export function Why() {
  return (
    <section id="why" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>Why Nexus</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
            Most of the stack has a commercial equal. These don’t.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.t} className="bg-surface p-7">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <p.Icon width={22} height={22} />
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-ink-2">{p.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.d}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center bg-ink p-7 text-white">
            <p className="text-[17px] font-semibold leading-relaxed">
              No platform today is accelerator-first, hardware-agnostic and operable without a large
              SRE organization — <span className="accent-text">built by an AI-native team.</span> That
              is the gap Nexus fills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
