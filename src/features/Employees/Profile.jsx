import React from "react";
import { styled } from "styled-components";
import StyledButton from "../../components/Button";
// import { ProfileCard } from "../../styles/Employees";

import { RiEdit2Line } from "react-icons/ri";

import {
  CardContainer,
  ProfileWrapper,
  InfoWrapper,
  Info,
  Experience,
} from "./Profile.styles";

function Profile({ children }) {
  return (
    <>
      {/* profile */}
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
                <p>Ghanaian</p>
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

      {/************* WORK EXPERIENCE *************/}

      <CardContainer $pad={"2rem"}>
        <InfoWrapper $mb={"0"}>
          <StyledButton $bg="var(--dark-primary)" className="edit">
            Edit <RiEdit2Line />
          </StyledButton>
          <h2>Work Experience</h2>
        </InfoWrapper>
      </CardContainer>
      <Experience>
        <div className="experience">
          <span className="position">Position Held</span>
          <div className="duration">
            <div>
              <p>Start Date</p>
              <p>End Date</p>
            </div>
            <div className="date">
              <span className="date-field">Day</span>
              <span className="date-field">Day</span>
            </div>
            <div className="date">
              <span className="date-field">Month</span>
              <span className="date-field">Month</span>
            </div>
            <div className="date">
              <span className="date-field">Year</span>
              <span className="date-field">Year</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <span className="position">Position Held</span>
          <div className="duration">
            <div>
              <p>Start Date</p>
              <p>End Date</p>
            </div>
            <div className="date">
              <span className="date-field">Day</span>
              <span className="date-field">Day</span>
            </div>
            <div className="date">
              <span className="date-field">Month</span>
              <span className="date-field">Month</span>
            </div>
            <div className="date">
              <span className="date-field">Year</span>
              <span className="date-field">Year</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <span className="position">Position Held</span>
          <div className="duration">
            <div>
              <p>Start Date</p>
              <p>End Date</p>
            </div>
            <div className="date">
              <span className="date-field">Day</span>
              <span className="date-field">Day</span>
            </div>
            <div className="date">
              <span className="date-field">Month</span>
              <span className="date-field">Month</span>
            </div>
            <div className="date">
              <span className="date-field">Year</span>
              <span className="date-field">Year</span>
            </div>
          </div>
        </div>
      </Experience>

      {/*********************EDUCATION ********************/}
      <CardContainer $pad={"2rem"}>
        <InfoWrapper $mb={"0"}>
          <StyledButton $bg="var(--dark-primary)" className="edit">
            Edit <RiEdit2Line />
          </StyledButton>
          <h2>Education</h2>
        </InfoWrapper>
      </CardContainer>
      <Experience>
        <div className="experience">
          <span className="position">MSC Project Management</span>
          <div className="duration">
            <div>
              <p>Start Date</p>
              <p>End Date</p>
            </div>
            <div className="date">
              <span className="date-field">Day</span>
              <span className="date-field">Day</span>
            </div>
            <div className="date">
              <span className="date-field">Month</span>
              <span className="date-field">Month</span>
            </div>
            <div className="date">
              <span className="date-field">Year</span>
              <span className="date-field">Year</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <span className="position">BSC Information Technology</span>
          <div className="duration">
            <div>
              <p>Start Date</p>
              <p>End Date</p>
            </div>
            <div className="date">
              <span className="date-field">Day</span>
              <span className="date-field">Day</span>
            </div>
            <div className="date">
              <span className="date-field">Month</span>
              <span className="date-field">Month</span>
            </div>
            <div className="date">
              <span className="date-field">Year</span>
              <span className="date-field">Year</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <span className="position">Diploma in computer science</span>
          <div className="duration">
            <div>
              <p>Start Date</p>
              <p>End Date</p>
            </div>
            <div className="date">
              <span className="date-field">Day</span>
              <span className="date-field">Day</span>
            </div>
            <div className="date">
              <span className="date-field">Month</span>
              <span className="date-field">Month</span>
            </div>
            <div className="date">
              <span className="date-field">Year</span>
              <span className="date-field">Year</span>
            </div>
          </div>
        </div>
      </Experience>

      {/********************* RELATIONS *********************/}
      <CardContainer>
        <InfoWrapper>
          <StyledButton $bg="var(--dark-primary)" className="edit">
            Edit <RiEdit2Line />
          </StyledButton>
          <h2>Relations</h2>
          <Info>
            <div className="column">
              <span>
                <p>Next of Kin</p>
                <p>Richell Arthur</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Email</p>
                <p>richella@gmail.com</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Mobile</p>
                <p>+233 572 864 906</p>
              </span>
            </div>
          </Info>
          <Info>
            <div className="column">
              <span>
                <p>Emergency Contact</p>
                <p>Emmanuel Arthur</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Email</p>
                <p>manuel@gmail.com</p>
              </span>
            </div>
            <div className="column">
              <span>
                <p>Mobile</p>
                <p>+233 555 682 319</p>
              </span>
            </div>
          </Info>
        </InfoWrapper>
      </CardContainer>
    </>
  );
}

export default Profile;
