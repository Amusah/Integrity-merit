import React from "react";
import { styled } from "styled-components";
import StyledButton from "../../components/Button";
import Spinner from "../../components/Spinner";

// ICONS
// import { MdOutlineModeEditOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";

import { AiOutlineEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDepartment } from "../../services/apiDepartments";

// Hooks
import { truncate } from "../../hooks/useTruncate";

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

`;

const TableData = styled(Link)`
  color: #000;
`;

function DepartmentRow({ department, toggleMsgBox, setDepartmentData, toggleProfile }) {
  const { id: departmentId, name, description, management } = department;

  function handleDelete() {
    toggleMsgBox();
    // setDepartmentId(departmentId);
    setDepartmentData(department);
  }

  function handleViewProfile(){
    toggleProfile();
    setDepartmentData(department)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{management}</td>
      <td className="flex">
        <AiOutlineEye
          onClick={handleViewProfile}
          className="mr-8 text-primary hover:text-[#000] cursor-pointer"
          size={18}
        />
        <FaRegEdit
          className="text-primary hover:text-[#000] cursor-pointer"
          size={18}
        />
      </td>
    </tr>

    // <TableRow>
    //   <TableCell>
    //     <TableData to={`/${name.toLowerCase()}`}>{name}</TableData>
    //   </TableCell>
    //   <TableCell>
    //     <TableData to={`/${name.toLowerCase()}`}>
    //       {truncate(description, 20)}
    //     </TableData>
    //   </TableCell>
    //   <TableCell>
    //     <TableData to={`/${name.toLowerCase()}`}>{management}</TableData>
    //   </TableCell>
    //   <TableCell className="action">
    //     <StyledButton onClick={handleViewProfile} className="action__btn">
    //       <FiEye/> view
    //     </StyledButton>
    //     <StyledButton className="action__btn">
    //       <FiEdit className="btn" /> Edit
    //     </StyledButton>
    //     <StyledButton
    //       onClick={handleDelete}
    //       className="action__btn"
    //       $bg="#d91656"
    //     >
    //       <RiDeleteBin6Line className="btn" /> Drop
    //     </StyledButton>
    //   </TableCell>
    // </TableRow>
  );
}

export default DepartmentRow;
