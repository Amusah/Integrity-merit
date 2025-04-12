import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

// COMPONENTS
import StyledButton from "./Button";

//MIXINS
import { wrapper } from "../styles/mixins";
import { fadeIn } from "../styles/GlobalStyles";
import { useEscapeEvent } from "../hooks/Events";

const ProfileWrapper = styled.div`
  ${wrapper}
`;

const ProfileCard = styled.div`
  width: 38%;
  /* height: 50rem; */
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
  padding: 5rem 3rem;
  animation: ${fadeIn} 0.3s cubic-bezier(0.26, 0.53, 0.74, 1.48);

  & .cardHeader {
    margin-bottom: 2rem;
    text-align: center;

    h4 {
      color: var(--primary);
      margin-bottom: 1rem;
      font-weight: 400;
    }

    p {
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      /* color: var(--primary); */
    }

    & .close-btn {
      position: absolute;
      top: 5%;
      right: 3%;
      cursor: pointer;
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

    span p {
      font-size: 2rem;
    }

  }

  & .btn {
    width: 100%;
    border-radius: 0.7rem;
    margin-top: 2rem;
  }
`;

function DepartmentProfile({ children, departmentData, toggleProfile }) {
  const {name, description, management} = departmentData;

  useEscapeEvent(toggleProfile);

  const navigate = useNavigate();
  console.log(departmentData)

  return (
    <ProfileWrapper>
      <ProfileCard>
        <div className="cardHeader">
          <IoClose onClick={toggleProfile} className="close-btn" />
          <h4>Department Manager</h4>
          <p>{management}</p>
        </div>
        <div className="cardBody">
          <span>
            <h4>Department Name</h4>
            <p>{name}</p>
          </span>
          <span>
            <h4>Description</h4>
            <p>
              {description}
            </p>
          </span>
        </div>
        <StyledButton
          onClick={() => navigate(name)}
          className="btn"
        >
          View Employees
        </StyledButton>
      </ProfileCard>
    </ProfileWrapper>
  );
}

export default DepartmentProfile;
