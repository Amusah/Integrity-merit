import React from 'react';
import { FaUsers, FaDollarSign, FaClock, FaUserCheck } from 'react-icons/fa';
import KPICard from './KPICard';

function KPIDashboard() {
  // metrics data
  const metrics = [
    {
      icon: FaUsers,
      title: 'Employee Satisfaction',
      value: 87,
      target: 90,
      percentOfTarget: 96.7,
      trend: 'up',
      trendValue: '+3%',
      progressColor: 'bg-blue-600',
    },
    {
      icon: FaDollarSign,
      title: 'Revenue per Employee',
      value: 152000,
      target: 160000,
      unit: '$',
      percentOfTarget: 95.0,
      trend: 'up',
      trendValue: '+8%',
      progressColor: 'bg-green-600',
    },
    {
      icon: FaClock,
      title: 'Average Response Time',
      value: 2.3,
      target: 2,
      unit: '',
      percentOfTarget: 115.0,
      trend: 'down',
      trendValue: '-0.2',
      progressColor: 'bg-red-600',
    },
    {
      icon: FaUserCheck,
      title: 'Employee Retention',
      value: 94,
      target: 95,
      percentOfTarget: 98.9,
      trend: 'up',
      trendValue: '+2%',
      progressColor: 'bg-blue-600',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Performance Metrics & Analytics Dashboard
        </h1>

        {/* map through kpicards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <KPICard key={index} {...metric} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KPIDashboard;
