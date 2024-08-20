import React, { useState } from 'react';
import './styles/Dash.css'
import { Form, Button } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SearchInput: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log(query);
    };

    return (
        <Form className="search">
            <Form.Group className='d-flex'>
                <Form.Control
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="O que Procura?"
                    className='input-search'
                />
                <Form.Control
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Em qual Localização?"
                    className='input-search'
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} /> Pesquisar
            </Button>
        </Form>
    );
};
