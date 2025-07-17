import { Metadata } from 'next'
import ServicosClient from './ServicosClient'

export const metadata: Metadata = {
  title: 'Tratamentos Estéticos em Santa Maria da Feira | Villa Beauty Clinic',
  description: 'Descubra os melhores tratamentos estéticos em Santa Maria da Feira: limpeza de pele, depilação a laser, microagulhamento, peeling químico, modelagem corporal, estrias, rejuvenescimento e mais.',
  keywords: [
    'tratamentos estéticos Santa Maria da Feira',
    'estética em Santa Maria da Feira',
    'tratamento de estrias Santa Maria da Feira',
    'depilação a laser Santa Maria da Feira',
    'limpeza de pele Santa Maria da Feira',
    'microagulhamento Santa Maria da Feira',
    'peeling químico Santa Maria da Feira',
    'redução de medidas Santa Maria da Feira',
    'drenagem linfática Santa Maria da Feira',
    'clínica estética',
    'estética e beleza',
    'Santa Maria da Feira',
    'StriaPro',
    'resultados rápidos',
    'profissionais certificados',
    'tecnologia de ponta'
  ],
  openGraph: {
    title: 'Tratamentos Estéticos - Villa Beauty Clinic Santa Maria da Feira',
    description: 'Descubra nossos tratamentos estéticos: faciais, laser, corporais e especiais. Depilação laser, rejuvenescimento, limpeza facial e mais.',
    url: 'https://villabeautyclinic.pages.dev/servicos',
    images: [
      {
        url: '/laser-treatment.jpg',
        width: 1200,
        height: 630,
        alt: 'Tratamentos Estéticos - Villa Beauty Clinic',
      },
    ],
  },
  alternates: {
    canonical: 'https://villabeautyclinic.pages.dev/servicos',
  },
}

export const runtime = 'edge';

export default function Services() {
  return <ServicosClient />
}