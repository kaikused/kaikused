import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa el Layout y las nuevas Páginas
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
// ¡Aquí está la importación clave del Paso 10!
import SinglePostPage from './pages/SinglePostPage'; 

function App() {
  return (
    <Routes>
      {/* La ruta "Padre" con el Layout (Header/Footer) */}
      <Route path="/" element={<Layout />}>

        {/* La ruta "índice" (/) */}
        <Route index element={<HomePage />} />

        {/* La página "Sobre Mí" */}
        <Route path="sobre-mi" element={<AboutPage />} />

        {/* Aquí es donde estaba la línea simple <Route path="blog"... /> del Paso 9.
          La hemos REEMPLAZADO por estas dos:
        */}

        {/* Rutas del Blog (Paso 10) */}
        <Route path="blog" element={<BlogPage />} /> {/* 1. Muestra la lista de posts */}
        <Route path="blog/:slug" element={<SinglePostPage />} /> {/* 2. Muestra un post individual */}

      </Route>
    </Routes>
  );
}

export default App;