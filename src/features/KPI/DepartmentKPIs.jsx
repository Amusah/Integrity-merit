import React from "react";
import KPIItem from "./KPIItem";
import { departments } from "./KPIConstant";

const DepartmentKPIs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {departments.map((dept) => (
        <div
          key={dept.name}
          className="bg-white p-6 rounded-lg shadow-sm border"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {dept.name}
          </h3>
          <div className="space-y-6">
            {dept.kpis.map((kpi, index) => (
              <KPIItem key={index} {...kpi} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentKPIs;
