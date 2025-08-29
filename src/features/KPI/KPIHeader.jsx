import React from "react";

const KPIHeader = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "department", label: "Department KPIs" },
    { id: "individual", label: "Individual KPIs" },
    { id: "trends", label: "Trends & Analytics" },
  ];

  return (
    <div className="bg-gray-100 p-1 rounded-full mb-6">
      <div className="flex justify-between w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 text-center px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KPIHeader;
