"use client";

import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Award,
  Users,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Sparkles
} from 'lucide-react';

interface Review {
  name: string;
  text: string;
  rating: number;
  relative_time?: string;
  profile_photo?: string;
}

interface PlaceInfo {
  name: string;
  rating: number;
  total_ratings: number;
}

function AboutContent() {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [placeInfo, setPlaceInfo] = useState<PlaceInfo>({
    name: 'Villa Beauty Clinic',
    rating: 4.9,
    total_ratings: 0
  });
  const [loading, setLoading] = useState(true);

  // Função para buscar avaliações do Google Maps
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/google-reviews');
        const data = await response.json();

        if (data.success || data.fallback) {
          setTestimonials(data.reviews);
          setPlaceInfo(data.place_info);
        }
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
        // Fallback mínimo em caso de erro total
        setTestimonials([
          {
            name: 'Villa Beauty Clinic',
            text: 'Configure a Google Places API para ver avaliações reais dos nossos clientes.',
            rating: 5,
            relative_time: 'API não configurada'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Cuidado Personalizado',
      description: 'Cada cliente é único e merece um tratamento personalizado às suas necessidades específicas.'
    },
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Mantemos os mais altos padrões de qualidade em todos os nossos serviços e tratamentos.'
    },
    {
      icon: Shield,
      title: 'Segurança e Confiança',
      description: 'Utilizamos apenas equipamentos certificados e seguimos protocolos rigorosos de segurança.'
    },
    {
      icon: Sparkles,
      title: 'Inovação Constante',
      description: 'Investimos continuamente em tecnologia de ponta para oferecer os melhores resultados.'
    }
  ];

  const team = [
    {
      name: 'Dra. Sofia Mendes',
      role: 'Diretora Clínica',
      specialization: 'Medicina Estética',
      experience: '15 anos',
      description: 'Especialista em medicina estética com formação internacional e vasta experiência em tratamentos faciais e corporais.',
      image: '/facial-treatment.jpg'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Esteticista Sénior',
      specialization: 'Tratamentos Faciais',
      experience: '10 anos',
      description: 'Especializada em cuidados faciais e tratamentos de rejuvenescimento, com certificações em várias técnicas avançadas.',
      image: '/laser-treatment.jpg'
    },
    {
      name: 'Adriana Sousa',
      role: 'Técnica de Laser',
      specialization: 'Laser Estético',
      experience: '8 anos',
      description: 'Especialista em tratamentos a laser com formação certificada em equipamentos de última geração.',
      image: '/hero-image.jpg'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Fundação da Villa Beauty Clinic' },
    { year: '2012', event: 'Expansão das instalações e novos equipamentos' },
    { year: '2015', event: 'Introdução de tecnologia laser avançada' },
    { year: '2018', event: 'Certificação ISO de qualidade' },
    { year: '2020', event: 'Implementação de protocolos de segurança COVID-19' },
    { year: '2024', event: 'Mais de 5000 clientes satisfeitos' }
  ];

  const stats = [
    { number: '5000+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '50+', label: 'Tratamentos Diferentes', icon: Sparkles },
    { number: '98%', label: 'Taxa de Satisfação', icon: Star }
  ];

  return (
    <>
      {/* Schema.org structured data for about page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sobre Villa Beauty Clinic",
            "description": "Conheça a Villa Beauty Clinic em Santa Maria da Feira. 15+ anos de experiência em estética e beleza.",
            "url": "https://villabeautyclinic.pages.dev/sobre",
            "mainEntity": {
              "@type": "BeautySalon",
              "name": "Villa Beauty Clinic",
              "description": "Clínica de estética e beleza em Santa Maria da Feira",
              "url": "https://villabeautyclinic.pages.dev",
              "foundingDate": "2009",
              "numberOfEmployees": "10",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5000"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Dra. Sofia Mendes",
                  "jobTitle": "Diretora Clínica",
                  "description": "Especialista em medicina estética com 15 anos de experiência"
                },
                {
                  "@type": "Person",
                  "name": "Ana Rodrigues",
                  "jobTitle": "Esteticista Sénior",
                  "description": "Especializada em tratamentos faciais com 10 anos de experiência"
                },
                {
                  "@type": "Person",
                  "name": "Adriana Sousa",
                  "jobTitle": "Técnica de Laser",
                  "description": "Especialista em tratamentos a laser com 8 anos de experiência"
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-yellow-400 to-yellow-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-white mb-6">
                  Sobre a Villa Beauty Clinic
                </h1>
                <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                  Há mais de 15 anos dedicados à beleza e bem-estar em Santa Maria da Feira, oferecendo
                  tratamentos de excelência com tecnologia de ponta e uma equipa
                  de profissionais altamente qualificados.
                </p>
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl shadow-mobile-enhanced hover:shadow-mobile-enhanced transition-all duration-300"
                >
                  <Link href="/servicos">
                    Marcar Consulta
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/hero-image.jpg"
                  alt="Villa Beauty Clinic - Clínica de Estética em Santa Maria da Feira"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <article className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar tratamentos de estética e beleza de excelência,
                  utilizando tecnologia avançada e cuidado personalizado para
                  realçar a beleza natural de cada cliente, promovendo autoestima
                  e bem-estar em Santa Maria da Feira.
                </p>
              </article>

              <article className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconhecida como a clínica de estética de referência em Santa Maria da Feira,
                  destacando-nos pela inovação, qualidade dos serviços e satisfação
                  dos nossos clientes, contribuindo para o seu bem-estar e confiança.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Os princípios que guiam o nosso trabalho e definem a nossa identidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nossa Equipa
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Profissionais altamente qualificados e experientes dedicados à sua beleza
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} Villa Beauty Clinic`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.specialization} • {member.experience}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nossa História
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Uma jornada de crescimento e excelência ao longo de mais de 15 anos
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-200 h-full"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 px-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                O Que Dizem os Nossos Clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A satisfação dos nossos clientes é a nossa maior recompensa
              </p>
            </div>

            {loading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">A carregar avaliações...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.slice(0, 6).map((testimonial, index) => (
                  <article key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        {testimonial.relative_time && (
                          <p className="text-sm text-gray-500">{testimonial.relative_time}</p>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Link href="/servicos">
                  Marcar Consulta
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default function SobreClient() {
  return <Suspense fallback={<div>Carregando...</div>}><AboutContent /></Suspense>;
} 