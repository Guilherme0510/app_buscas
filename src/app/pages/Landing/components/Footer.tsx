export const Footer = () => {
    return (
      <footer id="contato" className="bg-dark text-white pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="text-purple">G Maps</h3>
              <p className="text-white">
                A G Maps é uma agência líder em marketing digital dedicada a impulsionar o sucesso de empresas online. Com expertise em SEO, PPC, mídias sociais, criação de conteúdo e muito mais, oferecemos soluções personalizadas para maximizar o ROI.
              </p>
            </div>
            <div className="col-md-2 mb-4">
              <h4 className="text-purple">Nossos Serviços</h4>
              <ul className="list-unstyled">
                <li>Marketing SEO</li>
                <li>Pesquisa de Tendências</li>
                <li>Marketing por E-mail</li>
                <li>Google PPC</li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h4 className="text-purple">Explore Mais</h4>
              <ul className="list-unstyled">
                <li><a href="#sobre-nos" className="text-white text-decoration-none">Sobre Nós</a></li>
                <li><a href="#recursos" className="text-white text-decoration-none">Recursos</a></li>
                <li><a href="#servicos" className="text-white text-decoration-none">Nossos Trabalhos</a></li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h4 className="text-purple">Contato</h4>
              <p>Jl. Medan Mendeka No. 35</p>
              <p>Jakarta Sekatan</p>
              <p>(021) 234567</p>
              <p>+62 802 9088 72</p>
            </div>
          </div>
          <div className="row mt-3 border-top pt-3">
            <div className="col-12 text-center">
              <p className="mb-0">G Maps 2024 © Todos os direitos reservados</p>
              <p className="mb-0">Termos e Condições</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };