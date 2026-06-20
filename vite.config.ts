import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

const PEER_EXTERNALS = ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "axios"];

export default defineConfig({
  server: {},
  publicDir: false,

  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      exclude: [
        "src/main.tsx",
        "src/App.tsx",
        "src/common/repo/APITypes.ts",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.stories.ts",
        "**/*.stories.tsx",
      ],
      compilerOptions: {
        skipLibCheck: true,
      },
    }),
  ],

  build: {
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, "src/lib.ts"),
      name: "Astra",
      formats: ["es", "umd"],
      fileName: (format) => `astra.${format}.js`,
    },
    rollupOptions: {
      external: PEER_EXTERNALS,
      output: [
        {
          format: "es",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "ReactJsxRuntime",
            "react/jsx-dev-runtime": "ReactJsxDevRuntime",
            axios: "axios",
          },
        },
        {
          format: "umd",
          name: "Astra",
          interop: "default",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "ReactJsxRuntime",
            "react/jsx-dev-runtime": "ReactJsxDevRuntime",
            axios: "axios",
          },
        },
      ],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      provider: "istanbul",
    },
  },
});
