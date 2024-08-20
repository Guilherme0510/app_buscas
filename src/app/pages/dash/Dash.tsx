import React, { useState } from "react";
import maps_icon from "../../assets/images/maps-icon.png";
import { SearchInput, SearchResult } from "./components";

export const Dash: React.FC = () => {
  const [results] = useState([
    {
      title: "Colatina Hotel",
      subtitle: "Hotéis",
      description: "Seja bem vindo ao Hotel Colatina",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15040.74074776214!2d-40.6277386!3d-19.5336615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7a827abc19f33%3A0x5ab431e792569751!2sColatina%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1723835055545!5m2!1spt-BR!2sbr",
    },
    {
      title: "Local 2",
      subtitle: "Subtítulo 2",
      description: "Descrição breve do local 2",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15040.74074776214!2d-40.6277386!3d-19.5336615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7a827abc19f33%3A0x5ab431e792569751!2sColatina%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1723835055545!5m2!1spt-BR!2sbr",
    },
    {
      title: "Local 3",
      subtitle: "Subtítulo 3",
      description: "Descrição breve do local 3",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15040.74074776214!2d-40.6277386!3d-19.5336615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7a827abc19f33%3A0x5ab431e792569751!2sColatina%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1723835055545!5m2!1spt-BR!2sbr",
    },
  ]);

  return (
    <div className="dash-container">
      <div className="text-center header-search">
        <div className="overlay">
          <div className="title-dash">
            <h1 className="display-4">Encontre Seu Destino</h1>
            <p className="lead">
              Pesquise e descubra locais interessantes ao redor do Brasil.
            </p>
          </div>
        </div>
      </div>
      <div className="container section-result">
        <SearchInput />
        <h2 className="my-4">Resultados Encontrados</h2>
        <div className="results-container">
          {results.map((result, index) => (
            <SearchResult
            key={index}
            title={result.title}
            subtitle={result.subtitle}
            description={result.description}
            mapUrl={result.mapUrl}
            mapsIcon={maps_icon}  // Passa o ícone como prop
          />
          ))}
        </div>
      </div>
    </div>
  );
};
