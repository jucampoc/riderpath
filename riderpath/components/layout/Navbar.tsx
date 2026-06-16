'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/what-is',   label: 'Qué es' },
  { href: '/benefits',  label: 'Beneficios' },
  { href: '/community', label: 'Comunidad' },
  { href: '/fashion',   label: 'Moda' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const solid = !isHome || scrolled

  useEffect(() => {
    setScrolled(window.scrollY > 20)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full flex items-center"
      style={{
        height: 'var(--header-h)',
        zIndex: 100,
        padding: '0 var(--gutter)',
        background: solid ? 'rgba(14, 14, 16, 0.72)' : 'transparent',
        backdropFilter: solid ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(14px)' : 'none',
        borderBottom: '1px solid var(--border-subtle)',
        transition: `background var(--dur-base) var(--ease-out)`,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center"
        style={{ gap: '11px', textDecoration: 'none', flexShrink: 0 }}
      >
        <Image
          src="/images/logos/logo-icon.png"
          alt=""
          width={38}
          height={38}
          priority
          style={{ display: 'block' }}
        />
        <span
          style={{
            fontFamily: 'var(--font-wordmark)',
            fontSize: '29px',
            color: 'var(--text-strong)',
            lineHeight: 1,
            marginTop: '2px',
          }}
        >
          Riderpath
        </span>
      </Link>

      {/* Desktop nav — starts 48px after logo */}
      <nav
        className="hidden md:flex items-center"
        aria-label="Navegación principal"
        style={{ gap: '30px', marginLeft: '48px' }}
      >
        {navLinks.map(({ href, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
                fontWeight: 500,
                color: active ? 'var(--brand)' : 'var(--text-body)',
                textDecoration: 'none',
                paddingBottom: '2px',
                borderBottom: `2px solid ${active ? 'var(--brand)' : 'transparent'}`,
                transition: `color var(--dur-base) var(--ease-out)`,
              }}
              onMouseEnter={e => {
                if (!active) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-strong)'
              }}
              onMouseLeave={e => {
                if (!active) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-body)'
              }}
            >
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Desktop CTAs — pushed to the far right */}
      <div
        className="hidden md:flex items-center"
        style={{ marginLeft: 'auto', gap: '14px' }}
      >
        {/* Iniciar sesión — plain text, no border, coming soon */}
        <button
          disabled
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14.5px',
            fontWeight: 600,
            color: 'var(--text-body)',
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'not-allowed',
            opacity: 1,
          }}
        >
          Iniciar sesión
        </button>

        {/* Primary CTA */}
        <Link
          href="/community#join"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
            height: '36px',
            padding: '0 14px',
            background: 'var(--brand)',
            color: 'var(--brand-contrast)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            lineHeight: 1,
            textDecoration: 'none',
            border: '2px solid transparent',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--glow-red-sm)',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            userSelect: 'none',
            transition: `background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--brand-hover)'
            el.style.boxShadow = 'var(--glow-red)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--brand)'
            el.style.boxShadow = 'var(--glow-red-sm)'
          }}
        >
          ÚNETE
        </Link>
      </div>

      {/* Hamburger — mobile only, pushed right */}
      <button
        className="flex md:hidden flex-col items-center justify-center"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
        style={{
          marginLeft: 'auto',
          width: 40,
          height: 40,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          gap: '5px',
        }}
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: 'var(--text-strong)',
              borderRadius: 2,
              transition: `transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)`,
              transform: menuOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu — absolutely positioned below header */}
      {menuOpen && (
        <div
          className="flex flex-col md:hidden"
          style={{
            position: 'absolute',
            top: 'var(--header-h)',
            left: 0,
            right: 0,
            background: 'rgba(14, 14, 16, 0.95)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: 'var(--space-6) var(--gutter)',
            gap: 'var(--space-5)',
          }}
        >
          <nav className="flex flex-col" style={{ gap: 'var(--space-4)' }} aria-label="Menú móvil">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'var(--fs-h4)',
                    letterSpacing: 'var(--tracking-display)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: active ? 'var(--brand)' : 'var(--text-strong)',
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="flex flex-col" style={{ gap: 'var(--space-3)' }}>
            <button
              disabled
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
                width: '100%',
                background: 'transparent',
                color: 'var(--text-body)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '14.5px',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                cursor: 'not-allowed',
                opacity: 0.6,
              }}
            >
              Iniciar sesión
            </button>

            <Link
              href="/community#join"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
                background: 'var(--brand)',
                color: 'var(--brand-contrast)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                lineHeight: 1,
                textDecoration: 'none',
                border: '2px solid transparent',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--glow-red-sm)',
              }}
            >
              ÚNETE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
