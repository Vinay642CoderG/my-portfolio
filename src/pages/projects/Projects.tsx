import {
  FaGithub,
  FaExternalLinkAlt,
  FaHome,
  FaAngleRight,
} from "react-icons/fa";
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
  Breadcrumb,
  BreadcrumbCurrent,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./styles";
import { useEffect } from "react";

const ProjectsPage = () => {
  const {
    data: { projects: projectsData },
  } = useAppContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ProjectsSection>
      <Breadcrumb>
        <BreadcrumbLink to="/">
          <FaHome /> Home
        </BreadcrumbLink>
        <BreadcrumbSeparator>
          <FaAngleRight />
        </BreadcrumbSeparator>
        <BreadcrumbCurrent>Projects</BreadcrumbCurrent>
      </Breadcrumb>

      <ProjectsTitle>All Projects</ProjectsTitle>

      <ProjectsGrid>
        {projectsData?.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.name} />
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>

              {project.tags && (
                <ProjectTags>
                  {project.tags.map((tag, idx) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
                </ProjectTags>
              )}

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
    </ProjectsSection>
  );
};

export default ProjectsPage;
