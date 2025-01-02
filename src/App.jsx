import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import AppLayout  from "./components/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}/>
          <Route path="dashboard" element={<Dashboard />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
