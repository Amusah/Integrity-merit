import { desktop } from './assets';

const { holiday, leave, notice, permissions, salary, birthday } = desktop;

export const employeeStats = [
  {
    id: 1,
    title: 'Total Number of Employees',
    totalCount: 107,
  },

  {
    id: 2,
    title: 'Employees On leave',
    totalCount: 12,
  },

  {
    id: 3,
    title: 'Employees resigned',
    totalCount: 5,
  },

  {
    id: 4,
    title: 'Total Number of Managers',
    totalCount: 5,
  },

  {
    id: 5,
    title: 'Total Employees Incident reports',
    totalCount: 429,
  },

  {
    id: 6,
    title: 'Total Employees Promoted',
    totalCount: 7,
  },

  {
    id: 7,
    title: 'Total Employees Rewarded',
    totalCount: 15,
  },

  {
    id: 8,
    title: 'Total Employees Punshed',
    totalCount: 15,
  },
];

export const features = [
  {
    id: 1,
    title: 'Notice',
    text: 'View all notices sent to employees',
    icon: notice,
    bg: '#E1FDF9',
    color: '#16BEA6',
  },

  {
    id: 2,
    title: 'Leave Applications',
    text: 'All leave applications and status',
    icon: leave,
    bg: '#FDF1E0',
    color: '#EE9211',
  },

  {
    id: 3,
    title: 'Permissions',
    text: 'Manage all employees access and assets Permission',
    icon: permissions,
    bg: '#EAFDE7',
    color: '#21BF07',
  },

  {
    id: 4,
    title: 'Salary Slip',
    text: 'Maintain Employees salary slip',
    icon: salary,
    bg: '#FFEBFB',
    color: '#E32CBC',
  },

  {
    id: 5,
    title: 'Birthdays / Work Anniversaries',
    text: 'Employees Attendance List',
    icon: birthday,
    bg: '#EBFAFF',
    color: '#17BCF3',
  },

  {
    id: 6,
    title: 'Holiday',
    text: 'Holidays in the calendar year',
    icon: holiday,
    bg: '#EFEDFF',
    color: '#3229E1',
  },

  // {
  //   id:
  // }
];

export const departments = [
  {
    id: 'finanace',
    name: 'Finance Department',
    description: 'Financial record keeping, budget management, payroll',
    management: 'Manager',
  },

  {
    id: 'sales',
    name: 'Sales/Marketing Department',
    description: 'Market research, promotional activities, customer relations',
    management: 'Manager',
  },

  {
    id: 'production',
    name: 'Production/Operations',
    description: 'Production planning, quality control, maintenance',
    management: 'Manager',
  },

  {
    id: 'customer-service',
    name: 'Customer Service',
    description: 'Customer support, service quality assurance',
    management: 'Manager',
  },

  {
    id: 'administration',
    name: 'Administration',
    description: 'Coordination, decision making, event management',
    management: 'Manager',
  },

  {
    id: 'purchasing',
    name: 'Purchasing/Procurement',
    description: 'Supplier management, goods procurement, inventory control',
    management: 'Manager',
  },

  {
    id: 'human-resource',
    name: 'Human Resource',
    description: 'Recruitment, training, employee relations',
    management: 'Manager',
  },
];

