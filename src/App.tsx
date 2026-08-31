import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Problem } from './components/Problem'
import { OSImage } from './components/OSImage'
import { Journey } from './components/Journey'
import { Offline } from './components/Offline'
import { DayN } from './components/DayN'
import { Platform } from './components/Platform'
import { Why } from './components/Why'
import { Market } from './components/Market'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

// One long marketing page. Order tells the story: hook → the gap → the journey →
// the two invariants that make it real (offline, one operator) → the platform →
// why it's unique → the market it's for → pricing → who's building it → ask.
export function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <OSImage />
        <Journey />
        <Offline />
        <DayN />
        <Platform />
        <Why />
        <Market />
        <Pricing />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
