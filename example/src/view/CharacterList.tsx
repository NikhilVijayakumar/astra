import { useEffect } from 'react';
import { useDataState, StateType, useLanguage, useTheme } from 'astra';
import { CharacterRepo } from '../repo/CharacterRepo';
import type { ApiResponse } from '../repo/models';
import { CharacterCard } from './CharacterCard';
import { 
  Container, 
  Grid, 
  CircularProgress, 
  Alert, 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button 
} from '@mui/material';

export const CharacterList = () => {
  // 1. MVVM Hook (ViewModel)
  const [dataState, execute] = useDataState<ApiResponse>();
  
  // 2. Localization & Theme Hooks
  const { literal, setCurrentLanguage, currentLanguage } = useLanguage();
  const { toggleDarkMode, darkMode } = useTheme();

  // 3. Initial Fetch
  useEffect(() => {
    execute(() => CharacterRepo.getCharacters());
  }, []); // Run once on mount

  const handleRefresh = () => {
    execute(() => CharacterRepo.getCharacters());
  };

  const handleLangSwitch = () => {
      setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {literal['app_title']}
          </Typography>
          <Button color="inherit" onClick={handleLangSwitch}>
             {literal['switch_lang']}
          </Button>
          <Button color="inherit" onClick={toggleDarkMode}>
            {darkMode ? 'Light' : 'Dark'}
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }} maxWidth="lg">
        {/* Loading State */}
        {dataState.state === StateType.LOADING && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Error State */}
        {dataState.isError && (
          <Alert severity="error" action={
            <Button color="inherit" size="small" onClick={handleRefresh}>
              Retry
            </Button>
          }>
            {dataState.statusMessage}
          </Alert>
        )}

        {/* Success State */}
        {dataState.isSuccess && dataState.data && (
           <>
             <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                 <Button variant="outlined" onClick={handleRefresh}>
                    {literal['refresh']}
                 </Button>
             </Box>
             <Grid container spacing={3}>
                {dataState.data.results.map((character) => (
                  <Grid key={character.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <CharacterCard character={character} />
                  </Grid>
                ))}
             </Grid>
           </>
        )}
      </Container>
    </Box>
  );
};
