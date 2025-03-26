import React from "react";
import CustomNavbar from "../../components/Navbar";
import './style.css'
import { Banner } from "./components/Banner";
import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
import { Escolha } from "./components/Escolha";
import { Junte } from "./components/Junte";
import { Depoimentos } from "./components/Depoimentos";
import { Motivacao } from "./components/Motivacao";
import { Footer } from "../../components/Footer";

export const Landing = () => {
  return (
    <>
      <CustomNavbar />
      <Banner />
      <Sobre />
      <Servicos />
      <Escolha />
      <Junte />
      <Depoimentos />
      <Motivacao />
      <Footer />
    </>
  );
};
