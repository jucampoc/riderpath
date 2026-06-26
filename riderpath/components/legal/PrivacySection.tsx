'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface PrivacySectionProps {
  number: string
  title: string
  raised?: boolean
  children: React.ReactNode
}

export function PrivacySection({ number, title, raised, children }: PrivacySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const numRef     = useRef<HTMLDivElement>(null)
  const titleRef   = useRef<HTMLHeadingElement>(null)
  const bodyRef    = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    // scale > 1 start means the numeral is briefly oversized — section overflow:hidden clips it
    gsap.set(numRef.current,                   { opacity: 0, scale: 1.3, transformOrigin: 'left center' })
    gsap.set([titleRef.current, bodyRef.current], { opacity: 0, y: 20 })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      tl
        .to(numRef.current, {
          opacity:  1,
          scale:    1,
          duration: 0.6,
          ease:     'back.out(1.6)',
        })
        .to(
          [titleRef.current, bodyRef.current],
          {
            opacity:  1,
            y:        0,
            duration: 0.6,
            ease:     'power3.out',
            stagger:  0.1,
          },
          '<+=0.1',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: raised ? 'var(--surface-raised)' : 'var(--surface-base)',
        padding:    'var(--space-8) 0',
        position:   'relative',
        // overflow:hidden is load-bearing: clips the scale-1.3 overshoot of numRef
        // AND clips the absolute-positioned background watermark at narrow viewports
        overflow:   'hidden',
      }}
    >
      {/* Background decorative watermark — static, no animation */}
      <span
        aria-hidden="true"
        style={{
          position:      'absolute',
          right:         'clamp(1.25rem, 5vw, 4rem)',
          top:           '50%',
          transform:     'translateY(-50%)',
          fontFamily:    'var(--font-mono)',
          fontSize:      'clamp(5rem, 12vw, 10rem)',
          fontWeight:    700,
          color:         'var(--rp-red)',
          opacity:       0.06,
          lineHeight:    1,
          userSelect:    'none',
          pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        {number}
      </span>

      <div
        style={{
          maxWidth: 'var(--container-prose)',
          margin:   '0 auto',
          padding:  '0 var(--gutter)',
          position: 'relative', // stacks above the absolute watermark
        }}
      >
        {/* Foreground numeral — bounces in */}
        <div
          ref={numRef}
          style={{
            fontFamily:   'var(--font-mono)',
            fontSize:     'clamp(2.5rem, 4vw, 4rem)',
            fontWeight:   700,
            color:        'var(--rp-red)',
            lineHeight:   1,
            borderTop:    '2px solid var(--rp-red)',
            paddingTop:   'var(--space-5)',
            marginBottom: 'var(--space-4)',
          }}
        >
          {number}
        </div>

        <h2
          ref={titleRef}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-h3)',
            fontWeight:    700,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color:         'var(--text-strong)',
            margin:        '0 0 var(--space-5)',
          }}
        >
          {title}
        </h2>

        <div
          ref={bodyRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   'var(--fs-body)',
            color:      'var(--text-body)',
            lineHeight: 'var(--lh-body)',
            maxWidth:   '60ch',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
