import { styled } from 'styled-components'

import Button from './Button';

// import { SearchBarWrapper } from "../../styles/Departments";

import { GoSearch } from "react-icons/go";


export const SearchBarWrapper = styled.div`
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


function SearchBar({ children }) {
  return (
    <SearchBarWrapper>
      <form action="">
        <span>
          <GoSearch className="icon" />
        </span>
        <input type="text" placeholder="Search here" />
        <Button>Search</Button>
      </form>
      <span className="newBtn">
        {/* <button>View Profile</button> */}
        {/* <Button onClick={toggleForm}>Create New</Button> */}
        {children}
      </span>
    </SearchBarWrapper>
  );
}

export default SearchBar;
