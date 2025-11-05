import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutTitle,
  AboutDescription,
  HighlightBox,
  HighlightItem,
} from "./styles";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>

        <AboutText>
          <AboutDescription>
            I'm <strong>Vinay Kumar</strong>, a passionate{" "}
            <strong>Full-Stack Developer</strong> who loves turning ideas into
            elegant, efficient, and user-friendly digital experiences.
            <br />
            <br />
            With a deep interest in modern web technologies, I specialize in
            building scalable front-end interfaces and robust back-end systems.
            I’m always exploring new tools to make products faster, smoother,
            and smarter.
          </AboutDescription>

          <HighlightBox>
            <HighlightItem>
              <h3>2+</h3>
              <p>Years of Experience</p>
            </HighlightItem>
            <HighlightItem>
              <h3>15+</h3>
              <p>Projects Completed</p>
            </HighlightItem>
            <HighlightItem>
              <h3>React / Django</h3>
              <p>Tech Stack</p>
            </HighlightItem>
          </HighlightBox>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
