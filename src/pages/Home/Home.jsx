import React from "react";
import Sidebar from "../../components/Sidebar";
import SidebarItems from "../../components/SidebarItems";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar>
        {/* Sidebar Menu Items */}
        <SidebarItems icon={<LifeBuoy size={20} />} text="Home" active />
        <SidebarItems icon={<Receipt size={20} />} text="Profile" />
        <SidebarItems icon={<Settings size={20} />} text="Settings" />
        <SidebarItems icon={<Package size={20} />} text="Notifications" alert />
      </Sidebar>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Content Here</h1>
      </div>
    </div>
  );
};

export default Home;
