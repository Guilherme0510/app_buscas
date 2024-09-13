import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

interface SearchInputProps {
  query: string;
  setQuery: (value: string) => void;
  selectedRamo: string;
  setSelectedRamo: (value: string) => void;
  ramosOptions: string[];
  handleClearSearch: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  selectedRamo,
  setSelectedRamo,
  ramosOptions,
  handleClearSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const filteredOptions = ramosOptions.filter(ramo =>
    ramo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectChange = (value: string) => {
    setSelectedRamo(value);
    setSearchTerm(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClearAndResetSearch = () => {
    handleClearSearch();
    setSearchTerm('');
    setIsOpen(false); 
  };

  return (
    <Form className="search">
      <Form.Group className="inputs-search">
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nome, Ramo ou Localização"
          className="input-search"
          aria-label="Nome, ramo ou localização"
        />
        <div ref={selectRef} className="custom-select-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() => setIsOpen(!isOpen)}
            placeholder="Selecione uma Categoria"
            className="input-search"
            aria-label="Selecione um ramo"
          />
          {isOpen && (
            <ul className="custom-select-dropdown">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((ramo, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectChange(ramo)}
                    className={selectedRamo === ramo ? 'selected' : ''}
                  >
                    {ramo}
                  </li>
                ))
              ) : (
                <li>Nenhum ramo encontrado</li>
              )}
            </ul>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClearSearch();
            handleClearAndResetSearch();
          }}
          className="btn-clear"
        >
          Limpar 
        </button>
      </Form.Group>
    </Form>
  );
};
