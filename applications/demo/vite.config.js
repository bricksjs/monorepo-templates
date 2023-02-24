import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ssl from '@vitejs/plugin-basic-ssl';

const basePath = '/demo/';
const hmrPath = '/hmr';

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  define: {
    'process.env': {
      BASE_PATH: basePath,
    },
  },
  server: {
    port: 8090,
    host: '0.0.0.0',
    https: true,
    cors: true,
    hmr: {
      protocol: 'wss',
      port: 8090,
      path: hmrPath,
    },
    proxy: {
      [hmrPath]: {
        target: 'wss://127.0.0.1:8080',
      },
    },
  },
  plugins: [
    vue(),
    ssl(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
  },
});
