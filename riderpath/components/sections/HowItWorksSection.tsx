'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num:    '01',
    title:  'Crea',
    body:   'Diseña tu rodada con punto de partida, ruta, duración y nivel de dificultad. Tu aventura empieza aquí.',
    accent: true,
  },
  {
    num:    '02',
    title:  'Difunde',
    body:   'Comparte toda la información desde un único enlace. Llega a miles de motociclistas en segundos.',
    accent: false,
  },
  {
    num:    '03',
    title:  'Colecciona',
    body:   'Guarda cada kilómetro, foto y momento. Tu historial de rodadas siempre disponible y ordenado.',
    accent: false,
  },
]

export function HowItWorksSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const stepsGridRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const stepEls = Array.from(stepsGridRef.current?.children ?? [])
    gsap.set([headerRef.current, ...stepEls], { opacity: 0, y: 30 })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepEls = Array.from(stepsGridRef.current?.children ?? [])
      gsap.fromTo(
        [headerRef.current, ...stepEls],
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
        background: 'var(--rp-asphalt-900)',
        padding:    'var(--space-10) var(--gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>

        <div ref={headerRef} style={{ marginBottom: 'var(--space-8)' }}>
          <p
            className="rp-eyebrow"
            style={{ marginBottom: 'var(--space-3)', display: 'block' }}
          >
            Cómo funciona
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize:   'var(--fs-h2)',
              color:      'var(--text-strong)',
              margin:     0,
            }}
          >
            Tres pasos, mil caminos
          </h2>
        </div>

        {/* Steps grid — children targeted individually for stagger */}
        <div
          ref={stepsGridRef}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap:                 'var(--space-6)',
          }}
        >
          {steps.map(({ num, title, body, accent }) => (
            <div
              key={num}
              style={{
                paddingTop: 'var(--space-6)',
                borderTop:  `2px solid ${accent ? 'var(--rp-red)' : 'var(--border-strong)'}`,
              }}
            >
              <div
                className="rp-mono"
                style={{
                  fontSize:     'var(--fs-h2)',
                  fontWeight:   700,
                  color:        'var(--rp-red)',
                  lineHeight:   1,
                  marginBottom: 'var(--space-4)',
                }}
              >
                {num}
              </div>
              <h3
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'var(--fs-h3)',
                  fontWeight:    700,
                  color:         'var(--text-strong)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--tracking-display)',
                  margin:        '0 0 var(--space-4)',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize:   'var(--fs-body)',
                  color:      'var(--text-muted)',
                  lineHeight: 'var(--lh-body)',
                  margin:     0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
