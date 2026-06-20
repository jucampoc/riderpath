'use client'

import { useState } from 'react'

const TAGS = ['Todas', 'Montaña', 'Costa', 'Desierto', 'Pueblos mágicos']

export function FilterTabs() {
  const [active, setActive] = useState('Todas')

  return (
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => {
        const isActive = active === tag
        return (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            style={{
              padding: 'var(--space-2) var(--space-5)',
              borderRadius: 'var(--radius-pill)',
              border: `1px solid ${isActive ? 'var(--rp-red)' : 'var(--border-default)'}`,
              background: isActive ? 'var(--rp-red)' : 'transparent',
              color: isActive ? 'var(--text-on-red)' : 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--fs-sm)',
              fontWeight: isActive ? 600 : 500,
              cursor: 'pointer',
              transition: `background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)`,
              whiteSpace: 'nowrap',
            }}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
