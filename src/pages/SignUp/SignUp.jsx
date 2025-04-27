import React, { useState } from "react";
import InputField from "../../components/InputField";
import SignUpButton from "../../components/Button";
import { useNavigate } from "react-router-dom"; 

const SignUp = () => {
  // State hooks for email, password, and confirm password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // To display error messages

  const navigate = useNavigate();

  // Handle sign up
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    // Simulate an async sign-up process (e.g., API call)
    setTimeout(() => {
      console.log("Signed up successfully");
      setIsLoading(false);
      // After successful sign-up, navigate to the login screen or home
      navigate("/login");
    }, 2000); // Simulate a 2-second delay
  };

  // Navigate to the login screen
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-kumbh font-semibold mb-3">Sign Up</h2>

        {/* Sub Title */}
        <p className="text-sm font-kumbh font-normal text-gray-400 mb-4">
          Enter your details below to create a new account
        </p>

        {/* Email text field */}
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password text field */}
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password text field */}
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Error message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Sign Up Button */}
        <div className="mt-5 mb-5 w-full">
          <SignUpButton
            title="Sign Up"
            onClick={handleSignUp}
            isLoading={isLoading}
          />
        </div>

        {/* Already have an account link */}
        <div className="flex justify-center mt-4">
          <p className="text-sm font-kumbh text-gray-500">
            Already have an account?{" "}
            <button
              className="text-blue-500"
              onClick={navigateToLogin}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
