import React from "react";

const ProgressBar = ({
  percentage,
  color = "bg-gray-900",
  showPercentage = true,
}) => (
  <div className="flex items-center space-x-3">
    <div className="flex-1 bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      ></div>
    </div>
    {showPercentage && (
      <span className="text-sm text-gray-600 min-w-[3rem] text-right">
        {percentage}%
      </span>
    )}
  </div>
);

export default ProgressBar;
