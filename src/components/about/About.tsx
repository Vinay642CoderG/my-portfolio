import { useAppContext } from "@/context/AppContext";
import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutTitle,
  AboutDescription,
  HighlightBox,
  HighlightItem,
} from "./styles";
import { getStableId } from "@/helpers/getStableId";

const About = () => {
  const {
    data: { about: aboutData },
  } = useAppContext();
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>{aboutData.title}</AboutTitle>

        <AboutText>
          <AboutDescription>{aboutData.description}</AboutDescription>

          <HighlightBox>
            {aboutData.highlights?.map((val, i) => {
              return (
                <HighlightItem key={getStableId(val, "highlight")}>
                  <h3>{val.value}</h3>
                  <p>{val.label}</p>
                </HighlightItem>
              );
            })}
          </HighlightBox>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
