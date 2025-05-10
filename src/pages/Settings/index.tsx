import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustomAvatar from '../../components/CustomAvatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import EditPersonalDetails from './components/EditPersonalDetails';
import ViewPersonalDetails from './components/ViewPersonalDetails';
import Paper from '@mui/material/Paper';
import EditBusinessDetails from './components/EditBusinessDetails';
import ViewBusinessDetails from './components/ViewBusinessDetails';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import { useSession } from '../../app/SessionContext';
import { PersonalDetails } from './types';
import axiosInstance from '../../common/axiosxhr';

const Settings: React.FC = () => {
  const [isEditPersonalDetailOpen, setEditPersonalDetailsOpen] =
    useState(false);
  const [isEditBusinessDetailOpen, setEditBusinessDetailsOpen] =
    useState(false);
  const {
    authDetails,
    session = {},
    setAppLoading,
    setAuthDetails,
    setSession,
  } = useSession();
  const account = session?.user || {};
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmitPersonalDetails = async (e) => {
    e.preventDefault();
    setAppLoading(true);
    try {
      const res = await axiosInstance.put('/api/profile', personalDetails, {
        withCredentials: true,
      });
      if (res.data) {
        alert(res.data?.message);
        const user = res.data?.user;
        const name = [user.first_name, user.last_name]
          .filter(Boolean)
          .join(' ')
          .trim();
        setSession({
          user: {
            id: user.uid,
            name: name ?? account?.name,
            email: account?.email,
          },
        });
        setAuthDetails({
          ...authDetails,
          firstName: user.first_name,
          lastName: user.last_name,
          fullName: name,
          isSeller: user.is_seller,
        });
        setEditPersonalDetailsOpen(false);
        console.log('Submitted:', personalDetails);
      }
      setAppLoading(false);
    } catch (error) {
      console.log('Error in saving details', error);
      setAppLoading(false);
    }
  };

  return (
    <Box sx={{ p: 2, m: '16px auto' }}>
      <Paper
        sx={{
          overflow: 'hidden',
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 50,
            background: 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            px: 3,
            py: 2,
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 3 }}>
            <CustomAvatar sx={{ width: 100, height: 100, fontSize: 32 }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <ListItemText
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                }}
                primary={account?.name}
                secondary={account?.email}
                primaryTypographyProps={{ variant: 'body2', fontSize: 24 }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                {!!authDetails?.isSeller && (
                  <Chip
                    sx={{ height: 20, fontSize: 12 }}
                    color="warning"
                    label="Seller"
                  />
                )}
                {/* <Chip sx={{ height: 20, fontSize: 12}} color="info" label="Retailer" /> */}
              </Box>
            </Box>
          </Box>

          <Divider sx={{ width: '100%' }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            {isEditPersonalDetailOpen ? (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={() => setEditPersonalDetailsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmitPersonalDetails}
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                onClick={() => setEditPersonalDetailsOpen(true)}
              >
                Edit
              </Button>
            )}
          </Box>
          <Typography variant="body1" sx={{ width: '100%', fontWeight: 550 }}>
            Personal Details:
          </Typography>

          {isEditPersonalDetailOpen ? (
            <EditPersonalDetails
              onChange={handleChange}
              personalDetails={personalDetails}
            />
          ) : (
            <ViewPersonalDetails />
          )}

          <Divider sx={{ width: '100%' }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            {isEditBusinessDetailOpen ? (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={() => setEditBusinessDetailsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setEditBusinessDetailsOpen(false)}
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                onClick={() => setEditBusinessDetailsOpen(true)}
              >
                Edit
              </Button>
            )}
          </Box>

          <Typography variant="body1" sx={{ width: '100%', fontWeight: 550 }}>
            Business Details:
          </Typography>

          {isEditBusinessDetailOpen ? (
            <EditBusinessDetails />
          ) : (
            <ViewBusinessDetails />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Settings;
