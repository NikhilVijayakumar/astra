import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  server: {},

  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      exclude: [
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
    lib: {
      entry: path.resolve(__dirname, "src/lib.ts"),
      name: "Astra",
      formats: ["es", "umd"],
      fileName: (format) => `astra.${format}.js`,
    },
    rollupOptions: {
      external: (id) => {
        return (
          id === "react" ||
          id === "react-dom" ||
          id.startsWith("@mui/") ||
          id.startsWith("@emotion/")
        );
      },
      output: [
        {
          format: "es",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@mui/material": "MaterialUI",
            "@mui/material/Box": "Box",
            "@mui/material/Typography": "Typography",
            "@mui/material/AppBar": "AppBar",
            "@mui/material/Toolbar": "Toolbar",
            "@mui/material/IconButton": "IconButton",
            "@mui/material/Drawer": "Drawer",
            "@mui/material/List": "List",
            "@mui/material/ListItem": "ListItem",
            "@mui/material/ListItemButton": "ListItemButton",
            "@mui/material/ListItemIcon": "ListItemIcon",
            "@mui/material/ListItemText": "ListItemText",
            "@mui/material/Divider": "Divider",
            "@mui/material/styles": "materialStyles",
            "@mui/icons-material": "MUIIcons",
            "@mui/icons-material/ZoomIn": "ZoomInIcon",
            "@mui/icons-material/ZoomOut": "ZoomOutIcon",
            "@mui/icons-material/RotateRight": "RotateRightIcon",
            "@mui/icons-material/Folder": "FolderIcon",
            "@mui/icons-material/FolderOpen": "FolderOpenIcon",
            "@mui/icons-material/InsertDriveFile": "InsertDriveFileIcon",
            "@mui/icons-material/ExpandLess": "ExpandLess",
            "@mui/icons-material/ExpandMore": "ExpandMore",
            "@mui/icons-material/Delete": "DeleteIcon",
            "@mui/icons-material/Refresh": "RefreshIcon",
            "@mui/icons-material/PowerSettingsNew": "PowerSettingsNewIcon",
            "@mui/icons-material/Menu": "MenuIcon",
            "@mui/icons-material/DarkModeRounded": "DarkModeRoundedIcon",
            "@mui/icons-material/LightModeRounded": "LightModeRoundedIcon",
            "@mui/icons-material/Language": "LanguageIcon",
            "@emotion/react": "emotionReact",
            "@emotion/styled": "emotionStyled",
          },
        },
        {
          format: "umd",
          name: "Astra",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@mui/material": "MaterialUI",
            "@mui/material/Box": "Box",
            "@mui/material/Typography": "Typography",
            "@mui/material/AppBar": "AppBar",
            "@mui/material/Toolbar": "Toolbar",
            "@mui/material/IconButton": "IconButton",
            "@mui/material/Drawer": "Drawer",
            "@mui/material/List": "List",
            "@mui/material/ListItem": "ListItem",
            "@mui/material/ListItemButton": "ListItemButton",
            "@mui/material/ListItemIcon": "ListItemIcon",
            "@mui/material/ListItemText": "ListItemText",
            "@mui/material/Divider": "Divider",
            "@mui/material/styles": "materialStyles",
            "@mui/icons-material": "MUIIcons",
            "@mui/icons-material/ZoomIn": "ZoomInIcon",
            "@mui/icons-material/ZoomOut": "ZoomOutIcon",
            "@mui/icons-material/RotateRight": "RotateRightIcon",
            "@mui/icons-material/Folder": "FolderIcon",
            "@mui/icons-material/FolderOpen": "FolderOpenIcon",
            "@mui/icons-material/InsertDriveFile": "InsertDriveFileIcon",
            "@mui/icons-material/ExpandLess": "ExpandLess",
            "@mui/icons-material/ExpandMore": "ExpandMore",
            "@mui/icons-material/Delete": "DeleteIcon",
            "@mui/icons-material/Refresh": "RefreshIcon",
            "@mui/icons-material/PowerSettingsNew": "PowerSettingsNewIcon",
            "@mui/icons-material/Menu": "MenuIcon",
            "@mui/icons-material/DarkModeRounded": "DarkModeRoundedIcon",
            "@mui/icons-material/LightModeRounded": "LightModeRoundedIcon",
            "@mui/icons-material/Language": "LanguageIcon",
            "@emotion/react": "emotionReact",
            "@emotion/styled": "emotionStyled",
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
