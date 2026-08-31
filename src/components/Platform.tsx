import { Kicker, IconBox, IconServer, IconChip, IconCluster, IconBolt, IconHeal } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

type Cap = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  desc: string
  points: string[]
}

// Each card maps to a real domain in the codebase — described as an outcome, with
// no underlying plumbing named.
const CAPS: Cap[] = [
  {
    Icon: IconBox,
    title: 'Storage that stays yours',
    desc: 'Nexus records what each artifact is and where its bytes live — the bytes stay on your own storage. A large model repository registers in seconds, having copied nothing.',
    points: ['Your NAS or object store, referenced in place', 'Versions and file lists — one source of truth', 'Never duplicated onto our disk'],
  },
  {
    Icon: IconChip,
    title: 'Discover & image',
    desc: 'Find machines on the network and bring them up on the Nexus image. Each machine’s life runs bare → imaged → grouped → clustered, shown on one screen.',
    points: ['Machines announce themselves — reach one by name', 'Image a bare machine from one already running', 'No installer, no CLI, no separate provisioner'],
  },
  {
    Icon: IconServer,
    title: 'Machines that know themselves',
    desc: 'Every machine keeps its own account of its hardware and shares it across the site, so the screen always reflects the real thing — and the platform acts only through machines that report what they can do.',
    points: ['Written by the machine, read by the screen', 'Capabilities reported, never assumed', 'Replicated across the site'],
  },
  {
    Icon: IconCluster,
    title: 'Group & cluster',
    desc: 'Organize machines by what they are, then stand up a cluster across them. A second rack is just pointing an existing machine at the new ones.',
    points: ['Logical pools over the physical layout', 'Cluster lifecycle handled for you', 'Grow by adding machines, not rebuilding'],
  },
  {
    Icon: IconBolt,
    title: 'Run AI workloads',
    desc: 'Deploy, scale, expose and read the logs of your workloads — on the accelerators Nexus detects and schedules onto automatically.',
    points: ['Accelerator-aware scheduling', 'One-click expose, reachable where needed', 'Logs and lifecycle in one place'],
  },
  {
    Icon: IconHeal,
    title: 'Knows dead from unreachable',
    desc: 'A dead machine and an unreachable one look identical from the outside. Nexus decides what a machine’s silence means, so it heals instead of guessing — and never acts on a false alarm.',
    points: ['Silence interpreted, not assumed', 'Self-healing, not alert-and-wait', 'Safe to leave running unattended'],
  },
]

export function Platform() {
  return (
    <section id="platform" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>One control plane</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
            A provisioner, an orchestrator and a registry — replaced by one system.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            The seams between the tools you’d otherwise stitch together are where an ops team lives.
            Nexus owns the whole span, so the seams — and the team that tends them — disappear.
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
              <h3 className="mt-4 text-[19px] font-bold text-ink-2">{c.title}</h3>
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
