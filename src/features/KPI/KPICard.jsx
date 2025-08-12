import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function KPICard({
  icon: Icon,
  title,
  value,
  target,
  unit = '',
  percentOfTarget,
  trend = 'up', // "up" or "down"
  trendValue,
  progressColor = 'bg-blue-500',
}) {
  const isPositiveTrend = trend === 'up';
  const TrendIcon = isPositiveTrend ? FaArrowUp : FaArrowDown;

  return (
    <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-lg">
            <Icon className="w-5 h-5 text-gray-600" />
          </div>
          <span className="text-m font-bold text-gray-700">{title}</span>
        </div>

        {/* Trend */}
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
            isPositiveTrend
              ? 'text-green-600 bg-green-50'
              : 'text-red-600 bg-red-50'
          }`}
        >
          <TrendIcon className="w-3 h-3" />
          {trendValue}
        </div>
      </div>

      {/* Value and Target */}
      <div className="mb-4 flex items-baseline justify-between">
        <div className="text-3xl font-bold text-gray-900">
          {unit}
          {value.toLocaleString()}
        </div>
        <div className="text-sm text-gray-500">
          Target: {unit}
          {target.toLocaleString()}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${progressColor}`}
            style={{ width: `${Math.min(percentOfTarget, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Progress Text */}
      <div className="text-sm text-gray-600">{percentOfTarget}% of target</div>
    </div>
  );
}

export default KPICard;
