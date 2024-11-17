import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  if (
    !isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    return <Navigate to={"/auth/login"} />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    return user?.role === "admin" ? (
      <Navigate to={"/admin/dashboard"} />
    ) : (
      <Navigate to={"/shop/home"} />
    );
  }

  if (user?.role !== "admin" && location.pathname.includes("admin")) {
    return <Navigate to={"/no-access"} />;
  }

  if (user.role === "admin" && location.pathname.includes("shop")) {
    return <Navigate to={"/admin/dashboard"} />;
  }

  return <>{children}</>;
};

export default CheckAuth;
