import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Otávio Sanchez — Engenheiro de Software Sênior',
  description: 'Engenheiro de Software com 10+ anos de experiência. Criador do Lista do Lar, OctaVerse e NeckChart. Especialista em React, Node.js e AWS.',
  keywords: ['desenvolvedor web', 'engenheiro de software', 'react', 'node.js', 'front-end', 'full stack', 'São Paulo'],
  authors: [{ name: 'Otávio Sanchez' }],
  metadataBase: new URL('https://otaviosanchez.com'),
  openGraph: {
    title: 'Otávio Sanchez — Engenheiro de Software Sênior',
    description: 'Engenheiro de Software com 10+ anos de experiência. Criador do Lista do Lar, OctaVerse e NeckChart.',
    url: 'https://otaviosanchez.com',
    siteName: 'Otávio Sanchez',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otávio Sanchez — Engenheiro de Software Sênior',
    description: 'Engenheiro de Software com 10+ anos de experiência. Criador do Lista do Lar, OctaVerse e NeckChart.',
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
      <body suppressHydrationWarning>
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
