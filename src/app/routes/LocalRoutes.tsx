import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Dash } from "../pages";

export const LocalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/pesquisas" element={<Dash />}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
};