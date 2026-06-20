import Link from 'next/link'

const WHATSAPP_HREF = 'https://api.whatsapp.com/send/?phone=5215561371260&text&type=phone_number&app_absent=0'

export function FashionCta() {
  return (
    <section
      style={{
        padding:    'var(--space-10) var(--gutter)',
        background: 'var(--rp-red)',
        textAlign:  'center',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 24px)',
          pointerEvents:   'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--container-prose)',
          margin:   '0 auto',
        }}
      >
        <h2
          style={{
            color:        'var(--rp-white)',
            marginBottom: 'var(--space-5)',
          }}
        >
          ¿Te interesa un jersey?
        </h2>

        <p
          style={{
            fontSize:   'var(--fs-lead)',
            color:      'rgba(255,255,255,0.88)',
            maxWidth:   '44ch',
            margin:     '0 auto var(--space-8)',
            lineHeight: 'var(--lh-body)',
          }}
        >
          Escríbenos directamente y te ayudamos a elegir tu talla y modelo favorito.
        </p>

        <Link
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:       'inline-block',
            background:    'var(--rp-amber)',
            color:         'var(--rp-asphalt-900)',
            fontFamily:    'var(--font-display)',
            fontWeight:    'var(--fw-bold)',
            fontSize:      'var(--fs-h4)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            padding:       'var(--space-4) var(--space-8)',
            borderRadius:  'var(--radius-pill)',
            boxShadow:     '0 4px 20px rgba(232,163,59,0.40)',
          }}
        >
          Contactar por WhatsApp
        </Link>
      </div>
    </section>
  )
}