export const employees = [
  {
    firstName: 'Henry',
    middleName: '',
    lastName: 'Amusah',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '06/06/1995',
    email: 'henryamusah@gmail.com',
    phone: '0208728019',
    department: 'Software',
    role: 'Software Engineer',
    level: 'L10',
    nationality: 'Ghanaian',
    country: 'Ghana',
    religion: 'Christian',
    sex: 'Male',
    city: 'Takoradi',
    street: 'Red Ash Avenue',
    status: 'resigned',
    image: 'https://avatar.iran.liara.run/public/45',
    workExperience: [
      {
        employer: 'Transsion Tecnology Ghana',
        position: 'Purchasing Specialist',
        startDate: '01/08/2024',
        endDate: '',
      },
      {
        employer: 'Driver and Vehicle Licensing Authority',
        position: 'Assistant IT Support',
        startDate: '08/09/2020',
        endDate: '06/01/2023',
      },
      {
        employer: 'Japan Motors Trading Co. Ltd',
        position: 'Field Mechanic',
        startDate: '13/01/2016',
        endDate: '-/01/2020',
      },
    ],
    education: [
      {
        school: 'MIT',
        program: 'MSc Robotics Engineering',
        startDate: '05/05/2025',
        endDate: '',
      },
      {
        school: 'Ghana Technology University College',
        program: 'BSc Computer Science',
        startDate: '10/10/2016',
        endDate: '10/06/2020',
      },
      {
        school: 'Takoradi Technical Institute',
        position: 'Mechanical Engineering',
        startDate: '-/09/2010',
        endDate: '-/06/2013',
      },
    ],
    nextOfKin: {
      name: 'Gabriel K. Arthur',
      email: 'gabbyk@gmail.com',
      mobile: '',
    },
    emergencyContact: {
      name: 'Josephine Amusah',
      email: 'japhinababy@gmail.com',
      mobile: '0242663567',
    },
  },

  {
    firstName: 'Linda',
    middleName: 'Akua',
    lastName: 'Mensah',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '22/11/1992',
    email: 'lindamensah@example.com',
    phone: '0246789123',
    department: 'Human Resources',
    role: 'HR Manager',
    level: 'L8',
    nationality: 'Ghanaian',
    country: 'Ghana',
    religion: 'Christian',
    sex: 'Female',
    city: 'Accra',
    street: 'Labone Crescent',
    status: 'active',
    image: 'https://avatar.iran.liara.run/public/28',
    workExperience: [
      {
        employer: 'Nestlé Ghana Ltd',
        position: 'HR Generalist',
        startDate: '12/03/2021',
        endDate: '',
      },
      {
        employer: 'TotalEnergies Ghana',
        position: 'HR Assistant',
        startDate: '01/07/2017',
        endDate: '30/11/2020',
      },
      {
        employer: 'AirtelTigo',
        position: 'Recruitment Intern',
        startDate: '15/06/2015',
        endDate: '30/04/2017',
      },
    ],
    education: [
      {
        school: 'University of Ghana',
        program: 'MPhil Human Resource Management',
        startDate: '10/09/2023',
        endDate: '',
      },
      {
        school: 'Central University',
        program: 'BSc Business Administration (HRM)',
        startDate: '01/10/2014',
        endDate: '30/06/2018',
      },
      {
        school: "Wesley Girls' High School",
        position: 'General Arts',
        startDate: '01/09/2010',
        endDate: '30/06/2013',
      },
    ],
    nextOfKin: {
      name: 'Michael K. Mensah',
      email: 'mkmensah@gmail.com',
      mobile: '0551239876',
    },
    emergencyContact: {
      name: 'Eunice A. Boateng',
      email: 'euniceboateng@gmail.com',
      mobile: '0209988123',
    },
  },

  {
    firstName: 'Maria',
    middleName: 'Elena',
    lastName: 'Santos',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '12/04/1989',
    email: 'maria.santos@example.com',
    phone: '+34 600123456',
    department: 'Finance',
    role: 'Financial Analyst',
    level: 'L7',
    nationality: 'Spanish',
    country: 'Spain',
    religion: 'Catholic',
    sex: 'Female',
    city: 'Barcelona',
    street: 'Carrer de Mallorca',
    status: 'active',
    image: 'https://avatar.iran.liara.run/public/20',
    workExperience: [
      {
        employer: 'Banco Santander',
        position: 'Junior Analyst',
        startDate: '01/03/2015',
        endDate: '30/04/2018',
      },
      {
        employer: 'CaixaBank',
        position: 'Financial Analyst',
        startDate: '01/05/2018',
        endDate: '01/04/2024',
      },
    ],
    education: [
      {
        school: 'ESADE',
        program: 'MSc in Finance',
        startDate: '01/09/2013',
        endDate: '30/06/2015',
      },
      {
        school: 'University of Barcelona',
        program: 'Economics',
        startDate: '01/09/2009',
        endDate: '30/06/2013',
      },
    ],
    nextOfKin: {
      name: 'Juan Santos',
      email: 'juan.santos@example.com',
      mobile: '+34 677889900',
    },
    emergencyContact: {
      name: 'Lucia Santos',
      email: 'lucia.santos@example.com',
      mobile: '+34 612334455',
    },
  },
  {
    firstName: 'Chen',
    middleName: '',
    lastName: 'Li',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '03/03/1987',
    email: 'chen.li@example.cn',
    phone: '+86 13512345678',
    department: 'R&D',
    role: 'Data Scientist',
    level: 'L9',
    nationality: 'Chinese',
    country: 'China',
    religion: 'None',
    sex: 'Male',
    city: 'Beijing',
    street: 'Zhongguancun Ave',
    status: 'on leave',
    image: 'https://avatar.iran.liara.run/public/11',
    workExperience: [
      {
        employer: 'Tencent',
        position: 'Data Analyst',
        startDate: '01/08/2012',
        endDate: '31/12/2016',
      },
      {
        employer: 'Baidu',
        position: 'Data Scientist',
        startDate: '01/01/2017',
        endDate: '',
      },
    ],
    education: [
      {
        school: 'Tsinghua University',
        program: 'Computer Science',
        startDate: '01/09/2005',
        endDate: '01/06/2009',
      },
      {
        school: 'Stanford University',
        program: 'MS AI',
        startDate: '01/09/2009',
        endDate: '01/06/2011',
      },
    ],
    nextOfKin: {
      name: 'Li Wang',
      email: 'li.wang@example.cn',
      mobile: '+86 13988889999',
    },
    emergencyContact: {
      name: 'Mei Lin',
      email: 'mei.lin@example.cn',
      mobile: '+86 13677778888',
    },
  },
  {
    firstName: 'Aisha',
    middleName: 'Fatima',
    lastName: 'Khan',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '17/05/1993',
    email: 'aisha.khan@example.pk',
    phone: '+92 3001234567',
    department: 'Legal',
    role: 'Compliance Officer',
    level: 'L6',
    nationality: 'Pakistani',
    country: 'Pakistan',
    religion: 'Muslim',
    sex: 'Female',
    city: 'Lahore',
    street: 'Model Town Block C',
    status: 'active',
    image: 'https://avatar.iran.liara.run/public/34',
    workExperience: [
      {
        employer: 'HBL',
        position: 'Compliance Analyst',
        startDate: '01/03/2018',
        endDate: '',
      },
    ],
    education: [
      {
        school: 'Punjab University',
        program: 'LLB',
        startDate: '01/10/2013',
        endDate: '30/06/2017',
      },
    ],
    nextOfKin: {
      name: 'Ahmed Khan',
      email: 'ahmed.k@example.pk',
      mobile: '+92 3214455667',
    },
    emergencyContact: {
      name: 'Sara Khan',
      email: 'sara.k@example.pk',
      mobile: '+92 3009988776',
    },
  },
  {
    firstName: 'Liam',
    middleName: '',
    lastName: "O'Connor",
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '25/08/1990',
    email: 'liam.oconnor@example.com',
    phone: '+353 86 1234567',
    department: 'Engineering',
    role: 'DevOps Engineer',
    level: 'L8',
    nationality: 'Irish',
    country: 'Ireland',
    religion: 'Christian',
    sex: 'Male',
    city: 'Dublin',
    street: "St. Stephen's Green",
    status: 'laid off',
    image: 'https://avatar.iran.liara.run/public/3',
    workExperience: [
      {
        employer: 'Accenture',
        position: 'Infrastructure Engineer',
        startDate: '01/03/2016',
        endDate: '31/05/2019',
      },
      {
        employer: 'Stripe',
        position: 'SRE',
        startDate: '01/06/2019',
        endDate: '01/02/2024',
      },
    ],
    education: [
      {
        school: 'Trinity College Dublin',
        program: 'Computer Engineering',
        startDate: '01/09/2008',
        endDate: '30/06/2012',
      },
    ],
    nextOfKin: {
      name: "Sean O'Connor",
      email: 'sean.oconnor@example.com',
      mobile: '+353 87 6543210',
    },
    emergencyContact: {
      name: 'Aoife Murphy',
      email: 'aoife.m@example.com',
      mobile: '+353 86 8888777',
    },
  },
  {
    firstName: 'Sofia',
    middleName: '',
    lastName: 'Moretti',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '14/02/1991',
    email: 'sofia.moretti@example.it',
    phone: '+39 3204567890',
    department: 'HR',
    role: 'Talent Acquisition Manager',
    level: 'L9',
    nationality: 'Italian',
    country: 'Italy',
    religion: 'Catholic',
    sex: 'Female',
    city: 'Milan',
    street: 'Via Torino 25',
    status: 'on leave',
    image: 'https://avatar.iran.liara.run/public/22',
    workExperience: [
      {
        employer: 'Luxottica',
        position: 'HR Specialist',
        startDate: '01/04/2015',
        endDate: '01/06/2019',
      },
      {
        employer: 'Prada',
        position: 'TA Manager',
        startDate: '01/07/2019',
        endDate: '',
      },
    ],
    education: [
      {
        school: 'Bocconi University',
        program: 'Business Psychology',
        startDate: '01/09/2009',
        endDate: '01/07/2013',
      },
    ],
    nextOfKin: {
      name: 'Marco Moretti',
      email: 'marco.m@example.it',
      mobile: '+39 3287654321',
    },
    emergencyContact: {
      name: 'Giulia Bianchi',
      email: 'giulia.b@example.it',
      mobile: '+39 3211234567',
    },
  },
  {
    firstName: 'Emily',
    middleName: 'Rose',
    lastName: 'Johnson',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '08/12/1992',
    email: 'emily.johnson@example.com',
    phone: '+1 3471234567',
    department: 'Marketing',
    role: 'Content Strategist',
    level: 'L7',
    nationality: 'American',
    country: 'USA',
    religion: 'Christian',
    sex: 'Female',
    city: 'New York',
    street: '5th Avenue',
    status: 'laid off',
    image: 'https://avatar.iran.liara.run/public/9',
    workExperience: [
      {
        employer: 'BuzzFeed',
        position: 'Content Writer',
        startDate: '01/01/2017',
        endDate: '01/07/2020',
      },
      {
        employer: 'HubSpot',
        position: 'Content Strategist',
        startDate: '01/08/2020',
        endDate: '',
      },
    ],
    education: [
      {
        school: 'NYU',
        program: 'Media & Communications',
        startDate: '01/09/2010',
        endDate: '01/06/2014',
      },
    ],
    nextOfKin: {
      name: 'Jessica Johnson',
      email: 'jess.j@example.com',
      mobile: '+1 2125556789',
    },
    emergencyContact: {
      name: 'Michael Rose',
      email: 'mrose@example.com',
      mobile: '+1 9174567890',
    },
  },
  {
    firstName: 'Ivan',
    middleName: 'Petrovich',
    lastName: 'Smirnov',
    id: `${crypto.randomUUID().split('-')[0]}`,
    dob: '10/10/1985',
    email: 'ivan.smirnov@example.ru',
    phone: '+7 9161234567',
    department: 'Security',
    role: 'Cybersecurity Expert',
    level: 'L10',
    nationality: 'Russian',
    country: 'Russia',
    religion: 'Orthodox',
    sex: 'Male',
    city: 'Moscow',
    street: 'Lenina Street',
    status: 'resigned',
    image: 'https://avatar.iran.liara.run/public/27',
    workExperience: [
      {
        employer: 'Kaspersky',
        position: 'Security Analyst',
        startDate: '01/01/2010',
        endDate: '31/12/2016',
      },
      {
        employer: 'Yandex',
        position: 'Cybersecurity Lead',
        startDate: '01/01/2017',
        endDate: '01/01/2024',
      },
    ],
    education: [
      {
        school: 'Moscow State University',
        program: 'Information Security',
        startDate: '01/09/2002',
        endDate: '01/06/2006',
      },
    ],
    nextOfKin: {
      name: 'Elena Smirnova',
      email: 'elena@example.ru',
      mobile: '+7 9051234567',
    },
    emergencyContact: {
      name: 'Nikolai Ivanov',
      email: 'nikolai@example.ru',
      mobile: '+7 9067654321',
    },
  },
];

