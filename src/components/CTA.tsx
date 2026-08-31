import { IconArrow } from '../lib/brand'

export function CTA() {
  return (
    <section id="contact" className="bg-paper px-5 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-white md:py-20">
        <div className="grid-dots absolute inset-0 opacity-50" />
        <div
          className="absolute -bottom-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(closest-side, #5b54e8, transparent)' }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight md:text-[46px]">
            Bring AI to the infrastructure you already own.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
            See a rack go from crate to cluster — offline, unattended, by one operator. We’ll walk
            your team through the journey on your hardware profile.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@organization.gov"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/40 outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl accent-grad px-5 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Request a demo
              <IconArrow width={16} height={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="mt-4 font-mono text-[12px] text-white/40">
            Or email <span className="text-white/70">hello@nexus.ai</span> — no data leaves your network in a Nexus deployment.
          </p>
        </div>
      </div>
    </section>
  )
}
