import { styled } from "styled-components"


import MainNav from "./MainNav"
import Profile from "./Profile";
import Logo from './Logo';
import { desktop } from "../assets"
import { breakPoints } from "../styles/breakpoints";


const StyledSidebar = styled.aside`
  background-color: var(--light-primary);
  padding: 4rem 3rem;
  /* grid-row: 1 / -1; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  /* width: 30%; */
  /* min-height: 100vh; */

  ${breakPoints.laptopScreen} {
    /* position: absolute; */
    /* left: -20%; */
    /* z-index: 5; */
  }

  /* right: 90%; */
  /* left: -50%; */
`;


const Sidebar = () => {
  return (
    <StyledSidebar className="sideBar">
      <Logo src={desktop.logo} />
      <MainNav />
      <Profile />
    </StyledSidebar>
  );
}

export default Sidebar