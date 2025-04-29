import React from "react";
import clsx from "clsx";

export const SidebarItems = ({ icon, text, active, alert, expanded }) => {
  return (
    <li
      className={clsx(
        "relative flex items-center py-2 px-3 my-1 font-medium font-kumbh rounded-md cursor-pointer transition-colors",
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      )}
    >
      {/* Icon */}
      {icon}

      {/* Text, only show if expanded */}
      {expanded && <span className="ml-3">{text}</span>}

      {/* Alert dot */}
      {alert && (
        <div className="absolute right-2 w-2 h-2 rounded-full bg-indigo-400"></div>
      )}
    </li>
  );
};


