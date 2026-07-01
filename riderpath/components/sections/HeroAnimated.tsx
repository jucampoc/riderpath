'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: '12.4k',   label: 'Riders activos',  accent: true  },
  { value: '3,200+',  label: 'Rodadas creadas', accent: false },
  { value: '148k km', label: 'Trazados',         accent: false },
  { value: '31',      label: 'Estados',          accent: false },
]

export function HeroAnimated() {
  const sectionRef  = useRef<HTMLElement>(null)
  const stripeRef   = useRef<HTMLSpanElement>(null)
  const eyebrowRef  = useRef<HTMLParagraphElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const leadRef     = useRef<HTMLParagraphElement>(null)
  const ctasRef     = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.set(
      [stripeRef.current, eyebrowRef.current, headlineRef.current,
       leadRef.current, ctasRef.current, statsRef.current],
      { opacity: 0, y: 30 },
    )
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [stripeRef.current, eyebrowRef.current, headlineRef.current,
         leadRef.current, ctasRef.current, statsRef.current],
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
        background: 'var(--rp-asphalt-900)',
        minHeight:  '100vh',
        display:    'flex',
        alignItems: 'center',
        padding:    'var(--space-10) var(--gutter)',
      }}
    >
      {/* Atmosphere gradients */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: [
            'radial-gradient(120% 90% at 78% -10%, rgba(208,33,39,0.30), transparent 55%)',
            'radial-gradient(80% 70% at 10% 110%, rgba(232,163,59,0.10), transparent 60%)',
            'linear-gradient(180deg, #0E0E10 0%, #141417 100%)',
          ].join(', '),
          pointerEvents: 'none',
        }}
      />

      {/* Route grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'repeating-linear-gradient(115deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 84px)',
          opacity:         0.5,
          pointerEvents:   'none',
        }}
      />

      {/* Watermark helmet */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          right:         '-2%',
          top:           '50%',
          transform:     'translateY(-50%)',
          height:        '118%',
          aspectRatio:   '1 / 1',
          opacity:       0.06,
          filter:        'grayscale(1) brightness(2)',
          pointerEvents: 'none',
          userSelect:    'none',
        }}
      >
        <Image
          src="/images/logos/logo-icon.png"
          alt=""
          fill
          priority
          style={{ objectFit: 'contain' }}
          sizes="60vw"
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--container)',
          width:    '100%',
          margin:   '0 auto',
        }}
      >
        {/* 1 — Stripe + eyebrow (delay 0) */}
        <span
          ref={stripeRef}
          className="rp-stripe"
          style={{ display: 'block', marginBottom: 'var(--space-4)' }}
        />
        <p
          ref={eyebrowRef}
          className="rp-eyebrow"
          style={{ marginBottom: 'var(--space-6)', display: 'block' }}
        >
          Comunidad biker · México
        </p>

        {/* 2 — H1 headline (delay 0.15s) */}
        <h1
          ref={headlineRef}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-display)',
            fontWeight:    700,
            letterSpacing: 'var(--tracking-display)',
            lineHeight:    'var(--lh-tight)',
            color:         'var(--text-on-dark-strong)',
            textTransform: 'uppercase',
            margin:        '0 0 var(--space-6)',
            maxWidth:      '14ch',
          }}
        >
          Cada camino
          <br />
          cuenta una{' '}
          <span style={{ color: 'var(--rp-red)' }}>historia</span>
        </h1>

        {/* 3 — Lead paragraph (delay 0.3s) */}
        <p
          ref={leadRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   'var(--fs-lead)',
            color:      'var(--text-on-dark-body)',
            lineHeight: 'var(--lh-body)',
            maxWidth:   '46ch',
            margin:     '0 0 var(--space-8)',
          }}
        >
          Crea tu rodada, difunde la ruta y deja que la comunidad la
          coleccione. Riderpath es el mapa vivo de los motociclistas viajeros.
        </p>

        {/* 4 — CTA buttons (delay 0.45s) */}
        <div
          ref={ctasRef}
          className="flex gap-4 flex-wrap"
          style={{ marginBottom: 'var(--space-10)' }}
        >
          <Link
            href="/community#join"
            style={{
              display:       'inline-block',
              background:    'var(--rp-red)',
              color:         'var(--text-on-red)',
              fontFamily:    'var(--font-display)',
              fontWeight:    700,
              fontSize:      'var(--fs-h4)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              padding:       'var(--space-4) var(--space-7)',
              borderRadius:  'var(--radius-sm)',
              boxShadow:     'var(--glow-red)',
            }}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -2, duration: 0.3, ease: 'power2.out' })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0,  duration: 0.3, ease: 'power2.out' })}
          >
            Crear mi rodada →
          </Link>

          <Link
            href="/benefits"
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              color:         'var(--text-on-dark-muted)',
              fontFamily:    'var(--font-display)',
              fontWeight:    700,
              fontSize:      'var(--fs-h4)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              padding:       'var(--space-4) var(--space-7)',
              borderRadius:  'var(--radius-sm)',
              border:        '1px solid var(--border-on-dark-default)',
            }}
          >
            Explorar el mapa
          </Link>
        </div>

        {/* 5 — Stats row (delay 0.6s) */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8"
          style={{
            paddingTop: 'var(--space-7)',
            borderTop:  '1px solid var(--border-on-dark-subtle)',
          }}
        >
          {stats.map(({ value, label, accent }) => (
            <div key={label}>
              <div
                className="rp-mono"
                style={{
                  fontSize:     'var(--fs-h3)',
                  fontWeight:   700,
                  color:        accent ? 'var(--accent)' : 'var(--text-on-dark-strong)',
                  lineHeight:   1,
                  marginBottom: 'var(--space-1)',
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily:    'var(--font-sans)',
                  fontSize:      'var(--fs-eyebrow)',
                  fontWeight:    600,
                  color:         'var(--text-on-dark-muted)',
                  letterSpacing: 'var(--tracking-eyebrow)',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
