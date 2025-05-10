import React from 'react';
import Grid from '@mui/material/Grid';
import Details from './Details';
import { useSession } from '../../../app/SessionContext';

const ViewPersonalDetails: React.FC = () => {
  const { authDetails } = useSession();
  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Details label="Name:" value={authDetails?.fullName ?? '-'} />
      <Details label="Email:" value={authDetails?.email ?? '-'} />
    </Grid>
  );
};

export default ViewPersonalDetails;
