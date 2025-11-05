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
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useAppContext } from "@/context/AppContext";
import { getStableId } from "@/helpers/getStableId";

const Contact = () => {
  const {
    homeData: { contact: contactData },
  } = useAppContext();
  return (
    <ContactSection id="contact">
      <ContactTitle>{contactData.title}</ContactTitle>
      <ContactSubtitle>{contactData.description}</ContactSubtitle>

      <ContactDetails>
        <ContactItem>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <span>{contactData.email}</span>
        </ContactItem>

        <ContactItem>
          <IconWrapper>
            <FaPhoneAlt />
          </IconWrapper>
          <span>{contactData.phone}</span>
        </ContactItem>

        <ContactItem>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <span>{contactData.location}</span>
        </ContactItem>
      </ContactDetails>

      <SocialLinks>
        {contactData.social.map((val, i) => {
          return (
            <SocialIcon
              href={val.url}
              target="_blank"
              aria-label={val.platform}
              key={getStableId(val, "contactsocial")}
            >
              <val.Icon />
            </SocialIcon>
          );
        })}
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;
