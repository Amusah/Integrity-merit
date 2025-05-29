import { styled } from 'styled-components'


export const TableRow = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, 1fr); */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem;
  font-size: 1.5rem;
  /* color: #fff; */
  font-weight: normal;
  text-align: left;

  & div {
    /* width: 30%; */
    padding: 1rem;
  }
`;