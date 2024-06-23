import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, './src/config'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utilities': path.resolve(__dirname, './src/utilities'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@models': path.resolve(__dirname, './src/models'),
    },
  },
});
