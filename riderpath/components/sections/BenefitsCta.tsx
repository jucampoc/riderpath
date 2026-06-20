'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function BenefitsCta() {
  const sectionRef  = useRef<HTMLElement>(null)
  const h2Ref       = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef   = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.set([h2Ref.current, subtitleRef.current, buttonRef.current], { opacity: 0, y: 30 })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [h2Ref.current, subtitleRef.current, buttonRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ padding: 'var(--space-9) 0', background: 'var(--rp-red)' }}>
      <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>

        <h2 ref={h2Ref} style={{ color: 'var(--rp-white)', marginBottom: 'var(--space-5)' }}>
          Empieza a aprovechar todo esto
        </h2>

        <p
          ref={subtitleRef}
          style={{ fontSize: 'var(--fs-lead)', color: 'rgba(255,255,255,0.88)', lineHeight: 'var(--lh-body)', marginBottom: 'var(--space-8)' }}
        >
          Únete gratis y descubre por qué cada vez más motociclistas eligen Riderpath para sus aventuras.
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
            Únete a Riderpath
          </Link>
        </div>

      </div>
    </section>
  )
}
