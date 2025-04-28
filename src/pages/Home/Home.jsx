import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import SidebarItems from "../../components/SidebarItems";
import { House } from "lucide-react";
import SmartAmbulanceCard from "../../components/SmartAmbulanceCard";
import axios from "axios";
import Fallback from "../../components/Fallback";
import ItemNotFoundAnimation from "../../assets/lottie/Item-not-found.json";
import InternetNotFoundAnimation from "../../assets/lottie/Internet-not-found.json";
import LoadingAnimation from "../../assets/lottie/Loading.json";

const Home = () => {
  // Hooks
  const [ambulanceData, setAmbulanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  // Fetch ambulance status
  useEffect(() => {
    const fetchAmbulanceStatus = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.103:8000/ambulance_status_records"
        );
        console.log(response.data);
        setAmbulanceData(response.data);
      } catch (error) {
        console.error("Error fetching ambulance status records:", error);

        // If request fails, check if it's a network error
        if (!window.navigator.onLine) {
          setIsOnline(false);
        }
      } finally {
        setLoading(false);
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

  return (
    <div className="flex">
      <Sidebar>
        {/* Sidebar Menu Items */}
        <SidebarItems icon={<House size={20} />} text="Home" active />
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
