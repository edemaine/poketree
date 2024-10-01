// vite.config.ts
import { defineConfig } from 'vite'
import civetVitePlugin from '@danielx/civet/vite'
import pug from '@vituum/vite-plugin-pug'

export default defineConfig(({command}) => ({
  ...(command === 'build' ? {base: '/poketree/'} : undefined),
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
}));
