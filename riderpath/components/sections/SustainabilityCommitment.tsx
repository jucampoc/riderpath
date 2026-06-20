const PROCESS_BLOCKS = [
  {
    icon:  '♻',
    title: 'PET reciclado',
    note:  'Botellas de plástico recuperadas y procesadas',
  },
  {
    icon:  '🧵',
    title: 'Tela técnica',
    note:  'Ligera, transpirable y resistente al camino',
  },
  {
    icon:  '🌍',
    title: 'Menor huella ambiental',
    note:  'Menos residuos, más kilómetros con conciencia',
  },
]

export function SustainabilityCommitment() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}>
      <div
        style={{
          maxWidth: 'var(--container)',
          margin:   '0 auto',
          padding:  '0 var(--gutter)',
        }}
      >
        {/* Two-column layout: text left, process blocks right */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: '3fr 2fr', alignItems: 'center' }}
        >

          {/* Left: stripe + eyebrow + heading + body */}
          <div>
            <span
              className="rp-stripe"
              style={{ display: 'block', marginBottom: 'var(--space-4)' }}
            />

            <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Compromiso ambiental
            </p>

            <h2 style={{ marginBottom: 'var(--space-6)', maxWidth: '24ch' }}>
              Tela hecha de botellas PET recicladas
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
              Cada jersey Riderpath está fabricado con tela elaborada a partir de botellas de plástico PET recicladas. Una prenda técnica, ligera y resistente, pensada para el camino — y para cuidar el planeta que recorremos.
            </p>
          </div>

          {/* Right: 3 process blocks */}
          <div
            style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           'var(--space-3)',
            }}
          >
            {PROCESS_BLOCKS.map(({ icon, title, note }) => (
              <div
                key={title}
                style={{
                  display:      'flex',
                  alignItems:   'flex-start',
                  gap:          'var(--space-4)',
                  background:   'var(--surface-card)',
                  borderRadius: 'var(--radius-md)',
                  padding:      'var(--space-4)',
                  border:       '1px solid var(--border-subtle)',
                }}
              >
                {/* Icon */}
                <span
                  aria-hidden="true"
                  style={{
                    fontSize:   'var(--fs-h3)',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </span>

                {/* Text */}
                <div>
                  <p
                    style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      'var(--fs-body)',
                      fontWeight:    'var(--fw-bold)',
                      color:         'var(--text-strong)',
                      letterSpacing: '-0.01em',
                      margin:        '0 0 var(--space-1)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   'var(--fs-xs)',
                      color:      'var(--text-muted)',
                      lineHeight: 'var(--lh-body)',
                      margin:     0,
                    }}
                  >
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
