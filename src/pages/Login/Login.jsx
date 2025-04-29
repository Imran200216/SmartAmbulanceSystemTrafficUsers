import { useState } from "react";
import { InputField, Button, TextButton } from "../../components";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  // hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // FASTAPI Base Url
  const BASE_URL = "http://192.168.1.103:8000";

  //React Router for navigation
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async () => {
    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    setIsLoading(true);

    // Log the data being sent to the server
    console.log("Email:", email, "Password:", password);

    try {
      const response = await axios.post(
        `${BASE_URL}/email_password_login`,
        {
          email,
          password,
        }
      );

      console.log("Login successful", response.data);

      // Store the auth session in localStorage
      localStorage.setItem("userAuthStatus", "true");

      // Show success toast
      toast.success("Login successful!");

      // After successful login, navigate to Home screen
      navigateToHome();
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);

      // Error state
      setError(error.response?.data?.detail || "Login failed");

      // Show Failure toast
      toast.error("Login Failed!");

      // Alert
      alert(error.response?.data?.detail || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to forget password screen
  const navigateToForgetPassword = () => {
    navigate("/forgot-password");
  };

  // Navigate to the sign up screen
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  // Navigate to the Home screen
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-kumbh font-semibold mb-3">Login</h2>

        {/* Sub Title */}
        <p className="text-sm font-kumbh font-normal text-gray-400 mb-4">
          Enter your email below to login to your account
        </p>

        {/* Email text field */}
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

        {/* Password text field */}
        <div className="mb-4">
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}
        </div>

        {/* Forget password text btn */}
        <div className="flex flex-row justify-end mt-4 mb-10">
          <TextButton
            title="Forget Password?"
            onClick={navigateToForgetPassword}
          />
        </div>

        {/* Login Button with margin */}
        <div className="mt-5 mb-5 w-full">
          <Button title="Login" onClick={handleLogin} isLoading={isLoading} />
        </div>

        {/* new to  have an account */}
        <div className="flex justify-center mt-4">
          <p className="text-sm font-kumbh text-gray-500">
            Don't have an account?{" "}
            <button className="text-blue-500" onClick={navigateToSignUp}>
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
