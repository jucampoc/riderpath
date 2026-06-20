import { CommunityHero }    from '@/components/sections/CommunityHero'
import { CommunityGallery } from '@/components/sections/CommunityGallery'
import { CommunityWhy }     from '@/components/sections/CommunityWhy'
import { CommunityJoin }    from '@/components/sections/CommunityJoin'

export default function CommunityPage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <CommunityHero />
      <CommunityGallery />
      <CommunityWhy />
      <CommunityJoin />
    </div>
  )
}
