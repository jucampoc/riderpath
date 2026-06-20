'use client'

import Link from 'next/link'

export function BenefitsCta() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--rp-red)' }}>
      <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>

        <h2 style={{ color: 'var(--rp-white)', marginBottom: 'var(--space-5)' }}>
          Empieza a aprovechar todo esto
        </h2>

        <p style={{ fontSize: 'var(--fs-lead)', color: 'rgba(255,255,255,0.88)', lineHeight: 'var(--lh-body)', marginBottom: 'var(--space-8)' }}>
          Únete gratis y descubre por qué cada vez más motociclistas eligen Riderpath para sus aventuras.
        </p>

        <Link
          href="/community#join"
          style={{
            display:        'inline-block',
            background:     'var(--rp-amber)',
            color:          'var(--rp-asphalt-900)',
            fontFamily:     'var(--font-display)',
            fontWeight:     700,
            fontSize:       'var(--fs-h4)',
            letterSpacing:  'var(--tracking-wide)',
            textTransform:  'uppercase',
            padding:        'var(--space-4) var(--space-8)',
            borderRadius:   'var(--radius-pill)',
            textDecoration: 'none',
            boxShadow:      '0 4px 20px rgba(232,163,59,0.40)',
          }}
        >
          Únete a Riderpath
        </Link>

      </div>
    </section>
  )
}
