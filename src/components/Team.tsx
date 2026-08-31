import { Kicker } from '../lib/brand'

// NOTE: names are placeholders — your thesis credits the founder as the end-to-end
// technical lead of Google TPU 8i and a founding engineer at Cohesity. Drop the
// real names in here (and swap the initials in the avatars) before you ship.
const PEOPLE = [
  {
    initials: 'F',
    name: '[ Founder & CEO ]',
    bio: 'End-to-end technical lead of Google TPU 8i — announced at both Cloud Next and Google I/O. Founding engineer at Cohesity, where they grew the platform team from 2 to 30.',
  },
  {
    initials: 'T',
    name: '[ Founding team ]',
    bio: 'From Google and Cohesity, with deep experience across accelerators, distributed systems and enterprise infrastructure software.',
  },
]

export function Team() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>The team</Kicker>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
              The people who’ve shipped the hard parts before.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Accelerator silicon, distributed systems and enterprise infrastructure — built at the
              companies that defined them. That’s why an accelerator-first, hardware-agnostic platform
              operable without an SRE org is possible now, from an AI-native team.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PEOPLE.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-paper p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl accent-grad text-[18px] font-extrabold text-white">
                  {p.initials}
                </div>
                <h3 className="mt-4 text-[17px] font-bold text-ink-2">{p.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
