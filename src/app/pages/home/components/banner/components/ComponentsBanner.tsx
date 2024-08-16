import React from "react";
import { Container } from "react-bootstrap";
import './ComponentsBanner.css';
import img_banner from '../../../../../assets/images/img-banner.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const ComponentsBanner: React.FC = () => {
  return (
    <section className="banner-section">
      <Container fluid className="banner-content d-flex flex-column justify-content-center align-items-center text-center">
        <img src={img_banner} alt="" />
        <div className="info-banner">
          <h1 className="">Encontre o Melhor</h1>
          <p className="">Pesquise e descubra as melhores empresas em sua cidade com apenas alguns cliques.</p>
        </div>
      </Container>
      <div className="divider-box mx-auto">
        <FontAwesomeIcon className="icon-location" icon={faLocationDot}/>
      </div>
    </section>
  );
};