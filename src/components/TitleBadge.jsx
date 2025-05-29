import styled from "styled-components";

const Badge = styled.div`
  background-color: var(--light-primary);
  color: #fff;
  /* width: 20rem; */
  height: 20rem;
  padding: 3rem 2rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  display: flex;
  align-items: flex-end;
  text-transform: capitalize;
  position: absolute;
  z-index: 9;
  & div {
  }
`;

function TitleBadge({ pageTitle }) {
  return (
    <Badge>
      <div>
        <h1>{pageTitle}</h1>
      </div>
    </Badge>
  );
}

export default TitleBadge;
