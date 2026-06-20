import Link from 'next/link'

export default function WhatIsPage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>

      {/* ── Section 1: Page hero / header ───────────────────── */}
      <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

          <span className="rp-stripe" style={{ display: 'block', marginBottom: 'var(--space-4)' }} />

          <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Riderpath
          </p>

          <h1 style={{ marginBottom: 'var(--space-5)' }}>
            Qué es<br />
            <span style={{ color: 'var(--rp-red)' }}>Riderpath</span>
          </h1>

          <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-body)', maxWidth: '60ch', margin: 0 }}>
            La marca que une tecnología y pasión por las motocicletas para crear el mapa vivo de los motociclistas viajeros.
          </p>

        </div>
      </section>

      {/* ── Section 2: Origin story (Rider + Path) ──────────── */}
      <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <div>
              <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
                El origen del nombre
              </p>

              <h2 style={{ marginBottom: 'var(--space-5)' }}>
                Rider + Path
              </h2>

              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                Riderpath nace de la unión de dos palabras: Rider (motociclista) y Path (camino). Su significado es claro y directo: el camino del motociclista. La marca fue registrada en México en 2020 por Biitzu S.A.S. de C.V., con la visión de transformar cómo los motociclistas viajeros crean, comparten y coleccionan sus rutas.
              </p>
            </div>

            {/* Right: decorative wordmark */}
            <div
              aria-hidden="true"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-wordmark)',
                  fontSize:   'clamp(4rem, 8vw + 2rem, 8rem)',
                  color:      'var(--rp-red)',
                  opacity:    0.15,
                  lineHeight: 1,
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Riderpath
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Mission and vision ───────────────────── */}
      <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

          {/* Centered header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Hacia dónde vamos
            </p>
            <h2 style={{ margin: 0 }}>
              Misión y Visión
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div
              style={{
                background:   'var(--surface-card)',
                border:       '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding:      'var(--space-6)',
              }}
            >
              <h3 style={{ marginBottom: 'var(--space-4)' }}>Misión</h3>
              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                Administrar eficazmente, a través de medios digitales, las rodadas de las y los motociclistas e impulsar la moda sostenible entre la comunidad biker.
              </p>
            </div>

            <div
              style={{
                background:   'var(--surface-card)',
                border:       '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding:      'var(--space-6)',
              }}
            >
              <h3 style={{ marginBottom: 'var(--space-4)' }}>Visión</h3>
              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                Ser una marca global y el principal referente entre las y los motociclistas viajeros.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Section 4: Value proposition ────────────────────── */}
      <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

          <div style={{ marginBottom: 'var(--space-8)' }}>
            <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Qué resolvemos
            </p>
            <h2 style={{ margin: 0 }}>
              Tecnología al servicio del Rider
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div style={{ paddingTop: 'var(--space-5)', borderTop: '2px solid var(--border-strong)' }}>
              <div
                className="rp-mono"
                style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--rp-red)', lineHeight: 1, marginBottom: 'var(--space-4)' }}
              >
                01
              </div>
              <h3 style={{ marginBottom: 'var(--space-3)' }}>Crea</h3>
              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                Traza tu ruta y define cada detalle de tu próxima rodada.
              </p>
            </div>

            <div style={{ paddingTop: 'var(--space-5)', borderTop: '2px solid var(--border-strong)' }}>
              <div
                className="rp-mono"
                style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--rp-red)', lineHeight: 1, marginBottom: 'var(--space-4)' }}
              >
                02
              </div>
              <h3 style={{ marginBottom: 'var(--space-3)' }}>Difunde</h3>
              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                Comparte tu aventura con la comunidad desde un solo enlace.
              </p>
            </div>

            <div style={{ paddingTop: 'var(--space-5)', borderTop: '2px solid var(--border-strong)' }}>
              <div
                className="rp-mono"
                style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--rp-red)', lineHeight: 1, marginBottom: 'var(--space-4)' }}
              >
                03
              </div>
              <h3 style={{ marginBottom: 'var(--space-3)' }}>Colecciona</h3>
              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
                Guarda tus experiencias y construye tu historial como rider.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Section 5: Final CTA ────────────────────────────── */}
      <section style={{ padding: 'var(--space-9) 0', background: 'var(--rp-red)' }}>
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>

          <h2 style={{ color: 'var(--rp-white)', marginBottom: 'var(--space-5)' }}>
            Ahora que sabes quiénes somos
          </h2>

          <p style={{ fontSize: 'var(--fs-lead)', color: 'rgba(255,255,255,0.88)', lineHeight: 'var(--lh-body)', marginBottom: 'var(--space-8)' }}>
            Es momento de vivir la experiencia. Únete a la comunidad de motociclistas viajeros más grande de México.
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

    </div>
  )
}
