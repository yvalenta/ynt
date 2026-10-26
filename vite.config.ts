import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import ViteRuby from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    ViteRuby(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app/frontend/src')
    }
  },
  root: './app/frontend',
  publicDir: 'public',
  build: {
    outDir: '../../public/vite',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: 'app/frontend/entrypoints/application.tsx'
    }
  }
})
