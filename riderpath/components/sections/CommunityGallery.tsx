'use client'

import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IMAGES = [
  {
    src:     '/images/covers/cover-sierra.jpg',
    alt:     'Rodada por la Sierra Gorda de Querétaro',
    caption: 'Sierra Gorda, Querétaro',
    area:    'sierra',
    sizes:   '(max-width: 768px) 100vw, 66vw',
    yFrom:   -8,
    yTo:     8,
  },
  {
    src:     '/images/covers/cover-tequila.jpg',
    alt:     'Ruta del Tequila por Jalisco',
    caption: 'Ruta del Tequila, Jalisco',
    area:    'tequila',
    sizes:   '(max-width: 768px) 100vw, 33vw',
    yFrom:   -12,
    yTo:     12,
  },
  {
    src:     '/images/covers/cover-baja.jpg',
    alt:     'Carretera Transpeninsular en Baja California',
    caption: 'Transpeninsular, Baja California',
    area:    'baja',
    sizes:   '(max-width: 768px) 100vw, 33vw',
    yFrom:   -6,
    yTo:     6,
  },
]

export function CommunityGallery() {
  const sectionRef   = useRef<HTMLElement>(null)
  const eyebrowRef   = useRef<HTMLParagraphElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  // Parallax wrapper refs (one per image — moves with scroll)
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([])
  // Caption refs (separate fade-in trigger)
  const captionRefs  = useRef<(HTMLParagraphElement | null)[]>([])

  // Hide heading before first paint to prevent FOUC
  useLayoutEffect(() => {
    gsap.set([eyebrowRef.current, headingRef.current], { opacity: 0, y: 24 })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // — Heading fade-up —
      gsap.to([eyebrowRef.current, headingRef.current], {
        opacity: 1,
        y:       0,
        duration: 0.8,
        ease:    'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // — Per-image parallax (scrub tied to scroll) —
      // The parallax wrapper has inset: '-20% 0' making it 140% of the card height.
      // A yPercent of ±12 shifts ≈ ±16.8% of card height — safely within the 20% buffer.
      IMAGES.forEach(({ yFrom, yTo }, i) => {
        const el = parallaxRefs.current[i]
        if (!el) return
        gsap.fromTo(
          el,
          { yPercent: yFrom },
          {
            yPercent: yTo,
            ease:     'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start:   'top bottom',
              end:     'bottom top',
              scrub:   true,
            },
          },
        )
      })

      // — Caption fade-ins (separate trigger per caption) —
      captionRefs.current.forEach((caption) => {
        if (!caption) return
        gsap.fromTo(
          caption,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y:       0,
            duration: 0.6,
            ease:    'power2.out',
            scrollTrigger: {
              trigger:       caption,
              start:         'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          },
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <p
          ref={eyebrowRef}
          className="rp-eyebrow"
          style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}
        >
          Rodadas de la comunidad
        </p>

        <h2
          ref={headingRef}
          style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}
        >
          El camino en imágenes
        </h2>

        {/*
          Desktop: sierra spans left 2 cols × both rows, tequila top-right, baja bottom-right.
          Mobile: single column, stacked.
        */}
        <div
          style={{
            display:             'grid',
            gap:                 'var(--space-4)',
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows:    '1fr 1fr',
            gridTemplateAreas:   '"sierra tequila" "sierra baja"',
            minHeight:           560,
          }}
        >
          {IMAGES.map(({ src, alt, caption, area, sizes }, i) => (
            <div
              key={area}
              style={{
                gridArea:     area,
                position:     'relative',
                borderRadius: 'var(--radius-lg)',
                overflow:     'hidden',        // clips the oversized parallax wrapper
                background:   'var(--surface-card)',
                boxShadow:    'var(--shadow-md)',
                minHeight:    area === 'sierra' ? 560 : 'auto',
              }}
            >
              {/*
                Parallax wrapper: extends 20% beyond the card on top and bottom
                so yPercent shifts never expose the background behind the image.
                GSAP animates this element; the card's overflow:hidden clips it.
              */}
              <div
                ref={(el) => { parallaxRefs.current[i] = el }}
                style={{ position: 'absolute', inset: '-20% 0' }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes={sizes}
                />
              </div>

              {/* Gradient overlay — sits above parallax wrapper, doesn't move */}
              <div
                aria-hidden="true"
                style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'linear-gradient(to top, rgba(8,8,9,0.72) 0%, rgba(8,8,9,0) 45%)',
                  zIndex:     1,
                }}
              />

              {/* Caption — also stationary, above gradient */}
              <p
                ref={(el) => { captionRefs.current[i] = el }}
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
                }}
              >
                {caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
