import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact({
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-transform-class-properties'],
      ]
    }
  })],
  publicDir: false,
  build: {
    outDir: 'public',
    assetsDir: '',
    rollupOptions: {
      input: './client/viewer.jsx',
      output: {
        entryFileNames: 'viewer.js',
        assetFileNames: '[name].[ext]',
      },
    },
    // manifest: true,
  },
});
