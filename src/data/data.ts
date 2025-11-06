import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaDatabase,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { IData } from "@/types/types";

const data: IData = {
  hero: {
    subtitle: "Hello, I'm",
    title: "Vinay Kumar",
    tagline: {
      start: "A passionate",
      end: "crafting interactive & visually stunning web experiences.",
    },
    typed: [
      "Full-Stack Developer",
      "MERN Stack Engineer",
      "Creative Coder",
      "UI/UX Enthusiast",
    ],
  },

  about: {
    title: "About Me",
    description: `I am a dedicated full-stack developer with experience in building dynamic web applications. I love creating clean, modern, and user-friendly interfaces, and I enjoy solving complex problems with innovative solutions.`,
    highlights: [
      { value: "2+", label: "Years of Experience" },
      { value: "15+", label: "Projects Completed" },
    ],
  },

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      school: "ABC University",
      year: "2018 - 2022",
    },
    {
      degree: "High School Diploma",
      field: "Science",
      school: "XYZ School",
      year: "2016 - 2018",
    },
  ],

  skills: [
    {
      title: "Frontend",
      iconColor: "#00adb5",
      skills: [
        { name: "React.js", Icon: FaReact },
        { name: "JavaScript", Icon: SiJavascript },
        { name: "HTML5", Icon: FaHtml5 },
        { name: "CSS3 / Tailwind", Icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      iconColor: "#06d6a0",
      skills: [
        { name: "Node.js", Icon: FaNodeJs },
        { name: "Django", Icon: SiDjango },
        { name: "Python", Icon: FaPython },
      ],
    },
    {
      title: "Database",
      iconColor: "#f39c12",
      skills: [
        { name: "MySQL", Icon: FaDatabase },
        { name: "MongoDB", Icon: SiMongodb },
      ],
    },
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "Tech Solutions",
      duration: "Jan 2023 - Present",
      description:
        "Building responsive and interactive web applications using React.js and Tailwind CSS.",
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Innovate Labs",
      duration: "Jun 2022 - Dec 2022",
      description:
        "Developed REST APIs with Node.js and Express, and integrated them with MongoDB.",
    },
  ],

  projects: [
    {
      name: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Emotion JS.",
      image: "/images/portfolio.png",
      tags: ["React", "Emotion", "CSS"],
      links: { github: "https://github.com/vinay/portfolio", live: "#" },
    },
    {
      name: "Task Manager App",
      description:
        "A MERN stack app to manage daily tasks with authentication.",
      image: "/images/task-manager.png",
      tags: ["React", "Node.js", "MongoDB"],
      links: { github: "https://github.com/vinay/task-manager", live: "#" },
    },
  ],

  contact: {
    title: "Contact Me",
    description:
      "Feel free to reach out for collaborations or just a friendly chat!",
    email: "vinay@example.com",
    phone: "+91 12345 67890",
    location: "India",
    social: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/vinay",
        Icon: FaLinkedin,
      },
      { platform: "GitHub", url: "https://github.com/vinay", Icon: FaGithub },
      {
        platform: "Twitter",
        url: "https://twitter.com/vinay",
        Icon: FaTwitter,
      },
    ],
  },

  header: {
    title: "Vinay.dev",
  },
  footer: {
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/", Icon: FaGithub },
      { platform: "LinkedIn", url: "https://linkedin.com/", Icon: FaLinkedin },
      { platform: "Twitter", url: "https://twitter.com/", Icon: FaTwitter },
      {
        platform: "Email",
        url: "mailto:someone@example.com",
        Icon: FaEnvelope,
      },
    ],
    copyrightText: `© ${new Date().getFullYear()} Vinay.Dev — All Rights Reserved.`,
  },
};

export default data;
