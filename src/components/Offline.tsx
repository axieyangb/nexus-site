import { Kicker, IconOffline, IconCheck } from '../lib/brand'

// Framed as outcomes, not mechanisms: what travels with the image / is served
// from your own site — never named plumbing.
const PROOFS = [
  'The OS image itself — flashed, or brought up from a machine you already have',
  'The platform, its database and the orchestration engine — baked into the image',
  'Accelerator drivers — shipped in the image, not downloaded on first boot',
  'Model weights and datasets — catalogued in place on your own storage',
  'Each machine’s identity — issued inside your site, never fetched from outside',
]

export function Offline() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <Kicker>Offline is an invariant, not a mode</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink-2 md:text-[44px]">
            Air-gapped by design — down to the last byte.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            “Air-gapped” can’t be a checkbox you test last. If a single step reaches for the internet,
            the whole promise fails at exactly the customer who bought you for it — a network with no
            way out. So the rule is absolute: every step completes with no egress at all, sourcing
            every byte from your own site.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Because storage is the floor the whole journey stands on, a large model repository can be
            registered in seconds having copied nothing — and a machine with no internet still receives
            everything it needs, over your own network.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-7 shadow-[0_10px_40px_rgba(20,21,26,0.06)]">
          <div className="flex items-center gap-3 border-b border-line pb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <IconOffline width={20} height={20} />
            </span>
            <div>
              <div className="text-[15px] font-bold text-ink-2">The zero-egress contract</div>
              <div className="text-[13px] text-muted">What every step must find locally — nothing fetched from outside</div>
            </div>
          </div>
          <ul className="mt-4 space-y-3">
            {PROOFS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                  <IconCheck width={13} height={13} />
                </span>
                <span className="text-[14px] leading-snug text-ink-2">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
