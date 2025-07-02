import React from "react";

import { Table, TableHeader, TableBody } from "../../styles/Employees";
import StatusBadge from "../../components/StatusBadge";
import { resignations } from "../..";

function ResignationsTable() {
  return (
    <Table className="mt-[5rem]">
      <TableHeader>
        <tr>
          <td>Employee</td>
          <td>Department</td>
          <td>Position</td>
          <td>Request Type</td>
          <td>Request Date</td>
          <td>Years of Service</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </TableHeader>
      <TableBody>
        {resignations.map((staff) => (
          <tr>
            <td className="font-semibold">{`${staff.firstName} ${staff.middleName || ""} ${
              staff.lastName
            }`}</td>
            <td>{staff.department}</td>
            <td>{staff.role}</td>
            <td>
              <StatusBadge bg={staff.requestType}>
                {staff.requestType}
              </StatusBadge>
            </td>
            <td>{staff.requestDate}</td>
            <td>{staff.yearsOfService}</td>
            <td>
              <StatusBadge bg={staff.status}>{staff.status}</StatusBadge>
            </td>
            <td></td>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
}

export default ResignationsTable;
