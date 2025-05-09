import React from 'react';
import { Box, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h2">404</Typography>
      <Typography variant="h5">Page Not Found</Typography>
    </Box>
  );
}
