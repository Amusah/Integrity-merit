import React from "react";
import { styled } from "styled-components";
import StyledButton from "../../components/Button";
// import { ProfileCard } from "../../styles/Employees";

import { RiEdit2Line } from "react-icons/ri";

const CardContainer = styled.div`
  display: flex;
  padding: 3rem 2rem;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.5rem 1.5rem;
  border-radius: 0.7rem;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 3.5rem;
  }

  & .edit {
    position: absolute;
    right: 1.5%;
    top: 14%;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 0.4rem;
  }

  /* & h2 {
    color: var(--light-primary);
    margin-bottom: 0.8rem;
  } */
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 8rem;
  }

  span h2 {
    font-weight: 400;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  span .name {
    color: var(--light-primary);
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
  }

  span .role {
    font-size: 1.3rem;
  }
`;

const InfoWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  & h2 {
    margin-bottom: 1.8rem;
    font-size: 1.5rem;
  }
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .column{
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .column span p:first-child {
    color: var(--light-primary);
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
`;



function Profile({ children }) {
  return (
    <>
      <CardContainer>
        <StyledButton $bg="var(--dark-primary)" className="edit">
          Edit <RiEdit2Line />
        </StyledButton>
        <ProfileWrapper className="profile">
          <img src="https://avatar.iran.liara.run/public/14" alt="" />
          <span>
            <h2>Profile</h2>
            <h3 className="name">Mohammed Dabana</h3>
            <p className="role">Product Manager</p>
          </span>
        </ProfileWrapper>
      </CardContainer>

      <CardContainer>
        <InfoWrapper>
          <StyledButton $bg="var(--dark-primary)" className="edit">
            Edit <RiEdit2Line />
          </StyledButton>
          <h2>Personal Information</h2>
          <Info>
            <div className="column">
              <span>
                <p>First Name</p>
                <p>Andrea</p>
              </span>
              <span>
                <p>Email Address</p>
                <p>henryamusah@gmail.com</p>
              </span>
              <span>
                <p>Nationality</p>
                <p>Ghana</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Middle Name</p>
                <p>...</p>
              </span>
              <span>
                <p>Phone Number</p>
                <p>02099343546</p>
              </span>
              <span>
                <p>Regliion</p>
                <p>Christian</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Last Name</p>
                <p>Rodriguez</p>
              </span>
              <span>
                <p>User role</p>
                <p>Accounts specialist</p>
              </span>
              <span>
                <p>Sex</p>
                <p>Female</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Date of Birth</p>
                <p>12-10-2012</p>
              </span>
              <span>
                <p>Level</p>
                <p>L10</p>
              </span>
            </div>
          </Info>
        </InfoWrapper>
      </CardContainer>

      <CardContainer>
        <InfoWrapper>
          <StyledButton $bg="var(--dark-primary)" className="edit">
            Edit <RiEdit2Line />
          </StyledButton>
          <h2>Address</h2>
          <Info>
            <div className="column">
              <span>
                <p>Country</p>
                <p>Ghana</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>City</p>
                <p>Takoradi</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Street</p>
                <p>Red Ash Avenue</p>
              </span>
            </div>
          </Info>
        </InfoWrapper>
      </CardContainer>

      <CardContainer>
        <InfoWrapper>
          <StyledButton $bg="var(--dark-primary)" className="edit">
            Edit <RiEdit2Line />
          </StyledButton>
          <h2>Work Experience</h2>
         
        </InfoWrapper>
      </CardContainer>
    </>
  );
}

export default Profile;
