import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home, Login, Dash, Perfil, List, Add } from "../pages";
import { SiteFooter, SiteNav } from "../shared/components";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../context/AuthContext";

const ConditionalNav: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/perfil" || location.pathname === "/lista" || location.pathname === "/add") {
    return null;
  }

  return <SiteNav />;
};

const ConditionalFooter: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/perfil" || location.pathname === "/lista" || location.pathname === "/add") {
    return null;
  }

  return <SiteFooter />;
};

export const LocalRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ConditionalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pesquisas" element={<Dash />} />
          <Route
            path="/perfil"
            element={<PrivateRoute element={<Perfil />} />}
          />          
          <Route
            path="/lista"
            element={<PrivateRoute element={<List />} />}
          />
          <Route
            path="/add"
            element={<PrivateRoute element={<Add />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ConditionalFooter />
      </BrowserRouter>
    </AuthProvider>
  );
};
