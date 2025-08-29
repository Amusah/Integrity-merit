import React from "react";
import { distributionData, performanceData } from "./KPIConstant";
import { FaChartLine } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

const TrendsAnalytics = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Trends */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">
              <FaChartLine />{" "}
            </span>
            Performance Trends
          </h3>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-1">89.5%</div>
            <div className="text-sm text-gray-600">
              Average Performance Score
            </div>
          </div>
          <div className="space-y-3">
            {performanceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{item.quarter}</span>
                <div className="flex items-center space-x-3">
                  {/* this is for the small progressive bar */}
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium min-w-[3rem]">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">
              <BiTime />
            </span>
            Performance Distribution
          </h3>
          <div className="space-y-4">
            {distributionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-700">{item.level}</span>
                </div>
                <span className="text-sm font-medium">
                  {item.employees} employees
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Key Insights & Recommendations
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-3">Positive Trends</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-green-700">
              <li>Employee satisfaction increased by 3% this quarter</li>
              <li>Revenue per employee up 8% compared to last year</li>
              <li>IT department exceeding uptime targets</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-3">
              Areas for Improvement
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-yellow-700">
              <li>Response time still above target by 0.3 seconds</li>
              <li>Training completion rates need improvement</li>
              <li>16 employees require performance support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsAnalytics;
