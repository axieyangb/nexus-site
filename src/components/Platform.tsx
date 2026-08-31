import { Kicker, IconBox, IconChip, IconMesh, IconCluster, IconServer, IconShield } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

type Cap = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  step: string
  title: string
  desc: string
  points: string[]
}

const CAPS: Cap[] = [
  {
    Icon: IconBox,
    step: 'The offline spine',
    title: 'Catalog & storage',
    desc: 'A content-addressed store on hardware you already own — the floor every other step stands on.',
    points: ['Your NAS mount or object bucket, switched at runtime', 'Firmware, OS images, engines, weights — one home', 'Reference-only artifacts catalogue bytes without copying them'],
  },
  {
    Icon: IconChip,
    step: 'Discover → provision',
    title: 'Hardware & bare metal',
    desc: 'Redfish/BMC power control, UEFI HTTP Boot, serial console and VM provisioning — vendor-agnostic.',
    points: ['Identity by MAC or serial, never a leaseable address', 'Resolve Redfish instances; probe capabilities, never infer', 'libvirt/KVM with cloud-init for virtual nodes'],
  },
  {
    Icon: IconMesh,
    step: 'Enrol',
    title: 'Fleet & mesh',
    desc: 'One line on the target enrols a machine. Agents dial out — nothing listens, nothing needs an inbound port.',
    points: ['Per-node mTLS identity from your hub’s own CA', 'WireGuard overlay with per-peer path-MTU clamping', 'Digest-verified agent upgrades with auto-rollback'],
  },
  {
    Icon: IconCluster,
    step: 'Cluster',
    title: 'Kubernetes lifecycle',
    desc: 'Create, scale, upgrade, back up, restore and tear down clusters through a reconciler — k3s and kubeadm.',
    points: ['Bootstrap is a state machine, not a shell script', 'Health gates wait on real readiness, never a sleep', 'Air-gapped HA installs validated live'],
  },
  {
    Icon: IconServer,
    step: 'Prove',
    title: 'Workloads & serving',
    desc: 'GPU-aware scheduling, managed volumes, serving and one-click expose — the rack finally does work.',
    points: ['Schedule onto detected accelerators automatically', 'Expose a service, read its logs, promote a result', 'Reachable from where it needs to be, mesh or LAN-direct'],
  },
  {
    Icon: IconShield,
    step: 'Everywhere',
    title: 'Secure & observable',
    desc: 'Secure-by-default posture with the audit trail, identity and self-healing an enterprise perimeter demands.',
    points: ['Reconciled desired state — drift repairs itself', 'Scoped credentials and per-node identity throughout', 'Activity log across every job the platform runs'],
  },
]

export function Platform() {
  return (
    <section id="platform" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>One control plane</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
            Six tools and a team, replaced by one system.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            The seams between a provisioner, a mesh, a Kubernetes distro and a registry are where an
            ops team currently lives. Nexus owns the whole span, so those seams disappear.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_10px_36px_rgba(20,21,26,0.07)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <c.Icon width={22} height={22} />
              </span>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">{c.step}</div>
              <h3 className="mt-1 text-[19px] font-bold text-ink-2">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.desc}</p>
              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] leading-snug text-ink-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
