import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css.css'


interface FooterProps {
  text: string;
  text_02: string;
}

export const LinksFooter: React.FC<FooterProps> = ({ text, text_02 }) => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className='footer'>
        <Row>
          <Col md={5}>
            <small className="mb-0">{text}</small>
          </Col>
          <Col md={4}>
            <a className="link-footer mb-0 text-center d-flex justify-content-center mx-auto" href='tel:0800 580 2766'>Anuncie Conosco: {text_02}</a> 
          </Col>
          <Col md={2}>
            <a className="link-whats" href='https://bit.ly/GUIACENTROSP'>Entre em contato <i className="text-white fa-brands fa-whatsapp"></i></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
