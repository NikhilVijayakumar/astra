import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Force unique React and MUI instances to avoid "Duplicate Atom" or "Context Mismatch" issues
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
      '@mui/material': path.resolve(__dirname, '../node_modules/@mui/material'),
      '@emotion/react': path.resolve(__dirname, '../node_modules/@emotion/react'),
      '@emotion/styled': path.resolve(__dirname, '../node_modules/@emotion/styled'),
    },
  },
})
