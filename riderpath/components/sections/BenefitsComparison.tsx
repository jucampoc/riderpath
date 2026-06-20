'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const traditional = [
  'Información dispersa en grupos de WhatsApp',
  'Rutas perdidas en notas o capturas de pantalla',
  'Sin registro de tus aventuras pasadas',
  'Difícil coordinar con riders nuevos',
]

const riderpath = [
  'Toda la información de tu rodada en un solo enlace',
  'Rutas guardadas y organizadas en tu perfil',
  'Historial completo de kilómetros y experiencias',
  'Comunidad activa lista para sumarse a tu próxima aventura',
]

const ROW_COUNT    = traditional.length  // 4
const ROW_STAGGER  = 0.1   // seconds between each row pair
const CROSS_DELAY  = 0.15  // ✓ fires this long after its paired ✕
const ROW_START    = 0.7   // absolute time in the timeline when rows begin

export function BenefitsComparison() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const colHeadTraditionalRef = useRef<HTMLParagraphElement>(null)
  const colHeadRiderpathRef   = useRef<HTMLParagraphElement>(null)

  // Row-level ref arrays — populated via callback refs in JSX
  const xIconRefs    = useRef<HTMLSpanElement[]>([])
  const xTextRefs    = useRef<HTMLParagraphElement[]>([])
  const checkIconRefs = useRef<HTMLSpanElement[]>([])
  const checkTextRefs = useRef<HTMLParagraphElement[]>([])

  useLayoutEffect(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 30 })
    gsap.set([colHeadTraditionalRef.current, colHeadRiderpathRef.current], { opacity: 0, y: 16 })
    gsap.set(xIconRefs.current,    { opacity: 0, scale: 0.5 })
    gsap.set(xTextRefs.current,    { opacity: 0, y: 8 })
    gsap.set(checkIconRefs.current, { opacity: 0, scale: 0 })
    gsap.set(checkTextRefs.current, { opacity: 0, y: 8 })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // 1 — Section header fades up
      tl.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      )

      // 2 — Column header labels fade up (overlap with section header tail)
      tl.fromTo(
        [colHeadTraditionalRef.current, colHeadRiderpathRef.current],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08 },
        '-=0.3',
      )

      // 3 — Row pairs: ✕ fires first, ✓ fires CROSS_DELAY later (problem → solution rhythm)
      for (let i = 0; i < ROW_COUNT; i++) {
        const t = ROW_START + i * ROW_STAGGER

        // ✕ icon: quick scale punch (scale 0.5 → 1)
        tl.fromTo(xIconRefs.current[i],
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' },
          t,
        )
        // ✕ text: simple fade alongside icon
        tl.fromTo(xTextRefs.current[i],
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' },
          t,
        )
        // ✓ icon: confident bounce (scale 0 → 1.15 → 1)
        tl.fromTo(checkIconRefs.current[i],
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)' },
          t + CROSS_DELAY,
        )
        // ✓ text: fades up alongside its icon
        tl.fromTo(checkTextRefs.current[i],
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          t + CROSS_DELAY,
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        {/* Section header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Por qué Riderpath
          </p>
          <h2 style={{ margin: 0 }}>
            Deja atrás lo improvisado
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Traditional methods column */}
          <div
            style={{
              background:   'var(--surface-raised)',
              border:       '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding:      'var(--space-6)',
            }}
          >
            <p
              ref={colHeadTraditionalRef}
              style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    700,
                fontSize:      'var(--fs-h4)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color:         'var(--text-muted)',
                marginBottom:  'var(--space-6)',
              }}
            >
              Métodos tradicionales
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {traditional.map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span
                    ref={el => { if (el) xIconRefs.current[i] = el }}
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      fontWeight: 700,
                      fontSize:   'var(--fs-body)',
                      color:      'var(--text-faint)',
                      lineHeight: 'var(--lh-body)',
                      marginTop:  '0.05em',
                    }}
                  >
                    ✕
                  </span>
                  <p
                    ref={el => { if (el) xTextRefs.current[i] = el }}
                    style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', margin: 0 }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Riderpath column */}
          <div
            style={{
              background:   'var(--surface-card)',
              border:       '1px solid var(--border-brand)',
              borderRadius: 'var(--radius-lg)',
              padding:      'var(--space-6)',
            }}
          >
            <p
              ref={colHeadRiderpathRef}
              style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    700,
                fontSize:      'var(--fs-h4)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color:         'var(--rp-red)',
                marginBottom:  'var(--space-6)',
              }}
            >
              Riderpath
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {riderpath.map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span
                    ref={el => { if (el) checkIconRefs.current[i] = el }}
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      fontWeight: 700,
                      fontSize:   'var(--fs-body)',
                      color:      'var(--rp-red)',
                      lineHeight: 'var(--lh-body)',
                      marginTop:  '0.05em',
                    }}
                  >
                    ✓
                  </span>
                  <p
                    ref={el => { if (el) checkTextRefs.current[i] = el }}
                    style={{ fontSize: 'var(--fs-body)', color: 'var(--text-strong)', lineHeight: 'var(--lh-body)', margin: 0 }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
