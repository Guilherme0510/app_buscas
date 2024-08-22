import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <>
      <div className="header-list">
        <h1>Lista de Clientes</h1>
        <hr />
      </div>
      <div className="pesquisa">
        <select name="" id="" className="form-select select-operador">
          <option value="">Operador</option>
          <option value="">Camila</option>
          <option value="">Eliane</option>
          <option value="">Joyce</option>
          <option value="">Luana</option>
          <option value="">Luciana</option>
        </select>
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
        <select name="sortBy" id="sortBy" className="sortby form-select">
          <option className="opt-sortby" value="alphabetical">Selecione</option>
          <option className="opt-sortby" value="alphabetical">Ordem Alfabética</option>
          <option className="opt-sortby" value="newest">Novo</option>
          <option className="opt-sortby" value="oldest">Antigo</option>
        </select>

      </div>
    </>
  );
};
