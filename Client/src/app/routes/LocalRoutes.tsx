import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home, Login, Dash, Perfil, List, Add, Edit } from "../pages"; 
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../shared/context/AuthContext";
import { Landing } from "../pages/Landing/Landing";
import CustomNavbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const ConditionalNav: React.FC = () => {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/perfil" ||
    location.pathname === "/lista" ||
    location.pathname === "/add" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/edit") 
  ) {
    return null;
  }

  return < CustomNavbar/>;
};

const ConditionalFooter: React.FC = () => {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/perfil" ||
    location.pathname === "/lista" ||
    location.pathname === "/add" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/edit") 
  ) {
    return null;
  }

  return <Footer />;
};

export const LocalRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ConditionalNav />
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/localiza" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pesquisas" element={<Dash />} />
          <Route path="/perfil" element={<PrivateRoute element={<Perfil />} />} />
          <Route path="/lista" element={<PrivateRoute element={<List />} />} />
          <Route path="/add" element={<PrivateRoute element={<Add />} />} />
          <Route path="/edit/:id" element={<PrivateRoute element={<Edit />} />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ConditionalFooter />
      </BrowserRouter>
    </AuthProvider>
  );
};
