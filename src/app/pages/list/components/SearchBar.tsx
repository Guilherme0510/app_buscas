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
  const userId = auth.currentUser?.uid;
  const isAdmin = (userId === 'QtWNWEPXcTMUPrQQrzYj1JjWJC73'); 

  return (
    <div className="search-bar-container">
      <div className="header-list">
        <h1>Lista de Clientes</h1>
      </div>
      <div className="pesquisa">
        {isAdmin && (
          <select
            value={selectedOperator}
            onChange={onOperatorChange}
            className="form-select select-operador"
          >
            <option value="">Todos</option>
            <option value="Camila">Camila</option>
            <option value="Eliane">Eliane</option>
            <option value="Joyce">Joyce</option>
            <option value="Luana">Luana</option>
            <option value="Luciana">Luciana</option>
          </select>
        )}
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
