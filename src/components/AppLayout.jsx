import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import TitleBadge from "./TitleBadge";

const AppLayout = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-grey-background w-full">
        <Header>
          {location === "dashboard" ? (
            <h1>Admin Dashboard</h1>
          ) : (
            <TitleBadge pageTitle={location} />
          )}
        </Header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
