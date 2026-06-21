import { BenefitsHero }       from '@/components/sections/BenefitsHero'
import { BenefitDetail }      from '@/components/sections/BenefitDetail'
import { BenefitsComparison } from '@/components/sections/BenefitsComparison'
import { BenefitsCta }        from '@/components/sections/BenefitsCta'

export default function BenefitsPage() {
  return (
    <div style={{ paddingTop: 'var(--header-h)', overflowX: 'hidden' }}>

      <BenefitsHero />

      <BenefitDetail
        number="01"
        title="PLANEA TUS RODADAS"
        description="Organiza tus viajes de forma sencilla y profesional. Define rutas, paradas y duración sin complicaciones."
        imageSrc="/images/placeholder.jpg"
        imagePosition="right"
        background="var(--surface-base)"
      />

      <BenefitDetail
        number="02"
        title="DIFUNDE TUS EVENTOS"
        description="Comparte toda la información de tu rodada desde un único enlace. Invita a tu club o a toda la comunidad sin esfuerzo."
        imageSrc="/images/placeholder.jpg"
        imagePosition="left"
        background="var(--surface-raised)"
      />

      <BenefitDetail
        number="03"
        title="CONSERVA TUS EXPERIENCIAS"
        description="Guarda y organiza tus aventuras en motocicleta. Cada ruta completada se convierte en una historia que puedes revisitar."
        imageSrc="/images/placeholder.jpg"
        imagePosition="right"
        background="var(--surface-base)"
      />

      <BenefitDetail
        number="04"
        title="CUIDA TU MOTOCICLETA"
        description="Lleva el control de mantenimientos, servicios y reparaciones. Tu compañera de viaje siempre lista para la siguiente aventura."
        imageSrc="/images/placeholder.jpg"
        imagePosition="left"
        background="var(--surface-raised)"
      />

      <BenefitDetail
        number="05"
        title="FORMA PARTE DE UNA COMUNIDAD"
        description="Conecta con motociclistas viajeros y descubre nuevas rutas y experiencias compartidas por la comunidad biker."
        imageSrc="/images/placeholder.jpg"
        imagePosition="right"
        background="var(--surface-base)"
      />

      <BenefitsComparison />

      <BenefitsCta />

    </div>
  )
}
