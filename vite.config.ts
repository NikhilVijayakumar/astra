import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({  
  server: {
  },
 
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
 
  build: {
    lib: {     
      entry: path.resolve(__dirname, 'src/lib.ts'),     
      name: 'Astra',     
      formats: ['es', 'umd'],
      fileName: (format) => `astra.${format}.js`,
    },
    rollupOptions: {    
      external: ['react', 'react-dom', /^@mui\/.*/, /^@emotion\/.*/],
      output: {      
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});