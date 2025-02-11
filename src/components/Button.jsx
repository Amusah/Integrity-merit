import { styled } from "styled-components";

const StyledButton = styled.button`
    background-color: var(--light-primary);
    border: none;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    /* border-radius: 0.7rem; */

    &:hover {
      filter: brightness(107%);
    }
`;

function Button({ children }) {
  return (
    <StyledButton>
      { children }
    </StyledButton>
  )
}

export default Button;
