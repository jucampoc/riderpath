'use client'

export function BenefitsHero() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <span className="rp-stripe" style={{ display: 'block', marginBottom: 'var(--space-4)' }} />

        <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
          Riderpath
        </p>

        <h1 style={{ marginBottom: 'var(--space-5)' }}>
          Todo lo que necesita<br />
          un <span style={{ color: 'var(--rp-red)' }}>rider</span>
        </h1>

        <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-body)', maxWidth: '60ch', margin: 0 }}>
          Cinco herramientas pensadas para que cada rodada sea más fácil de crear, compartir y recordar.
        </p>

      </div>
    </section>
  )
}
