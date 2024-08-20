import React from "react";
import "./styles/Dash.css";

interface SearchResultProps {
  title: string;
  subtitle: string;
  description: string;
  mapUrl: string;
  mapsIcon: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  title,
  subtitle,
  description,
  mapUrl,
  mapsIcon
}) => (
  <div className="search-result">
    <div className="text-content">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
    <div className="map-container">
      <iframe src={mapUrl} title={title} allowFullScreen></iframe>
      <img src={mapsIcon} alt="Ícone do Mapa" className="map-icon" />
    </div>
  </div>
);