import React from "react";
import "./style/About.css";

export const About: React.FC = () => {
  const steps = [
    {
      text: "Tudo começa aqui! No primeiro passo, você será guiado pelos fundamentos que construirão uma base sólida para o sucesso. Entenda as etapas iniciais, prepare-se com atenção e garanta que todos os pré-requisitos estão em ordem antes de avançar.",
      reverse: false,
    },
    {
      text: "Agora que já avançamos, é hora de aprofundar. Este segundo passo é crucial para garantir que as bases sejam transformadas em ação. Aqui, você executará as tarefas mais importantes, seguindo as melhores práticas para otimizar os resultados e garantir que tudo esteja fluindo conforme o esperado.",
      reverse: true,
    },
    {
      text: "Chegamos ao passo final! Neste estágio, revisamos o progresso, consolidamos os aprendizados e refinamos os detalhes para alcançar o objetivo com excelência. Agora, tudo o que foi feito anteriormente se une, levando à conclusão de todo o processo com sucesso.",
      reverse: false,
    },
  ];

  return (
    <div className="container">
    

      <div className="container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`row pt-4 mb-5 mx-5 align-items-center ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="col-md-1">
              <div className="step-number">{`0${index + 1}`}</div>
            </div>
            <div className="col-md-11">
              <p className="step-text">{step.text}</p>
            </div>
              
          </div>
        ))}
        
      </div>
    </div>
  );
};
