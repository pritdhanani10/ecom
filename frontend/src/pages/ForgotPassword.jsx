import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const ForgotPassword = () => {
     const { backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOTP = async () => {
    try {
      const response = await axios.post(backendUrl + "/api/user/forgot-password", { email });
      if (response.data.success) {
        toast.success("OTP sent to your email");
        setStep(2);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error sending OTP");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(backendUrl + "/api/user/verify-otp", { email, otp });
      if (response.data.success) {
        toast.success("OTP verified");
        setStep(3);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error verifying OTP");
    }
  };

  const handleResetPassword = async () => {
    try {
      // Remove the extra space before /api/user/reset-password
      const response = await axios.post(backendUrl + "/api/user/reset-password", { email, otp, newPassword });
      if (response.data.success) {
        toast.success("Password reset successfully");
        window.location.href = "/login";
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {step === 1 && (
          <>
            <h2 className="text-2xl mb-4">Forgot Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendOTP} className="w-full bg-blue-500 text-white py-2 rounded">
              Send OTP
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="text-2xl mb-4">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-2 border rounded mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOTP} className="w-full bg-blue-500 text-white py-2 rounded">
              Verify OTP
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-2xl mb-4">Reset Password</h2>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 border rounded mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword} className="w-full bg-blue-500 text-white py-2 rounded">
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;