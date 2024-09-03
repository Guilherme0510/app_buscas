import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { SearchInput, SearchResult } from "./components";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import maps_icon from "../../assets/images/maps-icon.png";
import "../../loading.css";

export const Dash: React.FC = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [filteredClients, setFilteredClients] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        const clientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
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

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query") || "";
    const locationQuery = queryParams.get("location") || "";

    setQuery(query);
    setLocationQuery(locationQuery);
  }, [location.search]);

  useEffect(() => {
    const normalizeString = (str: string) => {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "")
        .toLowerCase();
    };

    const handleSearch = () => {
      const lowerQuery = normalizeString(query);
      const lowerLocationQuery = normalizeString(locationQuery);

      const filtered = clients.filter(
        (client) =>
          (normalizeString(client.nome || "").includes(lowerQuery) ||
            normalizeString(client.ramo || "").includes(lowerQuery)) &&
          (lowerLocationQuery
            ? normalizeString(client.estado || "").includes(lowerLocationQuery) ||
              normalizeString(client.cidade || "").includes(lowerLocationQuery) ||
              normalizeString(client.bairro || "").includes(lowerLocationQuery)
            : true)
      );

      setFilteredClients(filtered);
    };

    handleSearch();
  }, [query, locationQuery, clients]);

  if (loading) {
    return (
      <div className="circle-loading">
        <CircularProgress color="inherit" className="circle"/>
      </div>
    );
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
              endereco={client.endereco}
              iconFace={client.facebook}
              iconInsta={client.instagram}
              iconWhats={client.whatsapp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
