import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomAvatar from '../../components/CustomAvatar';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Settings: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mx: 'auto',px:3, py: 2, gap: 2, alignItems: 'center' }}>
      <CustomAvatar
        text="Buddhadeb Das"
        sx={{ width: 100, height: 100, fontSize: 32 }}
      />

      
      <Typography variant="body1" sx={{ width: '100%', fontWeight: 550}}>
          Personal Details:
        </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="first-name">First name</InputLabel>
            <OutlinedInput
              id="first-name"
              label="First name"
              placeholder='First name'
            />
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="last-name">Last name</InputLabel>
            <OutlinedInput
              id="last-name"
              label="Last name"
              placeholder='Last name'
            />
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="email">Email(optional)</InputLabel>
            <OutlinedInput
              id="last-name"
              label="Email(optional)"
              placeholder='abc@domain.com'
            />
          </FormControl>
        </Grid>
      </Grid>

      <Divider sx={{ width:'100%'}}/>

      <Typography variant="body1" sx={{ width: '100%', fontWeight: 550}}>
          Business Details:
        </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="first-name">Business name</InputLabel>
            <OutlinedInput
              id="first-name"
              label="Business name"
              placeholder='First name'
            />
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="last-name">GSTIN</InputLabel>
            <OutlinedInput
              id="last-name"
              label="GSTIN"
              placeholder='Last name'
            />
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="email">Address</InputLabel>
            <OutlinedInput
              id="last-name"
              label="Address"
              placeholder='abc@domain.com'
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
