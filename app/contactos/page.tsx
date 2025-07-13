'use client'
export const runtime = 'edge';
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Construir a mensagem para WhatsApp
    const message = `*Nome:* ${formData.name}
*Assunto:* ${formData.subject}
*Mensagem:* ${formData.message}`

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Número de WhatsApp (mesmo número usado nos outros botões)
    const whatsappNumber = '351916248032'
    
    // Criar URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank')
    
    // Mostrar confirmação e limpar formulário
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+351 916 248 032', '+351 916 248 032'],
      action: 'tel:+351912248032'
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
      action: 'https://www.google.com/maps/dir/?api=1&destination=R.%20Ferreira%20Castro,%204520-227%20Santa%20Maria%20da%20Feira,%20Portugal'
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
      description: 'A1 (Saída 24) ou A41 - Estacionamento gratuito disponível',
      time: '2-5 min',
      details: 'Do acesso rodoviário até à clínica'
    },
    {
      icon: Train,
      title: 'Comboio CP',
      description: 'Estação C.P. Vila da Feira - Linha do Norte',
      time: '8 min a pé',
      details: 'Da estação CP até à R. Ferreira Castro'
    },
    {
      icon: Bus,
      title: 'Autocarro UNIR',
      description: 'Linhas 20XX/21XX - Paragem Centro da Cidade',
      time: '6 min a pé',
      details: 'Da paragem central até à clínica'
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
                      {info.title === 'Morada' ? 'Direções' : 'Contactar'}
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
              
              {/* Google Maps Embed */}
              <div className="h-80 rounded-2xl overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-8.5492!3d40.9267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2347c8b9b5e5a7%3A0x5a7b8c9d0e1f2a3b!2sR.%20Ferreira%20Castro%2C%204520-227%20Santa%20Maria%20da%20Feira%2C%20Portugal!5e0!3m2!1spt!2spt!4v1647123456789!5m2!1spt!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Villa Beauty - R. Ferreira Castro, Santa Maria da Feira"
                />
              </div>

              {/* Transport Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Como Chegar</h3>
                {transportOptions.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <transport.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 text-lg">{transport.title}</h4>
                        <span className="text-sm font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
                          {transport.time}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-1 font-medium">{transport.description}</p>
                      <p className="text-gray-500 text-xs">{transport.details}</p>
                    </div>
                  </div>
                ))}
                
                {/* Real-time info note */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-blue-900 mb-2">Informação em Tempo Real</h5>
                      <p className="text-blue-700 text-sm mb-3">
                        Os tempos podem variar conforme o trânsito e horários dos transportes. 
                        Consulte sempre as apps oficiais para horários atualizados:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a 
                          href="https://www.cp.pt/passageiros/pt/consultar-horarios" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors"
                        >
                          CP Horários
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                        <a 
                          href="https://www.unirmobilidade.pt/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs rounded-full hover:bg-green-700 transition-colors"
                        >
                          UNIR Autocarros
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                        <a 
                          href="https://www.google.com/maps/dir//R.+Ferreira+Castro,+4520-227+Santa+Maria+da+Feira" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-yellow-600 text-white text-xs rounded-full hover:bg-yellow-700 transition-colors"
                        >
                          Google Maps
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
                    Mensagem Preparada!
                  </h3>
                  <p className="text-green-600">
                    A sua mensagem foi enviada para o WhatsApp. Complete o envio na aplicação que se abriu.
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                        placeholder="O seu nome"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      placeholder="Escreva aqui a sua mensagem..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    variant="default"
                    size="default"
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
                variant="default"
                size="default"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full"
              >
                <a href="https://www.instagram.com/villa.beauty.clinic/" target="_blank" rel="noopener noreferrer">
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
                variant="default"
                size="default"
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
                variant="default"
                size="default"
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
              variant="default"
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
              <a href="https://wa.me/351916248032" target="_blank" rel="noopener noreferrer">
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
                variant="default"
                size="default"
                className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-3 rounded-full"
              >
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Ver no Mapa
                </a>
              </Button>
            </div>
            <div>
              <Image 
                src="/hero-image.jpg" 
                alt="Villa Beauty Clinic Exterior" 
                width={600}
                height={384}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}