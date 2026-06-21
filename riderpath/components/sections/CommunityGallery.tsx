'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMAGES = [
  {
    src:     '/images/covers/cover-sierra.jpg',
    alt:     'Rodada por la Sierra Gorda de Querétaro',
    caption: 'Sierra Gorda, Querétaro',
    area:    'sierra',
    // Full-width on mobile, 2/3 of container on desktop
    sizes:   '(max-width: 767px) 100vw, 66vw',
    yFrom:   -8,
    yTo:     8,
  },
  {
    src:     '/images/covers/cover-tequila.jpg',
    alt:     'Ruta del Tequila por Jalisco',
    caption: 'Ruta del Tequila, Jalisco',
    area:    'tequila',
    // Full-width on mobile (stacked), 1/3 of container on desktop
    sizes:   '(max-width: 767px) 100vw, 33vw',
    yFrom:   -12,
    yTo:     12,
  },
  {
    src:     '/images/covers/cover-baja.jpg',
    alt:     'Carretera Transpeninsular en Baja California',
    caption: 'Transpeninsular, Baja California',
    area:    'baja',
    // Full-width on mobile (stacked), 1/3 of container on desktop
    sizes:   '(max-width: 767px) 100vw, 33vw',
    yFrom:   -6,
    yTo:     6,
  },
]

export function CommunityGallery() {
  const sectionRef   = useRef<HTMLElement>(null)
  const eyebrowRef   = useRef<HTMLParagraphElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([])
  const captionRefs  = useRef<(HTMLParagraphElement | null)[]>([])

  useIsomorphicLayoutEffect(() => {
    gsap.set([eyebrowRef.current, headingRef.current], { opacity: 0, y: 24 })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Always-on: heading fade-up + per-caption fade-in
    const ctx = gsap.context(() => {
      gsap.to([eyebrowRef.current, headingRef.current], {
        opacity:  1,
        y:        0,
        duration: 0.8,
        ease:     'power3.out',
        stagger:  0.12,
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      captionRefs.current.forEach((caption) => {
        if (!caption) return
        gsap.fromTo(
          caption,
          { opacity: 0, y: 8 },
          {
            opacity:  1,
            y:        0,
            duration: 0.6,
            ease:     'power2.out',
            scrollTrigger: {
              trigger:       caption,
              start:         'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          },
        )
      })
    }, sectionRef)

    // Desktop only: scroll-scrub parallax — skipped on mobile for performance
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
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
    })

    return () => {
      ctx.revert()
      mm.revert()
    }
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
          Mobile  (<768 px): single column — sierra (4:3, dominant) on top,
                             tequila + baja (16:9, secondary) stacked below it
          Desktop (≥768 px): sierra large left column spanning both rows,
                             tequila top-right, baja bottom-right
          Layout + aspect-ratios handled by .gallery-grid / .gallery-card-* in globals.css
        */}
        <div className="gallery-grid">
          {IMAGES.map(({ src, alt, caption, area, sizes }, i) => (
            <div
              key={area}
              className={`gallery-card gallery-card-${area}`}
              style={{
                borderRadius: 'var(--radius-lg)',
                background:   'var(--surface-card)',
                boxShadow:    'var(--shadow-md)',
              }}
            >
              {/*
                Parallax wrapper: 140% of card height (20% bleed on each side)
                so yPercent shifts never expose the background.
                Overflow:hidden on .gallery-card clips it.
                On mobile the wrapper is static; GSAP only runs on desktop (≥768 px).
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

              {/* Gradient overlay */}
              <div
                aria-hidden="true"
                style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'linear-gradient(to top, rgba(8,8,9,0.72) 0%, rgba(8,8,9,0) 45%)',
                  zIndex:     1,
                }}
              />

              {/* Caption — font/tracking reduced on mobile for compact cards via .gallery-caption */}
              <p
                ref={(el) => { captionRefs.current[i] = el }}
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
                  // Prevent caption from widening the card on very narrow screens
                  maxWidth:      'calc(100% - var(--space-5))',
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
