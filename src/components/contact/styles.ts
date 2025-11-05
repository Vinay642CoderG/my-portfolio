import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 8px #00adb5; }
  50% { text-shadow: 0 0 15px #06d6a0; }
`;

export const ContactSection = styled.section`
  background: linear-gradient(180deg, #0d0d0d 0%, #111 100%);
  color: #ffffff;
  padding: 5rem 2rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-in-out;
`;

export const ContactTitle = styled.h2`
  font-size: 2.3rem;
  color: #00adb5;
  margin-bottom: 1rem;
  animation: ${glow} 3s infinite ease-in-out;
`;

export const ContactSubtitle = styled.p`
  font-size: 1.1rem;
  color: #bdbdbd;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  margin-bottom: 3rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  color: #ccc;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.5rem;
  color: #00adb5;
  display: flex;
  align-items: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: #ccc;
  transition: all 0.3s ease;

  &:hover {
    color: #00adb5;
    transform: translateY(-5px) scale(1.1);
    text-shadow: 0 0 10px #00adb5;
  }
`;
