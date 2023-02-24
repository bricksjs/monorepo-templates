import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ui',
      formats: ['es', 'umd'],
      fileName: (format) => `ui.${format}.js`,
    },
    assetsDir: 'assets',
    cssTarget: 'chrome61',
    manifest: true,
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
  },
});
