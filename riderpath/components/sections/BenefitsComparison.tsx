'use client'

const traditional = [
  'Información dispersa en grupos de WhatsApp',
  'Rutas perdidas en notas o capturas de pantalla',
  'Sin registro de tus aventuras pasadas',
  'Difícil coordinar con riders nuevos',
]

const riderpath = [
  'Toda la información de tu rodada en un solo enlace',
  'Rutas guardadas y organizadas en tu perfil',
  'Historial completo de kilómetros y experiencias',
  'Comunidad activa lista para sumarse a tu próxima aventura',
]

export function BenefitsComparison() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Por qué Riderpath
          </p>
          <h2 style={{ margin: 0 }}>
            Deja atrás lo improvisado
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Traditional methods column */}
          <div
            style={{
              background:   'var(--surface-raised)',
              border:       '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding:      'var(--space-6)',
            }}
          >
            <p
              style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    700,
                fontSize:      'var(--fs-h4)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color:         'var(--text-muted)',
                marginBottom:  'var(--space-6)',
              }}
            >
              Métodos tradicionales
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {traditional.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink:  0,
                      fontWeight:  700,
                      fontSize:    'var(--fs-body)',
                      color:       'var(--text-faint)',
                      lineHeight:  'var(--lh-body)',
                      marginTop:   '0.05em',
                    }}
                  >
                    ✕
                  </span>
                  <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Riderpath column */}
          <div
            style={{
              background:   'var(--surface-card)',
              border:       '1px solid var(--border-brand)',
              borderRadius: 'var(--radius-lg)',
              padding:      'var(--space-6)',
            }}
          >
            <p
              style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    700,
                fontSize:      'var(--fs-h4)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color:         'var(--rp-red)',
                marginBottom:  'var(--space-6)',
              }}
            >
              Riderpath
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {riderpath.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink:  0,
                      fontWeight:  700,
                      fontSize:    'var(--fs-body)',
                      color:       'var(--rp-red)',
                      lineHeight:  'var(--lh-body)',
                      marginTop:   '0.05em',
                    }}
                  >
                    ✓
                  </span>
                  <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-strong)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
