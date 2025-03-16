import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/AppLayout";
import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import Resignations from "./pages/Resignations";
import Rewards from "./pages/Rewards";
import KPI from "./pages/KPI";
import Feedbacks from "./pages/Feedbacks";

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
            <Route path="resignations" element={<Resignations />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="kpi" element={<KPI />} />\
            <Route path="feedbacks" element={<Feedbacks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
