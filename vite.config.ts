import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'; // Node.js `path` module

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: resolve(__dirname , './src'),
    }
  }
})