export const resignations = [
  {
    firstName: 'Andrea',
    middleName: '',
    lastName: 'Rodriguez',
    role: 'Software Tester',
    department: 'Testing',
    requestType: 'resignation',
    requestDate: '9/15/2024',
    yearsOfService: '4 years',
    status: 'approved',
  },

  {
    firstName: 'Henry',
    middleName: '',
    lastName: 'Amusah',
    role: 'Fusion Engineer',
    department: 'K-Lab',
    requestType: 'termination',
    requestDate: '1/17/2025',
    yearsOfService: '4 years',
    status: 'pending',
  },

  {
    firstName: 'Nana',
    middleName: '',
    lastName: 'Yeboah',
    role: 'Robotics Engineer',
    department: 'Roblox',
    requestType: 'resignation',
    requestDate: '1/17/2025',
    yearsOfService: '4 years',
    status: 'pending',
  },
];

export const incidentReports = [
  {
    reporter: {
      name: "Andrea Rodriguez",
      role: "Accounts Receivable Specialist",
      image: "https://avatar.iran.liara.run/public/45",
    },
    department: "Finance/Accounts Department",
    type: "Whistleblowing",
    description:
      "There is a significant water leak in the office kitchen area...",
    location: "Accra - Ghana",
    date: "2025-06-16",
    status: "invalid",
  },
  {
    reporter: {
      name: "Kwame Mensah",
      role: "Security Officer",
      image: "https://avatar.iran.liara.run/public/28",
    },
    department: "Facilities and Security",
    type: "Incident Report",
    description: "Unauthorized access detected in the restricted storage area.",
    location: "Kumasi - Ghana",
    date: "2025-06-20",
    status: "pending",
  },
  {
    reporter: {
      name: "Linda Okoro",
      role: "HR Assistant",
      image: "https://avatar.iran.liara.run/public/20",
    },
    department: "Human Resources",
    type: "Whistleblowing",
    description:
      "Reported a case of harassment by a senior manager toward a colleague.",
    location: "Lagos - Nigeria",
    date: "2025-06-22",
    status: "approved",
  },
  {
    reporter: {
      name: "Samuel Ofori",
      role: "IT Support Specialist",
      image: "https://avatar.iran.liara.run/public/27",
    },
    department: "Information Technology",
    type: "Incident Report",
    description:
      "System vulnerability discovered in the internal employee portal.",
    location: "Takoradi - Ghana",
    date: "2025-06-25",
    status: "resolved",
  },
];

