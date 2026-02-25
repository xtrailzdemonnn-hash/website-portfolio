import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (Ini contoh jika pakai React, biarkan sesuai bawaan Anda)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/website-portfolio/', // <--- Tambahkan baris ini. Pastikan nama repo sama persis.
  plugins: [react()],
})
