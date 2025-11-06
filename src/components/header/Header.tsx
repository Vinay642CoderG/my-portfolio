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
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { FaBookAtlas } from "react-icons/fa6";

const menuItems = [
  { id: "hero", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUserAlt /> },
  { id: "education", label: "Education", icon: <FaBookAtlas /> },
  { id: "skills", label: "Skills", icon: <FaTools /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Header = () => {
  const {
    data: { header: headerData },
  } = useAppContext();
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const renderLinks = (onClick?: () => void) => {
    // check if we are on the projects page
    const isProjectsPage = location.pathname === "/projects";

    if (isProjectsPage) {
      return;
    }

    // otherwise, show the regular menu
    return menuItems.map(({ id, label, icon }) => (
      <NavLinkStyled key={id} href={`#${id}`} onClick={onClick}>
        {icon} {label}
      </NavLinkStyled>
    ));
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to={"/"}>{headerData.title}</Link>
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
