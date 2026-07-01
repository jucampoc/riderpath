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
      { href: '/what-is',           label: 'Qué es' },
      { href: '/benefits',          label: 'Beneficios' },
      { href: '/community',         label: 'Comunidad' },
      { href: '/comunidad-rodadas', label: 'Rodadas' },
      { href: '/', label: 'Moda' },
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
        borderTop: '1px solid var(--border-on-dark-subtle)',
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
                height={130}
              />
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-sm)',
                color: 'var(--text-on-dark-muted)',
                maxWidth: '34ch',
                lineHeight: 'var(--lh-body)',
                margin: '0 0 var(--space-5)',
              }}
            >
              La marca que conecta a motociclistas con autenticidad. Indumentaria exclusiva, comunidad y propósito.
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
                    color: 'var(--text-on-dark-muted)',
                    border: '1px solid var(--border-on-dark-default)',
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
                    el.style.color = 'var(--text-on-dark-muted)'
                    el.style.borderColor = 'var(--border-on-dark-default)'
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
                  color: 'var(--text-on-dark-faint)',
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
                        color: 'var(--text-on-dark-body)',
                        textDecoration: 'none',
                        transition: 'color var(--dur-base) var(--ease-out)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-strong)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-body)'
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
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-7)',
            padding: 'var(--space-5) 0',
            borderTop: '1px solid var(--border-on-dark-subtle)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--text-on-dark-faint)',
            }}
          >
            © {new Date().getFullYear()} Riderpath · Biitzu S.A.S. de C.V.
          </span>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-5)' }}>
            {/* Developer credit */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', opacity: 0.75 }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--text-on-dark-faint)',
                }}
              >
                Sitio desarrollado por Julian Campo
              </span>
              <a
                href="https://github.com/jucampoc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Julian Campo"
                style={{
                  display: 'flex',
                  color: 'var(--text-on-dark-faint)',
                  transition: 'color var(--dur-base) var(--ease-out)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-strong)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-faint)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.957.005 1.923.128 2.891.38C18.186 4.646 19.19 4.97 19.19 4.97c.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jucampoc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Julian Campo"
                style={{
                  display: 'flex',
                  color: 'var(--text-on-dark-faint)',
                  transition: 'color var(--dur-base) var(--ease-out)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-strong)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-faint)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Legal links */}
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
                    color: 'var(--text-on-dark-faint)',
                    textDecoration: 'none',
                    transition: 'color var(--dur-base) var(--ease-out)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-muted)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-on-dark-faint)'
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
