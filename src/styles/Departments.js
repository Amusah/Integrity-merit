import styled from "styled-components";

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
      /* background-color: var(--light-primary); */
      /* border: none; */
      /* padding: 1rem 2rem; */
      /* color: #fff; */
      /* font-size: 1.5rem; */
      /* cursor: pointer; */
      /* border-radius: .7rem; */
    }
  }

  & .newBtn {
    display: flex;
    button {
      border-radius: 0.7rem;
      /* background-color: var(--light-primary);
      border: none;
      padding: 1rem 2rem;
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 0.7rem;

      &:hover {
        filter: brightness(107%);
      } */
    }
  }
`;

export const Table = styled.table`
  margin-top: 3rem;
  width: 100%;

  thead {
    background-color: var(--light-primary);

    tr {
      /* display: flex; */
      /* justify-content: space-between; */
    }

    tr td {
      padding: 1.5rem 1rem;
      font-size: 2rem;
      color: #fff;
      font-weight: normal;
    }
  }

  tbody {
    /* background-color: #f4f4f4; */
    tr {
      background-color: #f4f4f4;
    }
    tr td {
      padding: 1.5rem 1rem;
      font-size: 1.5rem;

      &:last-child {
        text-align: center;
      }

      .link {
        color: #424040;
        /* padding: 2rem; */
        width: 100%;
        &:hover {
          color: var(--light-primary);
        }
      }
    }

    .actionBtn {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .btn {
        font-size: 2rem;
        cursor: pointer;

        &{
          color: var(--light-primary);
        }
        &:last-child{
          color: red;
        }
      }
    }
  }
`;
