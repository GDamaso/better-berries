import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/better-berries/',
  resolve: {
    alias: {
      '@Constants': path.resolve(__dirname, 'src/Constants'),
      '@Commons': path.resolve(__dirname, 'src/Commons'),
      '@Utils': path.resolve(__dirname, 'src/Utils'),
      '@Interface': path.resolve(__dirname, 'src/Interface'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [
    VitePWA({
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Better Berries',
        description: 'Better Berries nutrient calculator',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/install-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/install-126.png',
            sizes: '126x126',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/install-32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/install-16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    react(),
  ],
});
