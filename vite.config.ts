import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import ViteRuby from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')

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
