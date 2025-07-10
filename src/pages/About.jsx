import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
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
} from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'
import facialTreatment from '../assets/facial-treatment.jpg'
import laserTreatment from '../assets/laser-treatment.jpg'

const About = () => {
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
  ]

  const team = [
    {
      name: 'Dra. Sofia Mendes',
      role: 'Diretora Clínica',
      specialization: 'Medicina Estética',
      experience: '15 anos',
      description: 'Especialista em medicina estética com formação internacional e vasta experiência em tratamentos faciais e corporais.',
      image: facialTreatment
    },
    {
      name: 'Ana Rodrigues',
      role: 'Esteticista Sénior',
      specialization: 'Tratamentos Faciais',
      experience: '10 anos',
      description: 'Especializada em cuidados faciais e tratamentos de rejuvenescimento, com certificações em várias técnicas avançadas.',
      image: laserTreatment
    },
    {
      name: 'Carla Santos',
      role: 'Técnica de Laser',
      specialization: 'Laser Estético',
      experience: '8 anos',
      description: 'Especialista em tratamentos a laser com formação certificada em equipamentos de última geração.',
      image: heroImage
    }
  ]

  const milestones = [
    { year: '2009', event: 'Fundação da Villa Beauty Clinic' },
    { year: '2012', event: 'Expansão das instalações e novos equipamentos' },
    { year: '2015', event: 'Introdução de tecnologia laser avançada' },
    { year: '2018', event: 'Certificação ISO de qualidade' },
    { year: '2020', event: 'Implementação de protocolos de segurança COVID-19' },
    { year: '2024', event: 'Mais de 5000 clientes satisfeitos' }
  ]

  const stats = [
    { number: '5000+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '50+', label: 'Tratamentos Diferentes', icon: Sparkles },
    { number: '98%', label: 'Taxa de Satisfação', icon: Star }
  ]

  return (
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
                Há mais de 15 anos dedicados à beleza e bem-estar, oferecendo
                tratamentos de excelência com tecnologia de ponta e uma equipa
                de profissionais altamente qualificados.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-full shadow-lg"
              >
                <Link to="/marcacao">
                  Marcar Consulta
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Villa Beauty Clinic"
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
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar tratamentos de estética e beleza de excelência,
                utilizando tecnologia avançada e cuidado personalizado para
                realçar a beleza natural de cada cliente, promovendo autoestima
                e bem-estar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a clínica de estética de referência em Santa Maria da Feira,
                destacando-nos pela inovação, qualidade dos serviços e satisfação
                dos nossos clientes, contribuindo para o seu bem-estar e confiança.
              </p>
            </div>
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

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais qualificados e experientes dedicados ao seu bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-700 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{member.specialization}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa História
            </h2>
            <p className="text-xl text-gray-600">
              Uma jornada de crescimento e inovação ao longo dos anos
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl">
                  <p className="text-gray-800 font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certificações e Qualidade
            </h2>
            <p className="text-xl text-gray-600">
              Comprometidos com os mais altos padrões de qualidade e segurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Certificação ISO 9001:2015',
              'Licença da Direção-Geral da Saúde',
              'Certificação CE dos equipamentos',
              'Formação contínua da equipa',
              'Protocolos de higiene e segurança',
              'Seguros de responsabilidade civil'
            ].map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="h-6 w-6 text-yellow-700" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Venha Conhecer-nos Pessoalmente
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Marque uma visita às nossas instalações e conheça a nossa equipa.
            Será um prazer recebê-la e mostrar-lhe tudo o que podemos fazer por si.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg"
            >
              <Link to="/marcacao">
                Localização
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

