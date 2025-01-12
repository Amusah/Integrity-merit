import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

// ICONS //
import { CiHome } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { breakPoints } from "../styles/breakpoints";

const NavList = styled.ul`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 4.5rem;
  /* align-items: left; */
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;

    color: #fff;
  }

  &:hover,
  &:active,
  &:active:link,
  &:active:visited {
    text-decoration: underline;
    text-underline-offset: 1rem;
  }

`;

const iconStyle = {
  color: "#fff",
  fontSize: "50",
};

const MainNav = () => {
  return (
    <nav>
      <NavList className="navList">
        <li>
          <StyledNavLink className="navLink" to="/">
            <CiHome className="icon" />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="navLink" to="/departments">
            <HiOutlineBuildingOffice className="icon" />
            <span>Departments</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="navLink" to="/employees">
            <GrGroup className="icon" />
            <span>Employees</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="navLink" to="/resignations">
            <MdOutlineCancelPresentation className="icon" />
            <span>Resignations / Terminations</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="navLink" to="/rewards">
            <GoTrophy className="icon" />
            <span>Rewards / Punishment</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="navLink" to="/kpi">
            <GoGraph className="icon" />
            <span>KPI</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="navLink" to="/feedbacks">
            <VscFeedback className="icon" />
            <span>Feedbacks</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="navLink">
            <FiSettings className="icon" />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
