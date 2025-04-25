import { useState } from "react";
import InputField from "../../components/InputField";
import LoginButton from "../../components/Button";
import TextButton from "../../components/TextButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // If using React Router for navigation
  const navigate = useNavigate();

  // handle login
  const handleLogin = () => {
    setIsLoading(true);

    // Simulate an async login process (e.g., API call)
    setTimeout(() => {
      console.log("Logged in successfully");
      setIsLoading(false);
    }, 2000); // Simulate a 2-second delay
  };

  // Navigate to forget password screen
  const navigateToForgetPassword = () => {
    navigate("/forgot-password"); 
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
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password text field  */}
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Forget password text btn */}
        <div className="flex flex-row justify-end mt-4 mb-10">
          <TextButton
            title="Forget Password?"
            onClick={navigateToForgetPassword}
          />
        </div>

        {/* Login Button with margin */}
        <div className="mt-5 mb-5 w-full">
          <LoginButton
            title="Login"
            onClick={handleLogin}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
