import { getStableId } from "@/helpers/getStableId";
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

import { useAppContext } from "@/context/AppContext";

const Skills = () => {
  const {
    data: { skills: skillsData },
  } = useAppContext();

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>

      <SkillsGrid>
        {skillsData.map((category, i) => (
          <SkillCategory key={getStableId(category, "skillcategory")}>
            <CategoryTitle color={category.iconColor}>
              {category.title}
            </CategoryTitle>
            <SkillList>
              {category.skills.map((skill, i) => (
                <SkillItem key={getStableId(skill, "skillicon")}>
                  <IconWrapper color={category.iconColor}>
                    <skill.Icon />
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
