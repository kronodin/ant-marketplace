import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ant-marketplace/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
