import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

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
          <td>Employee</td>
          <td>Position</td>
          <td>Department</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <tr key={employee.staffId}>
            <td>
              {`${employee.firstName} ${employee.middleName || ""} ${
                employee.lastName
              }`}
            </td>
            <td>{employee.role}</td>
            <td>{employee.department}</td>
            <td>
              <StatusBadge
                bg={employee.status.replace(/\s+/g, "").toLowerCase()}
              >
                {employee.status}
              </StatusBadge>
            </td>
            <td className="flex">
              <ActionBtn className="mr-8" to={`/employees/${employee.id}`}>
                <AiOutlineEye size={18} />
              </ActionBtn>
              <ActionBtn to={`/employees/${employee.id}`}>
                <FaRegEdit size={18} />
              </ActionBtn>
            </td>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
}

export default EmployeeTable;
