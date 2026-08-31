import { useEffect, useState } from 'react'
import { Wordmark, IconArrow } from '../lib/brand'

const LINKS = [
  { href: '#journey', label: 'How it works' },
  { href: '#platform', label: 'Platform' },
  { href: '#why', label: 'Why Nexus' },
  { href: '#market', label: 'Market' },
  { href: '#pricing', label: 'Pricing' },
]

export function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="shrink-0"><Wordmark size={22} /></a>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[14px] font-medium text-muted transition-colors hover:text-ink-2">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden text-[14px] font-semibold text-ink-2 hover:text-accent sm:inline">
            Talk to us
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-lg accent-grad px-4 py-2 text-[14px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Request a demo
            <IconArrow width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
