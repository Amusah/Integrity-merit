import React from "react";
import { styled } from "styled-components";
import StyledButton from "../../components/Button";

const Card = styled.div`
  position: relative;
  /* width: 38rem; */
  height: 35rem;
  border-radius: 0.7rem;
  box-shadow: 2rem 2rem 8rem 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.5rem 1.5rem;
  flex: 1 0 30rem;
  cursor: pointer;
  /* padding: 4rem 2rem 2rem; */

  .cardHeader {
    background-color: var(--light-primary);
    padding: 2.5rem;
    /* padding-right: 4.5rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-top-right-radius: 0.7rem;
    border-top-left-radius: 0.7rem;

    & h2 {
      font-size: 2rem;
      color: #fff;
      margin-bottom: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.2rem;
    }
    & p {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  .cardBody {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem;

    .profileDetails {
      & p {
        font-size: 1.6rem;
      }
      & p:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }

  .profilePic {
    width: 10rem;
    position: absolute;
    top: 10%;
    left: 4%;
  }

  .cardFooter {
    padding: 2rem;

    & button{
      width: 100%;
      border-radius: 0.7rem;
    }
  }
  
`;

function ProfileCard({ employeeBio }) {
  return (
    <Card>
      <div className="cardHeader">
        <span>
          <h2>{employeeBio.name}</h2>
          <p>{employeeBio.role}</p>
        </span>
      </div>
      <div className="cardBody">
        <div className="profileDetails">
          <p>Level : {employeeBio.level}</p>
          <p>Qualification : {employeeBio.qualification}</p>
          <p>Age : {employeeBio.age}</p>
          <p>Department: {employeeBio.department}</p>
        </div>
      </div>
      <img
        className="profilePic"
        src={employeeBio.image}
        alt="Profile picture"
      />
      <div className="cardFooter">
        <StyledButton>View Profile</StyledButton>
      </div>
    </Card>
  );
}

export default ProfileCard;
