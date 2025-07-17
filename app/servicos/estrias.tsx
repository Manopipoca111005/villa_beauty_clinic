import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tratamento de Estrias em Santa Maria da Feira | StriaPro | Villa Beauty Clinic',
  description: 'Livre-se das estrias de forma rápida e confortável em Santa Maria da Feira com o método StriaPro. Resultados em apenas 15 dias! Clínica de estética referência na região.',
  keywords: [
    'tratamento de estrias Santa Maria da Feira',
    'StriaPro',
    'estrias método rápido',
    'estrias confortável',
    'estrias resultados rápidos',
    'clínica estética Santa Maria da Feira',
    'tecnologia de ponta',
    'profissionais certificados',
    'resultados reais',
    'beleza e bem-estar'
  ]
}

export default function EstriasPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Tratamento de Estrias (StriaPro)</h1>
        <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
          Livre-se das estrias de forma rápida e confortável com o método StriaPro! Resultados em apenas 15 dias.<br/>
          Clínica de estética referência em Santa Maria da Feira.<br/>
          "StriaPro é o novo tratamento de estrias do mercado que permite resultados rápidos e com o maior conforto possível! Marque agora a sua avaliação!"
        </p>
        <Button asChild variant="default" size="lg" className="bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300">
          <Link href="/contactos">Marcar Avaliação</Link>
        </Button>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src="/imagens/WhatsApp-Image-2025-07-15-at-01.00.39.jpeg" alt="Antes e depois do tratamento de estrias StriaPro em Santa Maria da Feira" width={500} height={350} className="w-full h-64 object-contain rounded-2xl bg-black" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher o StriaPro?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
              <li>Recuperação em apenas 15 dias</li>
              <li>Conforto máximo durante o tratamento</li>
              <li>Técnica personalizada para cada paciente</li>
              <li>Resultados reais e comprovados</li>
              <li>Compatível com todos os fototipos de pele</li>
              <li>Atendimento por profissionais certificados</li>
            </ul>
            <p className="text-gray-600 mb-4">“Com o StriaPro cada detalhe é cuidadosamente planeado para resultados rápidos e com o maior conforto possível. O diferencial? Adapto o método ao tipo de estria de cada paciente para garantir maior conforto durante o tratamento, no menor tempo possível e com uma inflamação de milhões”.</p>
            <Button asChild variant="default" size="default" className="bg-gradient-to-r from-yellow-400 to-yellow-700 text-white">
              <Link href="/contactos">Quero Saber Mais</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Image src="/imagens/WhatsApp-Image-2025-07-15-at-01.00.39-(1).jpeg" alt="Resultado tratamento estrias StriaPro Santa Maria da Feira 1" width={400} height={256} className="w-full h-64 object-contain rounded-2xl bg-black" />
          <Image src="/imagens/WhatsApp-Image-2025-07-15-at-01.00.39-(2).jpeg" alt="Resultado tratamento estrias StriaPro Santa Maria da Feira 2" width={400} height={256} className="w-full h-64 object-contain rounded-2xl bg-black" />
          <Image src="/imagens/WhatsApp-Image-2025-07-15-at-01.00.40.jpeg" alt="Resultado tratamento estrias StriaPro Santa Maria da Feira 3" width={400} height={256} className="w-full h-64 object-contain rounded-2xl bg-black" />
        </div>
      </section>
      <section className="py-16 bg-yellow-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
          <p><strong>O StriaPro dói?</strong> Não, o método foi desenvolvido para garantir o maior conforto possível durante o tratamento.</p>
          <p><strong>Quando vejo resultados?</strong> Em apenas 15 dias já é possível notar uma grande diferença nas estrias tratadas.</p>
          <p><strong>Posso fazer o tratamento se estiver a amamentar?</strong> Sim, o StriaPro é totalmente compatível com a amamentação.</p>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-700 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Pronta para transformar a sua pele?</h2>
        <p className="text-xl text-yellow-100 mb-8">Marque já a sua avaliação e descubra como o StriaPro pode ajudar a eliminar as estrias de forma rápida e confortável em Santa Maria da Feira.</p>
        <Button asChild variant="default" size="lg" className="bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300">
          <Link href="/contactos">Marcar Avaliação</Link>
        </Button>
      </section>
    </div>
  )
} 