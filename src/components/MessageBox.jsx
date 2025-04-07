import React from "react";
import { styled } from "styled-components";

// COMPONENTS
import StyledButton from "./Button";
import { fadeIn } from "../styles/GlobalStyles";
import Spinner from "./Spinner";
import { toast } from "react-hot-toast";

//ICONS
import { PiWarningCircle } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

// CUSTOM HOOKS
import { useEscapeEvent } from "../hooks/Events";

// SERVICES
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDepartment } from "../services/apiDepartments";
import { wrapper } from "../styles/mixins";

const MessageWrapper = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out; */
  ${wrapper}
`;

const Message = styled.div`
  width: 45rem;
  height: 25rem;
  background-color: #fafafa;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 300;
  gap: 2rem;
  color: #7c7a7a;
  position: relative;
  animation: ${fadeIn} 0.3s cubic-bezier(0.26, 0.53, 0.74, 1.48);

  & .close-btn {
    position: absolute;
    top: 5%;
    right: 3%;
    cursor: pointer;
  }

  & .warning {
    font-size: 8rem;
    color: var(--danger);
  }

  & span {
    display: flex;
    gap: 2rem;

    button {
      border-radius: 0.5rem;
    }
  }
`;

function MessageBox({ children, toggleMsg, departmentId }) {
  useEscapeEvent(toggleMsg);

  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteDepartment(id),
    onSuccess: () => {
      toggleMsg();
      toast.success('Success');

      queryClient.invalidateQueries({
        queryKey: ["departments"],
      });
    },
    onError: (err) => {
      toggleMsg();
      toast.error(err.message)
    },
  });

  console.log(isLoading);

  return (
    <MessageWrapper>
      <Message>
        <IoClose onClick={toggleMsg} className="close-btn" />
        <PiWarningCircle className="warning" />
        {children}
        <span>
          <StyledButton
            onClick={() => mutate(departmentId)}
            $bg="var(--danger)"
          >
            {isLoading ? (
              <>
                <Spinner $color="#fff" $size="2rem" />
              </>
            ) : (
              "Yes!, I'm sure"
            )}
          </StyledButton>

          <StyledButton
            onClick={toggleMsg}
            $bg="#fafafa"
            $border=".1rem solid #7c7a7a"
            $textColor="#7c7a7a"
          >
            No, cancel
          </StyledButton>
        </span>
      </Message>
    </MessageWrapper>
  );
}

export default MessageBox;
