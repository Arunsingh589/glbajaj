import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",        
    port: 5173,
    hmr: {
      host: '40ae-2401-4900-8843-d9f5-47c4-6008-9694-25c6.ngrok-free.app',
      clientPort: 443,
      protocol: 'wss'
    }
  }
})
