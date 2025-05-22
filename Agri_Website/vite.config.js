import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000', 
    },
  },
  plugins: [react(), tailwindcss()],
})


// frontend: localhoost:5179
// backend: localhost:3000


// frontend: vivek.com
// backend: goli.com 