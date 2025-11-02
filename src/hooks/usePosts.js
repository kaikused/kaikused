import { useState, useEffect } from 'react';
import matter from 'gray-matter';

// ¡LOG 1!
console.log('Hook usePosts.js se está ejecutando...');

// ¡¡AQUÍ ESTÁ LA CORRECCIÓN!!
// Hemos cambiado la sintaxis antigua 'as: raw' por la nueva sintaxis 'query'.
const modules = import.meta.glob('/posts/*.md', { 
  query: '?raw', 
  import: 'default' 
});

// ¡LOG 2!
console.log('Archivos .md encontrados por Vite:', modules);

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const postPromises = Object.entries(modules).map(async ([path, loader]) => {
        
        // Con la nueva sintaxis, 'loader()' nos da directamente el texto.
        const fileContent = await loader(); 
        
        const { data, content } = matter(fileContent); // fileContent es el string de texto
        const slug = path.split('/').pop().replace('.md', '');
        return { ...data, slug, content };
      });

      let loadedPosts = await Promise.all(postPromises);
      
      // ¡LOG 3!
      console.log('Posts cargados y parseados:', loadedPosts);

      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  return posts;
};

// Esta función ya estaba bien, ¡pero la revisamos!
export const getPostBySlug = async (slug) => {
  try {
    // La sintaxis '?raw' ya era correcta aquí.
    const file = await import(/* @vite-ignore */ `/posts/${slug}.md?raw`);
    
    // 'file.default' nos da el string de texto.
    const { data, content } = matter(file.default); 
    return { ...data, slug, content };
  } catch (e) {
    console.error("No se pudo cargar el post:", e);
    return null;
  }
};