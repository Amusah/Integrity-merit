import { FaUsers, FaDollarSign, FaClock, FaUserCheck } from "react-icons/fa";

export const metrics = [
  {
    icon: FaUsers,
    title: "Employee Satisfaction",
    value: 87,
    target: 90,
    percentOfTarget: 96.7,
    trend: "up",
    trendValue: "+3%",
    progressColor: "bg-blue-600",
  },
  {
    icon: FaDollarSign,
    title: "Revenue per Employee",
    value: 152000,
    target: 160000,
    unit: "$",
    percentOfTarget: 95.0,
    trend: "up",
    trendValue: "+8%",
    progressColor: "bg-green-600",
  },
  {
    icon: FaClock,
    title: "Average Response Time",
    value: 2.3,
    target: 2,
    unit: "",
    percentOfTarget: 115.0,
    trend: "down",
    trendValue: "-0.2",
    progressColor: "bg-red-600",
  },
  {
    icon: FaUserCheck,
    title: "Employee Retention",
    value: 94,
    target: 95,
    percentOfTarget: 98.9,
    trend: "up",
    trendValue: "+2%",
    progressColor: "bg-blue-600",
  },
];

export const performanceData = [
  { quarter: "Q1 2024", percentage: 87 },
  { quarter: "Q2 2024", percentage: 89 },
  { quarter: "Q3 2024", percentage: 91 },
  { quarter: "Q4 2024", percentage: 92 },
];

export const distributionData = [
  { level: "Excellent (90-100%)", color: "bg-green-500", employees: 156 },
  { level: "Good (80-89%)", color: "bg-blue-500", employees: 203 },
  { level: "Average (70-79%)", color: "bg-yellow-500", employees: 89 },
  { level: "Below Average (<70%)", color: "bg-red-500", employees: 16 },
];

export const individuals = [
  {
    name: "John Smith",
    title: "Senior Developer \u25CF IT",
    score: 92,
    scoreColor: "text-green-600",
    metrics: [
      { name: "Code Quality", value: 95 },
      { name: "Project Delivery", value: 88 },
      { name: "Team Collaboration", value: 93 },
      { name: "Learning & Development", value: 90 },
    ],
  },
  {
    name: "Sarah Johnson",
    title: "HR Director • HR",
    score: 96,
    scoreColor: "text-green-600",
    metrics: [
      { name: "Team Management", value: 98 },
      { name: "Process Improvement", value: 94 },
      { name: "Employee Relations", value: 97 },
      { name: "Strategic Planning", value: 95 },
    ],
  },

  // instead of using " title: "HR Director • HR"," the "\u25CF" is used to replace the dot "."
  {
    name: "Michael Chen",
    title: "Finance Manager \u25CF Finance",
    score: 89,
    scoreColor: "text-yellow-600",
    metrics: [
      { name: "Budget Management", value: 92 },
      { name: "Financial Analysis", value: 88 },
      { name: "Reporting Accuracy", value: 91 },
      { name: "Risk Assessment", value: 85 },
    ],
  },
];

export const departments = [
  {
    name: "Human Resources",
    kpis: [
      {
        title: "Time to Hire",
        value: "18days",
        target: "15days",
        percentage: 120.0,
        color: "bg-green-500",
      },
      {
        title: "Employee Turnover",
        value: "8",
        target: "10",
        percentage: 80.0,
        unit: "%",
        color: "bg-yellow-500",
      },
      {
        title: "Training Completion",
        value: "92",
        target: "95",
        percentage: 96.8,
        unit: "%",
        color: "bg-green-500",
      },
      {
        title: "Employee Engagement",
        value: "85",
        target: "90",
        percentage: 94.4,
        unit: "%",
        color: "bg-yellow-500",
      },
    ],
  },
  {
    name: "Sales",
    kpis: [
      {
        title: "Sales Target Achievement",
        value: "105",
        target: "100",
        percentage: 105.0,
        unit: "%",
        color: "bg-green-500",
      },
      {
        title: "Lead Conversion Rate",
        value: "24",
        target: "25",
        percentage: 96.0,
        unit: "%",
        color: "bg-green-500",
      },
      {
        title: "Customer Satisfaction",
        value: "4.2/5",
        target: "4.5/5",
        percentage: 93.3,
        color: "bg-yellow-500",
      },
      {
        title: "Revenue Growth",
        value: "15",
        target: "12",
        percentage: 125.0,
        unit: "%",
        color: "bg-green-500",
      },
    ],
  },
  {
    name: "IT",
    kpis: [
      {
        title: "System Uptime",
        value: "99.8",
        target: "99.9",
        percentage: 99.9,
        unit: "%",
        color: "bg-green-500",
      },
      {
        title: "Bug Resolution Time",
        value: "2.1days",
        target: "2days",
        percentage: 105.0,
        color: "bg-green-500",
      },
      {
        title: "Security Incidents",
        value: "2count",
        target: "0count",
        percentage: 100,
        color: "bg-red-500",
      },
      {
        title: "Project Delivery",
        value: "88",
        target: "90",
        percentage: 97.8,
        unit: "%",
        color: "bg-yellow-500",
      },
    ],
  },
];
