'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'

export function PrivacyHero() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stripeRef  = useRef<HTMLSpanElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const h1Ref      = useRef<HTMLHeadingElement>(null)
  const paraRef    = useRef<HTMLParagraphElement>(null)
  const dateRef    = useRef<HTMLParagraphElement>(null)
  const btnRef     = useRef<HTMLAnchorElement>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.set(
      [stripeRef.current, eyebrowRef.current, h1Ref.current, paraRef.current, dateRef.current, btnRef.current],
      { opacity: 0, y: 20 },
    )
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(
        [stripeRef.current, eyebrowRef.current, h1Ref.current, paraRef.current, dateRef.current, btnRef.current],
        {
          opacity:  1,
          y:        0,
          duration: 0.7,
          ease:     'power3.out',
          stagger:  0.1,
          delay:    0.15,
        },
      )
    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} style={{ padding: 'var(--space-9) 0 var(--space-8)' }}>
      <div
        style={{
          maxWidth: 'var(--container-prose)',
          margin:   '0 auto',
          padding:  '0 var(--gutter)',
        }}
      >
        <span
          ref={stripeRef}
          className="rp-stripe"
          style={{ display: 'block', marginBottom: 'var(--space-5)' }}
        />

        <p ref={eyebrowRef} className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
          Riderpath · Biitzu S.A.S. de C.V.
        </p>

        <h1
          ref={h1Ref}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-h1)',
            fontWeight:    700,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color:         'var(--text-strong)',
            margin:        '0 0 var(--space-5)',
          }}
        >
          Aviso de Privacidad
        </h1>

        <p
          ref={paraRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   'var(--fs-lead)',
            color:      'var(--text-body)',
            lineHeight: 'var(--lh-body)',
            maxWidth:   '55ch',
            margin:     '0 0 var(--space-4)',
          }}
        >
          En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión
          de los Particulares, ponemos a tu disposición el presente Aviso de Privacidad.
        </p>

        <p
          ref={dateRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize:   'var(--fs-xs)',
            color:      'var(--text-faint)',
            margin:     '0 0 var(--space-6)',
          }}
        >
          Última actualización: 03 de octubre de 2023
        </p>

        <a
          ref={btnRef}
          href="/documents/AvisoprivacidadRiderpath.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '0.5rem',
            height:         '40px',
            padding:        '0 1.5rem',
            fontFamily:     'var(--font-display)',
            fontSize:       '13px',
            fontWeight:     700,
            textTransform:  'uppercase',
            letterSpacing:  '0.06em',
            color:          'var(--text-strong)',
            background:     'transparent',
            border:         '2px solid var(--border-strong)',
            borderRadius:   'var(--radius-pill)',
            textDecoration: 'none',
          }}
        >
          ↓ Descargar PDF completo
        </a>
      </div>
    </div>
  )
}
