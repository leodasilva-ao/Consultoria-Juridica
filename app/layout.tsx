import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Consultória de Jurídica',
  description: 'Consultoria Jurídica é um serviço especializado que oferece orientação legal personalizada a pessoas físicas ou instituições, auxiliando na tomada de decisões seguras, elaboração de documentos legais e prevenção de riscos jurídicos em diversas áreas do Direito.',
  generator: '@leodasilva.ao',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
