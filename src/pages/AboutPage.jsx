import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-dark-bg py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-6">Sobre Mí</h1>
        <p className="text-xl text-gray-700 mb-8">
          ¡Hola! Soy Fran, un diseñador creativo con base en Málaga.
        </p>
        <img 
          src="[https://placehold.co/600x400/1a202c/FFFFFF?text=Tu+Foto+Aqu%C3%AD](https://placehold.co/600x400/1a202c/FFFFFF?text=Tu+Foto+Aqu%C3%AD)" 
          alt="Fran Quevedo - Kaikuseweb" 
          className="rounded-lg shadow-xl mx-auto mb-8 w-full max-w-md" 
        />
        <p className="text-lg text-gray-600 text-left space-y-4">
          Mi pasión es combinar la tecnología con la estética para crear soluciones visuales que no solo se ven bien, sino que también funcionan.
          <br /><br />
          Este es también el espacio donde conectaré mi canal de YouTube, donde exploro todo tipo de temas creativos, desde la edición de vídeo hasta el modelado 3D.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
