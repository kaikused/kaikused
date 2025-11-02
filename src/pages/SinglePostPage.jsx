import React, { useState, useEffect, Suspense } from 'react'; // <-- Añadimos Suspense
import { useParams, Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown'; // <-- Ya no lo necesitamos
// import { getPostBySlug } from '../hooks/usePosts'; // <-- Ya no lo necesitamos
import { ArrowLeft } from 'lucide-react';

const SinglePostPage = () => {
  const { slug } = useParams();
  
  // Vamos a tener dos estados:
  const [postDetails, setPostDetails] = useState(null); // Para la metadata (title, date, image)
  const [PostContent, setPostContent] = useState(null); // Para el componente (el contenido MDX)
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        // 1. Importamos el módulo .mdx dinámicamente
        const module = await import(
          /* @vite-ignore */
          `/posts/${slug}.mdx`
        );

        // 2. El contenido del post es la exportación 'default'
        setPostContent(() => module.default);

        // 3. La metadata (frontmatter) viene como exportaciones con nombre
        setPostDetails({
          title: module.title,
          date: module.date,
          image: module.image,
        });

      } catch (e) {
        console.error("Error al cargar el post MDX:", e);
        // Aquí puedes setear un estado de error si quieres
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="bg-dark-bg text-white min-h-[60vh] flex items-center justify-center"><p>Cargando post...</p></div>;
  }

  if (!PostContent || !postDetails) {
    return <div className="bg-dark-bg text-white min-h-[60vh] flex items-center justify-center"><p>Post no encontrado.</p></div>;
  }

  // ¡Tu plantilla se queda casi idéntica!
  return (
    <div className="bg-white text-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Botón de Volver */}
        <Link to="/blog" className="flex items-center gap-2 text-primary font-bold mb-8 hover:text-secondary">
          <ArrowLeft className="w-5 h-5" />
          Volver al Blog
        </Link>

        {/* Cabecera del Post (usa la metadata 'postDetails') */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-dark-bg mb-4">{postDetails.title}</h1>
        <span className="text-gray-500 text-lg mb-6 block">{new Date(postDetails.date).toLocaleDateString('es-ES')}</span>
        <img src={postDetails.image} alt={postDetails.title} className="w-full h-auto object-cover rounded-xl shadow-lg mb-10" />

        {/* Contenido del Post (Markdown) */}
        {/* Aquí está el gran cambio: */}
        <div className="prose lg:prose-xl max-w-none">
          <Suspense fallback={<div>Cargando contenido...</div>}>
            <PostContent />
          </Suspense>
        </div>

      </div>
    </div>
  );
};

export default SinglePostPage;