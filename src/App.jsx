import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Switch>
  );
}

export default App;
