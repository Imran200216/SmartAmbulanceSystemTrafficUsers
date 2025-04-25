import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

function App() {
  return (
    <Routes>
      {/* Route for Login Page */}
      <Route path="/" element={<Login />} />

      {/* Route for SignUp Page */}
      <Route path="/SignUp" element={<SignUp />} />

      {/* Route for Forget Password Page */}
      <Route path="/forgot-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
