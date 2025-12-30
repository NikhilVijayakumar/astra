import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import type { Character } from '../repo/models';
import { useLanguage } from 'astra';

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  const { literal } = useLanguage();

  // Helper to localize status
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Alive': return literal['status_alive'];
      case 'Dead': return literal['status_dead'];
      default: return literal['status_unknown'];
    }
  };

  const statusColor = 
    character.status === 'Alive' ? 'success' : 
    character.status === 'Dead' ? 'error' : 'default';

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={character.image}
        alt={character.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
            {character.name}
            </Typography>
            <Chip label={getStatusLabel(character.status)} color={statusColor as any} size="small" />
        </Box>
        
        <Typography variant="body2" color="text.secondary">
            <strong>{literal['species']}:</strong> {character.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <strong>{literal['gender']}:</strong> {character.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <strong>{literal['origin']}:</strong> {character.origin.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
