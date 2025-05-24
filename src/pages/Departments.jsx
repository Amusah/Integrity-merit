import { useState } from "react";

import Container from "../components/Container";
// import SearchDepartmentForm from "../features/Departments/SearchDepartmentForm";
import SearchBar from "../components/SearchBar";
import DepartmentTable from "../features/Departments/DepartmentTable";
import CreateDepartmentForm from "../features/Departments/CreateDepartmentForm";
import Button from '../components/Button'


function Departments() {
  const [showForm, setShowForm] = useState(false);

  // Handler function
  function toggleForm() {
    setShowForm((show) => !show);
  }

  return (
    <Container>
      <SearchBar>
        <Button onClick={toggleForm}>Create</Button>
      </SearchBar>
      <DepartmentTable />
      {showForm && <CreateDepartmentForm toggleForm={toggleForm} />}
    </Container>
  );
}

export default Departments;
