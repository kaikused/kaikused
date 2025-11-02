// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'

// Importa los plugins que acabas de instalar
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  plugins: [
    // Ahora mdx() recibe opciones de configuración
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
    }),
    react()
  ],
})