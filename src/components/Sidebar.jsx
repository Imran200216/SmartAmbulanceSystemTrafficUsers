import React, { useState } from "react";
import { ChevronFirst, ChevronLast, LogOut } from "lucide-react";

export const Sidebar = ({
  sideBarLogo,
  children,
  onLogOutClick,
  userName,
  userEmailAddress,
}) => {
  const [expanded, setExpanded] = useState(true); // initially expanded

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Top section with logo and toggle button */}
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* Logo */}
          <img
            src={sideBarLogo}
            alt="Logo"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />

          {/* Collapse/Expand Button */}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Sidebar Items */}
        <ul className="flex-1 px-3">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { expanded })
          )}
        </ul>

        {/* Bottom user profile */}
        <div className="border-t flex p-3">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-md"
          />

          {/* User details */}
          {expanded && (
            <div className="flex justify-between items-center w-52 ml-3">
              <div className="leading-4">
                <h4 className="font-semibold font-kumbh">{userName}</h4>
                <span className="text-xs text-gray-600">
                  {userEmailAddress}
                </span>
              </div>
              <LogOut size={20} onClick={onLogOutClick} />
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};
