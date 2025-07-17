"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Zap, 
  Heart, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

// Tipos e funções auxiliares

type CategoryId = 'facial' | 'laser' | 'corporal' | 'especiais';
function getCategoriaFromQuery(searchParams: ReturnType<typeof useSearchParams>): CategoryId {
  if (!searchParams) return 'facial';
  const categoria = searchParams.get('categoria');
  if (!categoria) return 'facial';
  if (categoria.includes('facial')) return 'facial';
  if (categoria.includes('laser')) return 'laser';
  if (categoria.includes('corporal')) return 'corporal';
  if (categoria.includes('especial')) return 'especiais';
  return 'facial';
}

export default function ServicosClient() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('facial');

  useEffect(() => {
    setActiveCategory(getCategoriaFromQuery(searchParams));
  }, [searchParams]);

  const categories = [
    { id: 'facial', name: 'Tratamentos Faciais', icon: Sparkles },
    { id: 'laser', name: 'Laser Estético', icon: Zap },
    { id: 'corporal', name: 'Tratamentos Corporais', icon: Heart },
    { id: 'especiais', name: 'Tratamentos Especiais', icon: Award }
  ];

  const services = {
    facial: [
      {
        name: 'Limpeza Facial Profunda',
        description: 'Limpeza profunda e hidratação para todos os tipos de pele.',
        price: '35 €',
        image: '/facial-treatment.jpg'
      },
      {
        name: 'Tratamento Anti-idade',
        description: 'Rejuvenescimento facial com produtos de alta qualidade.',
        price: '45 €',
        image: '/facial-treatment.jpg'
      },
      {
        name: 'Hidratação Intensiva',
        description: 'Hidratação profunda para pele seca e desidratada.',
        price: '30 €',
        image: '/facial-treatment.jpg'
      }
    ],
    laser: [
      {
        name: 'Laser Corpo Inteiro Homem',
        description: 'Depilação a laser para todas as áreas do corpo, adaptado para homens.',
        price: '55 €',
        image: '/laser-treatment.jpg'
      },
      {
        name: 'Laser Corpo Inteiro Senhora',
        description: 'Depilação a laser para todas as áreas do corpo, para mulheres.',
        price: '50 €',
        image: '/laser-treatment.jpg'
      },
      {
        name: 'Laser 2 zonas',
        description: 'Escolha duas zonas do corpo para depilação a laser.',
        price: '35 €',
        image: '/laser-treatment.jpg'
      },
      {
        name: 'Laser 1 zona',
        description: 'Depilação a laser para uma zona específica do corpo.',
        price: '20 €',
        image: '/laser-treatment.jpg'
      },
      {
        name: 'Laser zona pequena',
        description: 'Buço, queixo ou linha da barba.',
        price: '10 €',
        image: '/laser-treatment.jpg'
      }
    ],
    corporal: [
      {
        name: 'Modelagem Corporal',
        description: 'Tratamento para redução de medidas e modelagem do corpo.',
        price: '40 €',
        image: '/hero-image.jpg'
      },
      {
        name: 'Drenagem Linfática',
        description: 'Massagem para eliminação de toxinas e redução de inchaço.',
        price: '35 €',
        image: '/hero-image.jpg'
      },
      {
        name: 'Redução de Medidas',
        description: 'Tratamento específico para redução de gordura localizada.',
        price: '45 €',
        image: '/hero-image.jpg'
      }
    ],
    especiais: [
      {
        name: 'Peeling Químico',
        description: 'Renovação celular e tratamento de manchas e acne.',
        price: '60 €',
        image: '/hero-image.jpg'
      },
      {
        name: 'Microagulhamento',
        description: 'Tratamento para cicatrizes, rugas e rejuvenescimento.',
        price: '70 €',
        image: '/hero-image.jpg'
      },
      {
        name: 'Tratamento Avançado',
        description: 'Protocolos personalizados para necessidades específicas.',
        price: '80 €',
        image: '/hero-image.jpg'
      },
      {
        name: 'Tratamento de Estrias (StriaPro)',
        description: 'Livre-se das estrias de forma rápida e confortável com o método StriaPro! O tratamento de estrias mais rápido e confortável do mercado, com resultados visíveis em apenas 15 dias. Técnica personalizada para cada tipo de estria, adaptada à largura e profundidade, garantindo máxima eficácia e conforto. Compatível com todos os fototipos de pele e até durante a amamentação.',
        price: 'Sob consulta',
        image: '/imagens/WhatsApp Image 2025-07-15 at 01.00.39.jpeg'
      }
    ]
  };

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Equipamentos certificados e protocolos rigorosos de higiene'
    },
    {
      icon: Award,
      title: 'Profissionais Qualificados',
      description: 'Equipa com formação especializada e experiência comprovada'
    },
    {
      icon: Clock,
      title: 'Resultados Rápidos',
      description: 'Tratamentos eficazes com resultados visíveis desde a primeira sessão'
    },
    {
      icon: Star,
      title: 'Atendimento Personalizado',
      description: 'Cada tratamento é adaptado às suas necessidades específicas'
    }
  ];

  return (
    <>
      {/* Schema.org structured data for services page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Tratamentos Estéticos - Villa Beauty Clinic",
            "description": "Descubra nossos tratamentos estéticos: faciais, laser, corporais e especiais em Santa Maria da Feira",
            "url": "https://villabeautyclinic.pages.dev/servicos",
            "mainEntity": {
              "@type": "OfferCatalog",
              "name": "Tratamentos Estéticos",
              "description": "Catálogo de tratamentos estéticos da Villa Beauty Clinic",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Limpeza Facial Profunda",
                    "description": "Limpeza profunda e hidratação para todos os tipos de pele",
                    "provider": {
                      "@type": "BeautySalon",
                      "name": "Villa Beauty Clinic"
                    }
                  },
                  "price": "35",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Depilação Laser",
                    "description": "Depilação a laser para todas as áreas do corpo",
                    "provider": {
                      "@type": "BeautySalon",
                      "name": "Villa Beauty Clinic"
                    }
                  },
                  "price": "50",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tratamento de Estrias (StriaPro)",
                    "description": "Livre-se das estrias de forma rápida e confortável com o método StriaPro! O tratamento de estrias mais rápido e confortável do mercado, com resultados visíveis em apenas 15 dias. Técnica personalizada para cada tipo de estria, adaptada à largura e profundidade, garantindo máxima eficácia e conforto. Compatível com todos os fototipos de pele e até durante a amamentação.",
                    "provider": {
                      "@type": "BeautySalon",
                      "name": "Villa Beauty Clinic"
                    }
                  },
                  "price": "Sob consulta",
                  "priceCurrency": "EUR"
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Nossos Tratamentos Estéticos
            </h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Descubra nossa ampla gama de tratamentos estéticos com tecnologia de ponta 
              e cuidado personalizado para realçar a sua beleza natural em Santa Maria da Feira.
            </p>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as CategoryId)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-700'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services[activeCategory]?.map((service, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Image 
                    src={service.image} 
                    alt={`${service.name} - Villa Beauty Clinic Santa Maria da Feira`}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                    
                    <div className="flex justify-end items-center mb-4">
                      <div className="text-lg font-bold text-yellow-700">{service.price}</div>
                    </div>

                    <a
                      href="https://buk.pt/villa-beauty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 text-center"
                      style={{ minWidth: '120px' }}
                    >
                      Marcar Consulta
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Porque Escolher a Villa Beauty Clinic?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Combinamos experiência, tecnologia e cuidado personalizado para 
                oferecer os melhores resultados em Santa Maria da Feira.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Como Funciona
              </h2>
              <p className="text-xl text-gray-600">
                Um processo simples e personalizado para os melhores resultados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consulta Inicial', description: 'Avaliação personalizada das suas necessidades' },
                { step: '02', title: 'Plano de Tratamento', description: 'Criamos um protocolo específico para si' },
                { step: '03', title: 'Tratamento', description: 'Aplicação dos procedimentos com tecnologia avançada' },
                { step: '04', title: 'Acompanhamento', description: 'Seguimento dos resultados e cuidados pós-tratamento' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronta para Começar a Sua Transformação?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Marque uma consulta gratuita e descubra qual o melhor tratamento para si em Santa Maria da Feira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="default"
                size="lg"
                className="bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <a href="https://buk.pt/villa-beauty" target="_blank" rel="noopener noreferrer">
                  Marcar Consulta
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 