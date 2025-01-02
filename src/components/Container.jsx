import { styled } from "styled-components";

const StyledContainer = styled.div`
  background-color: var(--grey-background);
  /* width: 100%; */
  padding: 4rem 4rem 6.4rem;
`;

function Container({ children }) {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export default Container;
