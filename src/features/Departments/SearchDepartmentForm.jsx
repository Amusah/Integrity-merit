import Button from "../../components/Button";

import { SearchFormWrapper } from "../../styles/Departments";

import { GoSearch } from "react-icons/go";

function SearchDepartmentForm({ toggleForm }) {
  return (
    <SearchFormWrapper>
      <form action="">
        <span>
          <GoSearch className="icon" />
        </span>
        <input type="text" placeholder="Search here" />
        <Button>Search</Button>
      </form>
      <span className="newBtn">
        {/* <button>View Profile</button> */}
        <Button onClick={toggleForm}>Create New</Button>
      </span>
    </SearchFormWrapper>
  );
}

export default SearchDepartmentForm;
