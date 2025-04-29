import React from "react";

export const SmartAmbulanceCard = ({
  employeeEmail,
  employeeId,
  hospitalAddress,
  timeStamp,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full">
      {/* Employee Email */}
      <div className="mb-4">
        <h3 className="text-gray-400 font-normal text-sm font-kumbh">
          Employee Email
        </h3>
        <p className="text-gray-900 font-medium">{employeeEmail}</p>
      </div>

      {/* Employee ID */}
      <div className="mb-4">
        <h3 className="text-gray-400 font-normal text-sm font-kumbh">
          Employee ID
        </h3>
        <p className="text-gray-900 font-medium">{employeeId}</p>
      </div>

      {/* Hospital Address */}
      <div className="mb-4">
        <h3 className="text-gray-400 font-normal text-sm font-kumbh">
          Hospital Address
        </h3>
        <p className="text-gray-900 font-medium font-kumbh">
          {hospitalAddress}
        </p>
      </div>

      {/* Timestamp */}
      <div>
        <h3 className="text-gray-400 font-normal text-sm font-kumbh">
          TimeStamp
        </h3>
        <p className="text-gray-900 font-medium">{timeStamp}</p>
      </div>
    </div>
  );
};


