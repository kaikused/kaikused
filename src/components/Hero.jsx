import React from 'react';

// Este es un componente simple, solo muestra JSX.
const Hero = () => {
  return (
    // <section> es la etiqueta semántica
    // 'bg-dark-bg' para que continúe el fondo del Header
    // 'pt-12 pb-24' le da mucho 'relleno' (padding) arriba y abajo
    <section id="hero" className="bg-dark-bg text-text-light pt-12 pb-24 px-4 sm:px-6 lg:px-8 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. El Titular (H1) --- */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          Diseñador Creativo para Negocios en <span className="text-primary block sm:inline">Málaga</span>.
        </h1>
        
        {/* --- 2. El Subtítulo --- */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Diseño Web, Gráfico, Fotografía, 3D y Prototipado. <br className="sm:hidden" />
          La máxima dedicación de un profesional independiente para tu marca local.
        </p>

        {/* --- 3. La Oferta Potente (La Estrategia) --- */}
        {/* Esta es la parte clave para captar clientes */}
        <div className="bg-secondary text-dark-bg p-6 rounded-xl shadow-lg mb-10">
          <p className="text-xl font-bold mb-2">PROMOCIÓN DE LANZAMIENTO EXCLUSIVA:</p>
          <p className="text-2xl font-extrabold text-primary">
            <span className="text-4xl">50% DTO.</span> en tu primer proyecto en Málaga.
          </p>
          <p className="text-sm mt-2">Energía de profesional independiente y calidad garantizada por la última tecnología.</p>
        </div>

        {/* --- 4. El Botón de Llamada a la Acción (CTA) --- */}
        <a 
          href="#contacto" // Lo enlazamos a la futura sección de contacto
          className="transition all 0.3s ease inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl uppercase hover:bg-opacity-90 hover:translate-y-[-2px] focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
        >
          ¡Solicita tu Asesoría Gratuita Hoy!
        </a>
      </div>
    </section>
  );
};

export default Hero;
