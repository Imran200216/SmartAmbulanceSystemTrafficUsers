import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      {/* Redirect root to /login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Route for Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Route for SignUp Page */}
      <Route path="/sign-up" element={<SignUp />} />

      {/* Route for Forget Password Page */}
      <Route path="/forgot-password" element={<ForgetPassword />} />

      {/* Route for Home Page */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
