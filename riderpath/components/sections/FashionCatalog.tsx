'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { JerseyCard, type JerseyCardProps } from '@/components/ui/JerseyCard'

const JERSEYS: JerseyCardProps[] = [
  {
    name:        'Jersey Clásico Vino',
    gender:      'hombre',
    frontImage:  '/images/moda/camiseta_1_frente_hombre.png',
    backImage:   '/images/moda/camiseta_1_espalda_hombre.png',
  },
  {
    name:        'Jersey Riderpath Blanco',
    gender:      'hombre',
    frontImage:  '/images/moda/camiseta_2_frente_hombre.png',
    backImage:   '/images/moda/camiseta_2_espalda_hombre.png',
  },
  {
    name:        'Jersey Riderpath Blanco',
    gender:      'mujer',
    frontImage:  '/images/moda/camiseta_2_frente_mujer.png',
    backImage:   '/images/moda/camiseta_2_espalda_mujer.png',
  },
  {
    name:        'Jersey Azul Performance',
    gender:      'hombre',
    frontImage:  '/images/moda/frente_hombre_azul.png',
    backImage:   '/images/moda/espalda_hombre_azul.png',
  },
  {
    name:        'Jersey Azul Performance',
    gender:      'mujer',
    frontImage:  '/images/moda/frente_mujer_azul.png',
    backImage:   '/images/moda/espalda_mujer_azul.png',
  },
]

export function FashionCatalog() {
  const sectionRef  = useRef<HTMLElement>(null)
  const eyebrowRef  = useRef<HTMLParagraphElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([])

  useIsomorphicLayoutEffect(() => {
    gsap.set([eyebrowRef.current, headingRef.current], { opacity: 0, y: 24 })
    cardRefs.current.forEach((el) => { if (el) gsap.set(el, { opacity: 0, scale: 0.92, y: 20 }) })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const trigger = {
        trigger:       sectionRef.current,
        start:         'top 80%',
        toggleActions: 'play reverse play reverse',
      }

      // Heading fade-up
      gsap.to([eyebrowRef.current, headingRef.current], {
        opacity:  1,
        y:        0,
        duration: 0.8,
        ease:     'power3.out',
        stagger:  0.12,
        scrollTrigger: trigger,
      })

      // Cards: fade + scale-up with stagger
      gsap.to(cardRefs.current, {
        opacity:  1,
        scale:    1,
        y:        0,
        duration: 0.7,
        ease:     'power3.out',
        stagger:  0.1,
        scrollTrigger: trigger,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <p
          ref={eyebrowRef}
          className="rp-eyebrow"
          style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}
        >
          Nuestra colección
        </p>

        <h2
          ref={headingRef}
          style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}
        >
          Jerseys Riderpath
        </h2>

        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap:                 'var(--space-5)',
          }}
        >
          {JERSEYS.map((jersey, i) => (
            <div
              key={`${jersey.name}-${jersey.gender}`}
              ref={(el) => { cardRefs.current[i] = el }}
            >
              <JerseyCard {...jersey} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
