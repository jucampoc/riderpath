'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AccordionSection } from './AccordionSection'

const SECTIONS = [
  { id: 'sec-i',    number: 'I',    title: '¿Para qué fines recabamos y utilizamos sus datos personales?' },
  { id: 'sec-ii',   number: 'II',   title: 'Finalidades no Necesarias' },
  { id: 'sec-iii',  number: 'III',  title: '¿Cómo puedo manifestar mi negativa para el uso de mis datos para finalidades no necesarias?' },
  { id: 'sec-iv',   number: 'IV',   title: '¿Qué datos personales obtenemos y de dónde?' },
  { id: 'sec-v',    number: 'V',    title: 'Datos personales sensibles' },
  { id: 'sec-vi',   number: 'VI',   title: '¿Cómo acceder o rectificar sus datos personales o cancelar u oponerse a su uso?' },
  { id: 'sec-vii',  number: 'VII',  title: '¿Cómo puede revocar su consentimiento para el tratamiento de sus datos?' },
  { id: 'sec-viii', number: 'VIII', title: 'Sus datos pueden viajar a otro país o compartidos con otros' },
  { id: 'sec-ix',   number: 'IX',   title: 'Consentimiento' },
  { id: 'sec-x',    number: 'X',    title: 'Temporalidad' },
  { id: 'sec-xi',   number: 'XI',   title: 'Modificaciones al aviso de privacidad' },
  { id: 'sec-xii',  number: 'XII',  title: 'Uso de cookies y web beacons' },
]

