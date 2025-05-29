import { Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { breakPoints } from "../styles/breakpoints";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Container from "./Container";
import TitleBadge from "./TitleBadge";

const StyledAppLayout = styled.div`
  /* display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr; */
  /* position: relative; */
  /* min-height: 100vh; */

  display: flex;

  & .mainContainer{
    width: 100%;
    /* min-height: 100vh; */
  }

  ${breakPoints.laptopScreen} {
    /* position: relative; */
  }
`;

const Main = styled.main`
  background-color: var(--grey-background);
  /* padding: 4rem 2rem 6.4rem; */
`;

const AppLayout = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];

  //location === "dashboard" ? `Admin ${location}` : `${location}`;
  // const pageTitle =
  console.log(location);

  return (
    <StyledAppLayout>
      <Sidebar />
      <div className="mainContainer">
        <Header>
          {location === "dashboard" ? (
            <h1>Admin Dashboard</h1>
          ) : (
            <TitleBadge pageTitle={location} />
          )}
        </Header>
        <Main>
          <Outlet />
        </Main>
      </div>
    </StyledAppLayout>
  );
};

export default AppLayout;
