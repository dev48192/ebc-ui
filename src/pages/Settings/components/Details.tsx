import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface DetailsProps {
  label: string;
  value: string;
}

const Details: React.FC<DetailsProps> = ({ label, value }) => {
  return (
    <>
      <Grid size={{ xs: 4 }}>
        <Typography variant="body1" fontSize={14} sx={{ fontWeight: 550 }}>
          {label}
        </Typography>
      </Grid>
      <Grid size={{ xs: 8 }}>
        <Typography variant="body1" fontSize={14}>
          {value}
        </Typography>
      </Grid>
    </>
  );
};

export default Details;
