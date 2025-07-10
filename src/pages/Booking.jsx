import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star,
  Heart
} from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'
import { FaWhatsapp } from 'react-icons/fa'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Consulta de Avaliação Gratuita',
    'Limpeza de Pele Profunda',
    'Peeling Químico',
    'Hidratação Facial',
    'Depilação Laser',
    'Rejuvenescimento Facial',
    'Remoção de Manchas',
    'Drenagem Linfática',
    'Modelagem Corporal',
    'Radiofrequência',
    'Pacote Noiva',
    'Ritual Anti-Idade'
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30'
  ]

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
  }

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de marcar uma consulta na Villa Beauty Clinic.
    
Nome: ${formData.name || 'A preencher'}
Serviço: ${formData.service || 'A definir'}
Data preferida: ${formData.date || 'A definir'}
Hora preferida: ${formData.time || 'A definir'}
    
Obrigada!`
    
    const whatsappUrl = `https://wa.me/351916248032?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Consulta Gratuita',
      description: 'Primeira consulta de avaliação sem custos'
    },
    {
      icon: Star,
      title: 'Profissionais Qualificados',
      description: 'Equipa experiente e certificada'
    },
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      description: 'Tratamento adaptado às suas necessidades'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-yellow-100 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Marcação Enviada com Sucesso!
          </h2>
          <p className="text-gray-600 mb-6">
            Recebemos a sua solicitação de marcação. Entraremos em contacto consigo 
            nas próximas 24 horas para confirmar a sua consulta.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white rounded-full"
          >
            Fazer Nova Marcação
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Marcar Consulta
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Agende a sua consulta de forma rápida e fácil. 
            Estamos aqui para cuidar da sua beleza e bem-estar.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Preencha os Seus Dados
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="O seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="+351 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço Pretendido *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Preferida *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hora Preferida *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      >
                        <option value="">Selecione uma hora</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Conte-nos mais sobre as suas necessidades ou preferências..."
                  />
                </div>

                <div className="space-y-4">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white py-3 rounded-full text-lg"
                  >
                    Enviar Marcação
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="text-center">
                    <p className="text-gray-500 mb-4">ou</p>
                    <Button 
                      type="button"
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-3 rounded-full text-lg"
                    >
                      <FaWhatsapp className="mr-2 h-5 w-5" />
                      Marcar via WhatsApp
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Info */}
            <div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações Importantes
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Horários de Funcionamento</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>Segunda a Sexta: 9h00 - 19h00</li>
                      <li>Sábado: 9h00 - 17h00</li>
                      <li>Domingo: Fechado</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Política de Cancelamento</h4>
                    <p className="text-gray-600">
                      Cancelamentos devem ser feitos com pelo menos 24 horas de antecedência. 
                      Cancelamentos tardios podem estar sujeitos a taxa.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Primeira Consulta</h4>
                    <p className="text-gray-600">
                      A primeira consulta de avaliação é gratuita e inclui análise 
                      personalizada das suas necessidades e recomendações de tratamento.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contactos</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>📞 +351 123 456 789</li>
                      <li>📧 info@villabeauty.pt</li>
                      <li>📍 Rua da Beleza, 123, Lisboa</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src={heroImage} 
                  alt="Villa Beauty Clinic" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as suas dúvidas mais comuns
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'A primeira consulta é realmente gratuita?',
                answer: 'Sim! A primeira consulta de avaliação é completamente gratuita e sem compromisso. Durante esta consulta, analisamos as suas necessidades e recomendamos os melhores tratamentos.'
              },
              {
                question: 'Quanto tempo demora cada tratamento?',
                answer: 'O tempo varia conforme o tratamento. Tratamentos faciais demoram entre 45-90 minutos, enquanto sessões de laser podem durar 30-60 minutos. Informamos sempre a duração estimada na marcação.'
              },
              {
                question: 'Os tratamentos são seguros?',
                answer: 'Absolutamente. Utilizamos apenas equipamentos certificados e seguimos protocolos rigorosos de segurança. A nossa equipa é altamente qualificada e experiente.'
              },
              {
                question: 'Posso remarcar a minha consulta?',
                answer: 'Sim, pode remarcar com pelo menos 24 horas de antecedência. Entre em contacto connosco por telefone ou WhatsApp para reagendar.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking

