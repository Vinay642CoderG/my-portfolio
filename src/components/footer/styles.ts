import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Subtle fade-up animation for footer on load
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const FooterContainer = styled.footer`
  background: #0d0d0d;
  color: #e0e0e0;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid #222;
  animation: ${fadeUp} 0.5s ease;
`;

export const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const SocialIcon = styled.a`
  color: #e0e0e0;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00adb5;
    transform: scale(1.2);
  }
`;

export const CopyRight = styled.p`
  font-size: 0.9rem;
  color: #aaa;

  strong {
    color: #00adb5;
    font-weight: 600;
  }
`;
