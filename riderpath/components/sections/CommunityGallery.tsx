/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RodadaImage } from '@/lib/getRodadasImages'

const CARDS = [
  {
    src:     '/images/covers/cover-sierra.jpg',
    caption: 'Sierra Gorda, Querétaro',
    area:    'sierra',
    sizes:   '(max-width: 767px) 100vw, 66vw',
    yFrom:   -8,
    yTo:     8,
  },
  {
    src:     '/images/covers/cover-tequila.jpg',
    caption: 'Ruta del Tequila, Jalisco',
    area:    'tequila',
    sizes:   '(max-width: 767px) 100vw, 33vw',
    yFrom:   -12,
    yTo:     12,
  },
  {
    src:     '/images/covers/cover-baja.jpg',
    caption: 'Transpeninsular, Baja California',
    area:    'baja',
    sizes:   '(max-width: 767px) 100vw, 33vw',
    yFrom:   -6,
    yTo:     6,
  },
]

// Per-card entry/exit directions (index matches CARDS)
// sierra (0): in from right, out downward
// tequila (1): in from bottom, out to left
// baja (2): in from right, out upward
const SLIDE = [
  { inFrom: 'right'  as const, outTo: 'down' as const },
  { inFrom: 'bottom' as const, outTo: 'left' as const },
  { inFrom: 'right'  as const, outTo: 'up'   as const },
]

interface Props {
  images: RodadaImage[]
}

