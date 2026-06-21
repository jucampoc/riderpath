'use client'

import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--header-h)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--gutter)',
        background: 'rgba(14, 14, 16, 0.72)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '11px',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/logos/icono1024x1024-copia.png"
          width={58}
          height={58}
          alt="Riderpath"
          priority
          style={{ width: 'auto', height: 'auto' }}
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

      {/* Desktop nav */}
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
                color: active ? 'var(--rp-red)' : 'var(--text-body)',
                textDecoration: 'none',
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

      {/* Desktop right side */}
      <div
        className="hidden md:flex items-center"
        style={{ marginLeft: 'auto', gap: '14px' }}
      >
        <button
          title="Próximamente"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14.5px',
            fontWeight: 600,
            color: 'var(--text-body)',
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'not-allowed',
            opacity: 0.5,
          }}
        >
          Iniciar sesión
        </button>

        <Link
          href="/community#join"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40px',
            padding: '0 24px',
            background: 'var(--rp-red)',
            color: 'var(--rp-white)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            borderRadius: '999px',
            boxShadow: 'var(--glow-red-sm)',
            textDecoration: 'none',
            transition: `background var(--dur-base) var(--ease-out)`,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--rp-red-bright)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--rp-red)'
          }}
        >
          ÚNETE
        </Link>
      </div>

      {/* Hamburger — mobile only */}
      <button
        className="flex md:hidden flex-col justify-center items-center"
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
                ? i === 0
                  ? 'translateY(7px) rotate(45deg)'
                  : i === 2
                  ? 'translateY(-7px) rotate(-45deg)'
                  : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: 'var(--header-h)',
            left: 0,
            right: 0,
            background: 'var(--surface-raised)',
            borderTop: '1px solid var(--border-subtle)',
            padding: 'var(--space-6) var(--gutter)',
          }}
        >
          <nav
            className="flex flex-col"
            style={{ gap: 'var(--space-5)', marginBottom: 'var(--space-6)' }}
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14.5px',
                    fontWeight: 500,
                    color: active ? 'var(--rp-red)' : 'var(--text-body)',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="flex flex-col" style={{ gap: 'var(--space-3)' }}>
            <button
              title="Próximamente"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
                fontWeight: 600,
                color: 'var(--text-body)',
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'not-allowed',
                opacity: 0.5,
                textAlign: 'center',
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
                height: '40px',
                background: 'var(--rp-red)',
                color: 'var(--rp-white)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '999px',
                boxShadow: 'var(--glow-red-sm)',
                textDecoration: 'none',
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
