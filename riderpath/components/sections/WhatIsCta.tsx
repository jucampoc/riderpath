'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function WhatIsCta() {
  const sectionRef   = useRef<HTMLElement>(null)
  const h2Ref        = useRef<HTMLHeadingElement>(null)
  const subtitleRef  = useRef<HTMLParagraphElement>(null)
  const buttonRef    = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.set([h2Ref.current, subtitleRef.current, buttonRef.current], { opacity: 0, y: 30 })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // Background warms from deep red to brand red as section enters
      tl.fromTo(
        sectionRef.current,
        { backgroundColor: '#9E1B26' },
        { backgroundColor: '#D02127', duration: 1.0, ease: 'power2.out' },
      )
      // Content fades up, starting 0.1s into the bg transition
      .fromTo(
        [h2Ref.current, subtitleRef.current, buttonRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
        '<+=0.1',
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'var(--space-9) 0',
        // Starting color; GSAP animates to #D02127 (--rp-red) on scroll-in
        backgroundColor: '#9E1B26',
      }}
    >
      <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>

        <h2 ref={h2Ref} style={{ color: 'var(--rp-white)', marginBottom: 'var(--space-5)' }}>
          FORMA PARTE DE ALGO EXCLUSIVO
        </h2>

        <p
          ref={subtitleRef}
          style={{ fontSize: 'var(--fs-lead)', color: 'rgba(255,255,255,0.88)', lineHeight: 'var(--lh-body)', marginBottom: 'var(--space-8)' }}
        >
          Únete a la comunidad de motociclistas con autenticidad más comprometida de México.
        </p>

        <div ref={buttonRef}>
          <Link
            href="/community#join"
            style={{
              display:        'inline-block',
              background:     'var(--rp-amber)',
              color:          'var(--rp-asphalt-900)',
              fontFamily:     'var(--font-display)',
              fontWeight:     700,
              fontSize:       'var(--fs-h4)',
              letterSpacing:  'var(--tracking-wide)',
              textTransform:  'uppercase',
              padding:        'var(--space-4) var(--space-8)',
              borderRadius:   'var(--radius-pill)',
              textDecoration: 'none',
              boxShadow:      '0 4px 20px rgba(232,163,59,0.40)',
            }}
          >
            ÚNETE A RIDERPATH
          </Link>
        </div>

      </div>
    </section>
  )
}
