import { JerseyCard, type JerseyCardProps } from '@/components/ui/JerseyCard'

const JERSEYS: JerseyCardProps[] = [
  {
    name:        'Jersey Clásico Vino',
    gender:      'hombre',
    frontImage:  '/images/moda/camiseta_1_frente_hombre.png',
    backImage:   '/images/moda/camiseta_1_espalda_hombre.png',
  },
  {
    name:        'Jersey Riderpath Blanco',
    gender:      'hombre',
    frontImage:  '/images/moda/camiseta_2_frente_hombre.png',
    backImage:   '/images/moda/camiseta_2_espalda_hombre.png',
  },
  {
    name:        'Jersey Riderpath Blanco',
    gender:      'mujer',
    frontImage:  '/images/moda/camiseta_2_frente_mujer.png',
    backImage:   '/images/moda/camiseta_2_espalda_mujer.png',
  },
  {
    name:        'Jersey Azul Performance',
    gender:      'hombre',
    frontImage:  '/images/moda/frente_hombre_azul.png',
    backImage:   '/images/moda/espalda_hombre_azul.png',
  },
  {
    name:        'Jersey Azul Performance',
    gender:      'mujer',
    frontImage:  '/images/moda/frente_mujer_azul.png',
    backImage:   '/images/moda/espalda_mujer_azul.png',
  },
]

export function FashionCatalog() {
  return (
    <section style={{ padding: 'var(--space-9) 0', background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>

        <p className="rp-eyebrow" style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}>
          Nuestra colección
        </p>

        <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          Jerseys Riderpath
        </h2>

        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap:                 'var(--space-5)',
          }}
        >
          {JERSEYS.map((jersey) => (
            <JerseyCard key={`${jersey.name}-${jersey.gender}`} {...jersey} />
          ))}
        </div>

      </div>
    </section>
  )
}
