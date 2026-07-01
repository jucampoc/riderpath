'use client'

import Link from 'next/link'

const PLATFORMS = [
  {
    name:   'Facebook',
    symbol: 'F',
    handle: '/Riderpath',
    href:   'https://www.facebook.com/Riderpath?mibextid=ZbWKwL',
  },
  {
    name:   'Instagram',
    symbol: 'Ig',
    handle: '@riderpath',
    href:   'https://www.instagram.com/riderpath',
  },
  {
    name:   'TikTok',
    symbol: 'Tt',
    handle: '@riderpathmx',
    href:   'https://www.tiktok.com/@riderpathmx?_t=8bGBMhjiKdq&_r=1',
  },
  {
    name:   'WhatsApp',
    symbol: 'W',
    handle: 'Comunidad MX',
    href:   'https://api.whatsapp.com/send/?phone=5215561371260&text&type=phone_number&app_absent=0',
  },
]

function SocialCard({ name, symbol, handle, href }: (typeof PLATFORMS)[number]) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            'var(--space-4)',
        background:     'rgba(255,255,255,0.10)',
        border:         '1px solid rgba(255,255,255,0.20)',
        borderRadius:   'var(--radius-lg)',
        padding:        'var(--space-6)',
        color:          'var(--rp-white)',
        textDecoration: 'none',
        transition:     'background var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.background = 'rgba(255,255,255,0.18)'
        el.style.transform   = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.background = 'rgba(255,255,255,0.10)'
        el.style.transform   = 'translateY(0)'
      }}
    >
      {/* Icon placeholder — large display symbol */}
      <div
        aria-hidden="true"
        style={{
          width:          64,
          height:         64,
          borderRadius:   'var(--radius-md)',
          background:     'rgba(255,255,255,0.15)',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontFamily:     'var(--font-display)',
          fontSize:       'var(--fs-h3)',
          fontWeight:     'var(--fw-bold)',
          color:          'var(--rp-white)',
          letterSpacing:  'var(--tracking-tight)',
          flexShrink:     0,
        }}
      >
        {symbol}
      </div>

      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-h4)',
            fontWeight:    'var(--fw-bold)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color:         'var(--rp-white)',
            margin:        '0 0 var(--space-1)',
            lineHeight:    1,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize:   'var(--fs-xs)',
            color:      'rgba(255,255,255,0.65)',
            margin:     0,
          }}
        >
          {handle}
        </p>
      </div>
    </Link>
  )
}

export function CommunityJoin() {
  return (
    <section
      id="join"
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
          maxWidth: 'var(--container)',
          margin:   '0 auto',
        }}
      >
        {/* Header */}
        <p
          className="rp-eyebrow"
          style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 'var(--space-4)' }}
        >
          Sé parte de Riderpath®
        </p>

        <h2
          style={{
            color:        'var(--rp-white)',
            marginBottom: 'var(--space-5)',
          }}
        >
          Únete desde tu red favorita
        </h2>

        <p
          style={{
            fontSize:   'var(--fs-lead)',
            color:      'rgba(255,255,255,0.85)',
            maxWidth:   '52ch',
            margin:     '0 auto var(--space-9)',
            lineHeight: 'var(--lh-body)',
          }}
        >
          Síguenos, comparte tu rodada y conecta con nuestra comunidad de motociclistas con autenticidad.
        </p>

        {/* Social cards — 4 cols desktop, 2x2 mobile */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 'var(--space-4)' }}
        >
          {PLATFORMS.map((platform) => (
            <SocialCard key={platform.name} {...platform} />
          ))}
        </div>
      </div>
    </section>
  )
}
