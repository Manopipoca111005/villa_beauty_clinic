'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '../../src/components/ui/button'
import Link from 'next/link'
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
} from 'lucide-react'

function ServicesContent() {
  const searchParams = useSearchParams()
  
  // Função para extrair o parâmetro da URL
  function getCategoriaFromQuery() {
    const categoria = searchParams.get('categoria');
    if (!categoria) return 'facial';
    // Normaliza possíveis valores
    if (categoria.includes('facial')) return 'facial';
    if (categoria.includes('laser')) return 'laser';
    if (categoria.includes('corporal')) return 'corporal';
    if (categoria.includes('especial')) return 'especiais';
    return 'facial';
  }

  const [activeCategory, setActiveCategory] = useState('facial');

  // Atualiza categoria ao montar o componente
  useEffect(() => {
    setActiveCategory(getCategoriaFromQuery());
  }, [searchParams]);

  const categories = [
    { id: 'facial', name: 'Tratamentos Faciais', icon: Sparkles },
    { id: 'laser', name: 'Laser Estético', icon: Zap },
    { id: 'corporal', name: 'Tratamentos Corporais', icon: Heart },
    { id: 'especiais', name: 'Tratamentos Especiais', icon: Award }
  ]

  const services = {
    facial: [],
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
    corporal: [],
    especiais: []
  }

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
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Descubra nossa ampla gama de tratamentos estéticos com tecnologia de ponta 
            e cuidado personalizado para realçar a sua beleza natural.
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
                onClick={() => setActiveCategory(category.id)}
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
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={service.image} 
                  alt={service.name}
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
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white rounded-full mt-auto flex items-center justify-center py-3 font-semibold transition-colors duration-200"
                    style={{ minWidth: '120px' }}
                  >
                    Marcar Consulta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Porque Escolher a Villa Beauty Clinic?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos experiência, tecnologia e cuidado personalizado para 
              oferecer os melhores resultados.
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
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
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
            Marque uma consulta gratuita e descubra qual o melhor tratamento para si.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buk.pt/villa-beauty"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
              className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-full shadow-lg inline-flex items-center justify-center font-semibold transition-colors duration-200"
              style={{ minWidth: '200px' }}
            >
              Marcar Consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Services() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ServicesContent />
    </Suspense>
  )
}
