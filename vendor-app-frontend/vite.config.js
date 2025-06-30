import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4173, // or any port Render assigns
    host: '0.0.0.0',
    allowedHosts: ['vendor-app-fe.onrender.com'] // ✅ Add this line
  }
})
