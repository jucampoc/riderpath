import { HeroAnimated }      from '@/components/sections/HeroAnimated'
import { FeaturedSection }   from '@/components/sections/FeaturedSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { CommunityCta }      from '@/components/sections/CommunityCta'

export default function HomePage() {
  return (
    <main>
      <HeroAnimated />
      <FeaturedSection />
      <HowItWorksSection />
      <CommunityCta />
    </main>
  )
}
