import React, { useState } from "react";
import KPICard from "./KPICard";
import { metrics } from "../KPI/KPIConstant";
import KPIHeader from "./KPIHeader";
import DepartmentKPIs from "./DepartmentKPIs";
import IndividualKPIs from "./IndividualKPIs";
import TrendsAnalytics from "./TrendsAnalytics";

function KPIDashboard() {
  const [activeTab, setActiveTab] = useState("department");

  const renderContent = () => {
    switch (activeTab) {
      case "department":
        return <DepartmentKPIs />;
      case "individual":
        return <IndividualKPIs />;
      case "trends":
        return <TrendsAnalytics />;
      default:
        return <DepartmentKPIs />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* <div className=""> */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Performance Metrics & Analytics Dashboard
      </h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <KPICard key={index} {...metric} />
        ))}
      </div>

      {/* New detailed KPI sections */}
      <div className="mt-8">
        <KPIHeader activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
    </div>
    // </div>
  );
}

export default KPIDashboard;
