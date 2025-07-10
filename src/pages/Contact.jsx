import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook,
  Send,
  CheckCircle,
  ArrowRight,
  Car,
  Bus,
  Train
} from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria feita a integração com o backend
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+351 916 248 032', '+351 987 654 321'],
      action: 'tel:+351916248032'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@villabeauty.pt', 'marcacoes@villabeauty.pt'],
      action: 'mailto:info@villabeauty.pt'
    },
    {
      icon: MapPin,
      title: 'Morada',
      details: ['R. Ferreira Castro', '4520-227 Santa Maria da Feira', 'Portugal'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Horários',
      details: ['Seg-Sex: 9h00-19h00', 'Sábado: 9h00-17h00', 'Domingo: Fechado'],
      action: null
    }
  ]

  const transportOptions = [
    {
      icon: Car,
      title: 'De Carro',
      description: 'Estacionamento gratuito disponível na rua e parques próximos'
    },
    {
      icon: Bus,
      title: 'Autocarro',
      description: 'Linhas 15, 28, 37 - Paragem: Rua da Beleza'
    },
    {
      icon: Train,
      title: 'Metro',
      description: 'Estação Marquês de Pombal (Linha Azul/Amarela) - 5 min a pé'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contactos
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Estamos aqui para si. Entre em contacto connosco para esclarecer 
            dúvidas, marcar consultas ou simplesmente para nos conhecer melhor.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                {info.action && (
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white"
                  >
                    <a href={info.action} target="_blank" rel="noopener noreferrer">
                      Contactar
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Como Chegar
              </h2>
              
              {/* Placeholder for map - In a real implementation, you would use Google Maps or similar */}
              <div className="bg-gray-300 h-80 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600">Mapa Interativo</p>
                  <p className="text-sm text-gray-500">R. Ferreira Castro, 4520-227 Santa Maria da Feira</p>
                </div>
              </div>

              {/* Transport Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transportes</h3>
                {transportOptions.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <transport.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{transport.title}</h4>
                      <p className="text-gray-600 text-sm">{transport.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie-nos uma Mensagem
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-green-600">
                    Obrigada pelo seu contacto. Responderemos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="O seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="marcacao">Marcação de Consulta</option>
                      <option value="informacoes">Informações sobre Tratamentos</option>
                      <option value="precos">Preços e Orçamentos</option>
                      <option value="reclamacao">Reclamação</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Escreva aqui a sua mensagem..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white py-3 rounded-full text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-xl text-gray-600">
              Mantenha-se atualizada com as nossas novidades e dicas de beleza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram */}
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#fd5949] via-[#d6249f] to-[#285AEB] rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instagram</h3>
              <p className="text-gray-600 mb-6">
                Veja os nossos trabalhos e transformações diárias
              </p>
              <Button 
                asChild
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Seguir @villabeauty
                </a>
              </Button>
            </div>

            {/* Facebook */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1877f3] to-[#0052cc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Facebook</h3>
              <p className="text-gray-600 mb-6">
                Junte-se à nossa comunidade e participe nas discussões
              </p>
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Curtir Página
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Contacto direto e rápido para marcações e dúvidas
              </p>
              <Button 
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full"
              >
                <a href="https://wa.me/351916248032" target="_blank" rel="noopener noreferrer">
                  Enviar Mensagem
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Precisa de Ajuda Urgente?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Para situações urgentes ou dúvidas de última hora, 
            contacte-nos diretamente por telefone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-full shadow-lg"
            >
              <a href="tel:+351123456789">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-full shadow-lg"
            >
              <a href="https://wa.me/351123456789" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Visite-nos em Santa Maria da Feira
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A nossa clínica está localizada numa zona privilegiada de Santa Maria da Feira, 
                facilmente acessível por transportes públicos e com estacionamento 
                disponível. Venha conhecer as nossas modernas instalações.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Instalações modernas e confortáveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Equipamentos de última geração</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Ambiente seguro e higiénico</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Estacionamento gratuito</span>
                </div>
              </div>

              <Button 
                asChild
                className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-3 rounded-full"
              >
                <a href="/marcacao">
                  Localiação
                </a>
              </Button>
            </div>
            <div>
              <img 
                src={heroImage} 
                alt="Villa Beauty Clinic Exterior" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

