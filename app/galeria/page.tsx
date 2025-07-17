'use client'
export const runtime = 'edge';
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Star,
  Calendar,
  Eye,
  Filter,
  X
} from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'

export default function Gallery() {
// Type for gallery items
interface GalleryItem {
  id: string | number;
  image: string;
  title: string;
  description: string;
  rating: number;
  duration?: string;
  category: string;
  type: string;
}

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'facial', name: 'Tratamentos Faciais' },
    { id: 'laser', name: 'Laser Estético' },
    { id: 'corporal', name: 'Tratamentos Corporais' },
    { id: 'especiais', name: 'Tratamentos Especiais' },
    { id: 'instalacoes', name: 'Instalações' },
  ]

  // Lista de imagens de estrias
  const estriasImages = [
    '/imagens/WhatsApp Image 2025-07-15 at 01.00.39.jpeg',
    '/imagens/WhatsApp Image 2025-07-15 at 01.00.39 (1).jpeg',
    '/imagens/WhatsApp Image 2025-07-15 at 01.00.39 (2).jpeg',
    '/imagens/WhatsApp Image 2025-07-15 at 01.00.40.jpeg',
    '/imagens/WhatsApp Image 2025-07-15 at 01.00.40 (1).jpeg',
    '/imagens/WhatsApp Image 2025-07-15 at 01.00.40 (2).jpeg',
    '/imagens/WhatsApp Image 2025-07-15 at 01.00.40 (3).jpeg'
  ];

  const galleryItems: GalleryItem[] = [
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
    },
    {
      id: 'estrias',
      category: 'corporal',
      type: 'before-after',
      title: 'Tratamento de Estrias',
      description: 'Redução de estrias após tratamento completo',
      image: estriasImages[0],
      duration: '6 meses',
      rating: 5
    }
  ]

  const testimonials = [
    {
      name: 'Villa Beauty Clinic',
      treatment: 'Avaliações Reais',
      text: 'Configure a integração com Google Maps para ver testemunhos reais dos nossos clientes.',
      rating: 5,
      image: '/hero-image.jpg'
    }
  ]

  const especiaisIds = [
    'Peeling Químico',
    'Microagulhamento',
    'Tratamento Avançado',
    'Tratamento de Estrias (StriaPro)'
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : selectedCategory === 'especiais'
      ? [
          ...galleryItems.filter(item => especiaisIds.includes(item.title) && item.title !== 'Tratamento de Estrias'),
          galleryItems.find(item => item.id === 'estrias')
        ].filter((item): item is GalleryItem => Boolean(item))
      : galleryItems.filter(item => item.category === selectedCategory)

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  // Mapear categorias da galeria para categorias dos serviços
  const getCategoryServiceUrl = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'facial': '/servicos?categoria=facial',
      'laser': '/servicos?categoria=laser',
      'corporal': '/servicos?categoria=corporal',
      'especiais': '/servicos?categoria=especiais',
      'instalacoes': '/servicos', // Instalações vai para serviços geral
      'all': '/servicos'
    }
    return categoryMap[category] || '/servicos'
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
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 md:group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover md:group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 md:group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
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
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl shadow-mobile-enhanced hover:shadow-mobile-enhanced transition-all duration-300"
            >
              <Link href="/servicos">
                Marcar Consulta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
            <p className="mb-4 text-gray-600">{selectedImage.description}</p>
            {selectedImage.id === 'estrias' ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {estriasImages.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <Image src={img} alt={`Tratamento de Estrias ${idx+1}`} width={400} height={256} className="w-full h-64 object-contain rounded-2xl bg-black" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <Image src={selectedImage.image} alt={selectedImage.title} width={400} height={256} className="w-full h-64 object-contain rounded-2xl bg-black" />
            )}
          </div>
        </div>
      )}
    </div>
  )
}