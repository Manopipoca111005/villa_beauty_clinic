import { Metadata } from 'next'
import ContactosClient from './ContactosClient'

export const metadata: Metadata = {
  title: 'Contactos - Villa Beauty Clinic Santa Maria da Feira',
  description: 'Entre em contacto com a Villa Beauty Clinic em Santa Maria da Feira. Marque sua consulta, tire dúvidas ou agende um tratamento estético. Estamos aqui para si!',
  keywords: [
    'contactos Villa Beauty Clinic',
    'marcar consulta Santa Maria da Feira',
    'agendamento estética',
    'telefone clínica estética',
    'endereço Villa Beauty Clinic',
    'horário funcionamento',
    'consulta gratuita estética'
  ],
  openGraph: {
    title: 'Contactos - Villa Beauty Clinic Santa Maria da Feira',
    description: 'Entre em contacto com a Villa Beauty Clinic em Santa Maria da Feira. Marque sua consulta ou tire dúvidas.',
    url: 'https://villabeautyclinic.pages.dev/contactos',
    images: [
      {
        url: '/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contactos Villa Beauty Clinic - Santa Maria da Feira',
      },
    ],
  },
  alternates: {
    canonical: 'https://villabeautyclinic.pages.dev/contactos',
  },
}

export const runtime = 'edge';

export default function Contactos() {
  return <ContactosClient />
}