import { useAppContext } from "@/context/AppContext";
import {
  ExperienceContainer,
  Title,
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
} from "./styles";
import { getStableId } from "@/helpers/getStableId";

const Experience = () => {
  const {
    homeData: { experience: experienceData },
  } = useAppContext();
  return (
    <ExperienceContainer id="experience">
      <Title>Experience</Title>
      <Timeline>
        {experienceData.map((exp, i) => (
          <TimelineItem key={getStableId(exp, "experienceitem")}>
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
