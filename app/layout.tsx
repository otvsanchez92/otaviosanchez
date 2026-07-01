import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Otávio Sanchez',
  description: 'Otávio Sanchez desenvolvedor desde de 2013 trabalhando em projetos de todos os portes',
  keywords: ['front-end', 'desenvolvedor web', 'desenvolvedor full-stack', 'desenvolvedor front-end'],
  authors: [{ name: 'Otávio Sanchez' }],
  openGraph: {
    title: 'Resume – Otávio Sanchez Desenvolvedor Web',
    description: 'Otávio Sanchez desenvolvedor desde de 2013 trabalhando em projetos de todos os portes',
    url: 'https://otaviosanchez.com',
    images: [{ url: 'https://otaviosanchez.com/images/foto-otavio.png' }],
    siteName: 'Otávio Sanchez Desenvolvedor Web',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </body>
    </html>
  )
}
