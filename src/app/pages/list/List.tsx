import React, { useState } from "react";
import { ClientTable } from "./components/ClientTable";
import { SearchBar } from "./components/SearchBar";
import { NavbarLeft } from "../../shared/components";
import './components/list.css';

const initialClientsData = [
  { id: 1, cnpj: "12.345.678/0001-99", name: "Cliente A", operador: "Vitor" },
  { id: 2, cnpj: "98.765.432/0001-00", name: "Cliente B", operador: "Guilherme" },
  { id: 1, cnpj: "12.345.678/0001-99", name: "Cliente A", operador: "Vitor" },
  { id: 2, cnpj: "98.765.432/0001-00", name: "Cliente B", operador: "Guilherme" },
  { id: 1, cnpj: "12.345.678/0001-99", name: "Cliente A", operador: "Vitor" },
  { id: 2, cnpj: "98.765.432/0001-00", name: "Cliente B", operador: "Guilherme" },
  { id: 1, cnpj: "12.345.678/0001-99", name: "Cliente A", operador: "Vitor" },
  { id: 2, cnpj: "98.765.432/0001-00", name: "Cliente B", operador: "Guilherme" },
  { id: 2, cnpj: "98.765.432/0001-00", name: "Cliente B", operador: "Guilherme" },
  { id: 1, cnpj: "12.345.678/0001-99", name: "Cliente A", operador: "Vitor" },
  { id: 2, cnpj: "98.765.432/0001-00", name: "Cliente B", operador: "Guilherme" },

];

export const List: React.FC = () => {
  const [clients, setClients] = useState(initialClientsData);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClients = (ids: number[]) => {
    console.log("IDs para exclusão:", ids); 
    setClients(prevClients => prevClients.filter(client => !ids.includes(client.id)));
  };

  return (
    <>
      <NavbarLeft />
      <div className="client-list-container">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <ClientTable clients={filteredClients} onDeleteClients={handleDeleteClients} />
      </div>
    </>
  );
};
