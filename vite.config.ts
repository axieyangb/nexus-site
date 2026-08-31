import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Marketing site for Nexus. Plain SPA — React + Tailwind v4 (the same toolchain
// the product frontend uses), no router, one long page composed from sections.
export default defineConfig({
  // Served from a GitHub Pages project site at /nexus-site/. If you move to a
  // custom domain (e.g. nexus.ai) that serves from the root, change this to '/'.
  base: '/nexus-site/',
  plugins: [react(), tailwindcss()],
})
