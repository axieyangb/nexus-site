import { Kicker, IconOffline, IconCheck } from '../lib/brand'

const PROOFS = [
  'Firmware images and virtual-media ISOs — served from the hub',
  'OS image, kernel, initrd and cloud-init seed — UEFI HTTP Boot, no L2 needed',
  'Agent binary and per-node identity — mTLS from your hub’s own CA',
  'Kubernetes engines, CNI manifests and container images — staged over the LAN',
  'Model weights and datasets — content-addressed, on your NAS or bucket',
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
            “Air-gapped” cannot be a checkbox you test last. If a single step reaches for the internet,
            the whole promise fails at exactly the customer who bought you for it. So the rule is
            absolute: every step sources every byte from your own storage tier, with no egress at all.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            The storage tier isn’t a feature beside the journey — it’s the floor the whole journey
            stands on. A 57&nbsp;GB model repository registers in seconds having downloaded nothing;
            a node with no internet still receives every gigabyte, once, over the LAN.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-7 shadow-[0_10px_40px_rgba(20,21,26,0.06)]">
          <div className="flex items-center gap-3 border-b border-line pb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <IconOffline width={20} height={20} />
            </span>
            <div>
              <div className="text-[15px] font-bold text-ink-2">The zero-egress contract</div>
              <div className="text-[13px] text-muted">What each step must find locally — all proven in the fleet</div>
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