export function PrivacyLayout() {
  const [openSections, setOpenSections]   = useState<Set<string>>(new Set())
  const [mobileIndexOpen, setMobileIndexOpen] = useState(false)

  function toggleSection(id: string) {
    setOpenSections(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function navigateTo(id: string) {
    setOpenSections(prev => new Set([...prev, id]))
    setMobileIndexOpen(false)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div
      style={{
        background:    'var(--surface-base)',
        paddingTop:    'var(--header-h)',
        paddingBottom: 'var(--space-10)',
        minHeight:     '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '1020px',
          margin:   '0 auto',
          padding:  'var(--space-8) var(--gutter) 0',
        }}
      >

        {/* ── Page header ── */}
        <header style={{ marginBottom: 'var(--space-7)' }}>
          <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
            Aviso legal
          </p>

          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'var(--fs-h1)',
              fontWeight:    700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              color:         'var(--text-strong)',
              margin:        '0 0 var(--space-5)',
            }}
          >
            Aviso de Privacidad
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   'var(--fs-body)',
              color:      'var(--text-body)',
              lineHeight: 'var(--lh-body)',
              maxWidth:   '65ch',
              margin:     '0 0 var(--space-6)',
            }}
          >
            Biitzu S.A.S. de C.V. ("BIITZU"), con domicilio en Calle privada de reforma número
            exterior 6, Colonia Santo Tomás Chiconautla, Ecatepec de Morelos, C.P. 55068, Estado
            de México, es responsable del tratamiento de sus datos personales, de conformidad con
            la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
          </p>

          <a
            href="/documents/AvisoprivacidadRiderpath.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            'var(--space-2)',
              height:         '40px',
              padding:        '0 var(--space-5)',
              fontFamily:     'var(--font-display)',
              fontSize:       '13px',
              fontWeight:     700,
              textTransform:  'uppercase',
              letterSpacing:  '0.06em',
              color:          'var(--text-strong)',
              background:     'transparent',
              border:         '2px solid var(--border-strong)',
              borderRadius:   'var(--radius-pill)',
              textDecoration: 'none',
              transition:     [
                'border-color var(--dur-base) var(--ease-out)',
                'color var(--dur-base) var(--ease-out)',
              ].join(', '),
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'var(--brand)'
              el.style.color       = 'var(--brand)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'var(--border-strong)'
              el.style.color       = 'var(--text-strong)'
            }}
          >
            ↓ Descargar PDF
          </a>
        </header>

        <span
          className="rp-stripe"
          style={{ display: 'block', marginBottom: 'var(--space-7)' }}
        />

        {/* ── Mobile: collapsible Índice ── */}
        <div className="md:hidden" style={{ marginBottom: 'var(--space-6)' }}>
          <button
            onClick={() => setMobileIndexOpen(prev => !prev)}
            aria-expanded={mobileIndexOpen}
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
              width:          '100%',
              padding:        'var(--space-4) var(--space-5)',
              background:     'var(--surface-card)',
              border:         '1px solid var(--border-subtle)',
              borderRadius:   mobileIndexOpen
                ? 'var(--radius-lg) var(--radius-lg) 0 0'
                : 'var(--radius-lg)',
              cursor:         'pointer',
            }}
          >
            <span
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'var(--fs-sm)',
                fontWeight:    700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color:         'var(--text-strong)',
              }}
            >
              Índice
            </span>
            <ChevronDown
              size={16}
              color="var(--text-muted)"
              style={{
                transform:  mobileIndexOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: `transform var(--dur-base) var(--ease-out)`,
              }}
            />
          </button>

          {mobileIndexOpen && (
            <nav
              style={{
                background:   'var(--surface-card)',
                border:       '1px solid var(--border-subtle)',
                borderTop:    'none',
                borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                overflow:     'hidden',
              }}
            >
              {SECTIONS.map(({ id, number, title }, i) => (
                <button
                  key={id}
                  onClick={() => navigateTo(id)}
                  style={{
                    display:      'flex',
                    alignItems:   'flex-start',
                    gap:          'var(--space-3)',
                    width:        '100%',
                    padding:      'var(--space-3) var(--space-5)',
                    background:   'transparent',
                    border:       'none',
                    borderBottom: i < SECTIONS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    cursor:       'pointer',
                    textAlign:    'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '11px',
                      fontWeight: 700,
                      color:      'var(--rp-red)',
                      flexShrink: 0,
                      minWidth:   '3.5ch',
                      paddingTop: '1px',
                    }}
                  >
                    {number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   'var(--fs-xs)',
                      color:      'var(--text-body)',
                      lineHeight: 1.4,
                    }}
                  >
                    {title}
                  </span>
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* ── Desktop: two-column layout ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-[220px_1fr]"
          style={{ gap: 'var(--space-8)', alignItems: 'start' }}
        >

          {/* Sidebar TOC — desktop only */}
          <aside
            className="hidden md:block"
            style={{
              position:  'sticky',
              top:       'calc(var(--header-h) + var(--space-6))',
              maxHeight: 'calc(100vh - var(--header-h) - var(--space-7))',
              overflowY: 'auto',
            }}
          >
            <p
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '11px',
                fontWeight:    700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color:         'var(--text-faint)',
                margin:        '0 0 var(--space-3)',
              }}
            >
              Índice
            </p>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              {SECTIONS.map(({ id, number, title }) => (
                <button
                  key={id}
                  onClick={() => navigateTo(id)}
                  style={{
                    display:      'flex',
                    alignItems:   'flex-start',
                    gap:          'var(--space-2)',
                    width:        '100%',
                    padding:      'var(--space-2) var(--space-3)',
                    background:   'transparent',
                    border:       'none',
                    borderRadius: 'var(--radius-sm)',
                    cursor:       'pointer',
                    textAlign:    'left',
                    transition:   'background var(--dur-fast) var(--ease-out)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-hover)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '11px',
                      fontWeight: 700,
                      color:      'var(--rp-red)',
                      flexShrink: 0,
                      minWidth:   '3.5ch',
                      paddingTop: '1px',
                    }}
                  >
                    {number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   '12px',
                      color:      'var(--text-muted)',
                      lineHeight: 1.45,
                    }}
                  >
                    {title}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main>
            {SECTIONS.map(({ id, number, title }) => (
              <AccordionSection
                key={id}
                id={id}
                number={number}
                title={title}
                isOpen={openSections.has(id)}
                onToggle={() => toggleSection(id)}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   'var(--fs-sm)',
                    color:      'var(--text-faint)',
                    fontStyle:  'italic',
                    margin:     0,
                  }}
                >
                  {/* TODO: paste content */}
                </p>
              </AccordionSection>
            ))}

            {/* Footer note */}
            <div
              style={{
                marginTop:  'var(--space-7)',
                paddingTop: 'var(--space-5)',
                borderTop:  '1px solid var(--border-subtle)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize:   'var(--fs-xs)',
                  color:      'var(--text-faint)',
                  margin:     0,
                }}
              >
                Última fecha de actualización: 03 de octubre de 2023.
              </p>
            </div>
          </main>

        </div>
      </div>
    </div>
  )
}
