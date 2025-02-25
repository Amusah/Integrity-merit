import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { breakPoints } from "./breakpoints";

export const NavList = styled.ul`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 4.5rem;
  /* align-items: left; */
`;

export const StyledNavLink = styled(NavLink)`
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



