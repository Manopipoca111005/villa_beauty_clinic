import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Analytics from './analytics'
import { ReactNode } from 'react';

export const metadata = {
  metadataBase: new URL('https://villabeautyclinic.pages.dev'),
  title: {
    default: 'Clínica de Estética em Santa Maria da Feira | Villa Beauty Clinic',
    template: '%s | Villa Beauty Clinic'
  },
  description: 'Clínica de estética em Santa Maria da Feira com tratamentos faciais, corporais, depilação a laser, estrias, rejuvenescimento, redução de medidas, drenagem linfática, microagulhamento, peeling químico e mais. Resultados rápidos e conforto máximo. Marque já a sua avaliação!',
  keywords: [
    'clínica estética',
    'estética em Santa Maria da Feira',
    'tratamento de estrias Santa Maria da Feira',
    'depilação a laser Santa Maria da Feira',
    'limpeza de pele Santa Maria da Feira',
    'microagulhamento Santa Maria da Feira',
    'peeling químico Santa Maria da Feira',
    'redução de medidas Santa Maria da Feira',
    'drenagem linfática Santa Maria da Feira',
    'tratamentos faciais',
    'tratamentos corporais',
    'rejuvenescimento facial',
    'modelagem corporal',
    'clínica de beleza',
    'Santa Maria da Feira',
    'StriaPro',
    'estrias método rápido',
    'estrias confortável',
    'estrias resultados rápidos',
    'profissionais certificados',
    'tecnologia de ponta',
    'resultados reais',
    'beleza e bem-estar'
  ],
  authors: [{ name: 'Villa Beauty Clinic' }],
  creator: 'Villa Beauty Clinic',
  publisher: 'Villa Beauty Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://villabeautyclinic.pages.dev',
    siteName: 'Villa Beauty Clinic',
    title: 'Clínica de Estética em Santa Maria da Feira | Villa Beauty Clinic',
    description: 'Clínica de estética em Santa Maria da Feira com tratamentos faciais, corporais, depilação a laser, estrias, rejuvenescimento, redução de medidas, drenagem linfática, microagulhamento, peeling químico e mais. Resultados rápidos e conforto máximo. Marque já a sua avaliação!',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Villa Beauty Clinic - Clínica de Estética',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica de Estética em Santa Maria da Feira | Villa Beauty Clinic',
    description: 'Clínica de estética em Santa Maria da Feira com tratamentos faciais, corporais, depilação a laser, estrias, rejuvenescimento, redução de medidas, drenagem linfática, microagulhamento, peeling químico e mais. Resultados rápidos e conforto máximo. Marque já a sua avaliação!',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-google-verification',
  },
  alternates: {
    canonical: 'https://villabeautyclinic.pages.dev',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="geo.region" content="PT" />
        <meta name="geo.placename" content="Santa Maria da Feira" />
        <meta name="geo.position" content="40.9333;-8.5333" />
        <meta name="ICBM" content="40.9333, -8.5333" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Villa Beauty Clinic",
              "description": "Clínica de estética e beleza em Santa Maria da Feira",
                             "url": "https://villabeautyclinic.pages.dev",
              "telephone": "+351-XXX-XXX-XXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Principal",
                "addressLocality": "Santa Maria da Feira",
                "postalCode": "4520",
                "addressCountry": "PT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.9333,
                "longitude": -8.5333
              },
              "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
              "priceRange": "€€",
                             "image": "https://villabeautyclinic.pages.dev/logo.png",
              "sameAs": [
                "https://www.facebook.com/villabeautyclinic",
                "https://www.instagram.com/villabeautyclinic"
              ]
            })
          }}
        />
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
        <Analytics />
      </body>
    </html>
  )
}