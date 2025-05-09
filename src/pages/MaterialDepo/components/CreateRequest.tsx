import React, { useState } from 'react';
import {
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreateOrder = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Create Order
      </Button>

      <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: isMobile
            ? {
                height: '80vh',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }
            : { width: 400 },
        }}
        sx={{ zIndex: 1400 }}
      >
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Create Order</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box p={2}>{/* Order form content goes here */}</Box>
      </Drawer>
    </Box>
  );
};

export default CreateOrder;
