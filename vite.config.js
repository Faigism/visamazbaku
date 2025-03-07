import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext',
  },
  server: {
    host: '0.0.0.0',
  },
})
