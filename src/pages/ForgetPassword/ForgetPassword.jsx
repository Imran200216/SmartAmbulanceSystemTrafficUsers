import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import ResetPasswordButton from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const ForgetPassword = () => {
  // hooks
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // router
  const navigate = useNavigate();

  // Handle the back button click
  const handleBack = () => {
    navigate(-1);
  };

  // Navigate to Forget Password success page
  const handleNavigateToForgetPasswordSucess = () => {
    navigate("/forgot-password-success");
  };

  // Forget password sent link
  const handleForgetPasswordSentLink = async () => {
    // Reset error messages before checking
    setEmailError("");

    // Check if email is empty
    if (!email) {
      setEmailError("Email is required");
      return; // Prevent further execution if email is empty
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://192.168.1.103:8000/forget_password",
        {
          email,
        }
      );

      // show success toast
      toast.success("Password reset link sent successfully!");

      console.log("Forget password link successfull", response.data);

      // navigate to forget password success page
      handleNavigateToForgetPasswordSucess();
    } catch (error) {
      console.error(
        "Forget Password Sent Link failed",
        error.response?.data || error.message
      );

      // Error state
      setError(error.response?.data?.detail || "Forget Password failed");

      // Show error toast
      toast.error(error.response?.data?.detail || "Forget Password failed");

      // Alert
      alert(error.response?.data?.detail || "Forget Password failed");
    } finally {
      setIsLoading(false);
    }
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
        <div className="mb-4">
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-2">{emailError}</p>
          )}
        </div>

        {/* Reset Button */}
        <div className="mt-5 mb-5 w-full">
          <ResetPasswordButton
            isLoading={isLoading}
            title="Reset Password"
            onClick={handleForgetPasswordSentLink}
          />
        </div>
      </div>

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
