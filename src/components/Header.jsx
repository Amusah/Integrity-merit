import { useLocation } from "react-router-dom";

import { styled } from "styled-components";
import { IoMdPower } from "react-icons/io";

const StyledHeader = styled.header`
  /* height: 10rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 4rem;
  position: relative;
  /* margin-bottom: 10rem; */
`;
const iconStyles = {
  cursor: "pointer",
  marginLeft: 'auto'
};

const Header = ({ children }) => {
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];

  return (
    <StyledHeader>
      {children}
      <span style={iconStyles}>
        <IoMdPower size={30} />
      </span>
    </StyledHeader>
  );
};

export default Header;
