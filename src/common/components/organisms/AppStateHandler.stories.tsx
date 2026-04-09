import { FC } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import AppStateHandler from './AppStateHandler';
import { AppState, StateType } from '../../state/AppState';
import { HttpStatusCode } from '../../repo/HttpStatusCode';

// --- Mock Data Types ---

interface MockData {
  id: string;
  content: string;
}

interface MyFeatureData {
  items: string[];
  lastUpdated: string;
}

interface MyFeatureState extends AppState<MyFeatureData> {
  isSynced: boolean;
}

// --- Success Components ---

const MockSuccessComponent: FC<any> = ({ appState }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      textAlign: 'center',
      backgroundColor: 'success.light',
      color: 'success.contrastText',
    }}
  >
    <Typography variant="h5" component="h3">✅ Success!</Typography>
    <Typography sx={{ mt: 1 }}>Data: "{appState.data?.content}"</Typography>
    <Typography variant="caption" sx={{ display: 'block', mt: 2 }}>
      Status Code: {appState.status}
    </Typography>
    <Chip label={`State Type: ${StateType[appState.state]}`} size="small" sx={{ mt: 2 }} />
  </Paper>
);

const MyFeatureSuccessComponent: FC<any> = ({ appState }) => (
  <Paper elevation={3} sx={{ p: 3 }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Typography variant="h6">Feature Data Loaded</Typography>
      <Chip
        label={appState.isSynced ? 'Synced' : 'Not Synced'}
        color={appState.isSynced ? 'success' : 'warning'}
        size="small"
      />
    </Box>
    <List dense>
      {appState.data?.items.map((item: string) => (
        <ListItem key={item} disableGutters>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
    <Typography
      variant="caption"
      sx={{ display: 'block', mt: 2, textAlign: 'right' }}
    >
      Last Updated: {new Date(appState.data?.lastUpdated || '').toLocaleString()}
    </Typography>
  </Paper>
);

// --- Meta Configuration ---

const meta: Meta<typeof AppStateHandler> = {
  title: 'Components/Wrapper/AppStateHandler',
  component: AppStateHandler,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Renders loading, error, empty, or success components based on AppState. Designed for use across all feature modules.',
      },
    },
  },
  argTypes: {
    SuccessComponent: { control: false },
    emptyCondition: { control: false },
    errorMessage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- State Examples ---

export const Idle: Story = {
  name: '🛑 Idle (Initial) State',
  args: {
    appState: {
      state: StateType.INIT,
      isError: false,
      isSuccess: false,
      status: HttpStatusCode.IDLE,
      statusMessage: 'Idle, awaiting trigger.',
      data: null,
    } as AppState<MockData>,
    SuccessComponent: MockSuccessComponent,
  },
};

export const Loading: Story = {
  name: '▶️ Loading State',
  args: {
    appState: {
      state: StateType.LOADING,
      isError: false,
      isSuccess: false,
      status: HttpStatusCode.IDLE,
      statusMessage: 'Loading...',
      data: null,
    } as AppState<MockData>,
    SuccessComponent: MockSuccessComponent,
  },
};

export const Success: Story = {
  name: '✅ Success State (Generic)',
  args: {
    appState: {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: 'Success',
      data: {
        id: '123',
        content: 'This is a successful message!',
      },
    } as AppState<MockData>,
    SuccessComponent: MockSuccessComponent,
  },
};

export const Empty: Story = {
  name: '📭 Empty State',
  args: {
    appState: {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: 'Success, but no content',
      data: { id: '456', content: '' },
    } as AppState<MockData>,
    SuccessComponent: MockSuccessComponent,
    emptyCondition: (data: any) => data.content.length === 0,
  },
};

export const ServerError: Story = {
  name: '❌ Error State (Server Error)',
  args: {
    appState: {
      state: StateType.COMPLETED,
      isError: true,
      isSuccess: false,
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      statusMessage: 'Internal server error',
      data: null,
    } as AppState<MockData>,
    SuccessComponent: MockSuccessComponent,
    errorMessage: 'Oops! Something went wrong on the server.',
  },
};

export const NotFoundError: Story = {
  name: '❌ Error State (Not Found)',
  args: {
    appState: {
      state: StateType.COMPLETED,
      isError: true,
      isSuccess: false,
      status: HttpStatusCode.NOT_FOUND,
      statusMessage: 'Not found',
      data: null,
    } as AppState<MockData>,
    SuccessComponent: MockSuccessComponent,
    errorMessage: "We couldn't find the item you were looking for.",
  },
};

export const WithExtendedState: Story = {
  name: '🌟 Success with Extended State',
  args: {
    appState: {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: 'Extended feature data loaded',
      data: {
        items: ['Item A', 'Item B', 'Item C'],
        lastUpdated: new Date().toISOString(),
      },
      isSynced: true,
    } as MyFeatureState,
    SuccessComponent: MyFeatureSuccessComponent,
    emptyCondition: (data: any) => data.items.length === 0,
  },
};

export const Playground: Story = {
  name: '🎛️ Playground',
  args: {
    appState: {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: 'Demo loaded successfully!',
      data: {
        id: 'demo-id',
        content: 'Hello from Playground!',
      },
    } as AppState<MockData>,
    SuccessComponent: MockSuccessComponent,
    errorMessage: 'Something went wrong!',
  },
};

export const ExtendedPlayground: Story = {
  name: '🎛️ Extended Playground (Feature State)',
  args: {
    appState: {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      isSynced: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: 'Fetched feature data',
      data: {
        items: ['Alpha', 'Beta', 'Gamma'],
        lastUpdated: new Date().toISOString(),
      },
    } as MyFeatureState,
    SuccessComponent: MyFeatureSuccessComponent,
    errorMessage: 'Failed to load feature data.',
    emptyCondition: (data: any) => data.items.length === 0,
  },
};

