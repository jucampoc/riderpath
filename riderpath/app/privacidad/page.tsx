import { PrivacyHero }    from '@/components/legal/PrivacyHero'
import { PrivacySection } from '@/components/legal/PrivacySection'

const SECTIONS = [
  {
    number: 'I',
    title:  'Para qué usamos tus datos',
    body:   'Utilizamos tu información para ofrecerte los servicios de la app y el sitio web: trazado de rutas, gestión de tu cuenta, soporte al cliente y procesamiento de pagos cuando aplique.',
  },
  {
    number: 'II',
    title:  'Usos no esenciales',
    body:   'También podemos usar tus datos para mercadotecnia, encuestas y análisis estadísticos. Estos usos son opcionales y puedes rechazarlos en cualquier momento.',
  },
  {
    number: 'III',
    title:  'Cómo oponerte',
    body:   'Si no deseas que usemos tus datos para fines no esenciales, puedes notificarnos por escrito a contacto@riderpath.com.mx dentro de los 5 días hábiles siguientes a conocer este aviso.',
  },
  {
    number: 'IV',
    title:  'Qué datos recopilamos',
    body:   'Dependiendo de tu rol (usuario, proveedor, socio o empleado), podemos recabar datos como nombre, correo, teléfono, ubicación y, en algunos casos, información de pago.',
  },
  {
    number: 'V',
    title:  'Datos sensibles',
    body:   'Si eres cliente, podemos tratar tu género como dato sensible, siempre bajo estrictas medidas de seguridad y confidencialidad.',
  },
  {
    number: 'VI',
    title:  'Tus derechos ARCO',
    body:   'Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al uso de tus datos personales en cualquier momento, mediante solicitud escrita a nuestro Departamento de Datos Personales.',
  },
  {
    number: 'VII',
    title:  'Revocar tu consentimiento',
    body:   'Puedes revocar tu consentimiento para el tratamiento de tus datos cuando quieras, aunque esto podría implicar que no podamos seguir ofreciéndote ciertos servicios.',
  },
  {
    number: 'VIII',
    title:  'Con quién compartimos tus datos',
    body:   'Compartimos información únicamente con autoridades fiscales, judiciales o laborales cuando la ley lo requiere, y con proveedores que nos apoyan en el manejo de nuestros servicios.',
  },
  {
    number: 'IX',
    title:  'Tu consentimiento',
    body:   'Al usar nuestros servicios, aceptas tácitamente este aviso de privacidad y el tratamiento de tus datos conforme a lo aquí descrito.',
  },
  {
    number: 'X',
    title:  'Tiempo de conservación',
    body:   'Conservamos tus datos durante el tiempo necesario para ofrecerte nuestros servicios, o hasta que ejerzas tu derecho de cancelación o revocación.',
  },
  {
    number: 'XI',
    title:  'Cambios a este aviso',
    body:   'Podemos actualizar este aviso de privacidad. Cualquier cambio será notificado a través de la app o nuestro sitio web con al menos 15 días de anticipación.',
  },
  {
    number: 'XII',
    title:  'Uso de cookies',
    body:   'Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación. Puedes desactivarlas desde la configuración de tu navegador en cualquier momento.',
  },
]

export default function PrivacidadPage() {
  return (
    <div style={{ background: 'var(--surface-base)', paddingTop: 'var(--header-h)' }}>

      <PrivacyHero />

      {/* ── Sections ── */}
      {SECTIONS.map(({ number, title, body }, i) => (
        <PrivacySection
          key={number}
          number={number}
          title={title}
          raised={i % 2 === 1}
        >
          <p style={{ margin: 0 }}>{body}</p>
        </PrivacySection>
      ))}

      {/* ── Closing note ── */}
      <div
        style={{
          background: 'var(--surface-raised)',
          padding:    'var(--space-8) 0',
          borderTop:  '1px solid var(--border-subtle)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-prose)',
            margin:   '0 auto',
            padding:  '0 var(--gutter)',
          }}
        >
          <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Contacto
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   'var(--fs-body)',
              color:      'var(--text-body)',
              lineHeight: 'var(--lh-body)',
              maxWidth:   '52ch',
              margin:     '0 0 var(--space-4)',
            }}
          >
            Para cualquier solicitud relacionada con el tratamiento de tus datos personales,
            incluyendo el ejercicio de derechos ARCO, revocación de consentimiento o cualquier
            duda sobre este aviso, escríbenos a:
          </p>
          <a
            href="mailto:contacto@riderpath.com.mx"
            style={{
              fontFamily:     'var(--font-mono)',
              fontSize:       'var(--fs-body)',
              fontWeight:     700,
              color:          'var(--brand)',
              textDecoration: 'none',
            }}
          >
            contacto@riderpath.com.mx
          </a>
        </div>
      </div>

    </div>
  )
}
