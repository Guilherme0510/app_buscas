import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ComponentsSearch.css';

export const ComponentsSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/pesquisas?query=${encodeURIComponent(query)}&location=${encodeURIComponent(locationQuery)}`);
  };

  return (
    <Container className="city">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form className="search-form" onSubmit={handleSearch}>
            <Form.Group controlId="search1" className="search-input">
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="O que Procura?"
              />
            </Form.Group>
            <Form.Group controlId="search2" className="search-input">
              <Form.Control
                type="text"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                placeholder="Em qual localização?"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
