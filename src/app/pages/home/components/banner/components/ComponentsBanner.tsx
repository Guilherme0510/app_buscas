import React from "react";
import { Container} from "react-bootstrap";
import './ComponentsBanner.css';

export const ComponentsBanner: React.FC = () => {
  return (
    <section className="banner-section">
      <Container fluid className="banner-content d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="pt-5">Seja bem-vindo!</h1>
        <p className="pt-3">Aqui vai uma breve descrição.</p>
      </Container>
      <div className="divider-box mx-auto"></div>
    </section>
  );
};