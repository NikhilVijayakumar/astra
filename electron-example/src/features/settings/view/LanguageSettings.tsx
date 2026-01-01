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

interface LanguageSettingsProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

// Stateless component - language settings UI
export const LanguageSettings: FC<LanguageSettingsProps> = ({
  language,
  onLanguageChange,
}) => {
  const { literal } = useLanguage();

  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {literal['settings.language'] || 'Language'}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            <FormControlLabel
              value="en"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel
              value="es"
              control={<Radio />}
              label="Español"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};
