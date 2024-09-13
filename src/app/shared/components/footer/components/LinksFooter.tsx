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
          <Col md={6}>
            <small className="mb-0">{text}</small>
          </Col>
          <Col md={6}>
            <a className="link-footer mb-0 text-center d-flex justify-content-center mx-auto" href='tel:08005802766'>Anuncie Conosco: {text_02}</a>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};
