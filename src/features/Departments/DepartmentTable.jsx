import { Link } from "react-router-dom";

// STYLES
import { Table } from "../../styles/Departments";

// ICONS
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

//DATA
import { departments } from "../..";

function DepartmentTable() {
  return (
    <Table>
      <thead>
        <tr>
          <td>Department Name</td>
          <td>Department Description</td>
          <td>Management</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
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
              {/* <TiEdit className="btn" /> */}
              <MdOutlineModeEditOutline className="btn" />
              <RiDeleteBin6Line className="btn" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DepartmentTable
