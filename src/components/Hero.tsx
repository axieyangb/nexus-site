import { IconArrow, IconTerminal, Logo } from '../lib/brand'

// The machine lifecycle, shown as a compact rail under the headline — this is the
// product in one glance: a machine's life runs bare → imaged → grouped →
// clustered → serving, and Nexus carries it the whole way.
const RAIL = ['Discover', 'Image', 'Group', 'Cluster', 'Serve']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="grid-dots absolute inset-0 opacity-70" />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, #5b54e8, transparent)' }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl text-center rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[12px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            On-premises AI infrastructure control plane
          </span>

          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-[68px]">
            From crate to cluster.
            <br />
            <span className="accent-text">Fully offline.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-[18px] leading-relaxed text-white/70 md:text-[19px]">
            Nexus ships as one OS image. Flash it to a machine and that machine images the rest,
            groups them into a cluster and serves your models — run by
            <strong className="text-white"> one operator</strong>, with
            <strong className="text-white"> no byte ever leaving your network</strong>.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl accent-grad px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
            >
              Request a demo
              <IconArrow width={17} height={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-[15px] font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              <IconTerminal width={17} height={17} />
              See the journey
            </a>
          </div>

          <p className="mt-5 font-mono text-[12px] text-white/45">
            Built for sovereign, air-gapped and regulated environments — defense, finance, healthcare.
          </p>
        </div>

        {/* journey rail */}
        <div className="mx-auto mt-16 max-w-4xl rise">
          <div className="flex items-stretch justify-between gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:gap-2 sm:p-3">
            {RAIL.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-1 sm:gap-2">
                <div className="flex-1 rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-transparent px-1 py-3 text-center">
                  <div className="font-mono text-[11px] text-accent/90">{String(i + 1).padStart(2, '0')}</div>
                  <div className="mt-1 text-[12px] font-semibold text-white/85 sm:text-[13px]">{step}</div>
                </div>
                {i < RAIL.length - 1 && (
                  <IconArrow width={14} height={14} className="hidden shrink-0 text-white/25 sm:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-center">
            <Logo size={15} color="var(--color-accent)" />
            <p className="text-[13px] text-white/55">
              One operator flashes the image, opens a machine by name, and the rack images itself
              into a cluster — no installer, no shell, no runbook.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
