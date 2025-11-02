import React from 'react';
// Importamos los iconos que usaremos para cada servicio
import { Layout, Paintbrush, Camera, Video, Shapes, Printer } from 'lucide-react';

// 1. Definimos nuestros servicios en un array de objetos
const servicesList = [
  {
    name: "Diseño Web y Landing Pages",
    description: "Webs modernas y rápidas (React/Vite) optimizadas para la conversión.",
    icon: <Layout className="w-12 h-12 text-primary" />,
  },
  {
    name: "Diseño Gráfico",
    description: "Identidad de marca, logos, y material de marketing que impacta.",
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
  },
  {
    name: "Fotografía",
    description: "Sesiones de producto, retrato y espacios para negocios locales.",
    icon: <Camera className="w-12 h-12 text-primary" />,
  },
  {
    name: "Edición de Vídeo",
    description: "Edición profesional para redes sociales (Reels, TikToks) y contenido corporativo.",
    icon: <Video className="w-12 h-12 text-primary" />,
  },
  {
    name: "Diseño 3D (Modelado)",
    description: "Creación de modelos 3D para visualización de producto, assets o arquitectura.",
    icon: <Shapes className="w-12 h-12 text-primary" />,
  },
  {
    name: "Impresión 3D (Prototipado)",
    description: "Servicio de prototipado rápido para dar vida física a tus ideas y modelos.",
    icon: <Printer className="w-12 h-12 text-primary" />,
  },
];

const Services = () => {
  return (
    // <section> con el 'id' para que funcione el enlace del Header
    // 'bg-gray-50' le da el fondo gris claro que contrasta con el Hero
    <section id="servicios" className="bg-gray-50 text-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. Título de la Sección --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Mis Servicios</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Soluciones creativas integrales para cubrir todas las necesidades visuales de tu proyecto.
          </p>
        </div>

        {/* --- 2. Cuadrícula (Grid) de Servicios --- */}
        {/* 'grid-cols-1' en móvil
            'md:grid-cols-2' en tablet
            'lg:grid-cols-3' en escritorio
            'gap-8' es la separación entre tarjetas
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Aquí ocurre la magia de React: 
            Usamos .map() para crear una tarjeta por cada objeto en 'servicesList' 
          */}
          {servicesList.map((service) => (
            <div 
              key={service.name} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-6">
                {service.icon} {/* Renderiza el icono */}
              </div>
              <h3 className="text-2xl font-bold text-dark-bg mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;