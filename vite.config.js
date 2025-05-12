import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Mum.github.io/', // Replace with your GitHub repo name if deploying to GitHub Pages
  plugins: [react()],
})
