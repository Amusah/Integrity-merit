import { styled } from "styled-components";

const ListItem = styled.span`
  display: flex;
  

  img{
    width: 5rem;
  }
  p{
    font-size: 3rem;
  }
`;


function EmployeeListItem({ profile, name }) {
  return (
    <ListItem>
      <img src={profile} alt="profile-picture" />
      <p>{name}</p>
    </ListItem>
  );
}

export default EmployeeListItem;
