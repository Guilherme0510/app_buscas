export const Sobre = () => {
  return (
    <section id="sobre-nos" className="landing-sobre">
      <div className="row container">
        <div className="col-md-6 col-12 order-2 order-md-1">
          <img
            src={require("../images/banner.png")}
            alt=""
            width={"80%"}
            height={"100%"}
          />
        </div>

        <div className="col-md-6 col-12 order-1 order-md-2">
          <div className="sobre-content">
            <h1>
              <span className="text-laranja">Solução</span> completa para
              negócios locais
            </h1>
            <p className="text-sobre">
              Esteja presente nos principais canais de buscas e potencialize a
              presença  da sua empresa nos resultados de buscas locais. Atraindo
              clientes e impulsionando seu negócio. 
            </p>
          </div>
        </div>
      </div>
      <svg
        width="100%"
        height="100px"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#7B1BA9"
          d="M0,192L60,224C120,256,240,320,360,293.3C480,267,600,149,720,122.7C840,96,960,160,1080,181.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

