import { styled } from "styled-components";
import { IoMdPower } from "react-icons/io";

const StyledHeader = styled.header`
  /* height: 10rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 4rem;
`
const iconStyles = {
  cursor: "pointer",
}

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {children}
      <span style={iconStyles}>
        <IoMdPower size={30} />
      </span>
    </StyledHeader>
  );
}

export default Header