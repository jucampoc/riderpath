import Image from 'next/image'

export type Difficulty = 'Media' | 'Alta' | 'Extrema'

const difficultyColor: Record<Difficulty, string> = {
  Media:   'var(--rp-success)',
  Alta:    'var(--rp-amber)',
  Extrema: 'var(--rp-red)',
}

export interface RodadaCardProps {
  title:      string
  location:   string
  distance:   string
  duration:   string
  difficulty: Difficulty
  rider:      string
  cover:      string
  live?:      boolean
}

export function RodadaCard({
  title,
  location,
  distance,
  duration,
  difficulty,
  rider,
  cover,
  live,
}: RodadaCardProps) {
  return (
    <article
      style={{
        background:    'var(--surface-card)',
        borderRadius:  'var(--radius-lg)',
        border:        '1px solid var(--border-subtle)',
        overflow:      'hidden',
        boxShadow:     'var(--shadow-md)',
        display:       'flex',
        flexDirection: 'column',
      }}
    >
      {/* Cover image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
        <Image
          src={cover}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {live && (
          <span
            style={{
              position:      'absolute',
              top:           'var(--space-3)',
              left:          'var(--space-3)',
              background:    'var(--rp-red)',
              color:         '#fff',
              fontFamily:    'var(--font-mono)',
              fontSize:      'var(--fs-xs)',
              fontWeight:    700,
              letterSpacing: 'var(--tracking-eyebrow)',
              textTransform: 'uppercase',
              padding:       'var(--space-1) var(--space-3)',
              borderRadius:  'var(--radius-pill)',
              display:       'inline-flex',
              alignItems:    'center',
              gap:           'var(--space-2)',
              boxShadow:     'var(--shadow-md)',
            }}
          >
            <span
              style={{
                width:        6,
                height:       6,
                borderRadius: '50%',
                background:   '#fff',
                display:      'inline-block',
                flexShrink:   0,
              }}
            />
            EN VIVO
          </span>
        )}
      </div>

      {/* Body */}
      <div
        style={{
          padding:       'var(--space-6)',
          flex:          1,
          display:       'flex',
          flexDirection: 'column',
          gap:           'var(--space-4)',
        }}
      >
        {/* Title + location */}
        <div>
          <h3
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'var(--fs-h4)',
              fontWeight:    700,
              color:         'var(--text-strong)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-display)',
              margin:        '0 0 var(--space-1)',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   'var(--fs-sm)',
              color:      'var(--text-muted)',
              margin:     0,
            }}
          >
            {location}
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-6 flex-wrap">
          <div>
            <div
              className="rp-mono"
              style={{
                fontSize:   'var(--fs-sm)',
                fontWeight: 700,
                color:      'var(--text-strong)',
                lineHeight: 1.2,
              }}
            >
              {distance}
            </div>
            <div
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      'var(--fs-xs)',
                color:         'var(--text-faint)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-eyebrow)',
              }}
            >
              distancia
            </div>
          </div>

          <div>
            <div
              className="rp-mono"
              style={{
                fontSize:   'var(--fs-sm)',
                fontWeight: 700,
                color:      'var(--text-strong)',
                lineHeight: 1.2,
              }}
            >
              {duration}
            </div>
            <div
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      'var(--fs-xs)',
                color:         'var(--text-faint)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-eyebrow)',
              }}
            >
              duración
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      'var(--fs-xs)',
                fontWeight:    700,
                color:         difficultyColor[difficulty],
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-eyebrow)',
                lineHeight:    1.2,
              }}
            >
              {difficulty}
            </div>
            <div
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      'var(--fs-xs)',
                color:         'var(--text-faint)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-eyebrow)',
              }}
            >
              dificultad
            </div>
          </div>
        </div>

        {/* Rider */}
        <div
          className="flex items-center gap-2"
          style={{
            paddingTop: 'var(--space-4)',
            borderTop:  '1px solid var(--border-subtle)',
            marginTop:  'auto',
          }}
        >
          <div
            style={{
              width:         32,
              height:        32,
              borderRadius:  '50%',
              background:    'var(--rp-asphalt-600)',
              border:        '1px solid var(--border-default)',
              display:       'flex',
              alignItems:    'center',
              justifyContent:'center',
              fontFamily:    'var(--font-display)',
              fontSize:      'var(--fs-xs)',
              fontWeight:    700,
              color:         'var(--text-muted)',
              textTransform: 'uppercase',
              flexShrink:    0,
            }}
          >
            {rider.charAt(0)}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   'var(--fs-sm)',
              color:      'var(--text-muted)',
            }}
          >
            {rider}
          </span>
        </div>
      </div>
    </article>
  )
}
