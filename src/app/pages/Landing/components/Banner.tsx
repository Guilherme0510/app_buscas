export const Banner = () => {
  return (
    <section id="inicio" className="landing-banner">
      <div className="row container justify-content-center text-center">
        <div className="col-md-6 col-12">
          <div className="banner-content">
            <h1>
              <span className="text-laranja">Aumente</span> Sua Visibilidade com
              o<span className="text-laranja"> Grupo Maps</span>
            </h1>
            <p>
              Venha expandir seu negócio e vizualizções com a ajuda dos nossos
              serviços de marketing digital
            </p>
          <div className="banner-buttons">
            <button className="btn-info btn-info-contato">Contatos</button>
            <button className="btn-info btn-info-saiba">Saiba Mais</button>
          </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img
            src={require("../images/banner.png")}
            alt=""
            width={"80%"}
            height={"100%"}
          />
        </div>
      </div>
    </section>
  );
};
