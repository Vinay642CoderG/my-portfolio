import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaEnvelope,
  FaJava,
} from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiJavascript,
  SiCss3,
  SiC,
  SiCplusplus,
  SiJquery,
  SiPhp,
  SiSqlite,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IData } from "@/types/types";

const data: IData = {
  hero: {
    subtitle: "Hello, I'm",
    title: "Vinay Bhagat",
    tagline: {
      start: "A passionate",
      end: "building scalable, user-focused web applications.",
    },
    typed: [
      "Full-Stack Developer",
      "MERN Stack Developer",
      "Laravel Developer",
      "Python Developer",
      "Django Developer",
    ],
  },

  about: {
    title: "About Me",
    description: `I am a dedicated full-stack developer with experience in building dynamic web applications. I love creating clean, modern, and user-friendly interfaces, and I enjoy solving complex problems with innovative solutions.`,
    highlights: [
      { value: "0.6", label: "Years of Experience" },
      { value: "10+", label: "Projects Completed" },
    ],
  },

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal M.P",
      year: "2021 - 2025",
    },
    {
      degree: "Higher Secondary School Certification (10+2)",
      field: "PCM (Math Group)",
      school: "Sahara Public Hr. Sec. School (MP Board)",
      year: "2019 - 2020",
    },
    {
      degree: "Higher Secondary School Certification 10th",
      field: "",
      school: "Sahara Public Hr. Sec. School (MP Board)",
      year: "2017 - 2018",
    },
  ],

  skills: [
    {
      title: "Frontend",
      iconColor: "#00adb5",
      skills: [
        { name: "React Js", Icon: FaReact },
        { name: "HTML5", Icon: FaHtml5 },
        { name: "CSS3 / Boostrap5/ Tailwind", Icon: SiCss3 },
        { name: "JavaScript", Icon: SiJavascript },
        { name: "Jquery", Icon: SiJquery },
      ],
    },
    {
      title: "Backend",
      iconColor: "#06d6a0",
      skills: [
        { name: "Express Js", Icon: FaNodeJs },
        { name: "Django", Icon: SiDjango },
        { name: "Laravel", Icon: SiLaravel },
      ],
    },
    {
      title: "Database",
      iconColor: "#f39c12",
      skills: [
        { name: "MySQL", Icon: SiMysql },
        { name: "MongoDB", Icon: SiMongodb },
        { name: "Sqlite3", Icon: SiSqlite },
      ],
    },
    {
      title: "Languages",
      iconColor: "#00fc3b",
      skills: [
        { name: "C", Icon: SiC },
        { name: "C++", Icon: SiCplusplus },
        { name: "Java", Icon: FaJava },
        { name: "Python", Icon: FaPython },
        { name: "PHP", Icon: SiPhp },
      ],
    },
  ],

  experience: [
    {
      role: "Web Developer Intern",
      company: "Teknobit Solutions Inc.",
      duration: "Jan 2024 - July 2024",
      description:
        "Reduced page load time by 50% using lazy loading and code splitting. Delivered projects on time with a 4-member Git-based team.",
    },
    {
      role: "Full Stack Developer Intern",
      company: "Mainflow Services Pvt. Ltd.",
      duration: "Jun 2024 - Aug 2024",
      description:
        "Developed REST APIs with Node.js and Express, and integrated them with MongoDB.",
    },
  ],

  projects: [
    {
      name: "Ecommerce Website Using MERN Stack",
      description: "A MERN stack ecommerce website",
      image: "/images/task-manager.png",
      tags: [
        "React Js",
        "Node Js",
        "Express Js",
        "Tailwindcss",
        "MongoDB",
        "Stripe",
      ],
      links: { github: "", live: "" },
    },
    {
      name: "Task Management App",
      description:
        "A MERN stack app to manage daily tasks with authentication.",
      image: "/images/task-manager.png",
      tags: ["React Js", "Node Js", "Express Js", "Tailwindcss", "MongoDB"],
      links: { github: "", live: "" },
    },
  ],

  contact: {
    title: "Contact Me",
    description:
      "Feel free to reach out for collaborations or just a friendly chat!",
    email: "ytvinay345@gmail.com",
    phone: "+91-7389712102",
    location: "M.P., India",
    social: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/vinay-bhagat-2482212a3/",
        Icon: FaLinkedin,
      },
      {
        platform: "GitHub",
        url: "https://github.com/Vinay642CoderG",
        Icon: FaGithub,
      },
    ],
  },

  header: {
    title: "Vinay.dev",
  },
  footer: {
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/Vinay642CoderG",
        Icon: FaGithub,
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/vinay-bhagat-2482212a3/",
        Icon: FaLinkedin,
      },
      {
        platform: "Email",
        url: "mailto:ytvinay345@gmail.com",
        Icon: FaEnvelope,
      },
    ],
    copyrightText: `© ${new Date().getFullYear()} Vinay.Dev — All Rights Reserved.`,
  },
};

export default data;
