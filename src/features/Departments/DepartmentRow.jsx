import React from "react";
import { styled } from "styled-components";
import StyledButton from "../../components/Button";
import Spinner from "../../components/Spinner";

// ICONS
// import { MdOutlineModeEditOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDepartment } from "../../services/apiDepartments";

const TableRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #f4f4f4;
  margin-top: 0.7rem;
  cursor: pointer;
`;

const TableCell = styled.div`
  width: 30%;
  padding: 1rem;
  font-size: 1.8rem;

  .action__btn {
    padding: 0.8rem 1.2rem;
    border-radius: 1.6rem;
    /* width: 5rem; */
    /* display: flex; */

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .btn {
    /* padding: 1rem; */
    /* margin-right: 1rem; */
    /* margin: 0 auto; */
    /* display: flex;
    justify-content: space-between;
    gap: 1rem; */
  }
`;

const TableData = styled(Link)`
  color: #000;
`;

function DepartmentRow({ department, toggleMsgBox, setDepartmentId }) {
  const { id: departmentId, name, description, management } = department;

  function handleDelete(){
    toggleMsgBox();
    setDepartmentId(departmentId);

  }

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteDepartment(id),
    onSuccess: () => {
      alert('Department successfully deleted')
      queryClient.invalidateQueries({
        queryKey: ["departments"]
      });
    },
    onError: (err) => alert(err.message)
  });

  return (
    <TableRow>
      <TableCell>
        <TableData to={`/${name.toLowerCase()}`}>{name}</TableData>
      </TableCell>
      <TableCell>
        <TableData to={`/${name.toLowerCase()}`}>{description}</TableData>
      </TableCell>
      <TableCell>
        <TableData to={`/${name.toLowerCase()}`}>{management}</TableData>
      </TableCell>
      <TableCell className="action">
        <StyledButton className="action__btn">
          <FiEdit className="btn" />
        </StyledButton>
        <StyledButton
          // onClick={() => mutate(departmentId)}
          onClick={handleDelete}
          className="action__btn"
          $bg="#d91656"
        >
          <RiDeleteBin6Line className="btn" />
        </StyledButton>
      </TableCell>
    </TableRow>
  );
}

export default DepartmentRow;
