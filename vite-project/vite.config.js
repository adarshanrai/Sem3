
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: command === 'serve' ? '/' : '/Sem3/',
    plugins: [react()],
  }
})
