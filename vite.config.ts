// vite.config.ts
import { defineConfig } from 'vite'
import civetVitePlugin from '@danielx/civet/vite'
import pug from '@vituum/vite-plugin-pug'

export default defineConfig({
  plugins: [
    pug(),
    civetVitePlugin({
      ts: 'preserve',
    }),
  ],
  build: {
    rollupOptions: {
      input: ['index.pug.html']
    }
  }
});
