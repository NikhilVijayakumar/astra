// ToolbarComponent.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import ThemeToggle from '../../theme/ThemeToggle';
import { ToolbarProps } from './Toolbardata';

const ToolbarComponent: React.FC<ToolbarProps> = ({
  handleDrawerToggle,
  title,
  themeContext,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <ThemeToggle themeContext={themeContext} />
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;
