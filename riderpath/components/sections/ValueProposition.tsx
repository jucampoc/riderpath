'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)

  const num1Ref   = useRef<HTMLDivElement>(null)
  const title1Ref = useRef<HTMLHeadingElement>(null)
  const desc1Ref  = useRef<HTMLParagraphElement>(null)

  const num2Ref   = useRef<HTMLDivElement>(null)
  const title2Ref = useRef<HTMLHeadingElement>(null)
  const desc2Ref  = useRef<HTMLParagraphElement>(null)

  const num3Ref   = useRef<HTMLDivElement>(null)
  const title3Ref = useRef<HTMLHeadingElement>(null)
  const desc3Ref  = useRef<HTMLParagraphElement>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 30 })
    gsap.set([num1Ref.current, num2Ref.current, num3Ref.current], { opacity: 0, scale: 1.4 })
    gsap.set(
      [title1Ref.current, desc1Ref.current,
       title2Ref.current, desc2Ref.current,
       title3Ref.current, desc3Ref.current],
      { opacity: 0, y: 20 },
    )
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      // Build a sub-timeline for one column: number pops, then title+desc stagger up
      const makeColTl = (
        numEl:   HTMLDivElement     | null,
        titleEl: HTMLHeadingElement | null,
        descEl:  HTMLParagraphElement | null,
      ) => {
        const sub = gsap.timeline()
        sub
          .fromTo(numEl,
            { opacity: 0, scale: 1.4 },
            { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
          )
          .fromTo([titleEl, descEl],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
            '<+=0.1', // title starts 0.1s after number starts
          )
        return sub
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      })

      tl
        // Section header fades up first
        .fromTo(headerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        )
        // Column 1 starts slightly before header fully finishes
        .add(makeColTl(num1Ref.current, title1Ref.current, desc1Ref.current), '-=0.2')
        // Column 2 starts 0.2s after column 1 started
        .add(makeColTl(num2Ref.current, title2Ref.current, desc2Ref.current), '<+=0.2')
        // Column 3 starts 0.2s after column 2 started
        .add(makeColTl(num3Ref.current, title3Ref.current, desc3Ref.current), '<+=0.2')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <div ref={headerRef} style={{ marginBottom: 'var(--space-8)' }}>
          <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Qué resolvemos
          </p>
          <h2 style={{ margin: 0 }}>
            Tecnología al servicio del Rider
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div style={{ paddingTop: 'var(--space-5)', borderTop: '2px solid var(--border-strong)' }}>
            <div
              ref={num1Ref}
              className="rp-mono"
              style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--rp-red)', lineHeight: 1, marginBottom: 'var(--space-4)' }}
            >
              01
            </div>
            <h3 ref={title1Ref} style={{ marginBottom: 'var(--space-3)' }}>Crea</h3>
            <p ref={desc1Ref} style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
              Traza tu ruta y define cada detalle de tu próxima rodada.
            </p>
          </div>

          <div style={{ paddingTop: 'var(--space-5)', borderTop: '2px solid var(--border-strong)' }}>
            <div
              ref={num2Ref}
              className="rp-mono"
              style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--rp-red)', lineHeight: 1, marginBottom: 'var(--space-4)' }}
            >
              02
            </div>
            <h3 ref={title2Ref} style={{ marginBottom: 'var(--space-3)' }}>Difunde</h3>
            <p ref={desc2Ref} style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
              Comparte tu aventura con la comunidad desde un solo enlace.
            </p>
          </div>

          <div style={{ paddingTop: 'var(--space-5)', borderTop: '2px solid var(--border-strong)' }}>
            <div
              ref={num3Ref}
              className="rp-mono"
              style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--rp-red)', lineHeight: 1, marginBottom: 'var(--space-4)' }}
            >
              03
            </div>
            <h3 ref={title3Ref} style={{ marginBottom: 'var(--space-3)' }}>Colecciona</h3>
            <p ref={desc3Ref} style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
              Guarda tus experiencias y construye tu historial como rider.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
