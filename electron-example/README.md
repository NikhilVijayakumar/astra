# Electron MVVM Example

This is a comprehensive example demonstrating MVVM Clean Architecture using the Astra library in an Electron application.

## Features

- **Dashboard**: Display statistics with loading/error/empty states
- **Users**: List users with search functionality and CRUD operations
- **Settings**: Theme and language preferences

## Architecture

### MVVM Clean Architecture
- **View**: Stateful containers + Stateless components
- **ViewModel**: Business logic and state management
- **Repository**: Data access layer
- **State**: Feature-specific states extending AppState

### Astra Library Integration
- `ThemeProvider` - Light/Dark theme management
- `LanguageProvider` - Multi-language support
- `DrawerComponent` - Navigation drawer
- `ToolbarComponent` - App bar with theme toggle
- `AppStateHandler` - Automatic loading/error/empty/success state handling
- `useDataState` - State management hook
- `ApiService` - HTTP client

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Mode
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Build Electron App
```bash
npm run electron:build
```

## Project Structure

```
src/
├── features/
│   ├── dashboard/      # Dashboard feature
│   ├── users/          # Users feature
│   └── settings/       # Settings feature
├── layout/
│   └── MainLayout.tsx  # Main layout with navigation
├── common/
│   ├── repo/           # Shared API client
│   └── types/          # Domain types
├── localization/       # Translation files
├── App.tsx             # Root component
└── main.tsx            # Entry point
```

## Technologies

- **Electron** - Desktop app framework
- **React** - UI library
- **TypeScript** - Type safety
- **Material-UI** - Component library
- **Astra** - MVVM utilities and components
- **Vite** - Build tool
