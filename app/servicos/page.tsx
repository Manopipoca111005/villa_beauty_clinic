import { Metadata } from 'next'
import ServicosClient from './ServicosClient'

export const metadata: Metadata = {
  title: 'Tratamentos Estéticos - Villa Beauty Clinic Santa Maria da Feira',
  description: 'Descubra nossos tratamentos estéticos: faciais, laser, corporais e especiais. Depilação laser, rejuvenescimento, limpeza facial e mais. Marque sua consulta em Santa Maria da Feira.',
  keywords: [
    'tratamentos estéticos Santa Maria da Feira',
    'depilação laser',
    'tratamentos faciais',
    'rejuvenescimento',
    'limpeza facial',
    'modelagem corporal',
    'peeling químico',
    'microagulhamento',
    'drenagem linfática',
    'clínica estética',
    'estética e beleza'
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