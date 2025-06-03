import React from "react";
import {styled} from 'styled-components';

import Container from "../components/Container";
// import { ProfileContainer } from "../styles/Employees";
import Profile from "../features/Employees/Profile";

const ProfileContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
`;

function EmployeeProfile() {
  return (
    <Container>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
    </Container>
  );
}

export default EmployeeProfile;
