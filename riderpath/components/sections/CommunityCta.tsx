'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const avatars = [
  { initial: 'D', bg: 'var(--rp-asphalt-700)' },
  { initial: 'M', bg: 'var(--rp-asphalt-600)' },
  { initial: 'R', bg: 'var(--rp-asphalt-750)' },
  { initial: 'T', bg: 'var(--rp-asphalt-500)' },
  { initial: 'E', bg: 'var(--rp-asphalt-800)' },
]

export function CommunityCta() {
  const sectionRef  = useRef<HTMLElement>(null)
  const avatarsRef  = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const leadRef     = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLAnchorElement>(null)

  useLayoutEffect(() => {
    gsap.set(
      [avatarsRef.current, headlineRef.current, leadRef.current, ctaRef.current],
      { opacity: 0, y: 30 },
    )
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [avatarsRef.current, headlineRef.current, leadRef.current, ctaRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
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
      style={{
        position:   'relative',
        overflow:   'hidden',
        background: 'var(--rp-red-deep)',
        padding:    'var(--space-10) var(--gutter)',
        textAlign:  'center',
      }}
    >
      {/* Radial gradients */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          background:    [
            'radial-gradient(90% 120% at 90% 0%, rgba(208,33,39,0.85), transparent)',
            'radial-gradient(70% 90% at 0% 100%, rgba(94,18,26,0.9), transparent)',
          ].join(', '),
          pointerEvents: 'none',
        }}
      />

      {/* Diagonal line texture */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 20px)',
          opacity:         0.5,
          pointerEvents:   'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--container-prose)',
          margin:   '0 auto',
        }}
      >
        {/* Overlapping avatars */}
        <div
          ref={avatarsRef}
          className="flex justify-center"
          style={{ marginBottom: 'var(--space-7)' }}
        >
          {avatars.map(({ initial, bg }, i) => (
            <div
              key={initial}
              style={{
                width:          46,
                height:         46,
                borderRadius:   '50%',
                background:     bg,
                boxShadow:      '0 0 0 3px var(--rp-red-deep)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontFamily:     'var(--font-display)',
                fontSize:       'var(--fs-sm)',
                fontWeight:     700,
                color:          'var(--rp-ink-300)',
                textTransform:  'uppercase',
                marginLeft:     i === 0 ? 0 : -12,
                position:       'relative',
                zIndex:         avatars.length - i,
              }}
            >
              {initial}
            </div>
          ))}
        </div>

        <h2
          ref={headlineRef}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-h1)',
            fontWeight:    700,
            letterSpacing: 'var(--tracking-display)',
            textTransform: 'uppercase',
            color:         'var(--rp-white)',
            lineHeight:    'var(--lh-snug)',
            margin:        '0 0 var(--space-5)',
          }}
        >
          Tu próxima rodada
          <br />
          ya tiene quién la ruede
        </h2>

        <p
          ref={leadRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   'var(--fs-lead)',
            color:      'rgba(255,255,255,0.88)',
            lineHeight: 'var(--lh-body)',
            maxWidth:   '44ch',
            margin:     '0 auto var(--space-8)',
          }}
        >
          Únete gratis a la comunidad de motociclistas viajeros más grande de México.
        </p>

        <Link
          ref={ctaRef}
          href="/community#join"
          style={{
            display:       'inline-block',
            background:    'var(--rp-amber)',
            color:         'var(--rp-asphalt-900)',
            fontFamily:    'var(--font-display)',
            fontWeight:    700,
            fontSize:      'var(--fs-h4)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            padding:       'var(--space-4) var(--space-8)',
            borderRadius:  'var(--radius-sm)',
            boxShadow:     '0 4px 20px rgba(232,163,59,0.40)',
          }}
          onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -2, duration: 0.3, ease: 'power2.out' })}
          onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0,  duration: 0.3, ease: 'power2.out' })}
        >
          Unirme a Riderpath
        </Link>
      </div>
    </section>
  )
}
