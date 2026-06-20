'use client'

import { useEffect, useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function NewsletterSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const eyebrowRef  = useRef<HTMLParagraphElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const leadRef     = useRef<HTMLParagraphElement>(null)
  const formRef     = useRef<HTMLFormElement>(null)

  const [email, setEmail] = useState('')

  useIsomorphicLayoutEffect(() => {
    gsap.set(
      [eyebrowRef.current, headlineRef.current, leadRef.current, formRef.current],
      { opacity: 0, y: 30 },
    )
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [eyebrowRef.current, headlineRef.current, leadRef.current, formRef.current],
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
        background: 'var(--surface-base)',
        padding:    'var(--space-10) var(--gutter)',
        borderTop:  '1px solid var(--border-subtle)',
      }}
    >
      <div
        style={{
          maxWidth:  'var(--container-prose)',
          margin:    '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          ref={eyebrowRef}
          className="rp-eyebrow"
          style={{ display: 'block', marginBottom: 'var(--space-3)' }}
        >
          Mantente informado
        </p>

        <h2
          ref={headlineRef}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-h2)',
            fontWeight:    700,
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-display)',
            color:         'var(--text-strong)',
            margin:        '0 0 var(--space-4)',
          }}
        >
          Sé el primero en saber
        </h2>

        <p
          ref={leadRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   'var(--fs-lead)',
            color:      'var(--text-muted)',
            lineHeight: 'var(--lh-body)',
            maxWidth:   '44ch',
            margin:     '0 auto var(--space-8)',
          }}
        >
          Nuevas rodadas, eventos y funciones de la plataforma directamente en tu correo.
        </p>

        <form
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          style={{
            display:        'flex',
            gap:            'var(--space-3)',
            justifyContent: 'center',
            flexWrap:       'wrap',
          }}
        >
          <input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Correo electrónico"
            style={{
              flex:         '1 1 260px',
              maxWidth:     '360px',
              height:       'var(--space-9)',
              padding:      '0 var(--space-5)',
              fontFamily:   'var(--font-sans)',
              fontSize:     'var(--fs-body)',
              color:        'var(--text-body)',
              background:   'var(--surface-raised)',
              border:       '1px solid var(--border-default)',
              borderRadius: 'var(--radius-pill)',
              outline:      'none',
            }}
          />
          <button
            type="submit"
            style={{
              height:        'var(--space-9)',
              padding:       '0 var(--space-7)',
              fontFamily:    'var(--font-display)',
              fontWeight:    700,
              fontSize:      'var(--fs-body)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color:         'var(--text-on-red)',
              background:    'var(--brand)',
              border:        'none',
              borderRadius:  'var(--radius-pill)',
              cursor:        'pointer',
              boxShadow:     'var(--glow-red-sm)',
              flexShrink:    0,
            }}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -2, duration: 0.3, ease: 'power2.out' })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0,  duration: 0.3, ease: 'power2.out' })}
          >
            Notificarme
          </button>
        </form>
      </div>
    </section>
  )
}
