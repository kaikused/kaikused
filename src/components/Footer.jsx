import React from 'react';
import { Copyright } from 'lucide-react'; // Icono de Copyright

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center text-gray-400">
          <Copyright className="w-5 h-5 mr-2" />
          <span>{new Date().getFullYear()} Kaikuseweb. Todos los derechos reservados.</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          Diseñado y desarrollado en Málaga.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
