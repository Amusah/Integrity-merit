import { useState } from "react";

import Container from "../components/Container";
import SearchDepartmentForm from "../features/Departments/SearchDepartmentForm";
import DepartmentTable from "../features/Departments/DepartmentTable";
import CreateDepartmentForm from "../features/Departments/CreateDepartmentForm";


function Departments() {
  const [showForm, setShowForm] = useState(false);

  // Handler function
  function toggleForm() {
    setShowForm((show) => !show);
  }

  return (
    <Container>
      <SearchDepartmentForm toggleForm={toggleForm} />
      <DepartmentTable />
      {showForm && <CreateDepartmentForm toggleForm={toggleForm} />}
    </Container>
  );
}

export default Departments;
