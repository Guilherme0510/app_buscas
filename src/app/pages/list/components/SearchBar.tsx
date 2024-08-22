import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
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
    </div>
  );
};
