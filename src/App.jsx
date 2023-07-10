import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Residuos from "./pages/Residuos";
import CrearResiduo from "./pages/CrearResiduo";
import AllResiduos from "./pages/AllResiduos";
import ShowResiduo from "./pages/ShowResiduo";
import Logout from "./pages/Logout";
import PrivateRoutes from "./utils/PrivateRoutes";
import EditResiduo from "./pages/EditResiduo";
import EntradaResiduos from "./pages/EntradaResiduos";
import SalidaResiduos from "./pages/SalidaResiduos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/residuos" element={<Residuos />} />
        <Route path="/crear-residuo" element={<CrearResiduo />} />
        <Route path="/allresiduos" element={<AllResiduos />} />
        <Route path="/showresiduos" element={<ShowResiduo />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/edit" element={<EditResiduo />} />
        <Route path="/entrada" element={<EntradaResiduos />} />
        <Route path="/salida" element={<SalidaResiduos />} />
      </Route>
    </Routes>
  );
}

export default App;
