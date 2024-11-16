import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <h3>Admin Layout</h3>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
