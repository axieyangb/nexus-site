import { Kicker, IconBox, IconChip, IconOffline, IconLock, IconHeal } from '../lib/brand'
import type { ComponentType, SVGProps } from 'react'

const POINTS: { Icon: ComponentType<SVGProps<SVGSVGElement>>; t: string; d: string }[] = [
  {
    Icon: IconBox,
    t: 'One image, every machine',
    d: 'No separate control plane to install, no agent to bootstrap onto a blank machine. The image is the whole product; the machine you open is simply the one you’re driving from.',
  },
  {
    Icon: IconChip,
    t: 'Bottom-up, from the OS',
    d: 'Your AI stack ships as a payload on a purpose-built operating system — partitioned, hardened and driver-complete — not assembled by hand on top of a generic one. The ground can’t drift.',
  },
  {
    Icon: IconOffline,
    t: 'Offline by design',
    d: 'Every byte comes from your own site. Nothing phones home — so the promise holds at exactly the customer who bought you for it: a network with no way out.',
  },
  {
    Icon: IconLock,
    t: 'Your weights never leave your storage',
    d: 'Nexus catalogues; your storage holds. A large repository is registered in seconds having copied nothing. The bytes stay exactly where your compliance team put them.',
  },
  {
    Icon: IconHeal,
    t: 'One operator, no SRE org',
    d: 'The routine work is done by the platform. Machines heal themselves; a second rack is a few clicks, not a project. Accelerator-first, and hardware-agnostic by design.',
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
              No platform today is accelerator-first, delivered as one image, and operable without an
              SRE organization — <span className="accent-text">built by an AI-native team.</span> That
              is the gap Nexus fills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
