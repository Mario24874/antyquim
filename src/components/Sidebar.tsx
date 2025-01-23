import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Info, Book, Phone } from 'lucide-react';
import clsx from 'clsx';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: <Home size={20} />, text: 'Inicio' },
    { path: '/nosotros', icon: <Info size={20} />, text: 'Nosotros' },
    { path: '/catalogo', icon: <Book size={20} />, text: 'Catálogo' },
    { path: '/contacto', icon: <Phone size={20} />, text: 'Contacto' },
  ];

  return (
    <>
      {/* Botón para abrir/cerrar el menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md',
          'lg:hidden', // Solo visible en pantallas pequeñas
          'focus:outline-none focus:ring-2 focus:ring-blue-500' // Mejora la accesibilidad
        )}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú lateral */}
      <div
        className={clsx(
          'fixed top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300 ease-in-out z-40',
          'lg:translate-x-0 lg:w-64', // Visible en pantallas grandes
          isOpen ? 'translate-x-0' : '-translate-x-full' // Abre/cierra en pantallas pequeñas
        )}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-8">Antyquim, CA.</h1>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center space-x-3 p-3 rounded-lg transition-colors',
                    'hover:bg-blue-50',
                    isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                  )
                }
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace
              >
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;