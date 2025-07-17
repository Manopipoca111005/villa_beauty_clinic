import { Metadata } from 'next'
import SobreClient from './SobreClient'

export const metadata: Metadata = {
  title: 'Sobre Nós - Villa Beauty Clinic Santa Maria da Feira',
  description: 'Conheça a Villa Beauty Clinic em Santa Maria da Feira. 15+ anos de experiência em estética e beleza. Equipa qualificada, tecnologia avançada e mais de 5000 clientes satisfeitos.',
  keywords: [
    'sobre Villa Beauty Clinic',
    'história clínica estética',
    'equipa estética Santa Maria da Feira',
    'profissionais estética',
    'Dra. Sofia Mendes',
    'medicina estética',
    'clínica estética experiência',
    'certificação estética',
    'tecnologia estética'
  ],
  openGraph: {
    title: 'Sobre Nós - Villa Beauty Clinic Santa Maria da Feira',
    description: 'Conheça a Villa Beauty Clinic em Santa Maria da Feira. 15+ anos de experiência em estética e beleza.',
    url: 'https://villabeautyclinic.pages.dev/sobre',
    images: [
      {
        url: '/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sobre Villa Beauty Clinic - Clínica de Estética',
      },
    ],
  },
  alternates: {
    canonical: 'https://villabeautyclinic.pages.dev/sobre',
  },
}

export const runtime = 'edge';

export default function About() {
  return (
    <>
      {/* Adicionar banner SEO no início da página */}
      <section className="py-4 bg-yellow-50 text-center">
        <p className="text-lg text-yellow-700 font-semibold">
          Clínica de estética referência em Santa Maria da Feira. Livre-se das estrias de forma rápida e confortável com o StriaPro. Resultados em apenas 15 dias!<br/>
          Profissionais certificados, tecnologia de ponta e resultados reais em tratamentos faciais, corporais e depilação a laser.
        </p>
      </section>
      <SobreClient />
    </>
  )
}