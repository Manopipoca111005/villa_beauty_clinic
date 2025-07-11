import './globals.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import WhatsAppButton from '../src/components/WhatsAppButton'

export const metadata = {
  title: 'Villa Beauty Clinic',
  description: 'Clínica de estética com tratamentos de alta qualidade',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
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
