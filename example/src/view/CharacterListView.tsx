import { AppStateHandler } from 'astra';
import type { AppState } from 'astra';
import { CharacterCard } from './CharacterCard';
import type { ApiResponse } from '../repo/models';
import { 
  Container, 
  Grid, 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button 
} from '@mui/material';

interface CharacterListViewProps {
  state: {
    dataState: AppState<ApiResponse>;
    darkMode: boolean;
  };
  actions: {
    handleRefresh: () => void;
    handleLangSwitch: () => void;
    toggleDarkMode: () => void;
  };
  ui: {
    str: (key: string) => string;
  };
}

export const CharacterListView = ({ state, actions, ui }: CharacterListViewProps) => {
  const { dataState, darkMode } = state;
  const { handleRefresh, handleLangSwitch, toggleDarkMode } = actions;
  const { str } = ui;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {str('app_title')}
          </Typography>
          <Button color="inherit" onClick={handleLangSwitch}>
             {str('switch_lang')}
          </Button>
          <Button color="inherit" onClick={toggleDarkMode}>
            {darkMode ? 'Light' : 'Dark'}
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }} maxWidth="lg">
        <AppStateHandler
          appState={dataState}
          emptyCondition={(data: ApiResponse) => data.results.length === 0}
          SuccessComponent={({ appState }: { appState: AppState<ApiResponse> }) => (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                  <Button variant="outlined" onClick={handleRefresh}>
                    {str('refresh')}
                  </Button>
              </Box>
              <Grid container spacing={3}>
                {appState.data?.results.map((character) => (
                  <Grid key={character.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <CharacterCard character={character} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        />
      </Container>
    </Box>
  );
};
