import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/3d_portfolio_website/', // IMPORTANT: matches your GitHub repo name!
  plugins: [
    react(),
    tailwindcss(),
  ],
})