import styled from 'styled-components';

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
    font-size: 2rem;
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
  background-color: ${props => props.bg};
  color: $(props => props.color);
  padding: 2rem;
`;

export { Card, FeatureCard };
