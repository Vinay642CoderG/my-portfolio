import {
  ExperienceContainer,
  Title,
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
} from "./styles";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "TechNova Solutions",
    duration: "Jun 2024 - Sep 2024",
    description:
      "Developed responsive React UI components and improved site performance by optimizing rendering logic.",
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Personal Projects",
    duration: "2023 - 2024",
    description:
      "Built and deployed full-stack web apps using React, Node.js, and MongoDB with clean, reusable code.",
  },
  {
    role: "Web Developer Intern",
    company: "CodeCrafters",
    duration: "Jan 2023 - May 2023",
    description:
      "Assisted in designing REST APIs and converting static pages into dynamic React views.",
  },
];

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <Title>Experience</Title>
      <Timeline>
        {experiences.map((exp, i) => (
          <TimelineItem key={i}>
            <TimelineDot />
            <TimelineContent>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
              <p>{exp.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
