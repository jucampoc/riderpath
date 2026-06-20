'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function MissionVision() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const misionRef  = useRef<HTMLDivElement>(null)
  const visionRef  = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 30 })
    gsap.set(misionRef.current, { opacity: 0, x: -40 })
    gsap.set(visionRef.current, { opacity: 0, x: 40 })
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

      // Header fades up first
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      )
      // Misión slides in from left, overlapping slightly with header tail
      .fromTo(
        misionRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.2',
      )
      // Visión slides in from right, 0.15s stagger after Misión starts
      .fromTo(
        visionRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
        '<+=0.15',
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        {/* Centered header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Hacia dónde vamos
          </p>
          <h2 style={{ margin: 0 }}>
            Misión y Visión
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div
            ref={misionRef}
            style={{
              background:   'var(--surface-card)',
              border:       '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding:      'var(--space-6)',
            }}
          >
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Misión</h3>
            <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
              Administrar eficazmente, a través de medios digitales, las rodadas de las y los motociclistas e impulsar la moda sostenible entre la comunidad biker.
            </p>
          </div>

          <div
            ref={visionRef}
            style={{
              background:   'var(--surface-card)',
              border:       '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding:      'var(--space-6)',
            }}
          >
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Visión</h3>
            <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
              Ser una marca global y el principal referente entre las y los motociclistas viajeros.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
