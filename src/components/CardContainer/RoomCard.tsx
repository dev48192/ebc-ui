import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface RoomCardProps {
  avatarText: string;
  avatarColor: string;
  title: string;
  description: string;
  onClick: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  avatarColor,
  avatarText,
  title,
  description,
  onClick = () => {},
}) => {
  return (
    <CardActionArea sx={{ height: '100%' }} onClick={onClick}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Avatar sx={{ bgcolor: avatarColor }} aria-label="recipe">
              {avatarText}
            </Avatar>
            <Typography variant="body1" fontSize={14} sx={{ color: grey[800] }}>
              {title}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            fontSize={12}
            sx={{ color: 'text.secondary', mt: 1 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default RoomCard;
