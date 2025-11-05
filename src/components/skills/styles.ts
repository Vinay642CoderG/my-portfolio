import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SkillsContainer = styled.section`
  background: #0d0d0d;
  color: #ffffff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SkillsTitle = styled.h2`
  font-size: 2rem;
  color: #00adb5;
  margin-bottom: 2.5rem;
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
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
`;

export const SkillCategory = styled.div`
  background: #1a1a1a;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out both;

  &:hover {
    border-color: #00adb5;
    transform: translateY(-4px);
    background: #111;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.color || "#06d6a0"};
  margin-bottom: 1.2rem;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.95rem;
  color: #ccc;
  margin-bottom: 0.7rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateX(5px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.color || "#00adb5"};
  display: flex;
  align-items: center;
`;
