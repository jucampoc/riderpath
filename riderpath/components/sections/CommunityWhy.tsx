'use client'

const STATS = [
  {
    value: '+500',
    label: 'Rodadas compartidas',
    note:  'y contando',
  },
  {
    value: '+50',
    label: 'Ciudades conectadas',
    note:  'en México y Latinoamérica',
  },
  {
    value: '100%',
    label: 'Pasión por el camino',
    note:  'el único requisito para entrar',
  },
]

export function CommunityWhy() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
      <div
        style={{
          maxWidth: 'var(--container)',
          margin:   '0 auto',
          padding:  '0 var(--gutter)',
        }}
      >
        {/* Two-column layout: text left, stats right */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: '3fr 2fr', alignItems: 'center' }}
        >

          {/* Left column: eyebrow + heading + body */}
          <div>
            <span
              className="rp-stripe"
              style={{ display: 'block', marginBottom: 'var(--space-4)' }}
            />

            <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Por qué importa
            </p>

            <h2 style={{ marginBottom: 'var(--space-6)', maxWidth: '22ch' }}>
              La tecnología es la herramienta, la comunidad es el corazón
            </h2>

            <p
              style={{
                fontSize:   'var(--fs-lead)',
                color:      'var(--text-body)',
                lineHeight: 'var(--lh-body)',
                maxWidth:   '52ch',
                margin:     0,
              }}
            >
              En Riderpath creemos que cada rodada es más memorable cuando se comparte. Por eso ponemos la tecnología al servicio de la comunidad biker: para que conectar con otros riders, descubrir nuevas rutas y vivir experiencias juntos sea siempre más fácil.
            </p>
          </div>

          {/* Right column: stat blocks */}
          <div
            style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           0,
              borderLeft:    '1px solid var(--border-subtle)',
              paddingLeft:   'var(--space-8)',
            }}
          >
            {STATS.map(({ value, label, note }, i) => (
              <div
                key={label}
                style={{
                  paddingTop:    i === 0 ? 0 : 'var(--space-7)',
                  paddingBottom: i === STATS.length - 1 ? 0 : 'var(--space-7)',
                  borderBottom:  i === STATS.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      'clamp(1.5rem, 1.1rem + 1.4vw, 2.25rem)',
                    fontWeight:    'var(--fw-bold)',
                    letterSpacing: '-0.02em',
                    color:         'var(--brand)',
                    lineHeight:    1,
                    margin:        '0 0 var(--space-2)',
                  }}
                >
                  {value}
                </p>

                <p
                  style={{
                    fontFamily:    'var(--font-sans)',
                    fontSize:      'var(--fs-body)',
                    fontWeight:    'var(--fw-semibold)',
                    color:         'var(--text-strong)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--tracking-wide)',
                    margin:        '0 0 var(--space-1)',
                  }}
                >
                  {label}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   'var(--fs-xs)',
                    color:      'var(--text-muted)',
                    margin:     0,
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
