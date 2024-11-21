import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Sizin layihənizin əsas URL-sini göstərin
  build: {
    outDir: 'dist', // Build fayllarının qovluğu
    rollupOptions: {
      output: {
        manualChunks: undefined, // Lazımsız bölmələrin qarşısını almaq üçün
      },
    },
  },
})
