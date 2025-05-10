import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  FormControl,
  InputLabel,
} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../firebase';
import axiosInstance from '../../common/axiosxhr';
import { useSession } from '../../app/SessionContext';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function PhoneAuthModal({ open, onClose }) {
  const { setSession, setAuthDetails} = useSession();
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setUpRecaptcha = () => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      { size: 'invisible', badge: 'inline' },
    );
  };

  const handleSendOtp = async () => {
    if (!phone) return alert('Enter a valid phone number');
    setUpRecaptcha();

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        '+91' + phone,
        (window as any).recaptchaVerifier,
      );
      setConfirmationResult(confirmation);
      setStep('otp');
    } catch (error) {
      console.error(error);
      alert('Error sending OTP');
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || !confirmationResult) return;

    try {
      const result = await confirmationResult.confirm(otp);
      const idToken = await result.user.getIdToken();
      const res = await axiosInstance.post(
        '/api/auth/login',
        { id_token: idToken },
      );
      if (res.data) {
        const user = res.data.user;
        const name = [user.first_name, user.last_name]
          .filter(Boolean)
          .join(' ')
          .trim();
        setSession({
          user: {
            id: user.uid,
            name: name ?? user.phone,
            email: user.phone,
          },
        });
        setAuthDetails({
          firstName: user.first_name,
          lastName: user.last_name,
          fullName: name,
          id: user.uid,
          phone: user.phone,
          email: user.email,
          isSeller: user.is_seller,
        });
        alert('Phone verified successfully!');
      }
      onClose();
    } catch (error) {
      console.error(error);
      alert('Invalid OTP');
    }
  };

  const handleBack = () => {
    setStep('phone');
    setOtp('');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" textAlign="center" mb={2}>
          {step === 'phone' ? 'Welcome to My App' : 'Enter OTP'}
        </Typography>

        {step === 'phone' && (
          <Stack spacing={2}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
              <OutlinedInput
                id="phone-number"
                startAdornment={
                  <InputAdornment position="start">+91</InputAdornment>
                }
                label="Phone"
                placeholder="9XXXXXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSendOtp}
              disabled={!phone.match(/^\+?\d{10,15}$/)}
            >
              Send OTP
            </Button>
          </Stack>
        )}

        {step === 'otp' && (
          <Stack spacing={2}>
            <TextField
              label="OTP"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6}
            >
              Verify
            </Button>
            <Button onClick={handleBack} color="secondary">
              Back
            </Button>
          </Stack>
        )}
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
          <div id="recaptcha-container"></div>
        </Box>
      </Box>
    </Modal>
  );
}
