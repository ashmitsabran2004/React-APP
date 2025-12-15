import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export const tailwindViteConfig = defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
