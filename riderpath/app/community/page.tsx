import { getRodadasImages }  from '@/lib/getRodadasImages'
import { CommunityHero }    from '@/components/sections/CommunityHero'
import { CommunityGallery } from '@/components/sections/CommunityGallery'
import { CommunityWhy }     from '@/components/sections/CommunityWhy'
import { CommunityJoin }    from '@/components/sections/CommunityJoin'

export default function CommunityPage() {
  const images = getRodadasImages()
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <CommunityHero />
      <CommunityGallery images={images} />
      <CommunityWhy />
      <CommunityJoin />
    </div>
  )
}