export function CommunityGallery({ images }: Props) {
  const sectionRef   = useRef<HTMLElement>(null)
  const eyebrowRef   = useRef<HTMLParagraphElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([])
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([])

  // Two image layers per card — A is initially visible, B starts off-screen
  const layerARefs   = useRef<(HTMLDivElement | null)[]>([])
  const layerBRefs   = useRef<(HTMLDivElement | null)[]>([])
  const imgARefs     = useRef<(HTMLImageElement | null)[]>([])
  const imgBRefs     = useRef<(HTMLImageElement | null)[]>([])
  const capARefs     = useRef<(HTMLParagraphElement | null)[]>([])
  const capBRefs     = useRef<(HTMLParagraphElement | null)[]>([])

  // All rotation state lives in refs — no React re-renders needed during animation
  const whichActive    = useRef<('A' | 'B')[]>(['A', 'A', 'A'])
  const displayIdxRef  = useRef(0)
  const isAnimating    = useRef(false)
  const imagesRef      = useRef(images)
  const tlRef          = useRef<gsap.core.Timeline | null>(null)
  imagesRef.current    = images

  // Compute initial src for each layer slot at render time
  const n = images.length
  const initialLayers = CARDS.map((fallback, i) => ({
    A: n > 0 ? (images[i % n]       ?? fallback) : fallback,
    B: n > 0 ? (images[(i + 1) % n] ?? fallback) : fallback,
  }))

  // Position B layers off-screen before first paint so they don't flash
  useIsomorphicLayoutEffect(() => {
    CARDS.forEach((_, i) => {
      const layerB = layerBRefs.current[i]
      const capB   = capBRefs.current[i]
      if (layerB) {
        gsap.set(layerB, SLIDE[i].inFrom === 'right'
          ? { x: '100%', y: 0 }
          : { y: '100%', x: 0 })
      }
      if (capB) gsap.set(capB, { opacity: 0 })
    })

    gsap.set([eyebrowRef.current, headingRef.current], { opacity: 0, y: 24 })
    gsap.set(cardRefs.current.filter(Boolean), { opacity: 0, y: 8 })
  }, [])

  // Scroll-driven: heading fade-up, card fade-in, parallax
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.to([eyebrowRef.current, headingRef.current], {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current, start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      cardRefs.current.forEach((card) => {
        if (!card) return
        gsap.to(card, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: {
            trigger: card, start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    }, sectionRef)

    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      CARDS.forEach(({ yFrom, yTo }, i) => {
        const el = parallaxRefs.current[i]
        if (!el) return
        gsap.fromTo(el, { yPercent: yFrom }, {
          yPercent: yTo, ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom', end: 'bottom top', scrub: true,
          },
        })
      })
    })

    return () => { ctx.revert(); mm.revert() }
  }, [])

  // Auto-rotation: every 5.7 s (5 s pause + 0.7 s transition), all three cards animate simultaneously
  useEffect(() => {
    if (imagesRef.current.length <= 1) return

    function runRotation() {
      if (isAnimating.current) return
      isAnimating.current = true

      const imgs  = imagesRef.current
      const count = imgs.length
      const next  = (displayIdxRef.current + 1) % count

      tlRef.current?.kill()
      const tl = gsap.timeline({
        onComplete: () => {
          displayIdxRef.current = next
          whichActive.current = whichActive.current.map(
            w => (w === 'A' ? 'B' : 'A')
          ) as ('A' | 'B')[]
          isAnimating.current = false
        },
      })
      tlRef.current = tl

      CARDS.forEach((fallback, i) => {
        const isAActive = whichActive.current[i] === 'A'

        const outDiv = isAActive ? layerARefs.current[i] : layerBRefs.current[i]
        const inDiv  = isAActive ? layerBRefs.current[i] : layerARefs.current[i]
        const inImg  = isAActive ? imgBRefs.current[i]   : imgARefs.current[i]
        const outCap = isAActive ? capARefs.current[i]   : capBRefs.current[i]
        const inCap  = isAActive ? capBRefs.current[i]   : capARefs.current[i]

        if (!outDiv || !inDiv || !inImg || !outCap || !inCap) return

        // Load next image into the inactive layer before animating
        const nextImg = imgs[(next + i) % count] ?? fallback
        inImg.src = nextImg.src
        inImg.alt = nextImg.caption
        inCap.textContent = nextImg.caption

        const { inFrom, outTo } = SLIDE[i]

        // Reset position of incoming layer to its entry offset
        gsap.set(inDiv, {
          ...(inFrom === 'right' ? { x: '100%', y: 0 } : { y: '100%', x: 0 }),
          zIndex: 2,
        })
        gsap.set(outDiv, { x: 0, y: 0, zIndex: 1 })
        gsap.set(inCap, { opacity: 0 })

        // Incoming slides to center — all three fire at t=0
        tl.to(inDiv, { x: 0, y: 0, duration: 0.7, ease: 'power2.inOut' }, 0)

        // Outgoing exits in its card-specific direction
        if      (outTo === 'down') tl.to(outDiv, { y: '100%',  duration: 0.7, ease: 'power2.inOut' }, 0)
        else if (outTo === 'left') tl.to(outDiv, { x: '-100%', duration: 0.7, ease: 'power2.inOut' }, 0)
        else                       tl.to(outDiv, { y: '-100%', duration: 0.7, ease: 'power2.inOut' }, 0)

        // Caption cross-fade: out fades, in fades in 0.3 s later
        tl.to(outCap, { opacity: 0, duration: 0.4 }, 0)
        tl.to(inCap,  { opacity: 1, duration: 0.4 }, 0.3)
      })
    }

    const id = setInterval(runRotation, 5700)
    return () => {
      clearInterval(id)
      tlRef.current?.kill()
    }
  }, [])

  const captionStyle: React.CSSProperties = {
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
    zIndex:        4,
    maxWidth:      'calc(100% - var(--space-5))',
    pointerEvents: 'none',
  }

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
          Mobile  (<768 px): single column — sierra (4:3) on top, tequila + baja (16:9) below
          Desktop (≥768 px): sierra large left column, tequila top-right, baja bottom-right
          .gallery-card already provides position: relative; overflow: hidden
        */}
        <div className="gallery-grid">
          {CARDS.map((card, i) => (
            <div
              key={card.area}
              ref={(el) => { cardRefs.current[i] = el }}
              className={`gallery-card gallery-card-${card.area}`}
              style={{
                borderRadius: 'var(--radius-lg)',
                background:   'var(--surface-card)',
                boxShadow:    'var(--shadow-md)',
              }}
            >
              {/* Parallax wrapper — GSAP yPercent scroll-scrub, not affected by slide animation */}
              <div
                ref={(el) => { parallaxRefs.current[i] = el }}
                style={{ position: 'absolute', inset: '-20% 0' }}
              >
                {/* Layer A — initially visible */}
                <div
                  ref={(el) => { layerARefs.current[i] = el }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <img
                    ref={(el) => { imgARefs.current[i] = el }}
                    src={initialLayers[i].A.src}
                    alt={initialLayers[i].A.caption}
                    draggable={false}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Layer B — starts off-screen (positioned by useIsomorphicLayoutEffect) */}
                <div
                  ref={(el) => { layerBRefs.current[i] = el }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <img
                    ref={(el) => { imgBRefs.current[i] = el }}
                    src={initialLayers[i].B.src}
                    alt={initialLayers[i].B.caption}
                    draggable={false}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Gradient overlay — above both image layers */}
              <div
                aria-hidden="true"
                style={{
                  position:      'absolute',
                  inset:         0,
                  background:    'linear-gradient(to top, rgba(8,8,9,0.72) 0%, rgba(8,8,9,0) 45%)',
                  zIndex:        3,
                  pointerEvents: 'none',
                }}
              />

              {/* Captions A and B — GSAP controls opacity so only one is visible at a time */}
              <p ref={(el) => { capARefs.current[i] = el }} className="gallery-caption" style={captionStyle}>
                {initialLayers[i].A.caption}
              </p>
              <p ref={(el) => { capBRefs.current[i] = el }} className="gallery-caption" style={captionStyle}>
                {initialLayers[i].B.caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
