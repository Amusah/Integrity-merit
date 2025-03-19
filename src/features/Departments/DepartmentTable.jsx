import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// COMPONENTS
import Spinner from "../../components/Spinner";

// STYLED COMPONENT
import { Table, TableHeader } from "../../styles/Departments";
import DepartmentRow from "./DepartmentRow";

// ICONS
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

//DATA
// import { departments } from "../..";
import { useEffect } from "react";
import { getDepartments } from "../../services/apiDepartments";

function DepartmentTable() {
  const {
    isLoading,
    data: departments,
    error,
  } = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  if (isLoading) return <Spinner />;

  // {isLoading && <Spinner />};

  console.log(departments)

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Department Name</div>
        <div>Department Description</div>
        <div>Management</div>
        <div>Actions</div>
      </TableHeader>
      {/* {isLoading && <Spinner />} */}
      {departments.map(department => <DepartmentRow department={department} key={department.id}/>)}
    

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