export const rewardsData = [
  {
    employee: {
      name: 'Andrea Rodriguez',
      role: 'Accounts Receivable Specialist',
      image: '/avatar.png',
    },
    department: 'Finance/Accounts Department',
    type: 'reward',
    category: 'Whistleblowing Recognition',
    amount: '$1000.00',
    dateAwarded: '2025-06-16',
    status: 'pending',
  },
  {
    employee: {
      name: 'Andrea Rodriguez',
      role: 'Marketing Coordinator',
      image: '/avatar.png',
    },
    department: 'No Department',
    type: 'reward',
    category: 'Whistleblowing Recognition',
    amount: '$500.00',
    dateAwarded: '2025-06-16',
    status: 'pending',
  },
  {
    employee: {
      name: 'Andrea Rodriguez',
      role: 'Sales Manager',
      image: '/avatar.png',
    },
    department: 'No Department',
    type: 'reward',
    category: 'Whistleblowing Recognition',
    amount: '$1000.00',
    dateAwarded: '2025-06-16',
    status: 'pending',
  },
  {
    employee: {
      name: 'Andrea Rodriguez',
      role: 'Account Manager',
      image: '/avatar.png',
    },
    department: 'No Department',
    type: 'reward',
    category: 'Whistleblowing Recognition',
    amount: '$500.00',
    dateAwarded: '2025-06-16',
    status: 'approved',
  },
  {
    employee: {
      name: 'Andrea Rodriguez',
      role: 'Marketing Analyst',
      image: '/avatar.png',
    },
    department: 'No Department',
    type: 'reward',
    category: 'Whistleblowing Recognition',
    amount: '$1000.00',
    dateAwarded: '2025-06-16',
    status: 'approved',
  },
];
