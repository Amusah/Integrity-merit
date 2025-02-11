import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
// import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

import { departments } from "..";
import Container from "../components/Container";
import Button from "../components/Button";

import { SearchFormWrapper, Table } from "../styles/Departments";



function Departments() {
  return (
    <Container>
      <SearchFormWrapper>
        <form action="">
          <span>
            <GoSearch className="icon" />
          </span>
          <input type="text" placeholder="Search here" />
          <Button>Search</Button>
        </form>
        <span className="newBtn">
          {/* <button>View Profile</button> */}
          <Button>Create New</Button>
        </span>
      </SearchFormWrapper>

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

      <form action="">
        
      </form>
    </Container>
  );
}

export default Departments;
