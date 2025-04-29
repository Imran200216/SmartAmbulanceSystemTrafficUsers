import React, { useState } from "react";
import clsx from "clsx";

 export const Button = ({ title, onClick, isLoading }) => {
  return (
    <button
      className="mt-3 mb-3 bg-[#1AC0F8] text-white px-4 py-2 rounded-md hover:bg-[#16a8d4] transition duration-200 w-full flex items-center justify-center"
      onClick={onClick}
      
      disabled={isLoading} 
    >
      {isLoading ? (
        <>
          {/* Loader (You can customize this spinner as you like) */}
          <div className="border-t-2 border-white border-solid w-5 h-5 rounded-full animate-spin mr-2" />
          Loading...
        </>
      ) : (
        title
      )}
    </button>
  );
};

// export default Button;
