import React from 'react';
// Importamos los iconos para tus 3 puntos fuertes
import { Target, MapPin, Star } from 'lucide-react';

const Strategy = () => {
  return (
    // <section> con el 'id' para que funcione el enlace del Header
    // 'bg-dark-bg' para crear el "sandwich" visual
    <section id="estrategia" className="bg-dark-bg text-text-light py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- 1. Título de la Sección --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-secondary mb-4">Tu Ventaja Competitiva en Málaga</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No soy una agencia hinchada. Soy un profesional independiente y local.
            Mi éxito depende al 100% del tuyo.
          </p>
        </div>
        

        {/* --- 2. Lista de Puntos Fuertes --- */}
        {/* 'lg:grid-cols-3' en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Punto Fuerte 1: Dedicación */}
          <div className="text-center p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg">
            <Target className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Enfoque 100%</h3>
            <p className="text-gray-300">
              Tu proyecto no es "uno más en la lista". Recibirá mi dedicación total
              desde el concepto hasta la entrega final.
            </p>
          </div>

          {/* Punto Fuerte 2: Local */}
          <div className="text-center p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg">
            <MapPin className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Conocimiento Local</h3>
            <p className="text-gray-300">
              Entiendo el mercado de Málaga: desde el turismo y la hostelería
              hasta la tecnología del PTA (Parque Tecnológico).
            </p>
          </div>

          {/* Punto Fuerte 3: Precio/Calidad */}
          <div className="text-center p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg">
            <Star className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Calidad y Precio de Lanzamiento</h3>
            <p className="text-gray-300">
              Accede a tecnología de vanguardia (React, 3D) con mi oferta
              de lanzamiento del 50% DTO. Máxima calidad a un precio justo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Strategy;
