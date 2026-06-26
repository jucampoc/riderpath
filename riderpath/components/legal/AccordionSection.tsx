'use client'

import { ChevronDown } from 'lucide-react'

interface AccordionSectionProps {
  id: string
  number: string
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export function AccordionSection({
  id,
  number,
  title,
  isOpen,
  onToggle,
  children,
}: AccordionSectionProps) {
  return (
    <div
      id={id}
      style={{
        background:      'var(--surface-card)',
        border:          '1px solid var(--border-subtle)',
        borderRadius:    'var(--radius-lg)',
        marginBottom:    'var(--space-3)',
        overflow:        'hidden',
        scrollMarginTop: 'calc(var(--header-h) + var(--space-5))',
      }}
    >
      {/* ── Header row (toggle button) ── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        style={{
          display:    'flex',
          alignItems: 'center',
          gap:        'var(--space-4)',
          width:      '100%',
          padding:    'var(--space-5)',
          background: 'transparent',
          border:     'none',
          cursor:     'pointer',
          textAlign:  'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize:   'var(--fs-sm)',
            fontWeight: 700,
            color:      'var(--rp-red)',
            flexShrink: 0,
            minWidth:   '3.5ch',
          }}
        >
          {number}
        </span>

        <span
          style={{
            flex:          1,
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-body)',
            fontWeight:    700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color:         'var(--text-strong)',
            lineHeight:    1.3,
          }}
        >
          {title}
        </span>

        <ChevronDown
          size={18}
          aria-hidden
          color="var(--text-muted)"
          style={{
            flexShrink:  0,
            transform:   isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition:  `transform var(--dur-base) var(--ease-out)`,
          }}
        />
      </button>

      {/* ── Content area with max-height transition ── */}
      <div
        id={`${id}-content`}
        role="region"
        style={{
          maxHeight:  isOpen ? '4000px' : '0',
          overflow:   'hidden',
          transition: isOpen
            ? 'max-height 600ms var(--ease-out)'
            : 'max-height 300ms var(--ease-in-out)',
        }}
      >
        <div
          style={{
            padding:     `0 var(--space-5) var(--space-6)`,
            paddingLeft: `calc(var(--space-5) + 3.5ch + var(--space-4))`,
            borderTop:   '1px solid var(--border-subtle)',
            paddingTop:  'var(--space-5)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
