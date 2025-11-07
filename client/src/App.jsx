import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router";
import AdminPage from "./pages/AdminPage";
import DetailPage from "./pages/DetailPage";
import HomepageLayout from "./layouts/HomepageLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";

import UpdatePage from "./pages/UpdatePage";
import CreateMemberPage from "./pages/CreateMemberPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageLayout />}>
        <Route index element={<Homepage />} />
      </Route>

      <Route path="/login" element={<HomepageLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route
        path="admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminPage />} />
        <Route path="detailview" element={<DetailPage />} />
        <Route path="createmember" element={<CreateMemberPage />} />
        <Route path="editmember/:id" element={<UpdatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
