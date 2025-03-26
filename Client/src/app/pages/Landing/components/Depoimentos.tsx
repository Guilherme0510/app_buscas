import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Depoimentos = () => {
  return (
    <section id="depoimentos" className="landing-depoimentos">
      <div className="container">
        <h3 className="text-white">
          Oque os clientes dizem sobre nossos serviços
        </h3>
        <div className="row">
          <div className="col-md-4 col-10">
            <div className="card-depoimentos">
              <div className="card-depoimentos-header">
                <FontAwesomeIcon
                  icon={faUser}
                  color="#ffffff"
                  className="icon-depoimentos"
                />
                <p>Maria Souza</p>
              </div>
              <div className="card-depoimentos-body">
                <p>
                  Desde que comecei a utilizar o serviço, meu negócio viu um
                  aumento significativo no número de clientes. A equipe foi
                  incrível e me ajudou a otimizar minha presença online de forma
                  rápida e eficaz. Estou muito satisfeita!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10">
            <div className="card-depoimentos">
              <div className="card-depoimentos-header">
                <FontAwesomeIcon
                  icon={faUser}
                  color="#ffffff"
                  className="icon-depoimentos"
                />
                <p>Carlos Oliveira</p>
              </div>
              <div className="card-depoimentos-body">
                <p>
                  Foi a melhor decisão que tomei! O processo foi simples e o
                  suporte oferecido foi excepcional. A visibilidade no Google
                  melhorou bastante, e agora mais pessoas encontram o meu
                  serviço. Muito obrigado por tudo!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10">
            <div className="card-depoimentos">
              <div className="card-depoimentos-header">
                <FontAwesomeIcon
                  icon={faUser}
                  color="#ffffff"
                  className="icon-depoimentos"
                />
                <p>Ana Lima</p>
              </div>
              <div className="card-depoimentos-body">
                <p>
                  Recomendo de olhos fechados! O serviço é excelente, e a equipe
                  fez com que minha empresa se destacasse nas buscas. Recebi
                  muito mais ligações e novos clientes depois que
                  comecei a trabalhar com eles. A experiência foi incrível!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
