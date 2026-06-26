'use client'

import Image from 'next/image'
import gsap from 'gsap'

export interface RodadaCardProps {
  title:       string
  region?:     string
  image?:      string
  distance:    string | number
  days:        number
  difficulty?: 'Baja' | 'Media' | 'Alta' | 'Extrema'
  host?:       string
  hostAvatar?: string
  saved?:      boolean
  onSave?:     () => void
  live?:       boolean
}

const diffTone: Record<string, string> = {
  Baja:    'var(--rp-success)',
  Media:   'var(--rp-amber)',
  Alta:    'var(--rp-red)',
  Extrema: 'var(--rp-red-deep)',
}

function Metric({ value, unit, label }: { value: string | number; unit?: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
        <span
          style={{
            fontFamily:    'var(--font-mono)',
            fontWeight:    700,
            fontSize:      'var(--fs-h4)',
            lineHeight:    1,
            color:         'var(--text-strong)',
            letterSpacing: '-0.02em',
          }}
        >
          {value}
        </span>
        {unit && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>
            {unit}
          </span>
        )}
      </span>
      <span
        style={{
          fontFamily:    'var(--font-sans)',
          fontSize:      11,
          fontWeight:    600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color:         'var(--text-faint)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function RodadaCard({
  title,
  region,
  image,
  distance,
  days,
  difficulty = 'Media',
  host,
  hostAvatar,
  saved = false,
  onSave,
  live = false,
}: RodadaCardProps) {
  const dc = diffTone[difficulty] ?? diffTone.Media

  return (
    <article
      style={{
        position:      'relative',
        display:       'flex',
        flexDirection: 'column',
        background:    'var(--surface-card)',
        border:        '1px solid var(--border-subtle)',
        borderRadius:  'var(--radius-lg)',
        overflow:      'hidden',
        boxShadow:     'var(--shadow-md), var(--edge-light)',
      }}
      onMouseEnter={(e) => gsap.to(e.currentTarget, {
        scale:     1.02,
        boxShadow: '0 18px 44px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.06)',
        duration:  0.3,
        ease:      'power2.out',
      })}
      onMouseLeave={(e) => gsap.to(e.currentTarget, {
        scale:     1,
        boxShadow: '0 6px 18px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.06)',
        duration:  0.3,
        ease:      'power2.out',
      })}
    >
      {/* ── Cover image ─────────────────────────────────── */}
      <div
        style={{
          position:    'relative',
          aspectRatio: '16/10',
          overflow:    'hidden',
          background:  'linear-gradient(135deg, var(--rp-asphalt-700), var(--rp-asphalt-850))',
        }}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Bottom fade */}
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to top, rgba(8,8,9,0.78) 4%, rgba(8,8,9,0) 46%)',
          }}
        />

        {/* Top-left badges */}
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 8 }}>
          {live && (
            <span
              style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           6,
                height:        24,
                padding:       '0 10px',
                fontFamily:    'var(--font-sans)',
                fontSize:      'var(--fs-xs)',
                fontWeight:    600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius:  'var(--radius-pill)',
                color:         '#fff',
                background:    'var(--rp-red)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
              En vivo
            </span>
          )}
          <span
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            6,
              height:         24,
              padding:        '0 10px',
              fontFamily:     'var(--font-sans)',
              fontSize:       'var(--fs-xs)',
              fontWeight:     600,
              letterSpacing:  '0.06em',
              textTransform:  'uppercase',
              borderRadius:   'var(--radius-pill)',
              color:          '#fff',
              background:     'rgba(8,8,9,0.6)',
              backdropFilter: 'blur(6px)',
              border:         '1px solid rgba(255,255,255,0.14)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: dc }} />
            {difficulty}
          </span>
        </div>

        {/* Save button */}
        {onSave && (
          <button
            type="button"
            onClick={onSave}
            aria-label={saved ? 'Quitar de guardadas' : 'Guardar rodada'}
            style={{
              position:       'absolute',
              top:            12,
              right:          12,
              width:          36,
              height:         36,
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              borderRadius:   'var(--radius-md)',
              border:         '1px solid rgba(255,255,255,0.18)',
              background:     'rgba(8,8,9,0.5)',
              backdropFilter: 'blur(6px)',
              color:          saved ? 'var(--rp-red)' : '#fff',
              cursor:         'pointer',
              fontSize:       17,
              lineHeight:     1,
            }}
          >
            {saved ? '♥' : '♡'}
          </button>
        )}

        {/* Region label */}
        {region && (
          <span
            style={{
              position:   'absolute',
              left:       14,
              bottom:     12,
              display:    'inline-flex',
              alignItems: 'center',
              gap:        6,
              fontFamily: 'var(--font-sans)',
              fontSize:   13,
              fontWeight: 500,
              color:      'var(--rp-ink-100)',
            }}
          >
            <span style={{ color: 'var(--rp-red)' }}>⦿</span>
            {region}
          </span>
        )}
      </div>

      {/* ── Body ────────────────────────────────────────── */}
      <div
        style={{
          display:       'flex',
          flexDirection: 'column',
          gap:           14,
          padding:       'var(--space-5)',
        }}
      >
        <h3
          style={{
            margin:        0,
            fontFamily:    'var(--font-display)',
            fontWeight:    700,
            fontSize:      24,
            lineHeight:    1.05,
            textTransform: 'uppercase',
            letterSpacing: '-0.005em',
            color:         'var(--text-strong)',
          }}
        >
          {title}
        </h3>

        <div style={{ display: 'flex', gap: 22 }}>
          <Metric value={distance} unit="km" label="Ruta" />
          <span style={{ width: 1, background: 'var(--border-subtle)' }} />
          <Metric value={days} unit={days === 1 ? 'día' : 'días'} label="Duración" />
        </div>

        {host && (
          <div
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        10,
              paddingTop: 12,
              borderTop:  '1px solid var(--border-subtle)',
            }}
          >
            <span
              style={{
                width:          30,
                height:         30,
                borderRadius:   '50%',
                overflow:       'hidden',
                display:        'inline-flex',
                alignItems:     'center',
                justifyContent: 'center',
                background:     'var(--surface-hover)',
                border:         '1px solid var(--border-default)',
                fontFamily:     'var(--font-display)',
                fontWeight:     700,
                fontSize:       'var(--fs-xs)',
                color:          'var(--text-body)',
                flex:           'none',
              }}
            >
              {hostAvatar
                ? <Image src={hostAvatar} alt={host} width={30} height={30} style={{ objectFit: 'cover' }} />
                : host[0]
              }
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-muted)' }}>
              Liderada por{' '}
              <strong style={{ color: 'var(--text-body)', fontWeight: 600 }}>{host}</strong>
            </span>
          </div>
        )}
      </div>
    </article>
  )
}
