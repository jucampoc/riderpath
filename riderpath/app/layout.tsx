import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Riderpath — El mapa vivo de los motociclistas viajeros',
  description: 'Crea, difunde y colecciona tus rodadas. El primer sistema tecnológico para motociclistas viajeros.',
  keywords: ['motociclistas', 'rodadas', 'viajes en moto', 'comunidad biker', 'México'],
  openGraph: {
    title: 'Riderpath',
    description: 'Crea, difunde y colecciona tus rodadas.',
    url: 'https://riderpath.com',
    siteName: 'Riderpath',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}