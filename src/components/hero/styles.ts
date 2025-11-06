import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeroContainer = styled.section`
  position: relative;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
  padding: 5rem 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: 800px;
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  z-index: 1;
`;

export const HeroSubtitle = styled.h3`
  margin-top: 33px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #aaa;
  letter-spacing: 1.5px;
  margin-bottom: 0.8rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #00adb5;
  margin-bottom: 1rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const HeroTagline = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 2.5rem;

  strong {
    color: #06d6a0;
  }
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.a<ButtonProps>`
  text-decoration: none;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  border: 2px solid ${(props) => (props.primary ? "#00adb5" : "#fff")};
  background: ${(props) => (props.primary ? "#00adb5" : "transparent")};
  color: ${(props) => (props.primary ? "#fff" : "#fff")};
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.primary ? "#06d6a0" : "#00adb5")};
    border-color: ${(props) => (props.primary ? "#06d6a0" : "#00adb5")};
    transform: translateY(-3px);
  }
`;
