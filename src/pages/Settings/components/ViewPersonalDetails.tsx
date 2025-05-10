import React from 'react';
import Grid from '@mui/material/Grid';
import Details from './Details';

const ViewPersonalDetails: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ width: '100%'}}>
      <Details label="Name:" value="Buddhadeb Das" />
      <Details label="Email:" value="buddhadebdas282@gmail.com" />
    </Grid>
  );
};

export default ViewPersonalDetails;
