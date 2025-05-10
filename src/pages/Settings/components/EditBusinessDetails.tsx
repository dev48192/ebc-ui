import React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const EditBusinessDetails: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 12 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="first-name">Business name</InputLabel>
          <OutlinedInput
            id="first-name"
            label="Business name"
            placeholder="Business name"
          />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="last-name">GSTIN</InputLabel>
          <OutlinedInput
            id="last-name"
            label="GSTIN"
            placeholder="29XXXXXXXXX"
          />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="email">Address</InputLabel>
          <OutlinedInput
            id="last-name"
            label="Address"
            placeholder="vill,street,dist,state"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default EditBusinessDetails;
