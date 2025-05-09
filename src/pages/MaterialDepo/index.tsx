import React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import Box from '@mui/material/Box';
import MaterialDashboard from './components/MaterialDashboard';
import { useSession } from '../../app/SessionContext';
import CreateRequest from './components/CreateRequest';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';

const MaterialDepo: React.FC = () => {
  const { session } = useSession();
  const isAuthenticated = React.useMemo(() => !!session?.user?.id, [session]);
  return (
    <PageContainer
      title="Material Depo"
      breadcrumbs={[
        { title: 'Home', path: '/' },
        { title: 'Material Depo', path: '/material-depo' },
      ]}
    >
      <Grid container sx={{ mb: 1 }} rowSpacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <FormControl>
            <OutlinedInput
              id="phone-number"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="Search items"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <CreateRequest />
        </Grid>
      </Grid>
      <MaterialDashboard />
    </PageContainer>
  );
};

export default MaterialDepo;
