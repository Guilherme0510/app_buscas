import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export const Junte = () => {
  const [clientes, setClientes] = useState(0);
  const [procedimentos, setProcedimentos] = useState(0);
  const [anos, setAnos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const animateNumbers = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
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
    <section ref={sectionRef} className="landing-junte py-5">
      <div className="container text-center text-white">
        <h3>Junte-se ao G Maps</h3>
        <div className="row mt-4">
          <div className="col-md-4 itens-junte">
            <FontAwesomeIcon icon={faUserGroup} color="#fff" className="icon-junte" />
            <h4>+{clientes}</h4>
            <p>Clientes felizes</p>
          </div>
          <div className="col-md-4 itens-junte">
            <FontAwesomeIcon icon={faCheckCircle} color="#fff" className="icon-junte" />
            <h4>+{procedimentos}</h4>
            <p>Procedimentos com sucesso</p>
          </div>
          <div className="col-md-4 itens-junte">
            <FontAwesomeIcon icon={faClock} color="#fff"  className="icon-junte" />
            <h4>+{anos} anos</h4>
            <p>de experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};
