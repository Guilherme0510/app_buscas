import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './ComponentsStates.css';

export const ComponentsStates: React.FC = () => {
  return  (
    <Container className="estados-container">
    <Row className="justify-content-center">
      <Col md={4}>
        <h2 className="region-title">Norte</h2>
        <ul className="state-list">
          <li><a href="/">Acre</a></li>
          <li><a href="/">Amapá</a></li>
          <li><a href="/">Amazonas</a></li>
          <li><a href="/">Pará</a></li>
          <li><a href="/">Rondônia</a></li>
          <li><a href="/">Roraima</a></li>
          <li><a href="/">Tocantins</a></li>
        </ul>
      </Col>

      <Col md={4}>
        <h2 className="region-title">Nordeste</h2>
        <ul className="state-list">
          <li><a href="/">Alagoas</a></li>
          <li><a href="/">Bahia</a></li>
          <li><a href="/">Ceará</a></li>
          <li><a href="/">Maranhão</a></li>
          <li><a href="/">Paraíba</a></li>
          <li><a href="/">Pernambuco</a></li>
          <li><a href="/">Piauí</a></li>
          <li><a href="/">Rio Grande do Norte</a></li>
          <li><a href="/">Sergipe</a></li>
        </ul>
      </Col>

      <Col md={4}>
        <h2 className="region-title">Centro-Oeste</h2>
        <ul className="state-list">
          <li><a href="/">Distrito Federal</a></li>
          <li><a href="/">Goiás</a></li>
          <li><a href="/">Mato Grosso</a></li>
          <li><a href="/">Mato Grosso do Sul</a></li>
        </ul>
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col md={4}>
        <h2 className="region-title">Sudeste</h2>
        <ul className="state-list">
          <li><a href="/">Espírito Santo</a></li>
          <li><a href="/">Minas Gerais</a></li>
          <li><a href="/">Rio de Janeiro</a></li>
          <li><a href="/">São Paulo</a></li>
        </ul>
      </Col>

      <Col md={4}>
        <h2 className="region-title">Sul</h2>
        <ul className="state-list">
          <li><a href="/">Paraná</a></li>
          <li><a href="/">Rio Grande do Sul</a></li>
          <li><a href="/">Santa Catarina</a></li>
        </ul>
      </Col>
    </Row>
  </Container>
  );
};