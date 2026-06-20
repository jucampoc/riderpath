'use client'

import Image from 'next/image'

const IMAGES = [
  {
    src:     '/images/covers/cover-sierra.jpg',
    alt:     'Rodada por la Sierra Gorda de Querétaro',
    caption: 'Sierra Gorda, Querétaro',
    area:    'sierra',
    sizes:   '(max-width: 768px) 100vw, 66vw',
  },
  {
    src:     '/images/covers/cover-tequila.jpg',
    alt:     'Ruta del Tequila por Jalisco',
    caption: 'Ruta del Tequila, Jalisco',
    area:    'tequila',
    sizes:   '(max-width: 768px) 100vw, 33vw',
  },
  {
    src:     '/images/covers/cover-baja.jpg',
    alt:     'Carretera Transpeninsular en Baja California',
    caption: 'Transpeninsular, Baja California',
    area:    'baja',
    sizes:   '(max-width: 768px) 100vw, 33vw',
  },
]

export function CommunityGallery() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-raised)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}>
          Rodadas de la comunidad
        </p>

        <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          El camino en imágenes
        </h2>

        {/*
          Desktop: 3-col grid, sierra spans left 2 cols and both rows,
          tequila top-right, baja bottom-right.
          Mobile: single column, images stacked.
        */}
        <div
          style={{
            display:             'grid',
            gap:                 'var(--space-4)',
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows:    '1fr 1fr',
            gridTemplateAreas:   '"sierra tequila" "sierra baja"',
            minHeight:           560,
          }}
        >
          {IMAGES.map(({ src, alt, caption, area, sizes }) => (
            <div
              key={area}
              style={{
                gridArea:     area,
                position:     'relative',
                borderRadius: 'var(--radius-lg)',
                overflow:     'hidden',
                background:   'var(--surface-card)',
                boxShadow:    'var(--shadow-md)',
                minHeight:    area === 'sierra' ? 560 : 'auto',
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes={sizes}
              />

              {/* Caption gradient overlay */}
              <div
                aria-hidden="true"
                style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'linear-gradient(to top, rgba(8,8,9,0.72) 0%, rgba(8,8,9,0) 45%)',
                }}
              />

              <p
                style={{
                  position:      'absolute',
                  bottom:        'var(--space-4)',
                  left:          'var(--space-5)',
                  margin:        0,
                  fontFamily:    'var(--font-sans)',
                  fontSize:      'var(--fs-sm)',
                  fontWeight:    'var(--fw-semibold)',
                  color:         'rgba(255,255,255,0.90)',
                  letterSpacing: 'var(--tracking-wide)',
                  textTransform: 'uppercase',
                  textShadow:    '0 1px 4px rgba(0,0,0,0.6)',
                }}
              >
                {caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
