import React from "react";
import "./styles/Dash.css";
import whatsapp_icon from '../../../assets/images/whatsapp.png';
import facebook_icon from '../../../assets/images/facebook.png';
import instagram_icon from '../../../assets/images/instagram.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

interface SearchResultProps {
  title: string;
  subtitle: string;
  description: string;
  mapUrl: string;
  mapsIcon: string;
  endereco: string;
  iconFace?: string;  
  iconInsta?: string; 
  iconWhats?: string;
}

export const SearchResult: React.FC<SearchResultProps> = React.memo(({ title, subtitle, description, mapUrl, mapsIcon,endereco, iconFace, iconInsta, iconWhats }) => {
  const hasIcons = iconFace || iconInsta || iconWhats;

  const textToCopy = "Este é o texto que será copiado.";

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(endereco);
     console.log("Texto copiado para áre de transferência")
    } catch (err) {
      console.error("Erro ao copiar texto: ", err);
    }
  };

  return (
    <div className="search-result">
      <div className="text-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p className="result-description">{description}</p>
        <p className="result-description">{endereco} <FontAwesomeIcon onClick={copyText} className="icon_copy" icon={faCopy}/></p>
        {hasIcons && (
          <div className="icons">
            {iconFace && ( 
              <a href={iconFace} target="_blank" rel="noopener noreferrer">
                <img src={facebook_icon} alt="Facebook" />
              </a>
            )}
            <br />
            {iconInsta && (
              <a href={iconInsta} target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram" />
              </a>
            )}
            <br />
            {iconWhats && (
              <a href={iconWhats} target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="map-container">
        <iframe src={mapUrl} title={title} allowFullScreen></iframe>
        <img src={mapsIcon} alt="Ícone do Mapa" className="map-icon" />
      </div>
    </div>
  );
});
