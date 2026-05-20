import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    libInjectCss(),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/lib/index.ts',
      name: 'ReactMiniBag',
      formats: ['es'],
      fileName: 'index',
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
