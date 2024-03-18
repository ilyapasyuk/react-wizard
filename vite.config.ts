import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import * as path from 'node:path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  base: '',
  plugins: [
    react(),
    libInjectCss(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './src/Wizard/types.ts'),
          dest: './',
        },
      ],
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    minify: true,
    lib: {
      entry: path.resolve('./src/Wizard/index.tsx'),
      name: 'react-onboarding',
      fileName: (format) => `wizard.${format}.min.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
