import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home, Login, Dash } from "../pages";
import { SiteFooter, SiteNav } from "../shared/components";

// Componente para condicionalmente renderizar a navbar
const ConditionalNav: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return <SiteNav />;
};

// Componente para condicionalmente renderizar o footer
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ConditionalFooter />
    </BrowserRouter>
  );
};
