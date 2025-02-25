
// ICONS //
import { CiHome } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { NavList, StyledNavLink } from "../styles/MainNav";



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
