import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AboutContainer = styled.section`
  background: #0d0d0d;
  color: #ffffff;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContent = styled.div`
  max-width: 1000px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00adb5;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: #06d6a0;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutText = styled.div`
  color: #ccc;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 3rem;

  strong {
    color: #06d6a0;
  }
`;

export const HighlightBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

export const HighlightItem = styled.div`
  background: #1a1a1a;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  width: 220px;
  transition: all 0.3s ease;
  border: 1px solid #222;
  color: #ddd; /* base text color */

  &:hover {
    background: #00adb5;
    color: #fff;
    transform: translateY(-5px);
    border-color: #00adb5;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    color: inherit; /* inherit color so hover changes it */
  }

  p {
    font-size: 0.9rem;
    color: #ccc;
  }

  /* When the parent is hovered, update the inner <p> color too */
  &:hover p {
    color: #fff;
  }
`;
