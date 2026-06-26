import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://riderpath.com'),
  title: 'Riderpath - Moda sostenible para motociclistas',
  description: 'Jerseys fabricados con PET reciclado. Moda sostenible para motociclistas viajeros.',
  keywords: ['moda sostenible', 'motociclistas', 'jerseys reciclados', 'PET reciclado', 'México'],
  openGraph: {
    title: 'Riderpath',
    description: 'Jerseys fabricados con PET reciclado. Moda sostenible para motociclistas.',
    url: 'https://riderpath.com',
    siteName: 'Riderpath',
    locale: 'es_MX',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riderpath',
    description: 'Jerseys fabricados con PET reciclado. Moda sostenible para motociclistas.',
    images: ['/images/og-image.jpg'],
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