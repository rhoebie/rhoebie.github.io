/* eslint-disable no-unused-vars */
import {
    csharp,
    dart,
    flutter,
    git,
    github,
    javascript,
    laravel,
    materialui,
    netcore,
    php,
    react,
    twcss,
    mysql,
    mssql,
    vite,
    bmc,
    cantier
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
    {
        title: "Web Developer",
        icon: '#',
    },
    {
        title: "Mobile Developer",
        icon: '#',
    },
    {
        title: "Frontend Developer",
        icon: '#',
    },
    {
        title: "Backend Developer",
        icon: '#',
    },
];

const techStack = [
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "Dart",
        icon: dart,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "GitHub",
        icon: github,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Laravel",
        icon: laravel,
    },
    {
        name: "Material UI",
        icon: materialui,
    },
    {
        name: ".NET Core",
        icon: netcore,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "React",
        icon: react,
    },
    {
        name: "Tailwind CSS",
        icon: twcss,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "MsSQL",
        icon: mssql,
    },
    {
        name: "Vite.js",
        icon: vite,
    }
];

const experiences = [
    {
        title: "Full Stack Developer Intern",
        company_name: "Bicutan Medical Center",
        company_address: "Bicutan Medical Center, M. L. Quezon Avenue, Taguig, Metro Manila, Philippines",
        company_website: "https://bicutanmed.com/home",
        company_logo: bmc,
        company_logoBg: "#ffffff",
        date: "Jan 2024 - May 2024",
        points: [
            "Developed a payroll system from scratch to automate salary computation, improving efficiency for the finance department.",
            "Assisted in building an HR management system to streamline employee records and administrative tasks.",
            "Utilized Flutter to develop a responsive and user-friendly frontend, enhancing accessibility across devices.",
            "Implemented Laravel for backend API development, ensuring secure and efficient data processing.",
            "Collaborated with the team using Git for version control, maintaining code integrity and project organization."
        ],
    },
    {
        title: "Junior Software Developer",
        company_name: "Cantier",
        company_address: "7th Floor, Unit 705, Asian Star Building, Asean Drive corner Singapura Lane, Filinvest Corporate City, Alabang, Muntinlupa City, 1781 Philippines",
        company_website: "https://www.cantier.com/",
        company_logo: cantier,
        company_logoBg: "#F15D22",
        date: "Jan 2022 - Present",
        points: [
            "Developed from scratch a mobile based application for a business, enhancing customer engagement and service delivery.",
            "Developed and maintained frontend applications using React, Material-UI, Redux Saga, and Reducers, enhancing user experience and state management efficiency.",
            "Built and optimized backend services with C# and ASP.NET, improving system reliability and efficiency.",
            "Tracked and managed assigned tasks using Azure DevOps, ensuring efficient workflow and timely project delivery.",
            "Collaborated with cross-functional teams to streamline development workflows and enhance product quality."
        ],
    }
];