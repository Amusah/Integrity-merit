import { styled, css } from "styled-components";

const type = {
  bordered: css`
    border-top-right-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
  `,

  primary: css`
    background-color: var(--light-primary);
    color: #fff;
    /* border-radius: 0.7rem; */
  `,

  danger: css`
    background-color: #d91656;
    color: #fff;
    border-radius: 0.7rem;
  `,
};

const StyledButton = styled.button`
  background-color: ${props => props.$bg || "var(--light-primary)"};
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

// StyledButton.defaultProps = {
//   type: "primary",
// };

// function Button({ children, onClick }) {
//   return <StyledButton onClick={onClick}>{children}</StyledButton>;
// }

export default StyledButton;
