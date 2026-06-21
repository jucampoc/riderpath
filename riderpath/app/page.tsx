import { FashionHero }              from '@/components/sections/FashionHero'
import { BrandIntro }               from '@/components/sections/BrandIntro'
import { SustainabilityCommitment } from '@/components/sections/SustainabilityCommitment'
import { FashionCatalog }           from '@/components/sections/FashionCatalog'
import { FashionCta }               from '@/components/sections/FashionCta'

export default function HomePage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <FashionHero />
      <BrandIntro />
      <SustainabilityCommitment />
      <FashionCatalog />
      <FashionCta />
    </div>
  )
}
