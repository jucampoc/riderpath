'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STATS = [
  {
    target: 500,
    prefix: '+',
    suffix: '',
    label:  'Rodadas compartidas',
    note:   'y contando',
  },
  {
    target: 50,
    prefix: '+',
    suffix: '',
    label:  'Ciudades conectadas',
    note:   'en México y Latinoamérica',
  },
  {
    target: 100,
    prefix: '',
    suffix: '%',
    label:  'Pasión por el camino',
    note:   'el único requisito para entrar',
  },
]

export function CommunityWhy() {
  const sectionRef   = useRef<HTMLElement>(null)
  const stripeRef    = useRef<HTMLSpanElement>(null)
  const eyebrowRef   = useRef<HTMLParagraphElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const rightColRef  = useRef<HTMLDivElement>(null)
  const numRefs      = useRef<(HTMLSpanElement | null)[]>([])
  const labelRefs    = useRef<(HTMLDivElement | null)[]>([])

  // Hide animated elements before first paint to prevent FOUC
  useIsomorphicLayoutEffect(() => {
    gsap.set(stripeRef.current, { scaleX: 0, transformOrigin: 'left' })
    gsap.set([eyebrowRef.current, headingRef.current, paragraphRef.current], { opacity: 0, y: 20 })
    labelRefs.current.forEach((el) => { if (el) gsap.set(el, { opacity: 0, y: 12 }) })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {

      // — Left column: stripe draw + text fade-up —
      const leftTl = gsap.timeline({
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      })

      leftTl
        .to(stripeRef.current,    { scaleX: 1,              duration: 0.7, ease: 'power3.out' })
        .to(eyebrowRef.current,   { opacity: 1, y: 0,       duration: 0.7, ease: 'power3.out' }, '-=0.35')
        .to(headingRef.current,   { opacity: 1, y: 0,       duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .to(paragraphRef.current, { opacity: 1, y: 0,       duration: 0.8, ease: 'power3.out' }, '-=0.4')

      // — Right column: staggered count-up with label fade —
      const rightTl = gsap.timeline({
        scrollTrigger: {
          trigger:       rightColRef.current,
          start:         'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      STATS.forEach(({ target, prefix, suffix }, i) => {
        const numEl   = numRefs.current[i]
        const labelEl = labelRefs.current[i]
        if (!numEl) return

        const proxy     = { n: 0 }
        const finalText = `${prefix}${target}${suffix}`
        const position  = i * 0.2          // stagger start time in the timeline

        // Counter tween: proxy object drives text updates
        rightTl.to(proxy, {
          n:        target,
          duration: 1.5,
          ease:     'power2.out',
          onUpdate() {
            // Show raw integer during counting; no prefix/suffix yet
            numEl.textContent = String(Math.round(proxy.n))
          },
          onComplete() {
            // Attach prefix/suffix only when counting finishes
            numEl.textContent = finalText
          },
          onReverseComplete() {
            // Reset display cleanly to bare zero when fully reversed
            proxy.n = 0
            numEl.textContent = '0'
          },
        }, position)

        // Label fades in at the same time as its counter starts
        if (labelEl) {
          rightTl.to(labelEl, {
            opacity:  1,
            y:        0,
            duration: 0.8,
            ease:     'power2.out',
          }, position)
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}
    >
      <div
        style={{
          maxWidth: 'var(--container)',
          margin:   '0 auto',
          padding:  '0 var(--gutter)',
        }}
      >
        <div
          className="grid gap-8 grid-cols-1 md:grid-cols-[3fr_2fr] items-center"
        >

          {/* Left column */}
          <div>
            <span
              ref={stripeRef}
              className="rp-stripe"
              style={{ display: 'block', marginBottom: 'var(--space-4)' }}
            />

            <p ref={eyebrowRef} className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Por qué importa
            </p>

            <h2 ref={headingRef} style={{ marginBottom: 'var(--space-6)', maxWidth: '22ch' }}>
              La tecnología es la herramienta, la comunidad es el corazón
            </h2>

            <p
              ref={paragraphRef}
              style={{
                fontSize:   'var(--fs-lead)',
                color:      'var(--text-body)',
                lineHeight: 'var(--lh-body)',
                maxWidth:   '52ch',
                margin:     0,
              }}
            >
              En Riderpath creemos que cada rodada es más memorable cuando se comparte. Por eso ponemos la tecnología al servicio de la comunidad biker: para que conectar con otros riders, descubrir nuevas rutas y vivir experiencias juntos sea siempre más fácil.
            </p>
          </div>

          {/* Right column: stat blocks */}
          <div
            ref={rightColRef}
            className="community-why-stats"
            style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           0,
              borderLeft:    '1px solid var(--border-subtle)',
              paddingLeft:   'var(--space-8)',
            }}
          >
            {STATS.map(({ label, note }, i) => (
              <div
                key={label}
                style={{
                  paddingTop:    i === 0 ? 0 : 'var(--space-7)',
                  paddingBottom: i === STATS.length - 1 ? 0 : 'var(--space-7)',
                  borderBottom:  i === STATS.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                }}
              >
                {/* Number display — driven by GSAP proxy via ref */}
                <p
                  style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      'clamp(1.5rem, 1.1rem + 1.4vw, 2.25rem)',
                    fontWeight:    'var(--fw-bold)',
                    letterSpacing: '-0.02em',
                    color:         'var(--brand)',
                    lineHeight:    1,
                    margin:        '0 0 var(--space-2)',
                  }}
                >
                  <span ref={(el) => { numRefs.current[i] = el }}>0</span>
                </p>

                {/* Label + note group — fades in alongside its counter */}
                <div ref={(el) => { labelRefs.current[i] = el }}>
                  <p
                    style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      'var(--fs-body)',
                      fontWeight:    'var(--fw-semibold)',
                      color:         'var(--text-strong)',
                      textTransform: 'uppercase',
                      letterSpacing: 'var(--tracking-wide)',
                      margin:        '0 0 var(--space-1)',
                    }}
                  >
                    {label}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   'var(--fs-xs)',
                      color:      'var(--text-muted)',
                      margin:     0,
                    }}
                  >
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
