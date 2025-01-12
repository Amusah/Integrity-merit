import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

import { departments } from "..";
import Container from "../components/Container";

const FormWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;

  & form {
    display: flex;
    /* align-items: center; */
    span {
      padding: 0.8rem;
      border: 0.1rem solid var(--light-primary);
      border-right: none;
      border-top-left-radius: 0.7rem;
      border-bottom-left-radius: 0.7rem;
      background-color: #fff;
      display: flex;
      align-items: center;

      .icon {
        font-size: 2rem;
      }
    }

    input {
      padding: 1rem 0.5rem;
      border: 0.1rem solid var(--light-primary);
      border-left: none;
      border-right: none;
      outline: none;
    }

    button {
      background-color: var(--light-primary);
      border: none;
      padding: 1rem 2rem;
      color: #fff;
      font-size: 1.5rem;
      border-top-right-radius: 0.7rem;
      border-bottom-right-radius: 0.7rem;
      cursor: pointer;
      /* border-radius: .7rem; */
    }
  }

  & .actionBtn button {
    background-color: var(--light-primary);
    border: none;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.7rem;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const Table = styled.table`
  margin-top: 3rem;
  width: 100%;

  thead {
    background-color: var(--light-primary);

    tr {
      /* display: flex; */
      /* justify-content: space-between; */
    }

    tr td {
      padding: 1.5rem 1rem;
      font-size: 2rem;
      color: #fff;
      font-weight: normal;
    }
  }

  tbody {
    /* background-color: #f4f4f4; */
    tr {
      background-color: #f4f4f4;
    }
    tr td {
      padding: 1.5rem 1rem;
      font-size: 1.5rem;

      &:last-child {
        text-align: center;
      }

      .link {
        color: #424040;
      }
    }

    tr input[type="checkbox"] {
      accent-color: var(--light-primary);
      outline: 0.1rem solid var(--light-primary);
      /* color: #fff; */
      /* width: 5rem; */
    }
    
  }
`;

function Departments() {
  return (
    <Container>
      <FormWrapper>
        <form action="">
          <span>
            <GoSearch className="icon" />
          </span>
          <input type="text" placeholder="Search here" />
          <button>Search</button>
        </form>
        <span className="actionBtn">
          <button>View Profile</button>
          <button>Create New</button>
        </span>
      </FormWrapper>

      <Table>
        <thead>
          <tr>
            <td>Department Name</td>
            <td>Department Description</td>
            <td>Management</td>
            <td>Select</td>
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
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Departments;
