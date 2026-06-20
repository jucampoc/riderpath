'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export function FashionHero() {
  const stripeRef   = useRef<HTMLSpanElement>(null)
  const eyebrowRef  = useRef<HTMLParagraphElement>(null)
  const line1Ref    = useRef<HTMLSpanElement>(null)
  const line2Ref    = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    gsap.set(stripeRef.current,  { scaleX: 0, transformOrigin: 'left' })
    gsap.set(eyebrowRef.current, { opacity: 0, y: 16 })
    gsap.set([line1Ref.current, line2Ref.current], { opacity: 0, y: 30 })
    gsap.set(subtitleRef.current, { opacity: 0, y: 24 })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl
      .to(stripeRef.current,  { scaleX: 1, duration: 0.7 })
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.35')
      .to(
        [line1Ref.current, line2Ref.current],
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
        '-=0.3',
      )
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '<+=0.5')

    return () => { tl.kill() }
  }, [])

  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <span
          ref={stripeRef}
          className="rp-stripe"
          style={{ display: 'block', marginBottom: 'var(--space-4)' }}
        />

        <p ref={eyebrowRef} className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
          Riderpath
        </p>

        <h1 style={{ marginBottom: 'var(--space-5)' }}>
          <span ref={line1Ref} style={{ display: 'block' }}>Estilo que</span>
          <span ref={line2Ref} style={{ display: 'block', color: 'var(--rp-red)' }}>cuida el planeta</span>
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontSize:  'var(--fs-lead)',
            color:     'var(--text-body)',
            maxWidth:  '60ch',
            margin:    0,
          }}
        >
          Desde 2023, vestimos a la comunidad biker con prendas que combinan diseño, comodidad y responsabilidad ambiental.
        </p>

      </div>
    </section>
  )
}
