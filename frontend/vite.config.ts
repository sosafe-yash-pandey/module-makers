import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import customLogger from './vite-plugin-custom-logger';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), customLogger()],
})
