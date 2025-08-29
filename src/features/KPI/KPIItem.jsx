import React from "react";
import ProgressBar from "./ProgressBar";

const KPIItem = ({
  title,
  value,
  target,
  percentage,
  unit = "",
  color = "bg-gray-900",
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-start">
      <h4 className="text-sm font-medium text-gray-900">{title}</h4>
      <span
        className={`text-sm px-2 py-1 rounded ${
          percentage >= 100
            ? "bg-green-100 text-green-800"
            : percentage >= 80
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {value}
        {unit}
      </span>
    </div>
    <ProgressBar percentage={percentage} color={color} />
    <div className="flex justify-between text-xs text-gray-500">
      <span>
        Target: {target}
        {unit}
      </span>
      <span>{percentage.toFixed(1)}%</span>
    </div>
  </div>
);

export default KPIItem;
