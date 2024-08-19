import React, { useState } from 'react';
import './styles/Dash.css'
import { Form, Button } from 'react-bootstrap';

export const SearchInput: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log(query);
    };

    return (
        <Form className="mb-4">
            <Form.Group>
                <Form.Control
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Digite sua pesquisa"
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
                <i className="fa fa-search" aria-hidden="true"></i> Pesquisar
            </Button>
        </Form>
    );
};
