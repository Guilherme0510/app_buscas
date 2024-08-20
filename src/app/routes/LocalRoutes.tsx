import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home, Login, Dash, Perfil } from "../pages";
import { SiteFooter, SiteNav } from "../shared/components";

const ConditionalNav: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return <SiteNav />;
};

const ConditionalFooter: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ConditionalFooter />
    </BrowserRouter>
  );
};
