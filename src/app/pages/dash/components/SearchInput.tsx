import React from 'react';
import { Form } from 'react-bootstrap';

interface SearchInputProps {
  query: string;
  locationQuery: string;
  setQuery: (value: string) => void;
  setLocationQuery: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  query,
  locationQuery,
  setQuery,
  setLocationQuery
}) => {
  return (
    <Form className="search">
      <Form.Group className='d-flex'>
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nome ou Ramo"
          className='input-search'
        />
        <Form.Control
          type="text"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
          placeholder="Estado, Cidade ou Bairro"
          className='input-search'
        />
      </Form.Group>
    </Form>
  );
};
