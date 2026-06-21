import { WhatIsHero }        from '@/components/sections/WhatIsHero'
import { OriginStory }       from '@/components/sections/OriginStory'
import { MissionVision }     from '@/components/sections/MissionVision'
import { ValueProposition }  from '@/components/sections/ValueProposition'
import { WhatIsCta }         from '@/components/sections/WhatIsCta'

export default function WhatIsPage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)', overflowX: 'hidden' }}>
      <WhatIsHero />
      <OriginStory />
      <MissionVision />
      <ValueProposition />
      <WhatIsCta />
    </div>
  )
}
