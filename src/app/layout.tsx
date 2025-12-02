import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FCSH - Faculdade de Ciências Sociais e Humanas',
    template: '%s | FCSH',
  },
  description: 'Faculdade de Ciências Sociais e Humanas - Formando profissionais que transformam a sociedade. Cursos de Psicologia, Serviço Social, Sociologia e Comunicação Social.',
  keywords: ['faculdade', 'ciências sociais', 'ciências humanas', 'psicologia', 'serviço social', 'sociologia', 'comunicação social', 'universidade'],
  authors: [{ name: 'FCSH' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'FCSH - Faculdade de Ciências Sociais e Humanas',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
