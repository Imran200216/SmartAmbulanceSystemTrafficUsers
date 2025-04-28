import React from "react";
import SuccesMailImg from "../../assets/svg/success-mail.svg";
import ForgetPasswordSucceessButton from "../../components/Button";
import TextButton from "../../components/TextButton";
import { useNavigate } from "react-router-dom";

const SuccessForgetPassword = () => {
  // Router for navigation
  const navigate = useNavigate();

  // Navigate to login screen
  const handleNavigationToLogin = () => {
    navigate("/login");
  };

  // Navigate to forget password screen
  const handleNavigationToForgetPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 px-4">
      {/* Card Container */}
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        {/* Success Mail Image */}
        <img
          src={SuccesMailImg}
          alt="Success Mail"
          className="w-[160px] h-[160px] object-contain mb-6 mx-auto"
        />

        {/* Success Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4 font-kumbh">
          Password Reset Successful
        </h2>

        {/* Success Description */}
        <p className="text-sm font-normal text-center text-gray-600 mb-8 font-kumbh">
          We have sent a password reset link to your email address. Please check
          your inbox to reset your password.
        </p>

        {/* Back to Login Button */}
        <ForgetPasswordSucceessButton
          title="Back to Login"
          onClick={handleNavigationToLogin}
          className="w-[80%] max-w-[300px] mx-auto"
        />

        {/* Skip Later Button - centered */}
        <TextButton
          onClick={handleNavigationToForgetPassword}
          title="Skip for now"
          className="mt-4 mx-auto text-blue-500 w-[80%] max-w-[300px] text-center"
        />
      </div>
    </div>
  );
};

export default SuccessForgetPassword;
