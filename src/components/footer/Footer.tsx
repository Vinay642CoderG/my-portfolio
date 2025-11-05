import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  SocialLinks,
  SocialIcon,
  CopyRight,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialIcon
            href="https://github.com/"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com/"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="mailto:someone@example.com" aria-label="Email">
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>

        <CopyRight>
          © {new Date().getFullYear()} <strong>Vinay.Dev</strong> — All Rights
          Reserved.
        </CopyRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
