import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blog-de-mis-mascotas/', // Cambiá 'pet-blog' por el nombre de tu repositorio en GitHub
})
