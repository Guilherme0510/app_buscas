import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home, Login, Dash, Perfil, List, Add } from "../pages";
import { SiteFooter, SiteNav } from "../shared/components";

const ConditionalNav: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/perfil" || location.pathname === "/lista" || location.pathname === "/add" ) {
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

export const LocalRoutes = () => {
  return (
    <BrowserRouter>
      <ConditionalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pesquisas" element={<Dash />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/lista" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ConditionalFooter />
    </BrowserRouter>
  );
};
