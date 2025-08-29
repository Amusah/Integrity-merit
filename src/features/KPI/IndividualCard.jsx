import React from "react";
import ProgressBar from "./ProgressBar";

const IndividualCard = ({
  name,
  title,
  score,
  metrics,
  scoreColor = "text-green-600",
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
      <span className={`text-2xl font-bold ${scoreColor}`}>{score}%</span>
    </div>
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700">{metric.name}</span>
            <span className="text-sm font-medium">{metric.value}%</span>
          </div>
          <ProgressBar
            percentage={metric.value}
            color="bg-gray-900"
            showPercentage={false}
          />
        </div>
      ))}
    </div>
    <div className="flex space-x-2 mt-4">
      <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
        View Details
      </button>
      <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
        Set Goals
      </button>
    </div>
  </div>
);

export default IndividualCard;
