import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";
import { basePath } from "./constant";

export const greetings: GreetingsType = {
  name: "Jason's Portfolio",
  title: "Full Stack Developer",
  description:
    "Hi, I’m Jason Aballe. I’m a Full Stack Developer with over six years of experience building web and mobile applications. I enjoy turning complex problems into simple, functional solutions using Laravel and Vue.js. I’m always looking for new ways to learn and help teams build better digital experiences.",
  resumeLink: "",
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
  email: "mailto:jasonaballe0@gmail.com",
  linkedin: "https://www.linkedin.com/in/jason-aballe-292b03299/",
  github: "https://github.com/CLEMENTINE1996",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "VERSATILE FULL STACK DEVELOPER WITH A PASSION FOR SYSTEM AUTOMATION",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: `${basePath}/lottie/skills/fullstack.json`,
      skills: [
        emoji("⚡ Developing responsive web applications using Laravel, Vue.js, and Codeigniter"),
        emoji("⚡ Designing and managing MySQL, MSSQL, PostgreSQL, and SQLite databases"),
        emoji("⚡ Integrating financial and compliance APIs: Xero, Stripe, and Sanction Scanner"),
        emoji("⚡ Building mobile-friendly solutions and automating complex business workflows"),
        emoji("⚡ Collaborating with international teams and following Agile methodologies"),
        emoji("⚡ Continuously learning new technologies and best practices in software development"),
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
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Backend (Laravel/PHP/Codeigniter)", progressPercentage: "85" },
  { Stack: "Frontend (Vue/JS/Bootstrap)", progressPercentage: "85" },
  { Stack: "Database Management (MySQL/MSSQL)", progressPercentage: "85" },
  { Stack: "Programming (C#/Java/VB)", progressPercentage: "70" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Southern Philippines Agri-Business and Marine and Aquatic School of Technology",
    subHeader: "Bachelor of Science in Information Technology",
    duration: "2015 - 2019",
    desc: "Digos Campus | Best Capstone Award | Programming Champion",
    grade: "",
    descBullets: [
      "Best Capstone Award Winner in SPAMAST Agency In-House Review (May 2019)",
      "Champion in SPAMAST I.T. Day Programming Competition (2017 & 2019)",
      "Passed TESDA Visual Graphics Designing NCIII (2017) and Computer Software Servicing NCII (2018)"
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "CPRAS",
    date: "Jan 01, 2024 - Apr 30, 2026",
    companyLogo: `${basePath}/img/icons/common/cpras_logo.png`,
    desc: "Main Developer for the B2B Procurement platform. Used Laravel, VueJS, and MySQL to manage UK government procurement opportunities and complex financial workflows.",
  },
  {
    role: "Full Stack Developer",
    company: "EBOS SG / EBOS PH",
    date: "May 01, 2022 - Nov 30, 2023",
    companyLogo: `${basePath}/img/icons/common/ebos_logo.png`,
    desc: "Enhanced marketplace and compliance platforms for Singapore clients. Integrated XERO, Stripe, and Sanction Scanner APIs using Laravel and Agile methodologies.",
  },
  {
    role: "Full Stack Developer",
    company: "Davao del Sur State College",
    date: "July 06, 2020 - May 25, 2022",
    companyLogo: `${basePath}/img/icons/common/dssc_logo.png`,
    desc: "Led the development of HRIS, Admission, and Scheduling systems and Application using Android Studio, Laravel, Codeigniter, and MySQL to automate institutional processes.",
  },
  {
    role: "IT Faculty",
    company: "Davao del Sur State College",
    date: "Sept 03, 2019 - June 26, 2020",
    companyLogo: `${basePath}/img/icons/common/dssc_logo.png`,
    desc: "Instructed students in programming, web development, and mobile development.",
  },
];


export const projects: ProjectType[] = [
  {
    name: "CPRAS Procurement Website",
    desc: "B2B E-Procurement platform for UK organizations. Tools: VS Code, Laravel, VueJS, MySQL. Methodology: Agile & International Collaboration.",
    link: "",
  },
  {
    name: "Intellinz Business for Sale",
    desc: "Business marketplace for Singapore clients. Integrated XERO, Stripe, and Sanction Scanner APIs using Laravel and MySQL.",
    link: "",
  },
  {
    name: "Corporate Secretarial Services",
    desc: "Governance and compliance management system for Singapore business regulations. Developed with Laravel and Stripe integration.",
    link: "",
  },
  {
    name: "Human Resource Management System",
    desc: "School automation and HRM system for DSSC. Built with Codeigniter and MySQL. Involved web and mobile development.",
    link: "",
  },
  {
    name: "Learning Management Resource System",
    desc: "E-Learning platform for online learning resources. Developed with Laravel and MySQL during the shift to remote education.",
    link: "",
  },
  {
    name: "DSSC Admission System",
    desc: "Rapidly developed student enrollment portal for efficient data processing during admission cycles. Tools: Laravel, MySQL, CPanel.",
    link: "",
  },
  {
    name: "DSSC Scheduling System and Android App",
    desc: "Academic resource management portal and COVID-19 response visitation system built with Laravel.",
    link: "",
  },
  {
    name: "College Official Website",
    desc: "Main CMS for DSSC. Developed using Joomla and CPanel. Includes training facilitation for staff users.",
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
