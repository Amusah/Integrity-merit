import React from 'react'

import { Table, TableHeader } from '../../styles/Departments'
import { TableRow } from '../../styles/Employees';
import { employees } from '../..';

function EmployeeTable() {
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Name</div>
        <div>ID</div>
        <div>Email</div>
        <div>Department</div>
        <div>Status</div>
        <div>Action</div>
      </TableHeader>
      {employees.map(employee => <TableRow key={employee.id}> 
        <div>{employee.name}</div>
        <div>{employee.id}</div>
        <div>{employee.email}</div>
        <div>{employee.department}</div>
        <div>{employee.status}</div>
        <div></div>
      </TableRow>)}
    </Table>
  );
}

export default EmployeeTable