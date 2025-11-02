import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  // Usamos useState para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Diseno Web', // Valor por defecto
    message: '',
  });

  // Esta función actualiza el estado cada vez que escribes en un input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Esta función se ejecutaría al enviar el formulario
  // Por ahora, solo muestra los datos en la consola
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! (Revisa la consola para ver los datos)');
    // Aquí es donde en el futuro conectarías un servicio de email (EmailJS, Resend, etc.)
    setFormData({ name: '', email: '', service: 'Diseno Web', message: '' });
  };

  return (
    <section id="contacto" className="bg-dark-bg text-text-light py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- 1. Título de la Sección --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-secondary mb-4">Hablemos de tu Proyecto</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Listo para empezar? Completa el formulario o envíame un email.
          </p>
        </div>

        {/* --- 2. Contenedor de Formulario e Info --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Columna Izquierda: Información de Contacto */}
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-6">Información de Contacto</h3>
            <p className="text-gray-300 mb-6">
              Prefiero el email, pero aquí tienes mis datos. Contesto en menos de 24 horas (laborables).
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-secondary" />
                <a href="mailto:hola@kaikuseweb.com" className="text-lg text-gray-200 hover:text-secondary transition-colors">
                  hola@kaikuseweb.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-secondary" />
                <span className="text-lg text-gray-200">+34 600 000 000 (Málaga)</span>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6">
              <p className="text-gray-400">Especializado en el PTA y la Costa del Sol.</p>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Servicio de Interés</label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-primary focus:border-primary"
              >
                <option>Diseño Web</option>
                <option>Diseño Gráfico</option>
                <option>Fotografía</option>
                <option>Edición de Vídeo</option>
                <option>Diseño 3D</option>
                <option>Impresión 3D</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Tu Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
