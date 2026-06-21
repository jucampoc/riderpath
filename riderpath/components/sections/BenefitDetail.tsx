'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface BenefitDetailProps {
  number:        string
  title:         string
  description:   string
  imageSrc:      string
  imagePosition: 'left' | 'right'
  background?:   string
}

export function BenefitDetail({
  number,
  title,
  description,
  imageSrc: _imageSrc,
  imagePosition,
  background = 'var(--surface-base)',
}: BenefitDetailProps) {
  const sectionRef  = useRef<HTMLElement>(null)
  const numRef      = useRef<HTMLDivElement>(null)
  const textBodyRef = useRef<HTMLDivElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)

  // Cross-slide: each element enters from the OPPOSITE side of where it sits visually
  const textStartX  = imagePosition === 'right' ? -50 : 50
  const imageStartX = imagePosition === 'right' ?  50 : -50

  useIsomorphicLayoutEffect(() => {
    gsap.set(numRef.current,      { opacity: 0, scale: 1.3 })
    gsap.set(textBodyRef.current, { opacity: 0, x: textStartX })
    gsap.set(imageColRef.current, { opacity: 0, x: imageStartX })
  }, [textStartX, imageStartX])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      })

      tl
        // Number bounces in first
        .fromTo(numRef.current,
          { opacity: 0, scale: 1.3 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.6)' },
        )
        // Text body cross-slides (0.1s after number starts)
        .fromTo(textBodyRef.current,
          { opacity: 0, x: textStartX },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          '<+=0.1',
        )
        // Image cross-slides (0.15s stagger after text body starts)
        .fromTo(imageColRef.current,
          { opacity: 0, x: imageStartX },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          '<+=0.15',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [textStartX, imageStartX])

  const textCol = (
    <div>
      <div ref={numRef}>
        <p
          className="rp-mono"
          style={{
            fontSize:     'var(--fs-h3)',
            fontWeight:   700,
            color:        'var(--rp-red)',
            lineHeight:   1,
            marginBottom: 'var(--space-4)',
          }}
        >
          {number}
        </p>
      </div>
      <div ref={textBodyRef}>
        <h2 style={{ marginBottom: 'var(--space-5)' }}>{title}</h2>
        <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  )

  const imageCol = (
    <div
      ref={imageColRef}
      aria-hidden="true"
      style={{
        background:   'var(--surface-card)',
        borderRadius: 'var(--radius-xl)',
        aspectRatio:  '4 / 3',
        overflow:     'hidden',
      }}
    />
  )

  return (
    <section ref={sectionRef} style={{ padding: 'var(--space-9) 0', background, overflowX: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>{imageCol}{textCol}</>
          ) : (
            <>{textCol}{imageCol}</>
          )}
        </div>
      </div>
    </section>
  )
}
