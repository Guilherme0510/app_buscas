import { faChartColumn, faRocket, faStreetView, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Servicos = () => {
  return (
    <section id="servicos" className="landing-servicos text-center py-5">
      <div className="container">
        <h2 className="mb-3">Serviços</h2>
        <p className="text-white">
          Quer ser encontrado no Google por mais clientes?
        </p>
        <div className="row justify-content-center pt-4">
          <div className="col-md-4 col-10">
            <div
              className="card p-4 shadow text-white rounded-4 card-effect"
              style={{ backgroundColor: "#FFA800" }}
            >
              <div className="card-content">
                <FontAwesomeIcon icon={faUserPlus} size="3x" />
                <h3>Cadastro e Otimização</h3>
                <p>
                  Para quem ainda não tem um perfil no Google ou precisa criar
                  do zero.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10">
            <div
              className="card p-4 shadow text-white rounded-4 card-effect"
              style={{ backgroundColor: "#FFA800" }}
            >
              {" "}
              <div className="card-content">
                <FontAwesomeIcon icon={faRocket} size="3x" />
                <h3>Somente Otimização</h3>
                <p> 
                Para quem já tem um perfil, mas quer melhorar o desempenho e atrair mais clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10">
            <div
              className="card p-4 shadow text-white rounded-4 card-effect"
              style={{ backgroundColor: "#FFA800" }}
            >
              {" "}
              <div className="card-content">
                <FontAwesomeIcon icon={faStreetView} size="3x" />
                <h3>Atualização + Tour Virtual 360°</h3>
                <p>
                O pacote premium para quem quer um perfil profissional e um tour virtual imersivo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-servicos">Comece Agora</button>
      </div>
    </section>
  );
};
