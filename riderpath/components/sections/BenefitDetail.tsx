'use client'

interface BenefitDetailProps {
  number:        string
  title:         string
  description:   string
  imageSrc:      string
  imagePosition: 'left' | 'right'
  background?:   string
}

export function BenefitDetail({
  number,
  title,
  description,
  imageSrc: _imageSrc, // placeholder div used for now; real image wired up with content
  imagePosition,
  background = 'var(--surface-base)',
}: BenefitDetailProps) {
  const textCol = (
    <div>
      <p
        className="rp-mono"
        style={{
          fontSize:     'var(--fs-h3)',
          fontWeight:   700,
          color:        'var(--rp-red)',
          lineHeight:   1,
          marginBottom: 'var(--space-4)',
        }}
      >
        {number}
      </p>
      <h2 style={{ marginBottom: 'var(--space-5)' }}>{title}</h2>
      <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0 }}>
        {description}
      </p>
    </div>
  )

  const imageCol = (
    <div
      aria-hidden="true"
      style={{
        background:   'var(--surface-card)',
        borderRadius: 'var(--radius-xl)',
        aspectRatio:  '4 / 3',
        overflow:     'hidden',
      }}
    />
  )

  return (
    <section style={{ padding: 'var(--space-9) 0', background }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>{imageCol}{textCol}</>
          ) : (
            <>{textCol}{imageCol}</>
          )}
        </div>
      </div>
    </section>
  )
}
