import styled, { keyframes } from "styled-components";
import { fadeIn } from "./GlobalStyles";

export const SearchFormWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;

  & form {
    display: flex;
    /* align-items: center; */
    span {
      padding: 0.8rem;
      border: 0.1rem solid var(--light-primary);
      border-right: none;
      border-top-left-radius: 0.7rem;
      border-bottom-left-radius: 0.7rem;
      background-color: #fff;
      display: flex;
      align-items: center;

      .icon {
        font-size: 2rem;
      }
    }

    input {
      padding: 1rem 0.5rem;
      border: 0.1rem solid var(--light-primary);
      border-left: none;
      border-right: none;
      outline: none;
    }

    button {
      border-top-right-radius: 0.7rem;
      border-bottom-right-radius: 0.7rem;
    }
  }

  & .newBtn {
    display: flex;
    button {
      border-radius: 0.7rem;
    }
  }
`;

export const Table = styled.div`
  margin-top: 3rem;
  width: 100%;
  /* display: table; */
`;

export const TableHeader = styled.header`
  background-color: var(--light-primary);
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  font-size: 2rem;
  color: #fff;
  font-weight: normal;
  text-align: left;

  & div{
    width: 30%;
    padding: 1rem;
  }
`;


export const CreateFormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  .wrapper {
    width: 25%;
    height: 70vh;
    background-color: var(--grey-background);
    border-radius: 2rem;
    animation: ${fadeIn} 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48);
  }

  .wrapper .form-header {
    background-color: var(--light-primary);
    width: 100%;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    padding: 2rem;
    text-align: center;
    position: relative;

    h2 {
      font-weight: 400;
      font-size: 3rem;
      color: #fff;
    }

    .close-btn {
      position: absolute;
      right: 2.5%;
      top: 15%;
      font-size: 3rem;
      cursor: pointer;
      color: #fff;
    }
  }

  & form {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    height: 80%;
    padding: 3rem;
    margin-top: 5rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 90%;
  position: relative;

  .input-label {
    position: absolute;
    font-size: 1.6rem;
    top: 30%;
    left: 4%;
    transition: all 0.2s ease;
    color: grey;
  }

  .textarea-label {
    position: absolute;
    font-size: 1.6rem;
    top: 15%;
    left: 4%;
    transition: all 0.2s ease;
    color: grey;
  }

  input,
  textarea {
    border: none;
    padding: 1.5rem;
    width: 100%;
    background-color: transparent;
    border: 0.1rem solid var(--light-primary);
    outline: none;
    border-radius: 0.7rem;

    &:focus {
      border: 0.2rem solid var(--light-primary);
    }

    &:focus + .input-label,
    &:not(:placeholder-shown) + .input-label {
      color: var(--light-primary);
      background-color: #f9fafb;
      padding: 0.2rem 0.5rem;
      top: -25%;
    }

    &:focus + .textarea-label,
    &:not(:placeholder-shown) + .textarea-label {
      color: var(--light-primary);
      background-color: #f9fafb;
      padding: 0.2rem 0.5rem;
      top: -12%;
    }
  }

  button {
    border-radius: 0.7rem;
    margin-top: 3rem;
  }
`;
