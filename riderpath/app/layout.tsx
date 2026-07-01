import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://riderpath.com'),
  title: 'Riderpath® — Motociclistas con autenticidad',
  description: 'La marca mexicana que conecta a motociclistas con autenticidad. Indumentaria exclusiva, comunidad y propósito.',
  keywords: ['motociclistas', 'comunidad motociclista', 'indumentaria exclusiva', 'moda sostenible', 'accesorios de piel', 'México'],
  openGraph: {
    title: 'Riderpath® — Motociclistas con autenticidad',
    description: 'La marca mexicana que conecta a motociclistas con autenticidad. Indumentaria exclusiva, comunidad y propósito.',
    url: 'https://riderpath.com',
    siteName: 'Riderpath',
    locale: 'es_MX',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riderpath® — Motociclistas con autenticidad',
    description: 'La marca mexicana que conecta a motociclistas con autenticidad. Indumentaria exclusiva, comunidad y propósito.',
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