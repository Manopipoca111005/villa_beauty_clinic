'use client'

import { useState } from 'react'
import { Button } from '../../src/components/ui/button'
import Link from 'next/link'
import { 
  ArrowRight, 
  Star, 
  Calendar,
  Eye,
  Filter,
  X
} from 'lucide-react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'facial', name: 'Tratamentos Faciais' },
    { id: 'laser', name: 'Laser Estético' },
    { id: 'corporal', name: 'Tratamentos Corporais' },
    { id: 'instalacoes', name: 'Instalações' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'facial',
      type: 'before-after',
      title: 'Tratamento de Acne',
      description: 'Resultados após 3 sessões de limpeza profunda e peeling',
      image: '/before-after-1.jpg',
      duration: '3 meses',
      rating: 5
    },
    {
      id: 2,
      category: 'laser',
      type: 'before-after',
      title: 'Depilação Laser',
      description: 'Resultado após 6 sessões de depilação laser',
      image: '/before-after-2.jpg',
      duration: '6 meses',
      rating: 5
    },
    {
      id: 3,
      category: 'corporal',
      type: 'before-after',
      title: 'Modelagem Corporal',
      description: 'Redução de celulite após tratamento completo',
      image: '/before-after-3.jpg',
      duration: '4 meses',
      rating: 5
    },
    {
      id: 4,
      category: 'facial',
      type: 'treatment',
      title: 'Tratamento Facial em Curso',
      description: 'Aplicação de máscara hidratante',
      image: '/facial-treatment.jpg',
      rating: 5
    },
    {
      id: 5,
      category: 'laser',
      type: 'equipment',
      title: 'Equipamento Laser',
      description: 'Tecnologia de ponta para tratamentos seguros',
      image: '/laser-treatment.jpg',
      rating: 5
    },
    {
      id: 6,
      category: 'instalacoes',
      type: 'facility',
      title: 'Sala de Tratamento',
      description: 'Ambiente moderno e confortável',
      image: '/hero-image.jpg',
      rating: 5
    }
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      treatment: 'Tratamento de Acne',
      text: 'Resultados incríveis! A minha pele nunca esteve tão bem.',
      rating: 5,
      image: '/before-after-1.jpg'
    },
    {
      name: 'Ana Costa',
      treatment: 'Depilação Laser',
      text: 'Processo indolor e resultados duradouros. Recomendo!',
      rating: 5,
      image: '/before-after-2.jpg'
    },
    {
      name: 'Sofia Santos',
      treatment: 'Modelagem Corporal',
      text: 'Adorei o resultado! Sinto-me muito mais confiante.',
      rating: 5,
      image: '/before-after-3.jpg'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openModal = (item) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Galeria de Resultados
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Veja os resultados reais dos nossos tratamentos e inspire-se 
            com as transformações dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 shadow-sm'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {item.type === 'before-after' && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Antes/Depois
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {item.duration && (
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Testemunhos dos Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação e satisfação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-yellow-700">{testimonial.treatment}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronta para a Sua Transformação?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Junte-se às centenas de clientes satisfeitas e descubra 
            o que podemos fazer por si.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-full shadow-lg"
            >
              <Link href="/contactos">
                Marcar Consulta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{selectedImage.description}</p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(selectedImage.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                {selectedImage.duration && (
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-5 w-5" />
                    <span>Duração: {selectedImage.duration}</span>
                  </div>
                )}
              </div>
              <Button 
                asChild
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white py-3 rounded-full"
              >
                <Link href="/contactos">
                  Marcar Consulta para Este Tratamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
