import { styled } from "styled-components"


import MainNav from "./MainNav"
import Profile from "./Profile";
import Logo from './Logo';
import { desktop } from "../assets"


const StyledSidebar = styled.aside`
  background-color: var(--light-primary);
  padding: 4rem 3rem;

  /* grid-row: 1 / -1; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  min-height: 100vh;
  position: absolute;
  /* left: -50%; */

`;


const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo src={desktop.logo} />
      <MainNav />
      <Profile />
    </StyledSidebar>
  );
}

export default Sidebar