import React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const EditPersonalDetails: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 6 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="first-name">First name</InputLabel>
          <OutlinedInput
            id="first-name"
            label="First name"
            placeholder="First name"
          />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 6, md: 6 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="last-name">Last name</InputLabel>
          <OutlinedInput
            id="last-name"
            label="Last name"
            placeholder="Last name"
          />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="email">Email(optional)</InputLabel>
          <OutlinedInput
            id="last-name"
            label="Email(optional)"
            placeholder="abc@domain.com"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default EditPersonalDetails;
