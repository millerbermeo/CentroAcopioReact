import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Residuos from "./pages/Residuos";
import CrearResiduo from "./pages/CrearResiduo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/residuos" element={<Residuos />} />
      <Route path="/crear-residuo" element={<CrearResiduo />} />
    </Routes>
  );
}

export default App;
