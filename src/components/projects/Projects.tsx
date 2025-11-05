import {
  ProjectsSection,
  ProjectsTitle,
  ProjectsGrid,
  ProjectItem,
  ProjectImageWrapper,
  ProjectImage,
  ProjectContent,
  ProjectName,
  ProjectDesc,
  ProjectTags,
  Tag,
  ProjectLinks,
  ProjectLink,
  ViewMoreButton,
} from "./styles";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "Fake News Detector",
      desc: "An ML-based web app that detects fake news using TF-IDF and Logistic Regression.",
      tags: ["Python", "Flask", "Machine Learning"],
      image: "/images/fake-news.jpg",
      github: "https://github.com/yourusername/fake-news-detector",
      demo: "#",
    },
    {
      name: "AI Resume Screener",
      desc: "An AI tool to analyze resumes and rank candidates using cosine similarity.",
      tags: ["Streamlit", "NLP", "TF-IDF"],
      image: "/images/resume-screener.jpg",
      github: "https://github.com/yourusername/resume-screener",
      demo: "#",
    },
    {
      name: "Artistly Booking Platform",
      desc: "A Next.js-based platform for booking performing artists with responsive layouts.",
      tags: ["Next.js", "React", "TailwindCSS"],
      image: "/images/artistly.jpg",
      github: "https://github.com/yourusername/artistly",
      demo: "#",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.name} />
            </ProjectImageWrapper>

            <ProjectContent>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.desc}</ProjectDesc>

              <ProjectTags>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </ProjectTags>

              <ProjectLinks>
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </ProjectLink>
                )}
                {project.demo && (
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectItem>
        ))}
      </ProjectsGrid>
      <ViewMoreButton to="/projects">View More</ViewMoreButton>
    </ProjectsSection>
  );
};

export default Projects;
