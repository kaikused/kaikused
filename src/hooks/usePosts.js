import { useState, useEffect } from 'react';
// import matter from 'gray-matter'; // <-- Ya no lo necesitamos aquí

console.log('Hook usePosts.js (versión MDX) se está ejecutando...');

// 1. Buscamos TODOS los módulos .md y .mdx.
//    Ya NO usamos '?raw', porque queremos el módulo, no el texto.
const modules = import.meta.glob('/posts/*.{md,mdx}');

console.log('Archivos .md o .mdx encontrados por Vite:', modules);

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      
      const postPromises = Object.entries(modules).map(async ([path, loader]) => {
        
        // 2. Cargamos el módulo (no el texto)
        const module = await loader();
        
        // 3. El 'slug' se saca del nombre del archivo
        const slug = path.split('/').pop().replace('.mdx', '').replace('.md', '');
        
        // 4. Leemos la metadata directamente de las exportaciones del módulo
        //    (igual que hacemos en SinglePostPage.jsx)
        return {
          title: module.title,
          date: module.date,
          image: module.image,
          slug: slug,
          // 'content' no lo cargamos aquí para que la lista sea rápida
        };
      });

      let loadedPosts = await Promise.all(postPromises);
      
      console.log('Posts cargados y parseados (desde MDX):', loadedPosts);

      // Ordenamos por fecha
      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  return posts;
};

// 5. ¡ELIMINAMOS getPostBySlug!
//    Esta función ya no es necesaria porque 'SinglePostPage.jsx'
//    hace su propia carga de datos. Dejarla aquí solo causará confusión.
//    (Puedes borrar la función 'getPostBySlug' que tenías).