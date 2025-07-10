import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Star, Award, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'
import facialTreatment from '../assets/facial-treatment.jpg'
import laserTreatment from '../assets/laser-treatment.jpg'

const Home = () => {
  const stats = [
    { icon: Users, number: '5000+', label: 'Clientes Satisfeitos' },
    { icon: Award, number: '15+', label: 'Anos de Experiência' },
    { icon: Star, number: '4.9', label: 'Avaliação Média' },
    { icon: Clock, number: '24h', label: 'Suporte Disponível' },
  ]

  const services = [
    {
      title: 'Tratamentos Faciais',
      description: 'Rejuvenescimento e cuidados especializados para o rosto',
      image: facialTreatment,
      features: ['Limpeza Profunda', 'Hidratação', 'Anti-idade']
    },
    {
      title: 'Laser Estético',
      description: 'Tecnologia avançada para diversos tratamentos',
      image: laserTreatment,
      features: ['Depilação Laser', 'Rejuvenescimento', 'Remoção de Manchas']
    },
    {
      title: 'Tratamentos Corporais',
      description: 'Cuidados completos para o corpo',
      image: heroImage,
      features: ['Modelagem Corporal', 'Drenagem Linfática', 'Redução de Medidas']
    },
    {
      title: 'Tratamentos Especiais',
      description: 'Protocolos exclusivos e personalizados para necessidades específicas',
      image: heroImage,
      features: ['Peeling Químico', 'Microagulhamento', 'Tratamentos Avançados']
    }
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Excelente atendimento e resultados incríveis! Recomendo a todos.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      text: 'Profissionais muito competentes e ambiente muito acolhedor.',
      rating: 5
    },
    {
      name: 'Sofia Santos',
      text: 'A melhor clínica de estética de Santa Maria da Feira. Resultados fantásticos!',
      rating: 5
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-700">
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sua Beleza,
            <span className="block text-yellow-100 drop-shadow-lg">
              Nossa Paixão
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Descubra tratamentos de estética avançados com tecnologia de ponta 
            e profissionais especializados na Villa Beauty Clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <Link to="/servicos">
                Marcar Consulta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bem-vindos à 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700"> Villa Beauty Clinic</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Somos uma clínica de estética e beleza localizada no coração de Santa Maria da Feira, 
                dedicada a proporcionar tratamentos de qualidade superior com tecnologia 
                de ponta e uma equipa de profissionais altamente qualificados.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Equipamentos de última geração',
                  'Profissionais certificados e experientes',
                  'Ambiente seguro e higiénico',
                  'Tratamentos personalizados',
                  'Acompanhamento pós-tratamento'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                asChild
              className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-3 rounded-full"
              >
                <Link to="/sobre">Saiba Mais Sobre Nós</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Villa Beauty Clinic Interior" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-yellow-700">15+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de tratamentos estéticos com tecnologia avançada 
              e cuidado personalizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white"
                  >
                    <Link to={`/servicos?categoria=${
                      service.title === 'Tratamentos Faciais' ? 'facial' :
                      service.title === 'Laser Estético' ? 'laser' :
                      service.title === 'Tratamentos Corporais' ? 'corporal' :
                      service.title === 'Tratamentos Especiais' ? 'especial' :
                      'facial'
                    }`}>Ver Detalhes</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Testemunhos reais de quem confia na Villa Beauty Clinic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronta para Transformar a Sua Beleza?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Marque já a sua consulta e descubra como podemos ajudá-la a alcançar 
            os seus objetivos de beleza e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-full shadow-lg"
            >
              <Link to="/servicos">
                Marcar Consulta
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

