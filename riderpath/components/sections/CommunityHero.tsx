'use client'

export function CommunityHero() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <span
          className="rp-stripe"
          style={{ display: 'block', marginBottom: 'var(--space-4)' }}
        />

        <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
          Riderpath
        </p>

        <h1 style={{ marginBottom: 'var(--space-5)' }}>
          <span style={{ display: 'block' }}>Una comunidad que</span>
          <span style={{ display: 'block', color: 'var(--rp-red)' }}>rueda junta</span>
        </h1>

        <p
          style={{
            fontSize:  'var(--fs-lead)',
            color:     'var(--text-body)',
            maxWidth:  '60ch',
            margin:    0,
          }}
        >
          Más que una plataforma, Riderpath es el punto de encuentro de motociclistas viajeros que comparten una misma pasión por el camino.
        </p>

      </div>
    </section>
  )
}
