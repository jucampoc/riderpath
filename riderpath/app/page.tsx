import Link from 'next/link'

const benefits = [
  {
    num: '01',
    title: 'Planea rodadas',
    description:
      'Diseña tus rutas con herramientas pensadas para motociclistas. Comparte el recorrido antes de salir.',
  },
  {
    num: '02',
    title: 'Difunde eventos',
    description:
      'Publica tu próxima rodada y llega a miles de motociclistas en México de forma instantánea.',
  },
  {
    num: '03',
    title: 'Conserva experiencias',
    description:
      'Guarda cada ruta, foto y momento. Tu historial de rodadas siempre disponible y ordenado.',
  },
  {
    num: '04',
    title: 'Cuida tu moto',
    description:
      'Registra el mantenimiento de tu moto y recibe recordatorios para que nunca te falle en carretera.',
  },
  {
    num: '05',
    title: 'Forma parte de una comunidad',
    description:
      'Conecta con otros viajeros, encuentra compañeros de ruta y crece junto a la comunidad Riderpath.',
  },
]

const ImagePlaceholder = () => (
  <div
    style={{
      flex: 1,
      aspectRatio: '4 / 3',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
      }}
    >
      Imagen próximamente
    </span>
  </div>
)

export default function HomePage() {
  return (
    <main>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          background: 'var(--surface-base)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-10) var(--gutter)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: 'var(--container)', width: '100%', textAlign: 'center' }}>
          <p
            className="rp-eyebrow"
            style={{ marginBottom: 'var(--space-5)', display: 'block' }}
          >
            Para motociclistas viajeros
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-display)',
              fontWeight: 'var(--fw-bold)',
              letterSpacing: 'var(--tracking-display)',
              lineHeight: 'var(--lh-tight)',
              color: 'var(--text-strong)',
              textTransform: 'uppercase',
              margin: '0 auto var(--space-6)',
              maxWidth: '900px',
            }}
          >
            Vive la rodada.
            <br />
            <span style={{ color: 'var(--rp-red)' }}>Compártela.</span> Colecciónala.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--fs-lead)',
              color: 'var(--text-body)',
              lineHeight: 'var(--lh-body)',
              maxWidth: '640px',
              margin: '0 auto var(--space-8)',
            }}
          >
            El primer sistema tecnológico para crear, difundir y coleccionar tus rodadas.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/community#join"
              style={{
                display: 'inline-block',
                background: 'var(--rp-red)',
                color: 'var(--text-on-red)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-h4)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                padding: 'var(--space-4) var(--space-7)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--glow-red)',
              }}
            >
              Únete ahora
            </Link>

            <a
              href="#what-is"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--fw-medium)',
                fontSize: 'var(--fs-body)',
                padding: 'var(--space-4) var(--space-6)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-default)',
              }}
            >
              Conoce más ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. QUÉ ES RIDERPATH ─────────────────────────────── */}
      <section
        id="what-is"
        style={{
          background: 'var(--surface-raised)',
          padding: 'var(--space-10) var(--gutter)',
        }}
      >
        <div
          style={{ maxWidth: 'var(--container)', margin: '0 auto' }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Text */}
          <div style={{ flex: 1 }}>
            <p
              className="rp-eyebrow"
              style={{ marginBottom: 'var(--space-4)', display: 'block' }}
            >
              Qué es Riderpath
            </p>
            <span className="rp-stripe" style={{ display: 'block', marginBottom: 'var(--space-5)' }} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--fs-h2)',
                color: 'var(--text-strong)',
                marginBottom: 'var(--space-5)',
              }}
            >
              El mapa vivo de los motociclistas viajeros
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-lead)',
                color: 'var(--text-body)',
                lineHeight: 'var(--lh-body)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Riderpath es la primera plataforma diseñada exclusivamente para los
              motociclistas viajeros de México. Te permite planear, registrar y
              compartir tus rodadas de forma sencilla, conectándote con una comunidad
              apasionada por las carreteras y la aventura sobre dos ruedas.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-body)',
                color: 'var(--text-muted)',
                lineHeight: 'var(--lh-body)',
                margin: 0,
              }}
            >
              Desde la planificación de rutas hasta la colección de experiencias,
              Riderpath es tu compañero digital en cada kilómetro recorrido.
            </p>
          </div>

          {/* Image placeholder */}
          <ImagePlaceholder />
        </div>
      </section>

      {/* ── 3. BENEFICIOS ───────────────────────────────────── */}
      <section
        style={{
          background: 'var(--surface-base)',
          padding: 'var(--space-10) var(--gutter)',
        }}
      >
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <p
              className="rp-eyebrow"
              style={{ marginBottom: 'var(--space-3)', display: 'block' }}
            >
              Beneficios
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--fs-h2)',
                color: 'var(--text-strong)',
                margin: '0 auto',
                maxWidth: '600px',
              }}
            >
              Todo lo que necesitas en un solo lugar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ num, title, description }) => (
              <div
                key={num}
                style={{
                  background: 'var(--surface-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  padding: 'var(--space-7)',
                  boxShadow: 'var(--shadow-md)',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--rp-red-ink)',
                    border: '1px solid var(--rp-red-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-5)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--fs-xs)',
                      fontWeight: 'var(--fw-bold)',
                      color: 'var(--rp-red-bright)',
                      letterSpacing: 'var(--tracking-wide)',
                    }}
                  >
                    {num}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--fs-h4)',
                    fontWeight: 'var(--fw-bold)',
                    color: 'var(--text-strong)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--fs-sm)',
                    color: 'var(--text-muted)',
                    lineHeight: 'var(--lh-body)',
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. COMMUNITY TEASER ─────────────────────────────── */}
      <section
        style={{
          background: 'var(--rp-red)',
          padding: 'var(--space-10) var(--gutter)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto' }}>
          <span
            className="rp-script"
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.70)',
              fontSize: 'var(--fs-h3)',
              marginBottom: 'var(--space-4)',
            }}
          >
            juntos somos más
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-h1)',
              fontWeight: 'var(--fw-bold)',
              letterSpacing: 'var(--tracking-display)',
              textTransform: 'uppercase',
              color: 'var(--rp-white)',
              lineHeight: 'var(--lh-snug)',
              margin: '0 auto var(--space-7)',
            }}
          >
            Tu próxima rodada ya tiene quién la ruede
          </h2>

          <Link
            href="/community"
            style={{
              display: 'inline-block',
              background: 'var(--rp-white)',
              color: 'var(--rp-red)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--fw-bold)',
              fontSize: 'var(--fs-h4)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              padding: 'var(--space-4) var(--space-7)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Ver comunidad
          </Link>
        </div>
      </section>

      {/* ── 5. MODA SOSTENIBLE ──────────────────────────────── */}
      <section
        style={{
          background: 'var(--surface-raised)',
          padding: 'var(--space-10) var(--gutter)',
        }}
      >
        <div
          style={{ maxWidth: 'var(--container)', margin: '0 auto' }}
          className="flex flex-col md:flex-row-reverse gap-16 items-center"
        >
          {/* Text (right on mobile, left on desktop via flex-row-reverse) */}
          <div style={{ flex: 1 }}>
            <p
              className="rp-eyebrow"
              style={{ marginBottom: 'var(--space-4)', display: 'block' }}
            >
              Moda sostenible
            </p>
            <span className="rp-stripe" style={{ display: 'block', marginBottom: 'var(--space-5)' }} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--fs-h2)',
                color: 'var(--text-strong)',
                marginBottom: 'var(--space-5)',
              }}
            >
              Jerseys que cuidan el planeta
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-lead)',
                color: 'var(--text-body)',
                lineHeight: 'var(--lh-body)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Nuestra línea de jerseys para motociclistas está fabricada con botellas
              de PET reciclado. Cada prenda transforma residuos plásticos en textil
              técnico de alto rendimiento, sin sacrificar estilo ni identidad en la
              carretera.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-body)',
                color: 'var(--text-muted)',
                lineHeight: 'var(--lh-body)',
                marginBottom: 'var(--space-6)',
              }}
            >
              Viste con propósito. Cada rodada puede ser un acto de consciencia
              ambiental.
            </p>
            <Link
              href="/fashion"
              style={{
                display: 'inline-block',
                background: 'var(--rp-red)',
                color: 'var(--text-on-red)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-h4)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                padding: 'var(--space-4) var(--space-6)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              Ver colección
            </Link>
          </div>

          {/* Image placeholder */}
          <ImagePlaceholder />
        </div>
      </section>

      {/* ── 6. NEWSLETTER ───────────────────────────────────── */}
      <section
        style={{
          background: 'var(--surface-inset)',
          padding: 'var(--space-10) var(--gutter)',
          textAlign: 'center',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p
            className="rp-eyebrow"
            style={{ marginBottom: 'var(--space-3)', display: 'block' }}
          >
            Mantente al día
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-h2)',
              color: 'var(--text-strong)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Sé el primero en saber
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--fs-lead)',
              color: 'var(--text-muted)',
              lineHeight: 'var(--lh-body)',
              marginBottom: 'var(--space-7)',
            }}
          >
            Únete a la comunidad y entérate cuando la app de Riderpath esté lista.
            Sin spam, solo lo que importa para los motociclistas viajeros.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="tu@correo.com"
              required
              style={{
                flex: 1,
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: 'var(--space-4) var(--space-5)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-body)',
                color: 'var(--text-strong)',
                outline: 'none',
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--rp-red)',
                color: 'var(--text-on-red)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-body)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                padding: 'var(--space-4) var(--space-6)',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Notifícame
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
