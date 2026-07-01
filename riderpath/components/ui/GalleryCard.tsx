'use client'

import Image from 'next/image'
import { forwardRef } from 'react'
import type { RodadaImage } from '@/lib/getRodadasImages'

interface GalleryCardProps {
  image: RodadaImage
  sizes: string
}

// ref is forwarded to the inner parallax wrapper so the parent can apply GSAP yPercent scroll-scrub
const GalleryCard = forwardRef<HTMLDivElement, GalleryCardProps>(
  function GalleryCard({ image, sizes }, parallaxRef) {
    return (
      <>
        <div ref={parallaxRef} style={{ position: 'absolute', inset: '-20% 0' }}>
          <Image
            src={image.src}
            alt={image.caption}
            fill
            style={{ objectFit: 'cover' }}
            sizes={sizes}
          />
        </div>

        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to top, rgba(8,8,9,0.72) 0%, rgba(8,8,9,0) 45%)',
            zIndex:     1,
          }}
        />

        <p
          className="gallery-caption"
          style={{
            position:      'absolute',
            bottom:        'var(--space-4)',
            left:          'var(--space-5)',
            margin:        0,
            fontFamily:    'var(--font-sans)',
            fontSize:      'var(--fs-sm)',
            fontWeight:    'var(--fw-semibold)',
            color:         'rgba(255,255,255,0.90)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            textShadow:    '0 1px 4px rgba(0,0,0,0.6)',
            zIndex:        2,
            maxWidth:      'calc(100% - var(--space-5))',
          }}
        >
          {image.caption}
        </p>
      </>
    )
  }
)

GalleryCard.displayName = 'GalleryCard'
export { GalleryCard }
