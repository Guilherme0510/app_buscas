import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ComponentsSearch.css';
import { motion } from 'framer-motion';


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
      <Container fluid className="banner-content d-flex flex-column justify-content-center align-items-center text-center">
        
        <motion.div 
          className="info-banner" 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h1>Encontre no centro de São Paulo</h1>
          <p>Maior centro de compras na América Latina</p>
        </motion.div>
      </Container>
      <motion.div 
        className=" mx-auto" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* <FontAwesomeIcon className="icon-location" icon={faLocationDot}/> */}
      </motion.div>
      <Row className="justify-content-center">
        <Col md={8} className="d-flex justify-center">
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
