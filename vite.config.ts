import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: (id) =>
        id === 'react' ||
        id === 'react-dom' ||
        id.startsWith('react/') ||
        id.startsWith('react-dom/'),
    },
  },
});
