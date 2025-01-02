import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { styled } from "styled-components";
import Container from "./Container";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: var(--grey-background);
  /* padding: 4rem 2rem 6.4rem; */
`;


const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header>
        <h1>Admin Dashboard</h1>
      </Header>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout