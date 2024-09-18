import React from "react";

export const ContactForm: React.FC = () => {

  return (
    <>
      <section>
        <div className="container d-flex justify-content-center py-5">
          <div className="box-contact">
            <div className="box-contact-infos text-center">
              <h3>Nome</h3>
              <p>Guia Centro SP</p>
              <hr />
              <h3>Telefone</h3>
              <p>0800 580 2766</p>
              <hr />
              <h3>E-mail</h3>
              <p>comercial@grupomapscartaodigital.com.br</p>
              <hr />
              <h3>Localização</h3>
              <p>São Paulo - SP</p>
              <a href="https://bit.ly/GUIACENTROSP" className="btn btn-success btn-form"><i className="fa-brands fa-whatsapp mx-auto"></i></a>
            </div>
          </div>

        
        </div>
      </section>
    </>
  );
};
