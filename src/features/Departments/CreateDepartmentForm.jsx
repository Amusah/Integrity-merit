import { useForm } from "react-hook-form";

import { useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";

import Button from "../../components/Button";
import { CreateFormContainer, FormRow } from "../../styles/Departments";
import { useEscapeEvent } from "../../hooks/Events";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDepartment } from "../../services/apiDepartments";
import { toast } from "react-hot-toast";
// import { employees } from "../..";

function CreateDepartmentForm({ toggleForm }) {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createDepartment,
    onSuccess: () => {
      toast.success("Department successfully created");
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  useEscapeEvent(toggleForm);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <CreateFormContainer>
      <div className="wrapper">
        <div className="form-header">
          <h2>New Department</h2>
          <IoCloseCircle className="close-btn" onClick={toggleForm} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <input type="text" id="name" {...register("name")} placeholder="" />
            <label className="input-label" htmlFor="name">
              Department Name
            </label>
          </FormRow>
          <FormRow>
            <textarea
              rows="3"
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
            <input
              type="text"
              id="manager"
              {...register("manager")}
              placeholder=""
            />
            <label className="input-label" htmlFor="manager">
              Management
            </label>
            {/* <img src="https://avatar.iran.liara.run/public/12" alt="" /> */}
          </FormRow>
          <FormRow>
            <Button>Create</Button>
          </FormRow>
        </form>
      </div>
    </CreateFormContainer>
  );
}

export default CreateDepartmentForm;
