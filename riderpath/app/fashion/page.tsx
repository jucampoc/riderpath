import { FashionHero }               from '@/components/sections/FashionHero'
import { SustainabilityCommitment }  from '@/components/sections/SustainabilityCommitment'
import { FashionCatalog }            from '@/components/sections/FashionCatalog'
import { FashionCta }                from '@/components/sections/FashionCta'

export default function FashionPage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <FashionHero />
      <SustainabilityCommitment />
      <FashionCatalog />
      <FashionCta />
    </div>
  )
}
