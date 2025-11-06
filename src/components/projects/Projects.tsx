import { useAppContext } from "@/context/AppContext";
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
import { getStableId } from "@/helpers/getStableId";

const Projects = () => {
  const {
    data: { projects: projectsData },
  } = useAppContext();

  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>

      <ProjectsGrid>
        {projectsData.slice(0, 6).map((project, i) => (
          <ProjectItem key={getStableId(project, "projectitem")}>
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.name} />
            </ProjectImageWrapper>

            <ProjectContent>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>

              <ProjectTags>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </ProjectTags>

              <ProjectLinks>
                {project.links.github && (
                  <ProjectLink
                    href={project.links.github}
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </ProjectLink>
                )}
                {project.links.live && (
                  <ProjectLink
                    href={project.links.live}
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
