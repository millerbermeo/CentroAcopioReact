import { Navigate, Outlet } from "react-router-dom";
function PrivateRoutes() {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoutes;
