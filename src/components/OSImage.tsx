import { Kicker, IconBox, IconServer, IconMesh, IconBolt } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

const CARDS: { Icon: ComponentType<SVGProps<SVGSVGElement>>; t: string; d: string }[] = [
  {
    Icon: IconServer,
    t: 'One binary, every machine',
    d: 'The machine you open in a browser is your control point — there’s no separate server to stand up first. Every machine runs the same image; which one you drive from is the only difference.',
  },
  {
    Icon: IconMesh,
    t: 'Every machine images the next',
    d: 'A laptop flashed with the image, carried into the datacenter, is the seed. From it the rack images itself. No installer to run, no CLI, no separate provisioning system.',
  },
  {
    Icon: IconBolt,
    t: 'Upgrades are a reboot',
    d: 'The system rolls into its other slot; a rollback is a reboot back. Your data is untouched — because it was never kept in the same place as the OS.',
  },
  {
    Icon: IconBox,
    t: 'Reach any machine by name',
    d: 'Open a machine at its own name on the network — no IP address to discover first. It’s the mental model server hardware already gives an operator.',
  },
]

export function OSImage() {
  return (
    <section id="os" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Kicker>The foundation · one OS image</Kicker>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
              Nexus is an operating system — not a stack you assemble.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Every machine boots our image: a purpose-built OS carrying the platform, its database,
              the orchestration engine and the accelerator drivers, partitioned by us. Your AI cluster
              is a payload <em>on top of</em> the OS — not something you build by hand on top of a
              generic one.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              That’s what bottom-up means. The ground is ours, so nothing above it can drift — and the
              bootstrap problem every control plane fights (something has to install the agent, the
              agent needs a credential, the credential has to reach a machine with nothing on it)
              simply doesn’t exist. The image already is the agent.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((c) => (
              <div key={c.t} className="rounded-2xl border border-line bg-paper p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <c.Icon width={22} height={22} />
                </span>
                <h3 className="mt-4 text-[16px] font-bold text-ink-2">{c.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
