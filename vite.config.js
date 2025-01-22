import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Use '0.0.0.0' to make the server accessible on your network
    port: 3000, // Define the port number you want
  },

  plugins: [react()],

})
