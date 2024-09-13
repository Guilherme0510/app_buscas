import React from "react";
import { PlanCard } from "./components/PlanCard";
import "./components/style/Anuncie.css";
import firstMedal from "../../assets/images/first.png";
import secondMedal from "../../assets/images/second.png";
import thirdMedal from "../../assets/images/third.png";
import { ContactForm } from "./components/contactForm";

export const Anuncie: React.FC = () => {
  const plans = [
    {
      img: `${thirdMedal}`,
      title: "Plano Básico",
      price: "R$ 99,90/mês",
      description: `<ul>
                   <li>HOSPEDAGEM EM NOSSA PLATAFORMA.</li>
                   <li>CARTÃO DIGITAL INTERATIVO</li>
                   <li>PACK DE 10 IMAGENS PARA POSTAGEM NAS REDES SOCIAIS</li>
                 </ul>`,
      whatsappLink: "https://wa.me/5511999999999?text=Quero+o+Plano+Básico",
    },
    {
      img: `${secondMedal}`,
      title: "Plano Avançado",
      price: "R$ 199,90/mês",
      description: `<ul>
                   <li>HOSPEDAGEM EM NOSSA PLATAFORMA.</li>
                   <li>CARTÃO DIGITAL INTERATIVO</li>
                   <li>PACK DE 10 IMAGENS PARA POSTAGEM NAS REDES SOCIAIS</li>
                   <li>SUPORTE COM PAGINA GOOGLE </li>
                   <li>ANÚCIO PATROCINADO NO GOOGLE ADS</li>

                 </ul>`,
                  
                 
      whatsappLink: "https://wa.me/5511999999999?text=Quero+o+Plano+Avançado",
    },
    {
      img: `${firstMedal}`,
      title: "Plano Premium",
      price: "R$ 299,90/mês",
      description: `<ul>
                   <li>HOSPEDAGEM EM NOSSA PLATAFORMA.</li>
                   <li>CARTÃO DIGITAL INTERATIVO</li>
                   <li>PACK DE 10 IMAGENS PARA POSTAGEM NAS REDES SOCIAIS</li>
                   <li>SUPORTE COM PAGINA GOOGLE </li>
                   <li>ANÚCIO PATROCINADO NO GOOGLE ADS</li>
                   <li>DESTAQUE COM BANNER EM VIDEO</li>
                   <li>CRIAÇÃO DE WEBSITE</li>

                 </ul>`,
      whatsappLink: "https://wa.me/5511999999999?text=Quero+o+Plano+Premium",
    },
  ];

  return (
    <div className="container container-anuncio mt-5">
      <div className="row container">
        {plans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <PlanCard {...plan} />
          </div>
        ))}
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
