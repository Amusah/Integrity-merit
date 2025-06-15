import { styled } from "styled-components";


const CardContainer = styled.div`
  display: flex;
  padding: ${(props) => props.$pad || "3rem 2rem"};
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.5rem 1.5rem;
  border-radius: 0.7rem;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 5rem;
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
    margin-bottom: ${(props) => props.$mb || "1.8rem"};
    font-size: 1.5rem;
  }
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  &:not(:last-child){
    margin-bottom: 4rem;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .column span p:first-child {
    color: var(--light-primary);
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  .column span p:last-child{
    font-size: 1.3rem;
  }
`;

const Experience = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 5rem;

  .experience {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .position {
    padding: 1.5rem 1rem;
    font-size: 1.5rem;
    border: 0.4rem solid #f5f5f5;
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
    color: #969595;
  }

  .duration {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* gap: 1rem; */
    place-items: center;

    & :first-child p {
      font-size: 1.5rem;
      color: #969595;
    }
    & :first-child,
    .date {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .date .date-field {
      background-color: #f5f5f5;
      color: #969595;
      font-size: 1.5rem;
      text-align: center;
      padding: 0.5rem 1.5rem;
    }
  }
`;

export { CardContainer, ProfileWrapper, InfoWrapper, Info, Experience };