import React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { PersonalDetails } from '../types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useSession } from '../../../app/SessionContext';

interface EditPersonalDetailsProps {
  onChange: (e: any) => void;
  personalDetails: PersonalDetails;
}
const EditPersonalDetails: React.FC<EditPersonalDetailsProps> = ({
  onChange,
  personalDetails,
}) => {
  const { authDetails } = useSession();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 6 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="first-name">First name</InputLabel>
          <OutlinedInput
            id="first-name"
            label="First name"
            placeholder="First name"
            name="first_name"
            value={personalDetails?.first_name ?? authDetails?.firstName}
            onChange={onChange}
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
            name="last_name"
            value={personalDetails?.last_name ?? authDetails?.lastName}
            onChange={onChange}
          />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 6, md: 6 }}>
        <FormControl size="small" fullWidth>
          <InputLabel htmlFor="email">Email(optional)</InputLabel>
          <OutlinedInput
            id="last-name"
            label="Email(optional)"
            placeholder="abc@domain.com"
            name="email"
            value={personalDetails?.email ?? authDetails?.email}
            onChange={onChange}
          />
        </FormControl>
      </Grid>
      <Grid size={{ xs: 6, md: 6 }}>
        <FormControlLabel
          value="bottom"
          control={
            <Switch
              name="is_seller"
              checked={personalDetails?.is_seller ?? authDetails?.isSeller}
              onChange={onChange}
              color="primary"
            />
          }
          label="Are you a seller ?"
          labelPlacement="start"
        />
      </Grid>
    </Grid>
  );
};

export default EditPersonalDetails;
