import { useState } from "react";


import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Button from '../components/Button';
import EmployeeContainer from "../features/Employees/EmployeeContainer";
import AddEmployeeForm from "../features/Employees/AddEmployeeForm";




function Employees() {
  const [showForm, setshowForm] = useState(true);

  function toggleForm(){
    setshowForm((show) => !show);
  }

  return (
    <Container>
      <SearchBar>
        <Button>+ Add Employee</Button>
      </SearchBar>
     <EmployeeContainer/>
     {/* {showForm && <AddEmployeeForm />} */}
    </Container>
  );
}

export default Employees
