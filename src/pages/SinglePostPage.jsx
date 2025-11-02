import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // <-- El renderizador
import { getPostBySlug } from '../hooks/usePosts'; // <-- Función de carga individual
import { ArrowLeft } from 'lucide-react';

const SinglePostPage = () => {
  const { slug } = useParams(); // <-- Obtiene el 'slug' de la URL (ej: "primer-post")
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const postData = await getPostBySlug(slug);
      setPost(postData);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="bg-dark-bg text-white min-h-[60vh] flex items-center justify-center"><p>Cargando post...</p></div>;
  }

  if (!post) {
    return <div className="bg-dark-bg text-white min-h-[60vh] flex items-center justify-center"><p>Post no encontrado.</p></div>;
  }

  return (
    <div className="bg-white text-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Botón de Volver */}
        <Link to="/blog" className="flex items-center gap-2 text-primary font-bold mb-8 hover:text-secondary">
          <ArrowLeft className="w-5 h-5" />
          Volver al Blog
        </Link>

        {/* Cabecera del Post */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-dark-bg mb-4">{post.title}</h1>
        <span className="text-gray-500 text-lg mb-6 block">{new Date(post.date).toLocaleDateString('es-ES')}</span>
        <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-xl shadow-lg mb-10" />

        {/* Contenido del Post (Markdown) */}
        {/* Añadiremos estilos para 'prose' en index.css */}
        <div className="prose lg:prose-xl max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

      </div>
    </div>
  );
};

export default SinglePostPage;
