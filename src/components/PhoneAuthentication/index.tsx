// PhoneAuth.js
import React, { useState } from "react";
import { auth, RecaptchaVerifier } from "../../firebase";
import {
  signInWithPhoneNumber
} from "firebase/auth";
import axiosInstance from "../../common/axiosxhr";

const PhoneAuthentication = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setUpRecaptcha = () => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(auth,
      "recaptcha-container",
      { size: "invisible" },
    );
  };

  const handleSendOtp = async () => {
    if (!phone) return alert("Enter a valid phone number");
    setUpRecaptcha();

    try {
      const confirmation = await signInWithPhoneNumber(auth, phone, (window as any).recaptchaVerifier);
      setConfirmationResult(confirmation);
      alert("OTP sent!");
    } catch (error) {
      console.error(error);
      alert("Error sending OTP");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || !confirmationResult) return;

    try {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      const idToken = await result.user.getIdToken();
      await axiosInstance.post('/api/auth/login', { id_token: idToken }, { withCredentials: true });
      alert("Phone verified successfully!");
      console.log("User:", user);
    } catch (error) {
      console.error(error);
      alert("Invalid OTP");
    }
  };

  

  return (
    <div>
      <h2>Phone OTP Verification</h2>
      <input
        type="tel"
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>

      <br />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneAuthentication;
