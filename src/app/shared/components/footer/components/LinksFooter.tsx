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
          <Col md={7}>
            <small className="mb-0">{text}</small>
          </Col>
          <Col md={3}>
            <a className="link-footer mb-0 text-center d-flex justify-content-center mx-auto" href='tel:0800 580 2766'>Anuncie Conosco: {text_02}</a> 
          </Col>
          <Col md={1}>
            <a className="" href='https://bit.ly/GUIACENTROSP'><i className="text-white fa-brands fa-whatsapp"></i></a>
          </Col>

          
        </Row>
      </Container>
    </footer>
  );
};
