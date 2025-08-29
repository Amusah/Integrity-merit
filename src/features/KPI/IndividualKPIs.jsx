import React from "react";
import IndividualCard from "./IndividualCard";
import { individuals } from "./KPIConstant";

const IndividualKPIs = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Individual Performance Metrics
        </h2>
        <button className="text-sm text-gray-600 hover:text-gray-900">
          Filter by Department
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {individuals.map((individual, index) => (
          <IndividualCard key={index} {...individual} />
        ))}
      </div>
    </div>
  );
};

export default IndividualKPIs;
