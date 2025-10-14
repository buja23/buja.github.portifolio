import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/buja23/buja.github.portifolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
