import React, { useState, useEffect } from "react";
import { ClientTable } from "./components/ClientTable";
import { SearchBar } from "./components/SearchBar";
import { NavbarLeft } from "../../shared/components";
import { Client } from "./components/types";
import './components/style/list.css';
import { db } from "../../firebaseConfig";
import { collection, getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";

export const List: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedOperator, setSelectedOperator] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsCollection = collection(db, "clientes");
        const snapshot: QuerySnapshot<DocumentData> = await getDocs(clientsCollection);

        const clientData = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...(data as Omit<Client, 'id'>)
          };
        });

        setClients(clientData);
      } catch (error) {
        console.error("Erro ao buscar clientes: ", error);
      }
    };

    fetchClients();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOperator(e.target.value);
  };

  const filteredClients = clients
  .filter(client => {
    const matchesSearchTerm = (client.nome && client.nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (client.cnpj && client.cnpj.includes(searchTerm));

      const matchesOperator = selectedOperator ? client.createdByName.trim().toLowerCase() === selectedOperator.trim().toLowerCase() : true;


    return matchesSearchTerm && matchesOperator;
  })
  .sort((a, b) => {
    if (sortOption === "alphabetical") {
      return a.nome.localeCompare(b.nome);
    } else if (sortOption === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortOption === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    return 0;
  });

  const handleDeleteClients = (ids: string[]) => {
    setClients(prevClients => prevClients.filter(client => !ids.includes(client.id)));
  };

  return (
    <>
      <NavbarLeft />
      <div className="client-list-container">
        <SearchBar
          searchTerm={searchTerm}
          selectedOperator={selectedOperator}
          onSearchChange={handleSearchChange}
          onSortChange={handleSortChange}
          onOperatorChange={handleOperatorChange}
        />
        <ClientTable clients={filteredClients} onDeleteClients={handleDeleteClients} />
      </div>
    </>
  );
};
