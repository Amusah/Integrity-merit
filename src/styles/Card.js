import styled from "styled-components";

const Card = styled.div`
  /* width: 23rem; */
  height: 18rem;
  background-color: var(--primary);
  color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  /* font-size: 2rem; */
  /* padding: 10rem; */

  & p {
    font-size: 2.3rem;
    margin-bottom: 1.8rem;
  }

  & h3 {
    font-size: 2.5rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const FeatureCard = styled.div`
  height: 20rem;
  background-color: ${(props) => props.$bg};
  /* color: ${(props) => props.color}; */
  border-radius: 1.5rem;
  padding: 2rem;
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  & span {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
  }

  & h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  & p {
    font-size: 1.9rem;
  }
`;

export { Card, FeatureCard };
