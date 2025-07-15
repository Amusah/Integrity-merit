import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/AppLayout";
import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import EmployeeProfile from './pages/EmployeeProfile'
import Resignations from "./pages/Resignations";
import Rewards from "./pages/Rewards";
import KPI from "./pages/KPI";
import Feedbacks from "./pages/Feedbacks";
import Settings from './pages/Settings';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        {/* <Sidebar /> */} 
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="departments" element={<Departments />} />
            <Route path="employees" element={<Employees />} />
            <Route path="/employees/:id" element={<EmployeeProfile />} />
            <Route path="resignations" element={<Resignations />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="kpi" element={<KPI />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path='settings' element={<Settings />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "2rem",
            maxWidth: "50rem",
            padding: "1.6rem 2.4rem",
            backgroundColor: "var(--color-grey-0)",
           
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
