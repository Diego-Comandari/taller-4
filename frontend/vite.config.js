import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Redirige las peticiones /api al backend de Express
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
