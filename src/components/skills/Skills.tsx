/** @jsxImportSource @emotion/react */
import React from "react";
import {
  SkillsContainer,
  SkillsTitle,
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillList,
  SkillItem,
  IconWrapper,
} from "./styles";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      iconColor: "#00adb5",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3 / Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      iconColor: "#06d6a0",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Database",
      iconColor: "#f39c12",
      skills: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
  ];

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>

      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index}>
            <CategoryTitle color={category.iconColor}>
              {category.title}
            </CategoryTitle>
            <SkillList>
              {category.skills.map((skill, i) => (
                <SkillItem key={i}>
                  <IconWrapper color={category.iconColor}>
                    {skill.icon}
                  </IconWrapper>
                  {skill.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
