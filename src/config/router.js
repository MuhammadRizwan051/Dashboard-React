import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

import Analytics from "../screens/Analytics";
import Home from "../screens/Home";
import Products from "../screens/Products";
import Settings from "../screens/Settings";

function AppRouter() {
  return (
    <>
      <Router>
        <Dashboard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
