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
  return <SobreClient />
}