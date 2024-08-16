import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  text: string;
  links: FooterLink[];
}

export const LinksFooter: React.FC<FooterProps> = ({ text, links }) => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">{text}</p>
          </Col>
          <Col md={6}>
            <ul className="list-inline text-md-end mb-0">
              {links.map((link, index) => (
                <li key={index} className="list-inline-item">
                  <a href={link.href} className="text-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
