import { Route, Routes } from "react-router";
import DashboardLayout from "./presentation/components/layouts/dashboard-layout.component";
import TestFormPage from "./presentation/pages/testform.page";
import TestPage from "./presentation/pages/test.page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<TestFormPage />} />
        <Route path="/test" element={<TestPage />} />
      </Route>
    </Routes>
  );
}
