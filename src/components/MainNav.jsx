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

const NavList = styled.ul`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 4.5rem;
  align-items: left
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

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

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <CiHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineBuildingOffice />
            <span>Departments</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">
            <GrGroup />
            <span>Employees</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">
            <MdOutlineCancelPresentation />
            <span>Resignations / Terminations</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">
            <GoTrophy />
            <span>Rewards / Punishment</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">
            <GoGraph />
            <span>KPI</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">
            <VscFeedback />
            <span>Feedbacks</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
