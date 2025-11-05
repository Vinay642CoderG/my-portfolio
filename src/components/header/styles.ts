import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 999;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  a {
    color: #00adb5;
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkStyled = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00adb5;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: #111;
  border: 1px solid #222;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 998;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #00adb5;
    }
  }
`;
