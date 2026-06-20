'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { Recycle, Shirt, Globe } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROCESS_BLOCKS = [
  {
    Icon:  Recycle,
    title: 'PET reciclado',
    note:  'Botellas de plástico recuperadas y procesadas',
  },
  {
    Icon:  Shirt,
    title: 'Tela técnica',
    note:  'Ligera, transpirable y resistente al camino',
  },
  {
    Icon:  Globe,
    title: 'Menor huella ambiental',
    note:  'Menos residuos, más kilómetros con conciencia',
  },
]

export function SustainabilityCommitment() {
  const sectionRef   = useRef<HTMLElement>(null)
  const stripeRef    = useRef<HTMLSpanElement>(null)
  const eyebrowRef   = useRef<HTMLParagraphElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const blockRefs    = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    gsap.set(stripeRef.current,    { scaleX: 0, transformOrigin: 'left' })
    gsap.set([eyebrowRef.current, headingRef.current, paragraphRef.current], { opacity: 0, y: 20 })
    blockRefs.current.forEach((el) => { if (el) gsap.set(el, { opacity: 0, scale: 0.85, y: 16 }) })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger:       sectionRef.current,
        start:         'top 75%',
        toggleActions: 'play reverse play reverse',
      }

      // Left column: stripe draw + text fade-up
      const leftTl = gsap.timeline({ scrollTrigger: trigger })

      leftTl
        .to(stripeRef.current,    { scaleX: 1,              duration: 0.7, ease: 'power3.out' })
        .to(eyebrowRef.current,   { opacity: 1, y: 0,       duration: 0.7, ease: 'power3.out' }, '-=0.35')
        .to(headingRef.current,   { opacity: 1, y: 0,       duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .to(paragraphRef.current, { opacity: 1, y: 0,       duration: 0.8, ease: 'power3.out' }, '-=0.4')

      // Right column: blocks bounce in with stagger
      gsap.to(blockRefs.current, {
        opacity:  1,
        scale:    1,
        y:        0,
        duration: 0.6,
        ease:     'back.out(1.5)',
        stagger:  0.15,
        scrollTrigger: trigger,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}
    >
      <div
        style={{
          maxWidth: 'var(--container)',
          margin:   '0 auto',
          padding:  '0 var(--gutter)',
        }}
      >
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: '3fr 2fr', alignItems: 'center' }}
        >

          {/* Left: stripe + eyebrow + heading + body */}
          <div>
            <span
              ref={stripeRef}
              className="rp-stripe"
              style={{ display: 'block', marginBottom: 'var(--space-4)' }}
            />

            <p ref={eyebrowRef} className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Compromiso ambiental
            </p>

            <h2 ref={headingRef} style={{ marginBottom: 'var(--space-6)', maxWidth: '24ch' }}>
              Tela hecha de botellas PET recicladas
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
              Cada jersey Riderpath está fabricado con tela elaborada a partir de botellas de plástico PET recicladas. Una prenda técnica, ligera y resistente, pensada para el camino — y para cuidar el planeta que recorremos.
            </p>
          </div>

          {/* Right: 3 process blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {PROCESS_BLOCKS.map(({ Icon, title, note }, i) => (
              <div
                key={title}
                ref={(el) => { blockRefs.current[i] = el }}
                style={{
                  display:      'flex',
                  alignItems:   'flex-start',
                  gap:          'var(--space-4)',
                  background:   'var(--surface-card)',
                  borderRadius: 'var(--radius-md)',
                  padding:      'var(--space-4)',
                  border:       '1px solid var(--border-subtle)',
                }}
              >
                <Icon
                  aria-hidden="true"
                  size={30}
                  color="var(--rp-red)"
                  strokeWidth={1.75}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <p
                    style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      'var(--fs-body)',
                      fontWeight:    'var(--fw-bold)',
                      color:         'var(--text-strong)',
                      letterSpacing: '-0.01em',
                      margin:        '0 0 var(--space-1)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   'var(--fs-xs)',
                      color:      'var(--text-muted)',
                      lineHeight: 'var(--lh-body)',
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
