import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// COMPONENTS
import Spinner from "../../components/Spinner";
import MessageBox from "../../components/MessageBox";

// STYLED COMPONENT
// import { Table, TableHeader,  } from "../../styles/Departments";
import { Table, TableHeader, TableBody } from "../../styles/Employees";
import DepartmentRow from "./DepartmentRow";

//DATA
import { getDepartments } from "../../services/apiDepartments";
import DepartmentProfile from "../../components/DepartmentProfile";

function DepartmentTable() {
  const [showMsg, setShowMsg] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [departmentId, setDepartmentId] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);

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

  function toggleProfile() {
    setShowProfile((show) => !show);
  }

  if (isLoading) return <Spinner />;

  return (
    <Table className="mt-[5rem]">
      <TableHeader>
        <tr>
          <td>Department Name</td>
          <td>Description</td>
          <td>Management</td>
          <td>Actions</td>
        </tr>
      </TableHeader>

      <TableBody>
        {departments.map((department) => (
          <DepartmentRow
            setDepartmentId={setDepartmentId}
            setDepartmentData={setDepartmentData}
            toggleMsgBox={toggleMsg}
            toggleProfile={toggleProfile}
            department={department}
            key={department.id}
          ></DepartmentRow>
        ))}
      </TableBody>
      {/* {isLoading && <Spinner />} */}
      {/* {departments.map((department) => (
        <DepartmentRow
          // setDepartmentId={setDepartmentId}
          setDepartmentData={setDepartmentData}
          toggleMsgBox={toggleMsg}
          toggleProfile={toggleProfile}
          department={department}
          key={department.id}
        />
      ))} */}
      {showMsg && (
        <MessageBox departmentId={departmentData.id} toggleMsg={toggleMsg}>
          Dissolve department?
        </MessageBox>
      )}
      {showProfile && (
        <DepartmentProfile
          departmentData={departmentData}
          toggleProfile={toggleProfile}
        ></DepartmentProfile>
      )}
    </Table>
  );
}

export default DepartmentTable;
