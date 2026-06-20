export function FashionHero() {
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
          <span style={{ display: 'block' }}>Estilo que</span>
          <span style={{ display: 'block', color: 'var(--rp-red)' }}>cuida el planeta</span>
        </h1>

        <p
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
