import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts'; // <-- Importamos nuestro hook

const BlogPage = () => {
  const posts = usePosts(); // <-- Usamos el hook para cargar los posts

  return (
    <div className="bg-gray-50 text-dark-bg py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-primary mb-12 text-center">Mi Blog Creativo</h1>

        {/* Contenedor de la lista de posts */}
        <div className="space-y-12">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="bg-white p-6 rounded-xl shadow-lg group">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover rounded-lg mb-6"
                />
                <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString('es-ES')}</span>
                <h2 className="text-3xl font-bold text-dark-bg my-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="font-bold text-primary hover:text-secondary transition-colors"
                >
                  Leer más &rarr;
                </Link>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-600">Cargando posts...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
