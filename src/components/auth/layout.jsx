import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>Auth layout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
