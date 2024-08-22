import React, { useState } from "react";
import { ClientTable } from "./components/ClientTable";
import { SearchBar } from "./components/SearchBar";
import { NavbarLeft } from "../../shared/components";
import './components/list.css'

const clientsData = [
  { id: 1, cnpj: "12.345.678/0001-99", name: "Cliente A" },
  { id: 2, cnpj: "98.765.432/0001-00", name: "Cliente B" },
];

export const List: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = clientsData.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <NavbarLeft />
    <div className="client-list-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ClientTable clients={filteredClients} />
    </div>
    </>
  );
};