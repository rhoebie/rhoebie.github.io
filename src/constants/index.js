/* eslint-disable no-unused-vars */
import {
    websiteDev,
    mobileDev,
    frontendDev,
    backendDev,
    csharp,
    dart,
    flutter,
    git,
    github,
    html,
    css,
    javascript,
    typescript,
    laravel,
    figma,
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
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "process",
    title: "Process",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
    {
        title: "Web Developer",
        icon: websiteDev,
        techStack: [html, css, javascript, typescript, react, laravel, php, vite],
    },
    {
        title: "Mobile Developer",
        icon: mobileDev,
        techStack: [dart, flutter],
    },
    {
        title: "Frontend Developer",
        icon: frontendDev,
        techStack: [figma, dart, flutter, react, materialui, twcss, html, css, javascript, typescript],
    },
    {
        title: "Backend Developer",
        icon: backendDev,
        techStack: [csharp, netcore, laravel, php, mysql, mssql],
    },
];

export const techStack = [
    {
        name: "C#",
        shade: "#68207a",
        icon: csharp,
    },
    {
        name: "Dart",
        shade: "#00c5b3",
        icon: dart,
    },
    {
        name: "Flutter",
        shade: "#3eb7d3",
        icon: flutter,
    },
    {
        name: "Git",
        shade: "#f34e28",
        icon: git,
    },
    {
        name: "GitHub",
        shade: "#ffffff",
        icon: github,
    },
    {
        name: "JavaScript",
        shade: "#efdb4e",
        icon: javascript,
    },
    {
        name: "Laravel",
        shade: "#f15240",
        icon: laravel,
    },
    {
        name: "Material UI",
        shade: "#1c7eb7",
        icon: materialui,
    },
    {
        name: ".NET Core",
        shade: "#623697",
        icon: netcore,
    },
    {
        name: "PHP",
        shade: "#767ab3",
        icon: php,
    },
    {
        name: "React",
        shade: "#50b0d3",
        icon: react,
    },
    {
        name: "Tailwind CSS",
        shade: "#38bdf9",
        icon: twcss,
    },
    {
        name: "MySQL",
        shade: "#ffffff",
        icon: mysql,
    },
    {
        name: "Microsoft SQL Server",
        shade: "#ffffff",
        icon: mssql,
    },
    {
        name: "Vite.js",
        shade: "#8f6dff",
        icon: vite,
    }
];

export const experiences = [
    {
        title: "Junior Software Developer",
        company_name: "Cantier System Inc.",
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
    },
    {
        title: "Software Developer Intern",
        company_name: "Bicutan Medical Center Inc.",
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
    }
];