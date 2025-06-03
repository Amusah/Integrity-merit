import { styled } from 'styled-components'


export const Table = styled.table`
  width: 100%;
  /* & tr{
    display: flex;
    justify-content: space-between;

  } */
`;

export const TableHeader = styled.thead`
  /* display: flex;
  justify-content: space-between; */
  background-color: var(--light-primary);
  
  & td{
    padding: 1rem;
    font-size: 1.4rem;
    color: #fff;
  }
`;

export const TableBody = styled.tbody`
  &tr {
  }

  & tr td {
    outline: 0.1rem solid #eeeeee;
    /* border: .1rem solid #dddddd; */
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
  }
`;

// export const ProfileContainer = styled.div`
//   margin-top: 5rem;
//   width: 100%;
// `;

