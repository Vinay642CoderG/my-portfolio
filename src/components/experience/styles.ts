import styled from "@emotion/styled";

export const ExperienceContainer = styled.section`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #00adb5;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #00adb5, transparent);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding-left: 1.5rem;

    &::before {
      left: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding-left: 1rem;

    &::before {
      left: 0.6rem;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    padding-left: 1rem;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -0.3rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #00adb5;
  border-radius: 50%;
  box-shadow: 0 0 10px #00adb5;

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    left: -0.25rem;
  }
`;

export const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 173, 181, 0.1);
  transition: transform 0.3s ease, background 0.3s ease;

  h3 {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 0.3rem;

    @media (max-width: 480px) {
      font-size: 1.05rem;
    }
  }

  h4 {
    font-size: 1rem;
    color: #00adb5;
    margin-bottom: 0.3rem;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }

  span {
    font-size: 0.9rem;
    opacity: 0.8;
    display: block;
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: #ccc;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.1);
  }
`;
