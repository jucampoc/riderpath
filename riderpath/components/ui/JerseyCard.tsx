'use client'

import { useState, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export interface JerseyCardProps {
  name:        string
  frontImage:  string
  backImage:   string
  gender:      'hombre' | 'mujer'
}

type Side = 'front' | 'back'

export function JerseyCard({ name, frontImage, backImage, gender }: JerseyCardProps) {
  const [side, setSide]           = useState<Side>('front')
  const [animating, setAnimating] = useState(false)
  const frontRef                  = useRef<HTMLDivElement>(null)
  const backRef                   = useRef<HTMLDivElement>(null)

  const genderLabel = gender === 'hombre' ? 'Hombre' : 'Mujer'

  // Set initial GSAP state before first paint: front visible, back hidden
  useLayoutEffect(() => {
    gsap.set(frontRef.current, { opacity: 1, scale: 1 })
    gsap.set(backRef.current,  { opacity: 0, scale: 0.96 })
  }, [])

  const flip = (target: Side) => {
    if (animating || target === side) return
    setAnimating(true)

    const outEl = target === 'back' ? frontRef.current : backRef.current
    const inEl  = target === 'back' ? backRef.current  : frontRef.current

    // Ensure the incoming layer starts from the correct hidden state
    gsap.set(inEl, { opacity: 0, scale: 0.96 })

    gsap.timeline({
      onComplete: () => {
        setSide(target)
        setAnimating(false)
      },
    })
      .to(outEl, { opacity: 0, scale: 0.96, duration: 0.22, ease: 'power2.in' })
      .to(inEl,  { opacity: 1, scale: 1,    duration: 0.28, ease: 'power2.out' }, '-=0.05')
  }

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
      onMouseEnter={(e) => gsap.to(e.currentTarget, {
        scale:     1.03,
        y:         -4,
        boxShadow: '0 18px 44px rgba(0,0,0,0.50)',
        duration:  0.3,
        ease:      'power2.out',
      })}
      onMouseLeave={(e) => gsap.to(e.currentTarget, {
        scale:     1,
        y:         0,
        boxShadow: '0 6px 18px rgba(0,0,0,0.40)',
        duration:  0.3,
        ease:      'power2.out',
      })}
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
        {/* Front image layer — always mounted, GSAP controls opacity */}
        <div ref={frontRef} style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={frontImage}
            alt={`${name} — Frente`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Back image layer — always mounted, GSAP controls opacity */}
        <div ref={backRef} style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={backImage}
            alt={`${name} — Espalda`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Toggle — pointer events disabled during animation to block rapid clicks */}
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
            pointerEvents:  animating ? 'none' : 'auto',
            zIndex:         1,
          }}
        >
          {(['front', 'back'] as Side[]).map((s) => {
            const label  = s === 'front' ? 'Frente' : 'Espalda'
            const active = side === s
            return (
              <button
                key={s}
                type="button"
                onClick={() => flip(s)}
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
          padding:       'var(--space-4) var(--space-5)',
          display:       'flex',
          flexDirection: 'column',
          gap:           'var(--space-1)',
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
