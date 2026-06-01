import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";
import { basePath } from "./constant";

export const greetings: GreetingsType = {
  name: "Jason Aballe",
  title: "Full Stack Developer",
  subTitle: "Specializing in Web, Application, and Database Development",
  description:
    "Results-oriented Full Stack Developer with over 6 years of experience. I specialize in building scalable web applications and managing complex databases, with proven expertise collaborating with international teams across London, Singapore, and the Philippines.",
  resumeLink: "https://drive.google.com/file/d/1Y9nMna2Dh8BLylQ51iUqYDc7Sz8TIDSm/view", // 
};

export const openSource = {
  githubUserName: "CLEMENTINE1996",
};

export const contact = {
  address: "Zone 1, Digos City, Davao del Sur, Philippines",
  phone: "+63 9468233528",
  email: "jasonaballe0@gmail.com",
};

export const socialLinks: SocialLinksType = {
  url: "mailto:jasonaballe0@gmail.com",
  email: "jasonaballe0@gmail.com",
  linkedin: "https://www.linkedin.com/in/jason-aballe-292b03299/",
  github: "https://github.com/CLEMENTINE1996",
};

export const skillsSection : SkillsSectionType = {
  title: "Technical Expertise",
  subTitle: "Core Expertise & Development Tools",
  categories: [
    {
      title: "Core Backend & Database",
      skills: ["PHP (6 yrs)", "Laravel (5 yrs)", "CodeIgniter (2 yrs)", "C# ASP.Net (1.5 yrs)", "Node.js (5 months)", " Nest.js (4 months)", "Knex.js (4 months)", "MySQL", "PostgreSQL", "MSSQL", "SQLLite", "RESTful APIs"], 
    },
    {
      title: "Frontend & Design",
      skills: ["JavaScript & jQuery (6 yrs)", "Vue.js (2 yrs)", "React", "Next.js", "Tailwind CSS", "Bootstrap"], 
    },
    {
      title: "Tools & DevOps",
      skills: ["Git/GitHub", "Docker", "cPanel", "Jira", "Postman", "VS Code", "Android Studio", "Joomla", "Visual Studio", "Sublime Text", "NetBeans"], 
    },
    {
      title: "Fintech & Integrations",
      skills: ["XERO Accounting", "Stripe Payment", "Sanction Scanner", "API Architecture"],
    },
    {
      title: "Mobile Application Development",
      skills: ["Android Studio (2 yrs)", "Java"], 
    },
  ],
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: `${basePath}/lottie/skills/fullstack.json`,
      skills: [
        "Native PHP (6 yrs), Laravel (5 yrs), CodeIgniter (2 yrs), Node.js, and Nest.js", // 
        "JavaScript (6 yrs), Vue.js (2 yrs), Next.js, & React", // 
        "ASP.Net, C#, Java, & Android Studio (2 yrs)", //
        "Database Management: MySQL, PostgreSQL, & SQLite (5 yrs), and Knex.js", // 
        "API Architecture: RESTful APIs, XERO, Stripe, & Sanction Scanner", // 
        "Web Management: cPanel (3 yrs), Docker, & Version Control (Git/GitHub)", // 
      ],
      softwareSkills: [
        { skillName: "PHP", iconifyTag: "logos:php" },
        { skillName: "Laravel", iconifyTag: "logos:laravel" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "Vuejs", iconifyTag: "logos:vue" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
        { skillName: "CSharp", iconifyTag: "logos:c-sharp" },
        { skillName: "Java", iconifyTag: "logos:java" },
        { skillName: "Android Studio", iconifyTag: "logos:android-icon" },
        { skillName: "Jira", iconifyTag: "logos:jira" },
        { skillName: "Git", iconifyTag: "logos:git-icon" },
        { skillName: "GitHub", iconifyTag: "logos:github-icon" },
        { skillName: "Xero", iconifyTag: "logos:xero" },
        { skillName: "Stripe", iconifyTag: "logos:stripe" },
        { skillName: "Joomla", iconifyTag: "logos:joomla" },
        { skillName: "CPanel", iconifyTag: "logos:cpanel" },
        { skillName: "VS Code", iconifyTag: "logos:visual-studio-code" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Reactjs", iconifyTag: "logos:react" },
        { skillName: "Nextjs", iconifyTag: "logos:nextjs" },
        { skillName: "Nodejs", iconifyTag: "logos:nodejs" },
        { skillName: "Nestjs", iconifyTag: "logos:nestjs" },
        { skillName: "Knexjs", iconifyTag: "logos:knex" },
        { skillName: "Tailwind CSS", iconifyTag: "logos:tailwindcss-icon" },
        { skillName: "Bootstrap", iconifyTag: "logos:bootstrap" },
        { skillName: "Postman", iconifyTag: "logos:postman-icon" },
      ],
    },
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: "Southern Philippines Agri-Business and Marine and Aquatic School of Technology (SPAMAST)", // 
    subHeader: "Bachelor of Science in Information Technology", // 
    duration: "2015 - 2019", // 
    desc: "Academic Achievements & Certifications:",
    descBullets: [
      "Best in Capstone/Thesis Award Winner (May 2019) ",
      "Champion: SPAMAST I.T. Day Programming Competition (2017 & 2019) ",
      "TESDA: Computer Software Servicing NCII & Visual Graphics Designing NCIII ",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "CPRAS - The Cost and Procurement Advisory Service (London)",
    companyLogo: `${basePath}/img/icons/common/cpras_logo.png`,
    date: "Jan 01, 2024 - Apr 30, 2026",
    desc: "Served as Project Lead, architecting a comprehensive Government Procurement Framework system to streamline complex bidding and legal processes.",
    descBullets: [
      "Optimized application performance for international procurement standards and secure bank/card transactions.",
      "Managed large-scale databases and collaborated with London-based management to design feature roadmaps.",
      "Partnered with technical teams in the Philippines to implement new system functionalities.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "EBOS PH CO. LTD (Singapore)",
    companyLogo: `${basePath}/img/icons/common/ebos_logo.png`,
    date: "May 01, 2022 - Nov 30, 2023",
    desc: "Led the development of business-critical applications for Singaporean clients with a focus on security and data integrity.",
    descBullets: [
      "Engineered complex API architecture integrations including XERO Accounting, Stripe Payment, and Sanction Scanner.",
      "Automated financial workflows to enhance operational efficiency.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Davao del Sur State College (Philippines)",
    companyLogo: `${basePath}/img/icons/common/dssc_logo.png`,
    date: "July 06, 2020 - May 25, 2022",
    desc: "Headed digital transformation efforts for the institution's official web presence and internal systems.",
    descBullets: [
      "Developed the official college website and automated internal school processes to improve administrative efficiency.",
      "Built and launched mobile applications to increase student accessibility to college services.",
    ],
  },
  {
    role: "IT Faculty",
    company: "Davao del Sur State College (Philippines)",
    companyLogo: `${basePath}/img/icons/common/dssc_logo.png`,
    date: "Sep 03, 2019 - June 26, 2020",
    desc: "Instructed students in core technical disciplines including programming and web development.",
    descBullets: [
      "Provided hands-on training in mobile app development and modern web frameworks.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "CPRAS Procurement Website",
    desc: "A comprehensive B2B E-Procurement platform for UK organizations. Engineered complex framework agreements and international collaboration tools using an Agile methodology.",
    tags: ["Laravel", "VueJS", "MySQL", "Agile"],
    link: "https://ukprocure.cpras.co.uk/",
  },
  {
    name: "Intellinz Business for Sale",
    desc: "A high-stakes business marketplace for Singaporean clients. Architected complex API integrations with XERO, Stripe, and Sanction Scanner for secure financial workflows.",
    tags: ["Laravel", "XERO API", "Stripe", "Sanction Scanner"],
    link: "https://intellinz.com/",
  },
  {
    name: "Corporate Secretarial Services",
    desc: "Governance and compliance management system tailored for Singapore business regulations. Features automated secretarial filing and secure Stripe payment processing.",
    tags: ["Laravel", "Stripe", "MySQL"],
    link: "https://ebossi.ai/login",
  },
  {
    name: "DSSC Human Resource Management System",
    desc: "Unified school automation and HRM system for Davao del Sur State College. Involved full-stack web development and mobile integration to improve administrative efficiency. This includes Payroll, Employee Records, Document Tracking, Attendance Management, and etc.",
    tags: ["Codeigniter", "MySQL", "Android Studio", "PHP"],
    link: "http://hris2.dssc.edu.ph:1952/login",
  },
  {
    name: "Learning Resources Management System",
    desc: "An enterprise-level Library Resources (Digital books) platform developed during the global shift to remote education. Focused on scalable library resource delivery and user-friendly student interfaces.",
    tags: ["Laravel", "MySQL", "Education Tech"],
    link: "",
  },
  {
    name: "ORS (Output Rating Sheet) System",
    desc: "A comprehensive work performance tracking system for employees. Developed to streamline performance evaluations and output tracking for the institution's workforce. Similar to a KPI system but focused on output and performance metrics.",
    tags: ["ASP.Net", "MySQL", "Performance Management"],
    link: "",
  },
  {
    name: "DSSC Admission System",
    desc: "Student enrollment portal built for rapid deployment and high-volume data processing. Streamlined the entire admission cycle from application to registration.",
    tags: ["Laravel", "MySQL", "cPanel", "System Optimization"],
    link: "",
  },
  {
    name: "DSSC Scheduling System & Android App",
    desc: "Academic resource management portal and a COVID-19 response visitation tracker. Bridged the gap between web administration and mobile accessibility.",
    tags: ["ASP.Net", "Android", "Real-time Data"],
    link: "",
  },
  {
    name: "College Official Website (DSSC)",
    desc: "The primary CMS and digital face of DSSC. Developed with a custom Joomla architecture and provided technical training for institutional staff.",
    tags: ["Joomla", "cPanel", "Content Management", "PHP"],
    link: "https://dssc.edu.ph/",
  },
  {
    name: "SunMade Rice Mill Website",
    desc: "A modern corporate digital presence featuring a product catalog and internal resource management. Optimized for fast frontend performance.",
    tags: ["React", "JavaScript", "Frontend Architecture"],
    link: "https://clementine1996.github.io/sunmadeph/",
  },
  {
    name: "J & E Alba - Antonio Cargo Forwarding",
    desc: "Logistics and trucking service platform. Features service showcases and secure communication infrastructures for regional cargo operations.",
    tags: ["Laravel", "Bootstrap", "Logistics Tech"],
    link: "",
  }
];


export const feedbacks: FeedbackType[] = [
  {
    name: "Joshua Parilla",
    role: "Tech Team Manager at CPRAS",
    feedback: "Professional and highly skilled developer who contributed significantly to our international projects.",
  },
  {
    name: "Felomino Alba",
    role: "ICTC Director at DSSC",
    feedback: "Instrumental in school automation and website development for our institution.",
  },
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Jason Aballe",
  description: greetings.description,
  author: "Jason Aballe",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "",
  keywords: [
    "Jason",
    "Jason Aballe",
    "CLEMENTINE1996",
    "Portfolio",
    "Jason Portfolio ",
    "Jason Aballe Portfolio",
  ],
};