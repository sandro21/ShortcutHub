// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ShortcutHub/',  // This MUST match the GitHub repo name exactly
  plugins: [react()],
});
