import { useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaBriefcase,
} from "react-icons/fa";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLinkStyled,
  MobileMenuButton,
  MobileNav,
} from "./styles";

const menuItems = [
  { id: "hero", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUserAlt /> },
  { id: "skills", label: "Skills", icon: <FaTools /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const renderLinks = (onClick?: () => void) =>
    menuItems.map(({ id, label, icon }) => (
      <NavLinkStyled key={id} href={`#${id}`} onClick={onClick}>
        {icon} {label}
      </NavLinkStyled>
    ));

  return (
    <HeaderContainer>
      <Logo>
        <a href="#hero">Vinay.Dev</a>
      </Logo>

      {/* Desktop Navigation */}
      <Nav>{renderLinks()}</Nav>

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setOpen(!open)}>
        <FaBars />
      </MobileMenuButton>

      {/* Mobile Navigation */}
      {open && <MobileNav>{renderLinks(() => setOpen(false))}</MobileNav>}
    </HeaderContainer>
  );
};

export default Header;
