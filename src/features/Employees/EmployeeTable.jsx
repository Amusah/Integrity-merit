import React from "react";
import { Link } from "react-router-dom";

import { styled } from "styled-components";

const badgeColors = {
  active: "#D5F8EF",
  onleave: "#FDF3CE",
  laidoff: "#FFE5F4",
};

const ActionBtn = styled(Link)`
  color: var(--light-primary);
  

  &:hover {
    color: #000;
  }
`;

// import { TableHeader } from '../../styles/Departments'
// import { Table, TableRow } from '../../styles/Employees';
import { Table, TableHeader, TableBody } from "../../styles/Employees";
import StatusBadge from "../../components/StatusBadge";
import { employees } from "../..";

function EmployeeTable() {
  return (
    <Table>
      <TableHeader>
        <tr>
          <td>Name</td>
          <td>Staff ID</td>
          <td>Email</td>
          <td>Department</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.id}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
            <td>
              <StatusBadge
                bg={employee.status.replace(/\s+/g, "").toLowerCase()}
              >
                {employee.status}
              </StatusBadge>
            </td>
            <td>
              <ActionBtn to={`/employees/${employee.id}`}>View</ActionBtn>
            </td>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
}

export default EmployeeTable;
