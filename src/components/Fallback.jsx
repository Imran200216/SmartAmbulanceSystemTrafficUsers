import React from "react";
import Lottie from "lottie-react";

const Fallback = ({ lottie, text }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Lottie animation */}
      <Lottie
        animationData={lottie}
        className="w-72 object-cover"
        loop={true}
      />

      {/* Fall back text  */}
      <h4 className="font-medium font-kumbh">{text}</h4>
    </div>
  );
};

export default Fallback;
