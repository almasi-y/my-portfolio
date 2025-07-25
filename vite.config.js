import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [
    tailwindcss(),
    react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    
    server: {
    hmr: {
      host: 'localhost',
    },
  },
})
