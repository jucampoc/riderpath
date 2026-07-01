'use client'

import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { FilterTabs } from '@/components/sections/FilterTabs'
import RodadaCard, { type RodadaCardProps } from '@/components/ui/RodadaCard'

const rodadas: RodadaCardProps[] = [
  {
    title:      'Sierra Gorda Loop',
    region:     'Querétaro',
    distance:   320,
    days:       2,
    difficulty: 'Alta',
    host:       'Diego Salinas',
    image:      '/images/covers/cover-sierra.jpg',
    live:       true,
  },
  {
    title:      'Ruta del Tequila',
    region:     'Jalisco',
    distance:   148,
    days:       1,
    difficulty: 'Media',
    host:       'María Cruz',
    image:      '/images/covers/cover-tequila.jpg',
  },
  {
    title:      'Transpeninsular Baja',
    region:     'Baja California',
    distance:   1710,
    days:       6,
    difficulty: 'Extrema',
    host:       'El Tijuas',
    image:      '/images/covers/cover-baja.jpg',
  },
]

export function FeaturedSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const filterRef  = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const cards = Array.from(gridRef.current?.children ?? [])
    gsap.set([headerRef.current, filterRef.current, ...cards], { opacity: 0, y: 30 })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const cards = Array.from(gridRef.current?.children ?? [])
      gsap.fromTo(
        [headerRef.current, filterRef.current, ...cards],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--rp-asphalt-850)',
        padding:    'var(--space-10) var(--gutter)',
      }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>

        {/* Header row */}
        <div
          ref={headerRef}
          className="flex items-end justify-between flex-wrap gap-6"
          style={{ marginBottom: 'var(--space-7)' }}
        >
          <div>
            <span
              className="rp-stripe"
              style={{ display: 'block', marginBottom: 'var(--space-4)' }}
            />
            <p
              className="rp-eyebrow"
              style={{ marginBottom: 'var(--space-3)', display: 'block' }}
            >
              Rodadas destacadas
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize:   'var(--fs-h2)',
                color:      'var(--text-on-dark-strong)',
                margin:     0,
              }}
            >
              Pinta el mapa
            </h2>
          </div>

          <Link
            href="/community"
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              color:        'var(--text-on-dark-muted)',
              fontFamily:   'var(--font-sans)',
              fontWeight:   600,
              fontSize:     'var(--fs-sm)',
              padding:      'var(--space-3) var(--space-5)',
              borderRadius: 'var(--radius-sm)',
              border:       '1px solid var(--border-on-dark-default)',
            }}
          >
            Ver todas →
          </Link>
        </div>

        {/* Filter tabs */}
        <div ref={filterRef} style={{ marginBottom: 'var(--space-7)' }}>
          <FilterTabs />
        </div>

        {/* Card grid — grid children are targeted individually for stagger */}
        <div
          ref={gridRef}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap:                 'var(--space-5)',
          }}
        >
          {rodadas.map((r) => (
            <RodadaCard key={r.title} {...r} />
          ))}
        </div>

      </div>
    </section>
  )
}
