'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function OriginStory() {
  const sectionRef  = useRef<HTMLElement>(null)
  const wordmarkRef = useRef<HTMLSpanElement>(null)
  const eyebrowRef  = useRef<HTMLParagraphElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const bodyRef     = useRef<HTMLParagraphElement>(null)

  useIsomorphicLayoutEffect(() => {
    // Wordmark: start invisible, scaled down, blurred
    gsap.set(wordmarkRef.current, { opacity: 0, scale: 0.92, filter: 'blur(8px)' })
    // Text column: start hidden above final position
    gsap.set([eyebrowRef.current, headingRef.current, bodyRef.current], { opacity: 0, y: 30 })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // Wordmark leads: blur-to-sharp + scale up, animates to its design opacity (0.15)
      tl.fromTo(
        wordmarkRef.current,
        { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
        { opacity: 0.15, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out', clearProps: 'filter' },
      )
      // Text column: fade-up stagger, starts 0.2s after wordmark begins
      .fromTo(
        [eyebrowRef.current, headingRef.current, bodyRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
        '<+=0.2',
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            <p ref={eyebrowRef} className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              El origen del nombre
            </p>

            <h2 ref={headingRef} style={{ marginBottom: 'var(--space-5)' }}>
              RIDER + PATH
            </h2>

            <p
              ref={bodyRef}
              style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}
            >
              Riderpath® es una marca mexicana creada en 2020 como punto de encuentro digital para apasionados de las rutas en moto. Desde entonces, nos esforzamos por sensibilizar y concientizar a la comunidad sobre el deber ser de un motociclista ejemplar. El nombre nace de la unión de dos palabras: Rider (motociclista) y Path (camino) — el camino del motociclista.
            </p>
          </div>

          {/* Right: decorative wordmark */}
          <div
            aria-hidden="true"
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              paddingTop:     '0.3em',
              paddingBottom:  '0.15em',
              overflow:       'hidden',
            }}
          >
            <span
              ref={wordmarkRef}
              style={{
                fontFamily: 'var(--font-wordmark)',
                fontSize:   'clamp(4rem, 8vw + 2rem, 8rem)',
                color:      'var(--rp-red)',
                lineHeight: 1.4,
                userSelect: 'none',
                whiteSpace: 'nowrap',
                willChange: 'transform, opacity, filter',
              }}
            >
              Riderpath
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
