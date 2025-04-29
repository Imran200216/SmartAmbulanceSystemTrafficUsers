import React from "react";

export const TextButton = ({ title, onClick, href }) => {
  return (
    <div>
      <a
        href={href || "#"}
        onClick={onClick}
        className="text-[#1AC0F8] font-normal hover:underline text-sm font-kumbh"
      >
        {title}
      </a>
    </div>
  );
};
