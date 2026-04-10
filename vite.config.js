import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
export default defineConfig({
    server: {},
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
            fileName: function (format) { return "astra.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: ['react', 'react-dom', /^@mui\/.*/, /^@emotion\/.*/],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI',
                    '@emotion/react': 'emotionReact',
                    '@emotion/styled': 'emotionStyled',
                    '@mui/material/Box': 'Box',
          '@mui/material/List': 'List',
          '@mui/material/ListItem': 'ListItem',
          '@mui/material/ListItemButton': 'ListItemButton',
          '@mui/material/ListItemIcon': 'ListItemIcon',
          '@mui/material/ListItemText': 'ListItemText',
          '@mui/material/Divider': 'Divider',
          '@mui/material/Toolbar': 'Toolbar',
          '@mui/material/Drawer': 'Drawer',
          '@mui/material/AppBar': 'AppBar',
          '@mui/material/IconButton': 'IconButton',
          '@mui/material/Typography': 'Typography',
          '@mui/material/styles': 'styles',
          '@mui/icons-material/ZoomIn': 'ZoomInIcon',
          '@mui/icons-material/ZoomOut': 'ZoomOutIcon',
          '@mui/icons-material/RotateRight': 'RotateRightIcon',
          '@mui/icons-material/Folder': 'FolderIcon',
          '@mui/icons-material/FolderOpen': 'FolderOpenIcon',
          '@mui/icons-material/InsertDriveFile': 'InsertDriveFileIcon',
          '@mui/icons-material/ExpandLess': 'ExpandLess',
          '@mui/icons-material/ExpandMore': 'ExpandMore',
          '@mui/icons-material/Delete': 'DeleteIcon',
          '@mui/icons-material/Refresh': 'RefreshIcon',
          '@mui/icons-material/PowerSettingsNew': 'PowerSettingsNewIcon',
          '@mui/icons-material/Menu': 'MenuIcon',
          '@mui/icons-material/DarkModeRounded': 'DarkModeRoundedIcon',
          '@mui/icons-material/LightModeRounded': 'LightModeRoundedIcon',
          '@mui/icons-material/Language': 'LanguageIcon',
                },
            },
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './vitest.setup.ts',
        coverage: {
            provider: 'istanbul',
        },
    },
});
