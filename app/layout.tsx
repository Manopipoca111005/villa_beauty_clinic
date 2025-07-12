import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Villa Beauty Clinic',
  description: 'Clínica de estética com tratamentos de alta qualidade',
}


import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preload" href="/logo.png" as="image" />
      </head>
      <body>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Navbar />
          <main className="w-full">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </body>
    </html>
  )
}