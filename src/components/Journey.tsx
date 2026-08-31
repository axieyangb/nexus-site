import { Kicker, IconServer, IconChip, IconBox, IconMesh, IconCluster, IconBolt } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

type Step = {
  n: string
  title: string
  desc: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const STEPS: Step[] = [
  { n: '01', title: 'Discover', Icon: IconServer, desc: 'An unracked server, powered off, factory BMC. Nexus finds it by MAC or serial — the address is only a cache, so a machine that moves is never lost.' },
  { n: '02', title: 'Bring-up', Icon: IconChip, desc: 'Out of band: set identity and credentials, bring up the network, sanity-check firmware. Redfish instances are resolved, never hardcoded; capabilities are probed, never inferred.' },
  { n: '03', title: 'Provision', Icon: IconBox, desc: 'An OS onto bare metal via UEFI HTTP Boot — no L2 adjacency required — or a VM onto a hypervisor with cloud-init. Every byte served from your storage.' },
  { n: '04', title: 'Enrol', Icon: IconMesh, desc: 'The node dials out to the control plane, receives an identity signed by your hub’s own CA, and joins the overlay mesh. No inbound ports, no SSH keys to distribute.' },
  { n: '05', title: 'Cluster', Icon: IconCluster, desc: 'Kubernetes across those nodes — k3s or kubeadm — created, scaled, upgraded, backed up and torn down by a reconciler. Air-gapped HA, validated live.' },
  { n: '06', title: 'Prove', Icon: IconBolt, desc: 'A GPU-aware workload is scheduled, served and made reachable. The rack is doing work — and you did it without writing a runbook.' },
]

export function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="grid-dots absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>The journey · crate to cluster</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-[44px]">
            One unattended path from a powered-off box to a running node.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/65">
            Every step completes bottom-up, in sequence, as a first-class state machine — not a shell
            script that sleeps and hopes. Health gates wait on real readiness. Desired state is
            reconciled on a loop, so a hub restart or a moved BMC self-heals instead of stranding you.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/50 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <s.Icon width={20} height={20} />
                </span>
                <span className="font-mono text-[13px] text-white/35">{s.n}</span>
              </div>
              <h3 className="mt-4 text-[19px] font-bold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-accent/25 bg-accent/[0.08] p-6 md:flex md:items-center md:gap-5">
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">Done means</span>
          <p className="mt-2 text-[17px] font-medium leading-relaxed text-white/90 md:mt-0">
            A customer unboxes a server, racks it, gives Nexus its BMC address, and walks away with a
            Kubernetes node — <span className="text-white">without a shell, without us, without a runbook.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
