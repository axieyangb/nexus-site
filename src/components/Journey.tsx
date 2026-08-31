import { Kicker, IconServer, IconBox, IconMesh, IconCluster, IconBolt } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

type Step = {
  n: string
  title: string
  desc: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

// The machine lifecycle, straight from the design: bare → imaged → grouped →
// clustered → serving. One screen shows every machine's place in it.
const STEPS: Step[] = [
  { n: '01', title: 'Discover', Icon: IconServer, desc: 'Machines announce themselves on the network — you reach one by name, with no IP address to hunt down. Bare machines waiting to be brought up are found too.' },
  { n: '02', title: 'Image', Icon: IconBox, desc: 'Flash the Nexus image to a machine, or bring it up from one that’s already running. It comes up as a Nexus machine — no installer, no CLI, no separate provisioning system.' },
  { n: '03', title: 'Group', Icon: IconMesh, desc: 'Imaged machines join the group. A machine that’s imaged but not yet grouped isn’t an error — it’s the middle of the journey, and Nexus shows exactly where each one sits.' },
  { n: '04', title: 'Cluster', Icon: IconCluster, desc: 'The group becomes a cluster, its lifecycle handled for you. Bringing up a second rack is just pointing an existing machine at the new ones.' },
  { n: '05', title: 'Serve', Icon: IconBolt, desc: 'Deploy, scale, expose and observe your AI workloads on the accelerators Nexus detects. The rack is doing work — and you never wrote a runbook.' },
]

export function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="grid-dots absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Kicker>The lifecycle · bare to serving</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-[44px]">
            One path a machine walks — and one screen that shows where it is.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/65">
            A machine’s whole life is <span className="text-white">bare → imaged → grouped → clustered</span>,
            then serving. Each stage is a real place a machine can be, not a step that either finished
            or failed — so the operator always knows what’s in front of them, and Nexus heals its way
            forward instead of stalling.
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

        <div className="mt-4 flex items-center rounded-2xl border border-accent/25 bg-accent/[0.08] p-6 md:gap-5">
          <span className="hidden shrink-0 font-mono text-[12px] uppercase tracking-[0.18em] text-accent md:block">
            The budget
          </span>
          <p className="text-[17px] font-medium leading-relaxed text-white/90">
            Unrack a server and be serving an AI workload in{' '}
            <span className="text-white">half an hour</span> — the constraint every part of Nexus is
            measured against.
          </p>
        </div>
      </div>
    </section>
  )
}
