import { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useLanguage } from 'astra';

interface ThemeSettingsProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

// Stateless component - theme settings UI
export const ThemeSettings: FC<ThemeSettingsProps> = ({
  theme,
  onThemeChange,
}) => {
  const { literal } = useLanguage();

  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {literal['settings.theme'] || 'Theme'}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={theme}
            onChange={(e) => onThemeChange(e.target.value as 'light' | 'dark')}
          >
            <FormControlLabel
              value="light"
              control={<Radio />}
              label={literal['settings.light'] || 'Light'}
            />
            <FormControlLabel
              value="dark"
              control={<Radio />}
              label={literal['settings.dark'] || 'Dark'}
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};
