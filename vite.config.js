import { defineConfig } from 'vite';

export default defineConfig({
  // ...otras configuraciones
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
