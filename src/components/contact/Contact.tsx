/** @jsxImportSource @emotion/react */
import React from "react";
import {
  ContactSection,
  ContactTitle,
  ContactSubtitle,
  ContactDetails,
  ContactItem,
  IconWrapper,
  SocialLinks,
  SocialIcon,
} from "./styles";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactSubtitle>
        Let’s collaborate, build something amazing, or just have a chat.
      </ContactSubtitle>

      <ContactDetails>
        <ContactItem>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <span>vinay@example.com</span>
        </ContactItem>

        <ContactItem>
          <IconWrapper>
            <FaPhoneAlt />
          </IconWrapper>
          <span>+91 9876543210</span>
        </ContactItem>

        <ContactItem>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <span>New Delhi, India</span>
        </ContactItem>
      </ContactDetails>

      <SocialLinks>
        <SocialIcon
          href="https://github.com/yourusername"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com/yourusername"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTwitter />
        </SocialIcon>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;
