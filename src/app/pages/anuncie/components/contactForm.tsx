import React, { useRef } from "react";
import emailjs from "emailjs-com";

// Define a interface para o formulário de referência
export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null); // Tipando a referência do formulário

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "service_r1q0i1w",    // Substitua pelo seu Service ID
        "template_c8op3sv",   // Substitua pelo seu Template ID
        form.current,         // Certifique-se de que 'form.current' está correto
        "TVBz5jk-QgNT88Rxi"   // Substitua pelo seu User ID
      )
      .then((result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
      }, (error) => {
          console.log(error.text);
          alert("Houve um erro ao enviar a mensagem.");
      });

      e.currentTarget.reset(); // Limpa o formulário após o envio
    }
  };

  return (
    <>
      <section>
        <div className="row container d-flex justify-content-center py-5">
          <div className="col-md-6 box-contact">
            <div className="box-contact-infos">
              <h3>Nome</h3>
              <p>Guia Centro SP</p>
              <hr />
              <h3>Telefone</h3>
              <p>+55 (70) 7070-7070</p>
              <hr />
              <h3>E-mail</h3>
              <p>pesquisas@pesquisas.com</p>
              <hr />
              <h3>Localização</h3>
              <p>São Paulo - SP</p>
            </div>
          </div>

          <div className="col-md-6 box-form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Seu nome</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Digite o seu nome..."
                required
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Digite o seu email..."
                required
              />
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                name="user_company"
                id="company"
                placeholder="Digite o nome de sua empresa..."
              />
              <label htmlFor="address">Endereço da empresa</label>
              <input
                type="text"
                name="user_address"
                id="address"
                placeholder="Digite o endereço de sua empresa..."
              />
              <label htmlFor="phone">Número de contato</label>
              <input
                type="text"
                name="user_phone"
                id="phone"
                placeholder="Digite o seu número..."
              />
              <button type="submit" className="btn btn-primary mt-3">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
