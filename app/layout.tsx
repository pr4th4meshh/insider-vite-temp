import './globals.css'
const Navbar = dynamic(() => import('./components/Navbar'))
const FooterHero = dynamic(() => import('./components/FooterHero'))
const Footer = dynamic(() => import('./components/Footer'))
import { Providers } from '@/provider'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export const metadata = {
  title: 'Insider_App',
  description: 'One place to book tickets for events and shows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <Navbar /> */}
          {children}
          {/* <FooterHero />
          <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
