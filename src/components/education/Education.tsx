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

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (CSE)",
      school: "XYZ Institute of Technology",
      year: "2021 – 2025",
      score: "GPA: 7.8 / 10",
    },
    {
      degree: "Higher Secondary (12th)",
      school: "ABC Senior Secondary School",
      year: "2021",
      score: "Percentage: 88%",
    },
    {
      degree: "Secondary (10th)",
      school: "ABC Senior Secondary School",
      year: "2019",
      score: "Percentage: 90%",
    },
  ];

  return (
    <EducationContainer id="education">
      <EducationTitle>Education</EducationTitle>
      <Timeline>
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineDot>
              <FaGraduationCap />
            </TimelineDot>
            <TimelineContent>
              <Degree>{edu.degree}</Degree>
              <School>{edu.school}</School>
              <Year>
                {edu.year} • <span>{edu.score}</span>
              </Year>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationContainer>
  );
};

export default Education;
