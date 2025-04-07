import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


// COMPONENTS
import Spinner from "../../components/Spinner";
import MessageBox from "../../components/MessageBox";

// STYLED COMPONENT
import { Table, TableHeader } from "../../styles/Departments";
import DepartmentRow from "./DepartmentRow";


//DATA
import { getDepartments } from "../../services/apiDepartments";
import DepartmentProfile from "../../components/DepartmentProfile";

function DepartmentTable() {
  const [showMsg, setShowMsg] = useState(false);
  const [departmentId, setDepartmentId] = useState(null);

  const {
    isLoading,
    data: departments,
    error,
  } = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  function toggleMsg() {
    setShowMsg((show) => !show);
  }


  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Department Name</div>
        <div>Department Description</div>
        <div>Management</div>
        <div>Actions</div>
      </TableHeader>
      {/* {isLoading && <Spinner />} */}
      {departments.map((department) => (
        <DepartmentRow
          setDepartmentId={setDepartmentId}
          toggleMsgBox={toggleMsg}
          department={department}
          key={department.id}
        />
      ))}
      {showMsg && (
        <MessageBox departmentId={departmentId} toggleMsg={toggleMsg}>
          Dissolve department?
        </MessageBox>
      )}
      <DepartmentProfile></DepartmentProfile>
    </Table>
  );
}

export default DepartmentTable;
