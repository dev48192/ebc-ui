import React from 'react';
import CardContainer from '../../components/CardContainer';
import AutoCarousel from '../../components/Carousel';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 3 }}>
      <AutoCarousel />
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        Welcome to Our Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        fontSize={12}
        sx={{ color: 'text.secondary' }}
      >
        Explore the latest insights and features below. Keep track of your
        progress and stay updated with real-time data.
      </Typography>
      <CardContainer />
    </Box>
  );
};

export default Home;
