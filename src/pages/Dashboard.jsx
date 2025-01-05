import styled from "styled-components";
import { Card, FeatureCard } from "../styles/Card";

import Container from "../components/Container";
import { employeeStats, features } from "../index";

import { fontRegular, fontBold } from "../styles/mixins";

const StatsContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem; */

  /* min-height: 100vh; */
  /* height: 100% */

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;

  & div{
    flex-grow: 1;
    flex-basis: 30rem;
  }

`;

const FeatureContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem; */

  /* min-height: 100vh; */
  /* height: 100% */
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;

  & div {
    flex-grow: 1;
    flex-basis: 30rem;
  }
`;

const H3 = styled.h3`
  color: ${props => props.$textcolor}
`;



function Dashboard() {
  return (
    <Container>
      <StatsContainer>
        {employeeStats.map((stat) => {
          return (
            <Card key={stat.id}>
              <p>{stat.title}</p>
              <h3>{stat.totalCount}</h3>
            </Card>
          );
        })}
      </StatsContainer>
      <FeatureContainer>
        {features.map(feature => (
           <FeatureCard $bg={feature.bg} key={feature.id}>
            <span>
              <H3 $textcolor={feature.color}>{feature.title}</H3>
              <img src={feature.icon} alt="feature icon" />
            </span>
            <p>{feature.text}</p>
          </FeatureCard>
  ))}
      </FeatureContainer>
    </Container>
  );
}

export default Dashboard;
