import { desktop } from "./assets";

const { holiday, leave, notice, permissions, salary, birthday } = desktop;

export const employeeStats = [
  {
    id: 1,
    title: "Total Number of Employees",
    totalCount: 107,
  },

  {
    id: 2,
    title: "Employees On leave",
    totalCount: 12,
  },

  {
    id: 3,
    title: "Employees resigned",
    totalCount: 5,
  },

  {
    id: 4,
    title: "Total Number of Managers",
    totalCount: 5,
  },

  {
    id: 5,
    title: "Total Employees Incident reports",
    totalCount: 429,
  },

  {
    id: 6,
    title: "Total Employees Promoted",
    totalCount: 7,
  },

  {
    id: 7,
    title: "Total Employees Rewarded",
    totalCount: 15,
  },

  {
    id: 8,
    title: "Total Employees Punshed",
    totalCount: 15,
  },
];

export const features = [
  {
    id: 1,
    title: "Notice",
    text: "View all notices sent to employees",
    icon: notice,
    bg: "#E1FDF9",
    color: "#16BEA6",
  },

  {
    id: 2,
    title: "Leave Applications",
    text: "All leave applications and status",
    icon: leave,
    bg: "#FDF1E0",
    color: "#EE9211",
  },

  {
    id: 3,
    title: "Permissions",
    text: "Manage all employees access and assets Permission",
    icon: permissions,
    bg: "#EAFDE7",
    color: "#21BF07",
  },

  {
    id: 4,
    title: "Salary Slip",
    text: "Maintain Employees salary slip",
    icon: salary,
    bg: "#FFEBFB",
    color: "#E32CBC",
  },

  {
    id: 5,
    title: "Birthdays / Work Anniversaries",
    text: "Employees Attendance List",
    icon: birthday,
    bg: "#EBFAFF",
    color: "#17BCF3",
  },

  {
    id: 6,
    title: "Holiday",
    text: "Holidays in the calendar year",
    icon: holiday,
    bg: "#EFEDFF",
    color: "#3229E1",
  },

  // {
  //   id:
  // }
];

export const departments = [
  {
    id: "finanace",
    name: "Finance Department",
    description: "Financial record keeping, budget management, payroll",
    management: "Manager",
  },

  {
    id: "sales",
    name: "Sales/Marketing Department",
    description: "Market research, promotional activities, customer relations",
    management: "Manager",
  },

  {
    id: "production",
    name: "Production/Operations",
    description: "Production planning, quality control, maintenance",
    management: "Manager",
  },

  {
    id: "customer-service",
    name: "Customer Service",
    description: "Customer support, service quality assurance",
    management: "Manager",
  },

  {
    id: "administration",
    name: "Administration",
    description: "Coordination, decision making, event management",
    management: "Manager",
  },

  {
    id: "purchasing",
    name: "Purchasing/Procurement",
    description: "Supplier management, goods procurement, inventory control",
    management: "Manager",
  },

  {
    id: 'human-resource',
    name: "Human Resource",
    description: "Recruitment, training, employee relations",
    management: "Manager",
  },
];

export const employees = [
  {
    name: "Moh Dabana",
    id: "001",
    email: 'mohdabs@gmail.com',
    department: "Software",
  status: "Active",
    role: "Product Manager",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/45",
  },

  {
    name: "Henry Amusah",
    id: "002",
    email: 'nerdydiv@gmail.com',
    department: "Software",
status: "Active",
    role: "Software Engineer",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/26",
  },

  {
    name: "Shuai Huang",
    id: "003",
    email: 'johndoe@gmail.com',
    department: "Software",
  status: "On leave",
    role: "Procurement Specialist",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/12",
  },

  {
    name: "Rifina",
    id: "004",
    email: 'johndoe@gmail.com',
    department: "Software",
    status: "Resigned",
    role: "Procurement Specialist",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/84",
  },

  {
    name: "Yan Fan",
    id: "005",
    email: 'johndoe@gmail.com',
    department: "Software",
    status: "Active",
    role: "Product Manager",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/78",
  },

  {
    name: "Yimeng Xu",
    id: "006",
    email: 'johndoe@gmail.com',
    department: "Software",
    status: "Active",
    role: "Software Engineer",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/36",
  },

  {
    name: "CamilleLouis Leon",
    id: "007",
    email: 'johndoe@gmail.com',
    department: "Software",
    status: "On leave",
    role: "Procurement Specialist",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/30",
  },

  {
    name: "Mr. xuxu",
    id: "008",
    email: 'johndoe@gmail.com',
    department: "Software",
    status: "Laid off",
    role: "BTL Manager",
    qualification: "Degree",
    age: "28",
    image: "https://avatar.iran.liara.run/public/46",
  },
];


