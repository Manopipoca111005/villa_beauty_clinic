'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Galeria', href: '/galeria' },
    // { name: 'Marcação', href: '/marcacao' },
    { name: 'Contactos', href: '/contactos' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Top Bar */}
      <div className="bg-yellow-50 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 text-yellow-700">
              <a 
                href="tel:+351912248032" 
                className="flex items-center space-x-1 hover:text-yellow-800 transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                <span>+351 916 248 032</span>
              </a>
              <a 
                href="https://www.google.com/maps/dir//Villa+Beauty+Clinic,+R.+Ferreira+Castro,+4520-227+Santa+Maria+da+Feira/@40.9240729,-8.5610258,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2381c603fc33e9:0x9dc06e90471a55d6!2m2!1d-8.5584509!2d40.9240689"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-yellow-800 transition-colors cursor-pointer"
              >
                <MapPin className="h-4 w-4" />
                <span> R. Ferreira Castro, 4520-227 Santa Maria da Feira</span>
              </a>
            </div>
            <div className="hidden md:block text-yellow-700">
              Ter-Sex: 11h-20h | Sáb: 9h-14h
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Villa Beauty Clinic Logo" 
                width={48}
                height={48}
                className="object-contain"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Villa Beauty</h1>
                <p className="text-sm text-yellow-700 -mt-1">Clinic</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-yellow-700 border-b-2 border-yellow-700'
                      : 'text-gray-700 hover:text-yellow-700'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link 
                href="/servicos"
                className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl shadow-mobile-enhanced hover:shadow-mobile-enhanced inline-block"
              >
                Marcar Consulta
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-yellow-700 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(item.href)
                      ? 'text-yellow-700 bg-white'
                      : 'text-gray-700 hover:text-yellow-700 hover:bg-yellow-50'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link 
                  href="/servicos" 
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl shadow-mobile-enhanced hover:shadow-mobile-enhanced inline-block"
                >
                  Marcar Consulta
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

