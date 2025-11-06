import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export * from "@/components/projects/styles";

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #888;
`;

export const BreadcrumbLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #00adb5;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: #aaa;
  font-size: 0.9rem;
`;

export const BreadcrumbCurrent = styled.span`
  color: #b8b6b6;
  font-weight: 600;
`;
