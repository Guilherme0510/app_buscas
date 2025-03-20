import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";

interface SearchBarProps {
  searchTerm: string;
  selectedOperator: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOperatorChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, selectedOperator, onSearchChange, onSortChange, onOperatorChange }) => {
  const auth = getAuth();

  return (
    <div className="search-bar-container">
      <div className="header-list">
        <h1>Lista de Clientes</h1>
      </div>
      <div className="pesquisa">
        <input
          type="text"
          placeholder="Pesquisar cliente..."
          value={searchTerm}
          onChange={onSearchChange}
          className="form-control barra-pesquisa"
        />
        <button className="btn btn-primary btn-pesquisa">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <label htmlFor="sortBy" className="label_sortby">Ordenar por:</label>
        <select name="sortBy" id="sortBy" className="sortby form-select" onChange={onSortChange}>
          <option value="">Selecione</option>
          <option value="alphabetical">Ordem Alfabética</option>
          <option value="newest">Mais Novo</option>
          <option value="oldest">Mais Antigo</option>
        </select>
      </div>
    </div>
  );
};
