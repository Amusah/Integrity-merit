import { Link } from "react-router-dom";

// STYLES
import { Table, TableHeader } from "../../styles/Departments";

// ICONS
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

//DATA
import { departments } from "../..";
import { useEffect } from "react";
import { getDepartments } from "../../services/apiDepartments";

function DepartmentTable() {
  useEffect(function () {
    getDepartments().then((data) => console.log(data));
  }, []);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Department Name</div>
        <div>Department Description</div>
        <div>Management</div>
        <div>Actions</div>
      </TableHeader>

      {/* <tbody>
        {departments.map((department) => (
          <tr key={department.id}>
            <td>
              <Link to={`/${department.id}`} className="link">
                {department.name}
              </Link>
            </td>
            <td>
              <Link to={`/${department.id}`} className="link">
                {department.description}
              </Link>
            </td>
            <td>
              <Link to={`/${department.id}`} className="link">
                {department.management}
              </Link>
            </td>
            <td className="actionBtn">
              <TiEdit className="btn" />
              <MdOutlineModeEditOutline className="btn" />
              <RiDeleteBin6Line className="btn" />
            </td>
          </tr>
        ))}
      </tbody> */}
    </Table>
  );
}

export default DepartmentTable;
