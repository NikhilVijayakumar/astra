# Electron Integration Guide

Astra works seamlessly in Electron desktop applications. This guide covers integration patterns specific to Electron.

## Prerequisites

- Node.js 18+
- Electron 28+
- Vite with electron plugins (recommended)

## Project Setup

### 1. Initialize Electron with Vite

Create a project structure with both main and renderer processes:

```bash
npm create vite@latest my-electron-app -- --template react-ts
cd my-electron-app
npm install astra electron electron-builder vite-plugin-electron vite-plugin-electron-renderer
```

### 2. Configure Vite for Electron

Update `vite.config.ts` to handle both processes:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";

export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: "electron/main.ts",
        onstart(args) {
          args.startup();
        },
      },
    ]),
    renderer(),
  ],
  server: {
    port: 5173,
  },
});
```

## Electron Main Process

### Basic Main Process Setup

```ts
// electron/main.ts
import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Load the app
  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
```

## Context Bridge Integration

For secure IPC communication, use a preload script with context bridge:

### 1. Create Preload Script

```ts
// electron/preload.ts
import { contextBridge, ipcRenderer } from "electron";

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("electronAPI", {
  // Window controls
  minimizeWindow: () => ipcRenderer.send("window-minimize"),
  maximizeWindow: () => ipcRenderer.send("window-maximize"),
  closeWindow: () => ipcRenderer.send("window-close"),

  // App info
  getAppVersion: () => ipcRenderer.invoke("app-version"),
  getPlatform: () => process.platform,

  // IPC listeners
  onMenuAction: (callback: (action: string) => void) => {
    ipcRenderer.on("menu-action", (_event, action) => callback(action));
  },
});
```

### 2. Update Main Process IPC Handlers

```ts
// electron/main.ts
import { app, BrowserWindow, ipcMain, Menu } from "electron";

// Add IPC handlers
ipcMain.handle("app-version", () => app.getVersion());

ipcMain.on("window-minimize", () => {
  mainWindow?.minimize();
});

ipcMain.on("window-maximize", () => {
  if (mainWindow?.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow?.maximize();
  }
});

ipcMain.on("window-close", () => {
  mainWindow?.close();
});

// Create application menu
const template: Electron.MenuItemConstructorOptions[] = [
  {
    label: "File",
    submenu: [
      {
        label: "New",
        accelerator: "CmdOrCtrl+N",
        click: () => {
          mainWindow?.webContents.send("menu-action", "new");
        },
      },
      { type: "separator" },
      { role: "quit" },
    ],
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forceReload" },
      { role: "toggleDevTools" },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
```

### 3. Use in Renderer (React)

```tsx
// In your React component
declare global {
  interface Window {
    electronAPI: {
      minimizeWindow: () => void;
      maximizeWindow: () => void;
      closeWindow: () => void;
      getAppVersion: () => Promise<string>;
      getPlatform: () => string;
      onMenuAction: (callback: (action: string) => void) => void;
    };
  }
}

function TitleBar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>My Electron App</span>
      <div>
        <button onClick={() => window.electronAPI?.minimizeWindow()}>−</button>
        <button onClick={() => window.electronAPI?.maximizeWindow()}>□</button>
        <button onClick={() => window.electronAPI?.closeWindow()}>×</button>
      </div>
    </div>
  );
}
```

## IPC Communication Patterns

### Pattern 1: Renderer to Main (Invoke)

```tsx
// Renderer process - async call
const version = await window.electronAPI.getAppVersion();
```

### Pattern 2: Main to Renderer (Send)

```tsx
// Main process
mainWindow.webContents.send("menu-action", "new");

// Renderer process - listen
window.electronAPI.onMenuAction((action) => {
  console.log("Menu action:", action);
});
```

### Pattern 3: Bidirectional Communication

```tsx
// Main process - handle request
ipcMain.handle("fetch-user-data", async () => {
  const result = await fetchFromExternalAPI();
  return result;
});

// Renderer process
const userData = await window.electronAPI.fetchUserData();
```

## Full Example App Structure

```
my-electron-app/
├── electron/
│   ├── main.ts          # Main process entry
│   └── preload.ts       # Context bridge setup
├── src/
│   ├── App.tsx          # Root component with Astra providers
│   ├── main.tsx         # React entry
│   ├── common/
│   │   └── repo/
│   │       └── ApiClient.ts   # API client hook
│   ├── features/
│   │   └── users/
│   │       ├── repo/
│   │       │   └── UsersRepo.ts
│   │       ├── viewmodel/
│   │       │   └── useUsersViewModel.ts
│   │       └── view/
│   │           └── UsersContainer.tsx
│   └── layout/
│       └── MainLayout.tsx
├── package.json
├── vite.config.ts
└── electron-builder.yml
```

### App.tsx with Providers

```tsx
import { ThemeProvider, LanguageProvider } from "astra";
import { createTheme } from "@mui/material";
import { MainLayout } from "./layout/MainLayout";
import enTranslations from "./localization/en.json";
import esTranslations from "./localization/es.json";

const lightTheme = createTheme({
  palette: { mode: "light", primary: { main: "#1976d2" } },
});

const darkTheme = createTheme({
  palette: { mode: "dark", primary: { main: "#90caf9" } },
});

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <LanguageProvider
        translations={{ en: enTranslations, es: esTranslations }}
        availableLanguages={[
          { code: "en", label: "English" },
          { code: "es", label: "Español" },
        ]}
        defaultLanguage="en"
      >
        <MainLayout />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
```

## Running the App

### Development Mode

```bash
npm run dev
```

With Vite + electron-plugin, this automatically starts both the dev server and Electron.

### Production Build

```bash
npm run build
npm run electron:build
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "electron:dev": "concurrently \"vite\" \"wait-on http://localhost:5173 && electron .\"",
    "electron:build": "vite build && electron-builder"
  }
}
```

## Best Practices

1. **Enable Context Isolation** - Always use `contextIsolation: true` for security
2. **Use Preload Scripts** - Expose only necessary APIs via context bridge
3. **Handle Both Modes** - Support both development server URL and production file loading
4. **Match Node Integration** - Set `nodeIntegration: false` when using context isolation
5. **Use Astra MVVM** - Clean separation between UI and business logic works well in Electron

## See Also

- [Getting Started Guide](./getting-started.md) - Basic Astra setup
- [React Integration Guide](./react.md) - React-specific patterns
