import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const EducationContainer = styled.section`
  background: #0d0d0d;
  color: #ffffff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

export const EducationTitle = styled.h2`
  font-size: 2rem;
  color: #00adb5;
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 70px;
    height: 2px;
    background: #06d6a0;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 600px) {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
`;

export const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 25px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 12px;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #00adb5, transparent);
  }

  @media (max-width: 600px) {
    padding-left: 15px;
    &::before {
      left: 8px;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  animation: ${fadeIn} 0.6s ease-out both;

  &:hover > div:last-of-type {
    background: #111;
    border-color: #00adb5;
    transform: translateY(-3px);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    gap: 0.7rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const TimelineDot = styled.div`
  background: #00adb5;
  color: #fff;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  min-width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  font-size: 0.9rem;
  box-shadow: 0 0 10px rgba(0, 173, 181, 0.4);

  @media (max-width: 400px) {
    width: 22px;
    height: 22px;
    font-size: 0.8rem;
  }
`;

export const TimelineContent = styled.div`
  background: #1a1a1a;
  border: 1px solid #222;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  flex: 1;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    padding: 0.8rem 1.2rem;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Degree = styled.h4`
  font-size: 1.1rem;
  color: #06d6a0;
  margin-bottom: 0.3rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const School = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const Year = styled.span`
  font-size: 0.85rem;
  color: #aaa;

  span {
    color: #00adb5;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
