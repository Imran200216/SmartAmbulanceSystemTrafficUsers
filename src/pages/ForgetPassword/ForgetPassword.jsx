import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import ResetPasswordButton from "../../components/Button";

const ForgetPassword = () => {
  // Initialize navigate
  const navigate = useNavigate();

  // Handle the back button click
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Back Button */}
        <button className="text-blue-500 mb-4" onClick={handleBack}>
          &lt; Back
        </button>

        {/* Title */}
        <h2 className="text-2xl font-kumbh font-semibold mb-3">
          Forget Password
        </h2>

        {/* Sub Title */}
        <p className="text-sm font-kumbh font-normal text-gray-400 mb-4">
          Please enter your email to reset your password
        </p>

        {/* Email text field for reset */}
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
        />

        {/* Reset Button */}
        <div className="mt-5 mb-5 w-full">
          <ResetPasswordButton title="Reset Password" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
