'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'

export function WhatIsHero() {
  const stripeRef   = useRef<HTMLSpanElement>(null)
  const eyebrowRef  = useRef<HTMLParagraphElement>(null)
  const line1Ref    = useRef<HTMLSpanElement>(null)
  const line2Ref    = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  // Set initial hidden state before first paint to avoid flash
  useIsomorphicLayoutEffect(() => {
    gsap.set(stripeRef.current,  { scaleX: 0, transformOrigin: 'left' })
    gsap.set(eyebrowRef.current, { opacity: 0, y: 16 })
    gsap.set([line1Ref.current, line2Ref.current], { opacity: 0, y: 32, skewY: 3 })
    gsap.set(subtitleRef.current, { opacity: 0, y: 24 })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl
      // stripe draws left → right
      .to(stripeRef.current, { scaleX: 1, duration: 0.7 })
      // eyebrow fades up, overlapping the stripe's tail
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.35')
      // headline lines: staggered fade-up with skewY snap
      .to(
        [line1Ref.current, line2Ref.current],
        { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.15 },
        '-=0.3',
      )
      // subtitle: enters 0.5s after the headline group started
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
          <span ref={line1Ref} style={{ display: 'block' }}>Qué es</span>
          <span ref={line2Ref} style={{ display: 'block', color: 'var(--rp-red)' }}>Riderpath</span>
        </h1>

        <p
          ref={subtitleRef}
          style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-body)', maxWidth: '60ch', margin: 0 }}
        >
          La marca que une tecnología y pasión por las motocicletas para crear el mapa vivo de los motociclistas viajeros.
        </p>

      </div>
    </section>
  )
}
