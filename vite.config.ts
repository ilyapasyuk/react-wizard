import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import * as path from 'node:path'

export default defineConfig({
  base: '',
  plugins: [react()],
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
