'use client'

import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { href: 'https://www.facebook.com/Riderpath?mibextid=ZbWKwL', label: 'Facebook' },
  { href: 'https://www.instagram.com/riderpath', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@riderpathmx?_t=8bGBMhjiKdq&_r=1', label: 'TikTok' },
  {
    href: 'https://api.whatsapp.com/send/?phone=5215561371260&text&type=phone_number&app_absent=0',
    label: 'WhatsApp',
  },
]

const footerNav = [
  {
    title: 'Riderpath',
    links: [
      { href: '/what-is', label: 'Qué es' },
      { href: '/benefits', label: 'Beneficios' },
      { href: '/community', label: 'Comunidad' },
      { href: '/fashion', label: 'Moda sostenible' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { href: '/community#social', label: 'Redes sociales' },
      { href: '/community#join', label: 'Únete' },
      { href: '/community#gallery', label: 'Galería' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--rp-asphalt-850)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(3rem, 5vw, 4.5rem) 0 0',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container)',
          margin: '0 auto',
          padding: '0 var(--gutter)',
        }}
      >
        {/* ── Main grid: brand (wider) + 2 nav columns ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-[minmax(220px,1.4fr)_repeat(2,1fr)]"
          style={{ gap: 'var(--space-7)', alignItems: 'start' }}
        >

          {/* Brand column */}
          <div>
            {/* Stack logo — replaces the icon + wordmark span from design-system */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <Image
                src="/images/logos/icono1024x1024.png"
                alt="Riderpath"
                width={130}
                height={70}
                style={{ width: '130px', height: 'auto' }}
              />
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-sm)',
                color: 'var(--text-muted)',
                maxWidth: '34ch',
                lineHeight: 'var(--lh-body)',
                margin: '0 0 var(--space-5)',
              }}
            >
              El mapa vivo de los motociclistas viajeros. Crea, difunde y colecciona rodadas.
            </p>

            {/* Social links — pill badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--fw-semibold)',
                    fontSize: 'var(--fs-xs)',
                    letterSpacing: 'var(--tracking-eyebrow)',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-pill)',
                    padding: 'var(--space-2) var(--space-3)',
                    transition: [
                      'color var(--dur-base) var(--ease-out)',
                      'border-color var(--dur-base) var(--ease-out)',
                    ].join(', '),
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = 'var(--brand)'
                    el.style.borderColor = 'var(--border-brand)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = 'var(--text-muted)'
                    el.style.borderColor = 'var(--border-default)'
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map(({ title, links }) => (
            <div key={title}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--fs-xs)',
                  fontWeight: 'var(--fw-semibold)',
                  letterSpacing: 'var(--tracking-eyebrow)',
                  textTransform: 'uppercase',
                  color: 'var(--text-faint)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {title}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'var(--fs-sm)',
                        color: 'var(--text-body)',
                        textDecoration: 'none',
                        transition: 'color var(--dur-base) var(--ease-out)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-strong)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-body)'
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-7)',
            padding: 'var(--space-5) 0',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--text-faint)',
            }}
          >
            © {new Date().getFullYear()} Riderpath · Biitzu S.A.S. de C.V.
          </span>

          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            {[
              { href: '/privacidad', label: 'Privacidad' },
              { href: '/terminos', label: 'Términos' },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--text-faint)',
                  textDecoration: 'none',
                  transition: 'color var(--dur-base) var(--ease-out)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-faint)'
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
