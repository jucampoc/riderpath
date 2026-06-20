'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_HREF = 'https://api.whatsapp.com/send/?phone=5215561371260&text&type=phone_number&app_absent=0'

export function FashionCta() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef   = useRef<HTMLAnchorElement>(null)

  useLayoutEffect(() => {
    gsap.set([headingRef.current, subtitleRef.current, buttonRef.current], { opacity: 0, y: 28 })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([headingRef.current, subtitleRef.current, buttonRef.current], {
        opacity:  1,
        y:        0,
        duration: 0.8,
        ease:     'power3.out',
        stagger:  0.15,
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        padding:    'var(--space-10) var(--gutter)',
        background: 'var(--rp-red)',
        textAlign:  'center',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 24px)',
          pointerEvents:   'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--container-prose)',
          margin:   '0 auto',
        }}
      >
        <h2
          ref={headingRef}
          style={{
            color:        'var(--rp-white)',
            marginBottom: 'var(--space-5)',
          }}
        >
          ¿Te interesa un jersey?
        </h2>

        <p
          ref={subtitleRef}
          style={{
            fontSize:   'var(--fs-lead)',
            color:      'rgba(255,255,255,0.88)',
            maxWidth:   '44ch',
            margin:     '0 auto var(--space-8)',
            lineHeight: 'var(--lh-body)',
          }}
        >
          Escríbenos directamente y te ayudamos a elegir tu talla y modelo favorito.
        </p>

        <Link
          ref={buttonRef}
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:       'inline-block',
            background:    'var(--rp-amber)',
            color:         'var(--rp-asphalt-900)',
            fontFamily:    'var(--font-display)',
            fontWeight:    'var(--fw-bold)',
            fontSize:      'var(--fs-h4)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            padding:       'var(--space-4) var(--space-8)',
            borderRadius:  'var(--radius-pill)',
            boxShadow:     '0 4px 20px rgba(232,163,59,0.40)',
          }}
        >
          Contactar por WhatsApp
        </Link>
      </div>
    </section>
  )
}
