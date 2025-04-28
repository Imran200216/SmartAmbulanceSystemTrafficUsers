import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplashLogo from "../../assets/svg/splash.svg";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const splashStatusBox = localStorage.getItem("userSplashStatus");
    const authStatusBox = localStorage.getItem("userAuthStatus");

    if (!splashStatusBox) {
      // First time opening the app
      localStorage.setItem("userSplashStatus", "true");

      // Show splash screen for 3 seconds, then go to login
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      // Splash already shown
      if (authStatusBox === "true") {
        // If user is already authenticated
        navigate("/home");
      } else {
        // Splash shown but user not authenticated
        navigate("/login");
      }
    }
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Splash logo */}
      <img
        src={SplashLogo}
        alt="Splash Logo"
        className="w-[160px] h-[160px] object-contain mb-10"
      />

      {/* App name */}
      <h2 className="font-kumbh font-semibold text-2xl">
        Smart Ambulance System
      </h2>
    </div>
  );
};

export default Splash;
