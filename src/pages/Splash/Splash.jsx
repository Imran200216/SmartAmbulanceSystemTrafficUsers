import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplashLogo from "../../assets/splash.svg";

const Splash = () => {
  // React Router
  const navigate = useNavigate();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("splashStatus");

    if (!isFirstVisit) {
      // Set a flag indicating the splash screen has been shown
      localStorage.setItem("splashStatus", "true");

      // Set a timer to navigate after 3 seconds
      const timer = setTimeout(() => {
        // Login screen
        navigate("/login");
      }, 3000);

      // Clear the timer on cleanup
      return () => clearTimeout(timer);
    } else {
      // If already visited, skip splash screen and go directly to login
      navigate("/login");
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
