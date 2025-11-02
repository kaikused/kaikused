import React from 'react';

// 1. Definimos nuestros proyectos ficticios
const projects = [
  {
    title: "Restaurante 'El Palmeral'",
    description: "Branding y diseño web para un nuevo restaurante de lujo en Muelle Uno, enfocado en la experiencia mediterránea.",
    image: "[https://placehold.co/600x400/FF5733/FFFFFF?text=Restaurante](https://placehold.co/600x400/FF5733/FFFFFF?text=Restaurante)",
    tags: ["Diseño Web", "Fotografía", "Diseño Gráfico"],
  },
  {
    title: "Startup 'InnovaTech'",
    description: "Identidad visual completa y landing page para una startup de software B2B en el Parque Tecnológico (PTA).",
    image: "[https://placehold.co/600x400/1a202c/33FFB0?text=Tech+Startup](https://placehold.co/600x400/1a202c/33FFB0?text=Tech+Startup)",
    tags: ["Diseño Web", "Diseño Gráfico", "React"],
  },
  {
    title: "Villa 'Solaria'",
    description: "Visualización 3D y prototipado de maqueta para una promoción inmobiliaria de lujo en la Costa del Sol.",
    image: "[https://placehold.co/600x400/33FFB0/1a202c?text=Visualizaci%C3%B3n+3D](https://placehold.co/600x400/33FFB0/1a202c?text=Visualizaci%C3%B3n+3D)",
    tags: ["Diseño 3D", "Impresión 3D", "Arquitectura"],
  },
];

const Portfolio = () => {
  return (
    // <section> con el 'id' para que funcione el enlace del Header
    <section id="portafolio" className="bg-gray-50 text-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. Título de la Sección --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Aquí hay una muestra de cómo puedo transformar ideas en resultados visuales.
          </p>
        </div>

        {/* --- 2. Cuadrícula (Grid) de Proyectos --- */}
        {/* 'lg:grid-cols-3' en escritorio. Ajustamos a 3 proyectos. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Hacemos .map() sobre nuestro array 'projects' */}
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl"
            >
              {/* Imagen del Proyecto */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              
              {/* Contenido de la Tarjeta */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark-bg mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Etiquetas (Tags) del Proyecto */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-secondary text-dark-bg px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;