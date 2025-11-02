import React, { useState } from 'react';
// 1. ¡Importa 'Link' en lugar de 'a' (aunque usaremos ambos)!
import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

// 2. Actualiza la lista de enlaces
const navLinks = [
  { title: "Servicios", href: "/#servicios" },
  { title: "Estrategia", href: "/#estrategia" },
  { title: "Portafolio", href: "/#portafolio" },
  { title: "Sobre Mí", href: "/sobre-mi" }, // <-- ¡NUEVO!
  { title: "Blog", href: "/blog" },       // <-- ¡NUEVO!
  { title: "Contacto", href: "/#contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark-bg text-text-light sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">

        {/* 3. Cambia el Logo para que sea un <Link> a la home */}
        <Link to="/" className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-white">kaikuseweb</span>
        </Link>

        {/* ... (El menú hamburguesa no cambia) ... */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 4. Lógica de Navegación (Escritorio) */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.title}>
              {/* Si el enlace es interno (empieza con / pero no con /#), usa <Link>
                Si es un ancla (empieza con /#), usa <a>
              */}
              {link.href.startsWith('/#') ? (
                <a href={link.href} className="text-gray-300 hover:text-secondary transition-colors duration-300 text-lg">
                  {link.title}
                </a>
              ) : (
                <Link to={link.href} className="text-gray-300 hover:text-secondary transition-colors duration-300 text-lg">
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* ... (El menú móvil tampoco cambia la lógica, solo el contenido del array 'navLinks') ... */}
      {isOpen && (
        <ul className="md:hidden bg-dark-bg px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.title}>
              {link.href.startsWith('/#') ? (
                <a href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-secondary transition-colors duration-300 text-lg">
                  {link.title}
                </a>
              ) : (
                <Link to={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-secondary transition-colors duration-300 text-lg">
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
