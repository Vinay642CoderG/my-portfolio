import { useAppContext } from "@/context/AppContext";
import {
  EducationContainer,
  EducationTitle,
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  Degree,
  School,
  Year,
} from "./styles";
import { FaGraduationCap } from "react-icons/fa";
import { getStableId } from "@/helpers/getStableId";

const Education = () => {
  const {
    data: { education: educationData },
  } = useAppContext();

  return (
    <EducationContainer id="education">
      <EducationTitle>Education</EducationTitle>
      <Timeline>
        {educationData?.map((val, i) => (
          <TimelineItem key={getStableId(val, "educationitem")}>
            <TimelineDot>
              <FaGraduationCap />
            </TimelineDot>
            <TimelineContent>
              <Degree>
                {val.degree} | {val.field}
              </Degree>
              <School>{val.school}</School>
              <Year>{val.year}</Year>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationContainer>
  );
};

export default Education;
