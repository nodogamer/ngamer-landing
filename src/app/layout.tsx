import type { Metadata } from 'next'
import { Exo_2, Rajdhani } from 'next/font/google'
import './globals.css'

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-heading',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'NodoGamer — Hosting de Servidores en Argentina',
  description:
    'Hosting de servidores de juegos con infraestructura física propia en CABA. Latencia real local, 1 Gbps simétrico y soporte humano por WhatsApp.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${exo2.variable} ${rajdhani.variable}`}>
      <body>{children}</body>
    </html>
  )
}
