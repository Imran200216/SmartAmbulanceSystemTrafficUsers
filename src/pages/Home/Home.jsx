import React, { useEffect, useState } from "react";
import { House } from "lucide-react";
import axios from "axios";
import ItemNotFoundAnimation from "../../assets/lottie/Item-not-found.json";
import InternetNotFoundAnimation from "../../assets/lottie/Internet-not-found.json";
import LoadingAnimation from "../../assets/lottie/Loading.json";
import SAS from "../../assets/svg/splash.svg";
import {
  SmartAmbulanceCard,
  Fallback,
  Sidebar,
  SidebarItems,
} from "../../components";

const Home = () => {
  // Hooks
  const [ambulanceData, setAmbulanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  // FASTAPI Base Url
  const BASE_URL = "http://192.168.1.103:8000";

  // Fetch ambulance status
  useEffect(() => {
    const fetchAmbulanceStatus = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user_info`, {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        console.log("User Info:", response.data);
        setUserInfo(response.data); // <-- store user info here
      } catch (error) {
        console.error(
          "Error fetching user info:",
          error.response?.data || error.message
        );
      }
    };

    fetchAmbulanceStatus();

    // Listen for online/offline changes
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    // Clean up listeners on unmount
    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  // fetching the current user details
  useEffect(() => {
    const fetchUserInfo = async () => {
      const idToken = localStorage.getItem("idToken");

      if (!idToken) {
        console.error("ID Token not found");
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/user_info`, {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        console.log("User Info:", response.data);
        setUserInfo(response.data); // Set username & email
      } catch (error) {
        console.error(
          "Error fetching user info:",
          error.response?.data || error.message
        );
      }
    };

    fetchUserInfo();

    // Listen for online/offline changes
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  // Logout Functionality
  const HandleLogOut = async () => {
    const token = localStorage.getItem("idToken");

    if (!token) {
      console.warn("No token found in local storage");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/log_out`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Logout failed:", error.detail);
        return;
      }

      // Successfully logged out
      localStorage.removeItem("idToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userEmail");

      // Redirect or update app state
      window.location.href = "/login"; // or use navigation logic
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="flex">
      <Sidebar>
        {/* Sidebar Menu Items */}
        <SidebarItems
          sideBarLogo={SAS}
          onLogOutClick={HandleLogOut}
          userName={userInfo?.userName}
          userEmailAddress={userInfo?.userEmailAddress}
          icon={<House size={20} />}
          text="Home"
          active
        />
      </Sidebar>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">
          Smart Ambulance Status Holds
        </h1>

        {/* Loader */}
        {loading ? (
          <Fallback
            lottie={LoadingAnimation}
            text="Loading SmartAmbulance Status..."
          />
        ) : !isOnline ? (
          <Fallback
            lottie={InternetNotFoundAnimation}
            text="Internet connection not available!"
          />
        ) : ambulanceData.length === 0 ? (
          // If no data is available, show "No Smart Ambulance Found"
          <Fallback
            lottie={ItemNotFoundAnimation}
            text="No Smart Ambulance Found"
          />
        ) : (
          // Show ambulance cards if there is data
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambulanceData.map((record, index) => (
              <SmartAmbulanceCard
                key={index}
                employeeEmail={record.employeeEmail}
                employeeId={record.employeeId}
                hospitalAddress={record.hospitalAddress}
                timeStamp={record.timestamp}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
