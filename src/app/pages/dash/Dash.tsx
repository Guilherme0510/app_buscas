// src/pages/Dash.tsx
import React, { useState, useEffect } from "react";
import maps_icon from "../../assets/images/maps-icon.png";
import { SearchInput, SearchResult } from "./components";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Dash: React.FC = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [filteredClients, setFilteredClients] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        const clientsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setClients(clientsData);
        setFilteredClients(clientsData);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  // Função para normalizar a string removendo acentos, espaços e convertendo para minúsculas
  const normalizeString = (str: string) => {
    return str
      .normalize("NFD") // Normaliza a string para decompor acentos e diacríticos
      .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
      .replace(/\s+/g, '') // Remove todos os espaços em branco
      .toLowerCase(); // Converte para minúsculas
  };

  useEffect(() => {
    const handleSearch = () => {
      const lowerQuery = normalizeString(query);
      const lowerLocationQuery = normalizeString(locationQuery);

      const filtered = clients.filter(client =>
        (normalizeString(client.nome || '').includes(lowerQuery) ||
          normalizeString(client.ramo || '').includes(lowerQuery)) &&
        (lowerLocationQuery
          ? normalizeString(client.estado || '').includes(lowerLocationQuery) ||
            normalizeString(client.cidade || '').includes(lowerLocationQuery) ||
            normalizeString(client.bairro || '').includes(lowerLocationQuery)
          : true)
      );

      setFilteredClients(filtered);
    };

    handleSearch();  // Chama a função de busca sempre que query ou locationQuery mudam
  }, [query, locationQuery, clients]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="dash-container">
      <div className="text-center header-search">
        <div className="overlay">
          <div className="title-dash">
            <h1 className="display-4">Encontre Seu Cliente</h1>
            <p className="lead">
              Pesquise e descubra clientes interessantes ao redor do Brasil.
            </p>
          </div>
        </div>
      </div>
      <div className="container section-result">
        <SearchInput 
          query={query} 
          locationQuery={locationQuery}
          setQuery={setQuery} 
          setLocationQuery={setLocationQuery}
        />
        <h2 className="my-4">Clientes Encontrados</h2>
        <div className="results-container">
          {filteredClients.map((client, index) => (
            <SearchResult
              key={index}
              title={client.nome}
              subtitle={client.ramo}
              description={client.descricao || "Descrição não disponível"}
              mapUrl={client.mapUrl || ""}
              mapsIcon={maps_icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
