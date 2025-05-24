import React from "react";
import { styled } from 'styled-components'
import ProfileCard from "./ProfileCard";

import { employees } from "../..";

const StyledContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5rem;
  width: 100%;
`;

function EmployeeContainer() {
  return (
    <StyledContainer>
      {employees.map((employee) => (
        <ProfileCard key={employee.staffId} employeeBio={employee} />
      ))}
    </StyledContainer>
  );
}

export default EmployeeContainer;
