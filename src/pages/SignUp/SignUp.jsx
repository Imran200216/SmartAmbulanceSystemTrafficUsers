import React, { useState } from "react";
import InputField from "../../components/InputField";
import SignUpButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  // hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // React Router for navigation
  const navigate = useNavigate();

  // Handle sign up with validation
  const handleSignUp = async () => {
    // Validate the fields
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    setError(""); // Clear previous error

    // Log the data being sent to the server
    console.log("Username:", username, "Email:", email, "Password:", password);

    try {
      const response = await axios.post(
        "http://192.168.1.103:8000/email_password_sign_up",
        {
          username,
          email,
          password,
        }
      );

      console.log("Sign up successful", response.data);

      // Store the auth session in localStorage
      localStorage.setItem("userAuthStatus", "true");

      // Show success toast
      toast.success("Sign Up successful!");

      // After successful sign up, navigate to home screen
      navigateToHome();
    } catch (err) {
      console.error("Sign up failed", err.response?.data || err.message);

      // Error state
      setError(err.response?.data?.detail || "Sign Up failed");

      // Show Failure toast
      toast.error("Sign Up Failed!");

      // Alert
      alert(err.response?.data?.detail || "Sign up failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to the login screen
  const navigateToLogin = () => {
    navigate("/login");
  };

  // Navigate to the home screen
  const navigateToHome = () => {
    navigate("/home");
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

        {/* Username text field */}
        <InputField
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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
            <button className="text-blue-500" onClick={navigateToLogin}>
              Login
            </button>
          </p>
        </div>
      </div>

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
