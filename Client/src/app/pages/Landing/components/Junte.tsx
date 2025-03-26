import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const Junte = () => {
  const [clientes, setClientes] = useState(0);
  const [procedimentos, setProcedimentos] = useState(0);
  const [anos, setAnos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const animateNumbers = (
    target: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    duration: number
  ) => {
    let start = 0;
    const increment = target / (duration / 10);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setter(Math.ceil(start));
        setTimeout(updateCounter, 10);
      } else {
        setter(target);
      }
    };

    updateCounter();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateNumbers(1000, setClientes, 1000);
      animateNumbers(5000, setProcedimentos, 1200);
      animateNumbers(5, setAnos, 800);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="sobre-nos" className="landing-junte py-5">
      <div className="container text-center text-white">
        <h3>Junte-se ao G Maps</h3>
        <p className="mt-5 text-justify">
          O Grupo MAPS é uma empresa especializada em marketing digital,
          oferecendo soluções estratégicas para alavancar a presença online de
          empresas. Com um time experiente e focado em resultados, ajudamos
          nossos clientes a se destacarem no Google Maps, redes sociais e até na
          criação de sites profissionais. Nosso principal objetivo é aumentar a
          visibilidade e credibilidade das empresas na internet, tornando-as
          mais acessíveis para potenciais clientes. No Google Maps, trabalhamos
          com a otimização de perfis comerciais, garantindo que seu negócio
          apareça nos primeiros resultados de busca e atraia mais clientes
          locais. Além disso, desenvolvemos estratégias para redes sociais,
          criando conteúdos atrativos, gerenciando anúncios e engajando o
          público-alvo de forma eficiente. Para empresas que precisam de um site
          profissional, oferecemos desenvolvimento de páginas personalizadas,
          garantindo um design moderno, responsivo e otimizado para conversões.
          Com o Grupo MAPS, sua empresa ganha mais destaque, mais clientes e
          mais oportunidades de crescimento no ambiente digital. Seja para
          melhorar sua presença no Google Maps, expandir sua marca nas redes
          sociais ou ter um site de alta performance, nós temos a solução ideal
          para você.
        </p>
        <div className="row mt-5">
          <div className="col-md-4 itens-junte">
            <FontAwesomeIcon
              icon={faUserGroup}
              color="#fff"
              className="icon-junte"
            />
            <h4>+{clientes}</h4>
            <p>Clientes felizes</p>
          </div>
          <div className="col-md-4 itens-junte">
            <FontAwesomeIcon
              icon={faCheckCircle}
              color="#fff"
              className="icon-junte"
            />
            <h4>+{procedimentos}</h4>
            <p>Procedimentos com sucesso</p>
          </div>
          <div className="col-md-4 itens-junte">
            <FontAwesomeIcon
              icon={faClock}
              color="#fff"
              className="icon-junte"
            />
            <h4>+{anos} anos</h4>
            <p>de experiência</p>
          </div>
        </div>

        {/* Mapa interativo */}
        <div className="map-container mt-5">
          <iframe
            title="Google Maps"
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9020210571283!2d-46.63330968488768!3d-23.548949767649994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b3ad5472bf%3A0xa0c9c48b4db5b3f5!2sSão%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1711456789012!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
