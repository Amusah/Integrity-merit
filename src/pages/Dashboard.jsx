import styled from "styled-components";
import { Card, FeatureCard } from "../styles/Card";

import Container from "../components/Container";
import { employeeStats, features } from "../index";

import { fontRegular, fontBold } from "../styles/mixins";

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  /* min-height: 100vh; */
  /* height: 100% */
`;

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;
  /* min-height: 100vh; */
  /* height: 100% */
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
        {features.map(feature => {
          return <FeatureCard bg={feature.bg}></FeatureCard>;
        })}
      </FeatureContainer>
    </Container>
  );
}

export default Dashboard;
