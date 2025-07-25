"use client";

import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
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
} from 'lucide-react';

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construir a mensagem para WhatsApp
    const message = `*Nome:* ${formData.name}
*Assunto:* ${formData.subject}
*Mensagem:* ${formData.message}`;

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp (mesmo número usado nos outros botões)
    const whatsappNumber = '351916248032';
    
    // Criar URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
    
    // Mostrar confirmação e limpar formulário
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+351 916 248 032'],
      action: 'tel:+351912248032'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['villabeauty@outlook.pt'],
      action: 'mailto:villabeauty@outlook.pt'
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
  ];

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
  ];

  return (
    <>
      {/* Schema.org structured data for contact page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Contactos - Villa Beauty Clinic",
            "description": "Contacte a Villa Beauty Clinic em Santa Maria da Feira",
            "url": "https://villabeautyclinic.pages.dev/contactos",
            "mainEntity": {
              "@type": "BeautySalon",
              "name": "Villa Beauty Clinic",
              "description": "Clínica de estética e beleza em Santa Maria da Feira",
              "url": "https://villabeautyclinic.pages.dev",
              "telephone": "+351916248032",
              "email": "villabeauty@outlook.pt",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Ferreira Castro",
                "addressLocality": "Santa Maria da Feira",
                "postalCode": "4520-227",
                "addressCountry": "PT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.9267,
                "longitude": -8.5492
              },
              "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
              "priceRange": "€€",
              "image": "https://villabeautyclinic.pages.dev/logo.png"
            }
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Contactos
            </h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Estamos aqui para si. Entre em contacto connosco para esclarecer 
              dúvidas, marcar consultas ou simplesmente para nos conhecer melhor em Santa Maria da Feira.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <article key={index} className="text-center group">
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
                </article>
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
                    title="Villa Beauty Clinic - R. Ferreira Castro, Santa Maria da Feira"
                  />
                </div>

                {/* Transport Options */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Como Chegar</h3>
                  {transportOptions.map((transport, index) => (
                    <article key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                    </article>
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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="O seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="o.seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Marcação de Consulta">Marcação de Consulta</option>
                      <option value="Informações sobre Tratamentos">Informações sobre Tratamentos</option>
                      <option value="Preços e Orçamentos">Preços e Orçamentos</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Descreva a sua mensagem..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Enviar por WhatsApp
                  </Button>
                </form>

                {isSubmitted && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <p className="text-green-800">Mensagem enviada com sucesso!</p>
                    </div>
                  </div>
                )}

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Siga-nos nas Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/villa.beauty.clinic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href="https://wa.me/351916248032"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
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
              Marque já a sua consulta e descubra como podemos ajudá-la a alcançar 
              os seus objetivos de beleza e bem-estar em Santa Maria da Feira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl shadow-mobile-enhanced hover:shadow-mobile-enhanced inline-block"
              >
                <a href="/servicos">
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

export default function ContactosClient() {
  return <Suspense fallback={<div>Carregando...</div>}><ContactContent /></Suspense>;
} 