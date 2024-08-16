import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './ComponentsSearch.css';

export const ComponentsSearch: React.FC = () => {
    return (
        <Container className="city pt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Form className="search-form">
                        <Form.Group controlId="search1" className="search-input">
                            <Form.Control type="text" placeholder="Digite a primeira pesquisa..." />
                        </Form.Group>
                        <Form.Group controlId="search2" className="search-input">
                            <Form.Control type="text" placeholder="Digite a segunda pesquisa..." />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}