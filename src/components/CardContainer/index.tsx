import * as React from 'react';
import { red, blue, green, pink, purple, yellow } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import RoomCard from './RoomCard';

const cardGrid = {
  xs: 12,
  md: 2,
  sm: 6,
};
const CardContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          <RoomCard
            avatarColor={red[500]}
            avatarText="MD"
            title="Material Depo"
            description="Manage material requests and compare supplier quotations."
            onClick={() => navigate('/material-depo')}
          />
        </Grid>

        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          <RoomCard
            avatarColor={blue[500]}
            avatarText="TD"
            title="Technical Desk"
            description="Manage technical support needs and follow up on expert inputs or offers."
            onClick={() => navigate('/material-depo')}
          />
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          <RoomCard
            avatarColor={green[500]}
            avatarText="FA"
            title="Fabricator Area"
            description="Manage fabrication tasks and review fabricator proposals."
            onClick={() => navigate('/material-depo')}
          />
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          <RoomCard
            avatarColor={yellow[500]}
            avatarText="MH"
            title="Manpower Hub"
            description="Manage workforce requirements and collaborate with manpower service providers."
            onClick={() => navigate('/material-depo')}
          />
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          <RoomCard
            avatarColor={purple[500]}
            avatarText="HT"
            title="Hiring Terminal"
            description="Manage posted hiring needs and track recruiter quotes."
            onClick={() => navigate('/material-depo')}
          />
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          <RoomCard
            avatarColor={pink[500]}
            avatarText="CZ"
            title="Contract Zone"
            description="Manage posted project scopes and view contractor bids."
            onClick={() => navigate('/material-depo')}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardContainer;
