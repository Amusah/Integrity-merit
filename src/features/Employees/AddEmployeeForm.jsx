import React from "react";
import { styled } from "styled-components";

import { wrapper } from "../../styles/mixins";

const FormWrapper = styled.div`
  ${wrapper};
`;

const FormContainer = styled.div``;

function AddEmployeeForm() {
  return (
    <FormWrapper>
      <FormContainer>
        AddEmployeeForm
      </FormContainer>
    </FormWrapper>
  );
}

export default AddEmployeeForm;
