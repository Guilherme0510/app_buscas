import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchInput, SearchResult } from "./components";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import maps_icon from "../../assets/images/maps-icon.png";
import "../../loading.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Client {
  nome: string;
  ramo: string;
  descricao?: string;
  mapUrl?: string;
  endereco: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  estado?: string;
  cidade?: string;
  bairro?: string;
}

export const Dash: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedRamo, setSelectedRamo] = useState("");
  const [ramosOptions, setRamosOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const location = useLocation();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        const clientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Client),
        }));
        setClients(clientsData);
        setFilteredClients(clientsData);

        const ramos = [
          ...new Set(clientsData.map((client) => client.ramo).filter(Boolean)),
        ];
        setRamosOptions(ramos);
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
      const lowerSelectedRamo = normalizeString(selectedRamo);

      const filtered = clients.filter(
        (client) =>
          (normalizeString(client.nome || "").includes(lowerQuery) ||
            normalizeString(client.ramo || "").includes(lowerQuery)) &&
          (lowerLocationQuery
            ? normalizeString(client.estado || "").includes(
                lowerLocationQuery
              ) ||
              normalizeString(client.cidade || "").includes(
                lowerLocationQuery
              ) ||
              normalizeString(client.bairro || "").includes(lowerLocationQuery)
            : true) &&
          (lowerSelectedRamo
            ? normalizeString(client.ramo || "").includes(lowerSelectedRamo)
            : true)
      );

      setFilteredClients(filtered);
      setCurrentPage(1);
    };

    handleSearch();
  }, [query, locationQuery, selectedRamo, clients]);

  const handleClearSearch = () => {
    setQuery("");
    setLocationQuery("");
    setSelectedRamo("");
    setFilteredClients(clients); // Reseta para mostrar todos os clientes
    setCurrentPage(1); // Volta à primeira página
  };

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="circle-loading">
        <CircularProgress color="inherit" className="circle" />
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
          selectedRamo={selectedRamo}
          setSelectedRamo={setSelectedRamo}
          ramosOptions={ramosOptions}
          handleClearSearch={handleClearSearch}
        />
        <h2 className="my-4">Clientes Encontrados: {filteredClients.length}</h2>
        <div className="results-container">
          {currentClients.map((client, index) => (
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
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>
            {currentPage} - {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
