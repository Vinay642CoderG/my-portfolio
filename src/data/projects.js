export const projects = [
  { id: 1, title: 'Blog Application', description: 'Full-stack blogging platform with JWT authentication, REST APIs, content management, comments, and AI-powered content suggestions.', category: 'AI/ML', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AI Integration'], github: 'https://github.com/Vinay642CoderG/Blogify-MERN', featured: true, color: 'violet' },
  { id: 2, title: 'E-Commerce Store', description: 'Full-stack e-commerce application with product management, shopping cart, checkout, authentication, order processing, and product recommendations.', category: 'Web', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'], featured: true, color: 'amber' },
  {
    id: 3,
    title: 'Resume ATS Checker',
    description:
      'AI-powered recruitment tool that scores resumes against job descriptions, ranks candidates by ATS score, and provides suggestions and visual analysis to improve resume-job alignment.',
    category: 'AI/ML',
    image: '/ats_preview1.png',
    imageAlt: 'Resume ATS Checker interface with resume upload and job description panels',
    technologies: ['Python', 'AI/ML', 'REST APIs'],
    github: 'https://github.com/Vinay642CoderG/ats-resume-checker',
    features: [
      'Bulk resume upload and processing',
      'AI-driven resume scoring and improvement suggestions',
      'Candidate ranking based on ATS scores',
      'Graphical score analysis for recruiter decisions',
    ],
    featured: true,
    color: 'blue',
  },
]
