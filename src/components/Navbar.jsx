import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Galeria', href: '/galeria' },
    // { name: 'Marcação', href: '/marcacao' },
    { name: 'Contactos', href: '/contactos' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Top Bar */}
      <div className="bg-yellow-50 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 text-yellow-700">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+351 123 456 789</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Lisboa, Portugal</span>
              </div>
            </div>
            <div className="hidden md:block text-yellow-700">
              Seg-Sex: 9h-19h | Sáb: 9h-17h
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Villa Beauty Clinic Logo" className="w-12 h-12 object-contain" />
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
                  to={item.href}
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
              <Button
                asChild
                className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/servicos">Marcar Consulta</Link>
              </Button>
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
                  to={item.href}
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
                <Button
                  asChild
                  className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link to="/servicos" onClick={() => setIsOpen(false)}>Marcar Consulta</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

