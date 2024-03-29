import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Meu site - Aprendendo Next JS',
  description: 'Generated by create next app',
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph: {
    title: 'Imagem sujeito',
    images: [
      'https://sujeito-dev.vercel.app/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsujeitodev%2F52fed522-a3d2-436f-8de7-4342835fc4c2_linkedin.png%3Fauto%3Dcompress%2Cformat&w=750&q=100',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
