import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import SuccessForgetPassword from "./pages/SuccessForgetPassword/SuccessForgetPassword";
import Home from "./pages/Home/Home";
import Splash from "./pages/Splash/Splash";

function App() {
  return (
    <Routes>
      {/* Redirect root to /splash */}
      <Route path="/" element={<Navigate to="/splash" />} />

      {/* Route for Splash Page */}
      <Route path="/splash" element={<Splash />} />

      {/* Route for Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Route for SignUp Page */}
      <Route path="/sign-up" element={<SignUp />} />

      {/* Route for Forget Password Page */}
      <Route path="/forgot-password" element={<ForgetPassword />} />

      {/* Route for Forget Password Success Page */}
      <Route
        path="/forgot-password-success"
        element={<SuccessForgetPassword />}
      />

      {/* Route for Home Page */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
