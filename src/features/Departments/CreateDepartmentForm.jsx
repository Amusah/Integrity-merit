import { useForm } from "react-hook-form";

import { CreateFormContainer, FormRow } from "../../styles/Departments";
import { useEffect, useState } from "react";

import { IoCloseCircle } from "react-icons/io5";

function CreateDepartmentForm({ toggleForm }) {
  const { register } = useForm();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleForm();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <CreateFormContainer>
      <div className="wrapper">
        <div className="form-header">
          <h2>New Department</h2>
          <IoCloseCircle className="close-btn" onClick={toggleForm} />
        </div>
        <form action="">
          <FormRow>
            <input type="text" id="name" {...register("name")} placeholder="" />
            <label className="input-label" htmlFor="name">
              Department Name
            </label>
          </FormRow>
          <FormRow>
            <textarea
              rows="5"
              type="text"
              id="description"
              {...register("description")}
              placeholder=""
            />
            <label className="textarea-label" htmlFor="description">
              Department Description
            </label>
          </FormRow>
          <FormRow>
            <label htmlFor="manager">Management</label>
            <select name="" id=""></select>
          </FormRow>
        </form>
      </div>
    </CreateFormContainer>
  );
}

export default CreateDepartmentForm;
