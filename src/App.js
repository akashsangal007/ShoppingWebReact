import { Route, Routes } from "react-router";
import { Layout } from "./Modules/Public/Shared/Layout";
import AdminLayout from "./Modules/Admin/Shared/Layout";
import UserLayout from "./Modules/User/Shared/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/user/*" element={<UserLayout />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
