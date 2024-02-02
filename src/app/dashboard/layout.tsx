import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Painel Dashboard - Aprendendo Next JS',
  description: 'Deashboard Next',
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph: {
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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h3>Header do Dashboard</h3>
      <br />
      {children}
    </div>
  )
}
