'use client'

import { useState } from 'react'
import Image from 'next/image'

export interface JerseyCardProps {
  name:        string
  frontImage:  string
  backImage:   string
  gender:      'hombre' | 'mujer'
}

type Side = 'front' | 'back'

export function JerseyCard({ name, frontImage, backImage, gender }: JerseyCardProps) {
  const [side, setSide] = useState<Side>('front')

  const currentImage = side === 'front' ? frontImage : backImage
  const genderLabel  = gender === 'hombre' ? 'Hombre' : 'Mujer'

  return (
    <article
      style={{
        background:    'var(--surface-card)',
        border:        '1px solid var(--border-subtle)',
        borderRadius:  'var(--radius-lg)',
        overflow:      'hidden',
        display:       'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image area */}
      <div
        style={{
          position:    'relative',
          aspectRatio: '3/4',
          background:  'var(--surface-raised)',
          overflow:    'hidden',
        }}
      >
        <Image
          src={currentImage}
          alt={`${name} — ${side === 'front' ? 'Frente' : 'Espalda'}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Frente / Espalda toggle — overlaid at bottom of image */}
        <div
          style={{
            position:       'absolute',
            bottom:         'var(--space-3)',
            left:           '50%',
            transform:      'translateX(-50%)',
            display:        'inline-flex',
            gap:            2,
            background:     'rgba(8,8,9,0.60)',
            backdropFilter: 'blur(8px)',
            borderRadius:   'var(--radius-pill)',
            padding:        2,
            border:         '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {(['front', 'back'] as Side[]).map((s) => {
            const label  = s === 'front' ? 'Frente' : 'Espalda'
            const active = side === s
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSide(s)}
                aria-pressed={active}
                style={{
                  fontFamily:    'var(--font-sans)',
                  fontSize:      'var(--fs-xs)',
                  fontWeight:    'var(--fw-semibold)',
                  letterSpacing: 'var(--tracking-wide)',
                  textTransform: 'uppercase',
                  padding:       'var(--space-1) var(--space-3)',
                  borderRadius:  'var(--radius-pill)',
                  border:        'none',
                  cursor:        'pointer',
                  background:    active ? 'var(--rp-red)' : 'transparent',
                  color:         active ? '#fff' : 'var(--text-muted)',
                  transition:    'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Card body: name + gender */}
      <div
        style={{
          padding: 'var(--space-4) var(--space-5)',
          display: 'flex',
          flexDirection: 'column',
          gap:     'var(--space-1)',
        }}
      >
        <p
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--fs-h4)',
            fontWeight:    'var(--fw-bold)',
            letterSpacing: 'var(--tracking-tight)',
            textTransform: 'uppercase',
            color:         'var(--text-strong)',
            margin:        0,
            lineHeight:    1.1,
          }}
        >
          {name}
        </p>

        <p
          style={{
            fontFamily:    'var(--font-sans)',
            fontSize:      'var(--fs-xs)',
            fontWeight:    'var(--fw-semibold)',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color:         'var(--text-muted)',
            margin:        0,
          }}
        >
          {genderLabel}
        </p>
      </div>
    </article>
  )
}
