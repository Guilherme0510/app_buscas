import React from "react";
import whatsapp_icon from "../../../assets/images/whatsapp.png";
import facebook_icon from "../../../assets/images/facebook.png";
import instagram_icon from "../../../assets/images/instagram.png";
import ifood_icon from "../../../assets/images/ifood.jpg";
import booking_icon from "../../../assets/images/booking.png";
import site_icon from "../../../assets/images/site.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCopy,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

interface SearchResultProps {
  title: string;
  subtitle: string;
  description: string;
  mapUrl: string;
  endereco: string;
  iconFace?: string;
  iconInsta?: string;
  iconWhats?: string;
  iconIfood?: string;
  iconBooking?: string;
  iconSite?: string;
  fotoEntrada?: string;
  numero?: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  title,
  subtitle,
  description,
  mapUrl,
  endereco,
  iconFace,
  iconInsta,
  iconWhats,
  iconIfood,
  iconBooking,
  iconSite,
  fotoEntrada,
  numero,
}) => {
  const hasIcons =
    iconFace || iconInsta || iconWhats || iconIfood || iconBooking || iconSite;

  // Função para verificar se está aberto ou fechado
  const isOpen = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0 (Domingo) a 6 (Sábado)
    const currentHour = currentDate.getHours();

    const openingHour = 8; // 08:00
    const closingHour = 18; // 18:00

    // Verificar se é de segunda a sexta (1 a 5) e se o horário está entre 08:00 e 18:00
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= openingHour && currentHour < closingHour) {
      return true;
    }
    return false;
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(endereco);
      alert("Endereço copiado para área de transferência!");
    } catch (err) {
      console.error("Erro ao copiar texto: ", err);
      alert("Erro ao copiar endereço.");
    }
  };

  return (
    <div className="search-result">
      <div className="text-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p className="result-description fw-medium">
          <FontAwesomeIcon icon={faLocationDot} className="icon_location" />{" "}
          {endereco}{" "}
          <FontAwesomeIcon
            onClick={copyText}
            className="icon_copy"
            icon={faCopy}
          />
        </p>
        <p className="result-description">
  <small>
    <FontAwesomeIcon icon={faClock} className="icon_clock" />
    <span id="" className={isOpen() ? "status-open" : "status-closed"}>
      {isOpen() ? "Aberto" : "Fechado"}
    </span>{" "}
    Seg - Sex: 08:00 - 18:00
  </small>
</p>

        <p>
          <small>
            <FontAwesomeIcon icon={faPhoneAlt} className="icon_telefone" />
            {numero ? (
              <a href={`tel:${numero}`}>{numero}</a>
            ) : (
              "Número não disponível"
            )}
          </small>
        </p>
        {hasIcons && (
          <div className="icons">
            {iconFace && (
              <a href={iconFace} target="_blank" rel="noopener noreferrer">
                <img src={facebook_icon} alt="Facebook" />
              </a>
            )}
            {iconInsta && (
              <a href={iconInsta} target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram" />
              </a>
            )}
            {iconWhats && (
              <a href={iconWhats} target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
            )}
            {iconBooking && (
              <a href={iconBooking} target="_blank" rel="noopener noreferrer">
                <img src={booking_icon} alt="Booking" />
              </a>
            )}
            {iconIfood && (
              <a href={iconIfood} target="_blank" rel="noopener noreferrer">
                <img src={ifood_icon} alt="Ifood" />
              </a>
            )}
            {iconSite && (
              <a href={iconSite} target="_blank" rel="noopener noreferrer">
                <img src={site_icon} alt="Site" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="map-container row">
        {fotoEntrada && (
          <div className="col-md-6 col-5">
            <img
              src={fotoEntrada}
              alt="Foto de Entrada"
              className="img-dash"
            />
          </div>
        )}
        {mapUrl && (
          <div className="col-md-6 col-4">
            <iframe src={mapUrl} title={title} allowFullScreen></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

