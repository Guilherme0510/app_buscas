import {
  faRocket,
  faStreetView,
  faUserPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Servicos = () => {
  return (
    <section id="servicos" className="landing-servicos text-center py-5">
      <div className="container">
        <h2 className="mb-3 text-light">Serviços</h2>
        <p className="text-white">
          Quer ser encontrado no Google por mais clientes?
        </p>
        <div className="row justify-content-center pt-4">
          {[
            {
              icon: faUserPlus,
              title: "Cadastro e Otimização",
              text: "Ideal para empresas ou profissionais que ainda não possuem um perfil no Google Meu Negócio e desejam criar uma presença online eficiente.",
              caracter01: "Maior visibilidade no Google",
              caracter02: "Atração de novos clientes",
              caracter03: "Destaque para seu negócio"
            },
            {
              icon: faRocket,
              title: "Somente Otimização",
              text: "Para quem já tem um perfil no Google Meu Negócio, mas quer melhorá-lo para atrair mais clientes e aumentar a visibilidade.",
              caracter01: "Ajuste de descrições",
              caracter02: "Otimização de Palavras-chave",
              caracter03: "Adição de Imagens e Categorias"
            },
            {
              icon: faStreetView,
              title: "Anúncios Com Google ADS",
              text: "O pacote premium para quem quer um perfil profissional e um tour virtual imersivo.",
              caracter01: "Campanhas segmentadas e eficazes",
              caracter02: "Análises e relatórios detalhados",
              caracter03: "Otimização de custos e performance"
            },
          ].map((service, index) => (
            <div className="col-md-4 col-10" key={index}>
              <div
                className="card p-4 shadow text-white rounded-4 card-effect"
                style={{ backgroundColor: "#FFA800" }}
              >
                <div className="card-content">
                  <FontAwesomeIcon icon={service.icon} size="3x" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="list-unstyled text-start mt-3">
                    {[
                      service.caracter01,
                      service.caracter02,
                      service.caracter03,
                    ].map((sub, i) => (
                      <li key={i} className="d-flex align-items-center mb-2">
                        <FontAwesomeIcon icon={faCheck} className="me-2" />{" "}
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href={"/#formulario"} className=" btn btn-servicos text-light">Comece Agora</a>
      </div>
    </section>
  );
};
