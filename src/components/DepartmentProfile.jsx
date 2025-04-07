import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import StyledButton from "./Button";

//MIXINS
import { wrapper } from "../styles/mixins";

const ProfileWrapper = styled.div`
  ${wrapper}
`;

const ProfileCard = styled.div`
  width: 40rem;
  height: 50rem;
  background-color: #fafafa;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 300;
  gap: 2rem;
  color: #7c7a7a;
  position: relative;
  padding: 3rem;

  & .cardHeader {
    margin-bottom: 2rem;
    text-align: center;

    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      color: var(--primary);
    }
  }

  .cardBody {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    span h4 {
      color: var(--primary);
      margin-bottom: 1rem;
      font-weight: 400;
    }

    p {
      font-size: 2rem;
    }

    /* p{
      max-width: 50%;
      overflow-wrap: break-word;
    } */
  }

  & .btn{
    width: 100%;
    border-radius: 0.7rem;
    margin-top: 2rem;
  }
`;

function DepartmentProfile({ children, departmentData }) {
  const navigate = useNavigate();

  return (
    <ProfileWrapper>
      <ProfileCard>
        <div className="cardHeader">
          <h1>Henry Amusah</h1>
          <p>Department Manager</p>
        </div>
        <div className="cardBody">
          <span>
            <h4>Department Name</h4>
            <p>Software Testing</p>
          </span>
          <span>
            <h4>Description</h4>
            <p>
              Department Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Tenetur, veritatis.
            </p>
          </span>
        </div>
        <StyledButton onClick={() => navigate('departmentData.name')} className="btn">View Employees</StyledButton>
      </ProfileCard>
    </ProfileWrapper>
  );
}

export default DepartmentProfile;
