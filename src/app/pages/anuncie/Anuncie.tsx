import React from "react";
import { PlanCard } from "./components/PlanCard";
import "./components/style/Anuncie.css"; 
import firstMedal from "../../assets/images/first.png"
import secondMedal from "../../assets/images/second.png"
import thirdMedal from "../../assets/images/third.png"


export const Anuncie: React.FC = () => {
  const plans = [
    {
      img: `${thirdMedal}`,
      title: "Plano Básico",
      price: "R$ 99,90/mês",
      description: "Ideal para quem está começando.",
      icon: "bi bi-star",
      whatsappLink: "https://wa.me/5511999999999?text=Quero+o+Plano+Básico",
    },
    {
      img: `${secondMedal}`,
      title: "Plano Avançado",
      price: "R$ 199,90/mês",
      description: "Perfeito para negócios em crescimento.",
      icon: "bi bi-trophy",
      whatsappLink: "https://wa.me/5511999999999?text=Quero+o+Plano+Avançado",
    },
    {
      img: `${firstMedal}`,
      title: "Plano Premium",
      price: "R$ 299,90/mês",
      description: "Para quem quer o melhor.",
      icon: "bi bi-gem",
      whatsappLink: "https://wa.me/5511999999999?text=Quero+o+Plano+Premium",
    },
  ];

  return (
    <div className="container container-anuncio mt-5">
      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <PlanCard {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
};
