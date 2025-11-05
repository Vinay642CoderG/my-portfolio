const homeData = {
    hero: {
        subtitle: "Hello, I'm",
        title: "Vinay Kumar",
        tagline: "A passionate",
        typed: [
            "Full-Stack Developer",
            "MERN Stack Engineer",
            "Creative Coder",
            "UI/UX Enthusiast"
        ],
        cta: [
            { text: "View My Work", href: "#projects", primary: true },
            { text: "Contact Me", href: "#contact" }
        ]
    },

    about: {
        title: "About Me",
        description: `I am a dedicated full-stack developer with experience in building dynamic web applications. I love creating clean, modern, and user-friendly interfaces, and I enjoy solving complex problems with innovative solutions.`
    },

    education: [
        {
            degree: "Bachelor of Technology (B.Tech)",
            field: "Computer Science and Engineering",
            school: "ABC University",
            year: "2018 - 2022"
        },
        {
            degree: "High School Diploma",
            field: "Science",
            school: "XYZ School",
            year: "2016 - 2018"
        }
    ],

    skills: [
        { name: "React.js", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "HTML/CSS/JS", level: "Expert" },
        { name: "Tailwind / Bootstrap", level: "Advanced" }
    ],

    experience: [
        {
            role: "Frontend Developer",
            company: "Tech Solutions",
            duration: "Jan 2023 - Present",
            description: "Building responsive and interactive web applications using React.js and Tailwind CSS."
        },
        {
            role: "Full-Stack Developer Intern",
            company: "Innovate Labs",
            duration: "Jun 2022 - Dec 2022",
            description: "Developed REST APIs with Node.js and Express, and integrated them with MongoDB."
        }
    ],

    projects: [
        {
            name: "Portfolio Website",
            description: "A responsive portfolio website built with React and Emotion JS.",
            image: "/images/portfolio.png",
            tags: ["React", "Emotion", "CSS"],
            links: { github: "https://github.com/vinay/portfolio", live: "#" }
        },
        {
            name: "Task Manager App",
            description: "A MERN stack app to manage daily tasks with authentication.",
            image: "/images/task-manager.png",
            tags: ["React", "Node.js", "MongoDB"],
            links: { github: "https://github.com/vinay/task-manager", live: "#" }
        }
    ],

    contact: {
        title: "Contact Me",
        description: "Feel free to reach out for collaborations or just a friendly chat!",
        email: "vinay@example.com",
        phone: "+91 12345 67890",
        social: [
            { platform: "LinkedIn", url: "https://linkedin.com/in/vinay" },
            { platform: "GitHub", url: "https://github.com/vinay" },
            { platform: "Twitter", url: "https://twitter.com/vinay" }
        ]
    }
};

export default homeData;
