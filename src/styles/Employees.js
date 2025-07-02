import { styled } from 'styled-components'


export const Table = styled.table`
  width: 100%;
`;

export const TableHeader = styled.thead`
  /* display: flex;
  justify-content: space-between; */
  background-color: var(--light-primary);
  border-top-right-radius: 0.7rem;

  & td {
    padding: 1.5rem;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 600;

    &:last-child{
      border-top-right-radius: 0.7rem;
    }
    &:first-child{
      border-top-left-radius: 0.7rem;
    }
  }
`;

export const TableBody = styled.tbody`
  &tr {
  }

  & tr td {
    outline: 0.1rem solid #eeeeee;
    /* border: .1rem solid #dddddd; */
    padding: 0.8rem 1rem;
    font-size: 1.3rem;
  }
`;