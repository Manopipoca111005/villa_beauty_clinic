import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mx-auto">
          {/* Logo, Descrição, Horários e Redes Sociais */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Villa Beauty Clinic Logo" 
                width={40}
                height={40}
                className="object-contain" 
              />
              <div>
                <h3 className="text-xl font-bold">Villa Beauty</h3>
                <p className="text-yellow-700 text-sm">Clinic</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A sua clínica de estética e beleza de confiança em Santa Maria da Feira.
              Oferecemos tratamentos de qualidade com tecnologia avançada
              e profissionais especializados.
            </p>
            {/* Horários */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-yellow-700">Horários</h4>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-yellow-700" />
                  <span className="text-gray-300">Ter-Sex: 11h-20h</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-yellow-700" />
                  <span className="text-gray-300">Sábado: 9h-14h</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-yellow-700" />
                  <span className="text-gray-300">Dom-Seg: Fechado</span>
                </div>
              </div>
              {/* Redes Sociais */}
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-sm font-semibold text-yellow-700">Siga-nos</span>
                <a
                  href="https://www.instagram.com/villa.beauty.clinic/" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-700">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-700 transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-yellow-700 transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-yellow-700 transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-yellow-700 transition-colors text-sm">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-gray-300 hover:text-yellow-700 transition-colors text-sm">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-700">Contactos</h4>
            <ul className="space-y-3">
              <a
                href="tel:+351912248032"
                className="flex items-center space-x-2 text-sm hover:text-yellow-800 transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4 text-yellow-700" />
                <span className="text-gray-300">+351 916 248 032</span>
              </a>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-yellow-700" />
                <a href="mailto:villabeauty@outlook.pt" className="text-gray-300 hover:text-yellow-700 transition-colors">villabeauty@outlook.pt</a>
              </li>
              <a
                href="https://www.google.com/maps/dir//Villa+Beauty+Clinic,+R.+Ferreira+Castro,+4520-227+Santa+Maria+da+Feira/@40.9240729,-8.5610258,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2381c603fc33e9:0x9dc06e90471a55d6!2m2!1d-8.5584509!2d40.9240689"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-sm hover:text-yellow-800 transition-colors cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-yellow-700 mt-0.5" />
                <span className="text-gray-300">
                   R. Ferreira Castro<br />
                   4520-227 Santa Maria da Feira
                </span>
              </a>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Villa Beauty Clinic. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
