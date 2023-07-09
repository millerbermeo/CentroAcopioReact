import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Residuos from "./pages/Residuos";
import CrearResiduo from "./pages/CrearResiduo";
import AllResiduos from "./pages/AllResiduos";
import ShowResiduo from "./pages/ShowResiduo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/residuos" element={<Residuos />} />
      <Route path="/crear-residuo" element={<CrearResiduo />} />
      <Route path="/allresiduos" element={<AllResiduos />} />
      <Route path="/showresiduos" element={<ShowResiduo />} />
    </Routes>
  );
}

export default App;
