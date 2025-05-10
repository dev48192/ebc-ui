import React from 'react';
import Grid from '@mui/material/Grid';
import Details from './Details';

const ViewBusinessDetails: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ width: '100%'}}>
      <Details label="Business name:" value="Buddhadeb Enterprise" />
      <Details label="GSTIN:" value="29XXXXXXXXX" />
      <Details label="Address:" value="Purba Bardhaman, West Bengal" />
    </Grid>
  );
};

export default ViewBusinessDetails;
