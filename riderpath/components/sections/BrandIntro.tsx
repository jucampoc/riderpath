'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function BrandIntro() {
  const sectionRef   = useRef<HTMLElement>(null)
  const eyebrowRef   = useRef<HTMLParagraphElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  const bodyRef      = useRef<HTMLParagraphElement>(null)
  const linkRef      = useRef<HTMLAnchorElement>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.set(
      [eyebrowRef.current, headingRef.current, bodyRef.current, linkRef.current],
      { opacity: 0, y: 20 },
    )
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.to(
        [eyebrowRef.current, headingRef.current, bodyRef.current, linkRef.current],
        {
          opacity:  1,
          y:        0,
          duration: 0.7,
          ease:     'power3.out',
          stagger:  0.12,
          scrollTrigger: {
            trigger:       sectionRef.current,
            start:         'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-7) 0', background: 'var(--surface-raised)' }}
    >
      <div
        style={{
          maxWidth: 'var(--container)',
          margin:   '0 auto',
          padding:  '0 var(--gutter)',
        }}
      >
        <p ref={eyebrowRef} className="rp-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
          Quiénes somos
        </p>

        <h2
          ref={headingRef}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-h3)',
            fontWeight:    'var(--fw-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color:         'var(--text-strong)',
            margin:        '0 0 var(--space-4)',
            maxWidth:      '28ch',
          }}
        >
          EL CAMINO DEL MOTOCICLISTA
        </h2>

        <p
          ref={bodyRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   'var(--fs-body)',
            color:      'var(--text-body)',
            lineHeight: 'var(--lh-body)',
            maxWidth:   '60ch',
            margin:     '0 0 var(--space-4)',
          }}
        >
          Riderpath® nació en 2020 como punto de encuentro digital para motociclistas con autenticidad. Hoy vestimos a nuestra comunidad con indumentaria exclusiva de propósito; muy pronto, lanzaremos la app que te ayudará a crear, compartir y coleccionar tus rodadas.
        </p>

        <Link
          href="/what-is"
          ref={linkRef}
          style={{
            fontFamily:    'var(--font-sans)',
            fontSize:      'var(--fs-sm)',
            fontWeight:    'var(--fw-semibold)',
            color:         'var(--brand)',
            textDecoration: 'none',
            transition:    'color var(--dur-base) var(--ease-out)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-hover)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)'
          }}
        >
          Conoce más sobre Riderpath →
        </Link>
      </div>
    </section>
  )
}
