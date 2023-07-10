import { useEffect } from "react";
import axiosClient from "../axios-client";
import { Navigate } from "react-router-dom";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    axiosClient.get("/auth/logout");
  }, []);
  return <Navigate to="/" />;
}

export default Logout;
