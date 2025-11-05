import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const NotFoundContainer = styled.section`
  background: #0d0d0d;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const ErrorCode = styled.h1`
  font-size: 6rem;
  color: #00adb5;
  margin: 0;
  animation: ${float} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: #ccc;
  margin: 1rem 0 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HomeButton = styled(Link)`
  background: transparent;
  color: #00adb5;
  border: 2px solid #00adb5;
  padding: 0.8rem 1.6rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #00adb5;
    color: #0d0d0d;
    box-shadow: 0 0 10px rgba(0, 173, 181, 0.4);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;
