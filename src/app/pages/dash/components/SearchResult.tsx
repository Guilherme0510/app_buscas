import React from "react";
import whatsapp_icon from '../../../assets/images/whatsapp.png';
import facebook_icon from '../../../assets/images/facebook.png';
import instagram_icon from '../../../assets/images/instagram.png';
import ifood_icon from '../../../assets/images/ifood.jpg';
import booking_icon from '../../../assets/images/booking.png';
import site_icon from '../../../assets/images/site.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCopy, faLocation, faLocationDot, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

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
  iconIfood?: string;
  iconBooking?: string;
  iconSite?: string;
}

const truncateDescription = (text: string, maxWords: number): string => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

export const SearchResult: React.FC<SearchResultProps> = React.memo(({ title, subtitle, description, mapUrl, mapsIcon, endereco, iconFace, iconInsta, iconWhats, iconIfood, iconBooking, iconSite }) => {
  const hasIcons = iconFace || iconInsta || iconWhats || iconIfood || iconBooking || iconSite;

  // const truncatedDescription = truncateDescription(description, 40);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(endereco);
      console.log("Texto copiado para área de transferência");
    } catch (err) {
      console.error("Erro ao copiar texto: ", err);
    }
  };

  return (
    <div className="search-result">
      <div className="text-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p className="result-description fw-medium">
          <FontAwesomeIcon icon={faLocationDot} className="icon_location" /> {endereco} <FontAwesomeIcon onClick={copyText} className="icon_copy" icon={faCopy} />
        </p>
        <p className="result-description">
          <small><FontAwesomeIcon icon={faClock} className="icon_clock"/><span className="text-danger">Fechado</span> Seg - Sex: 08:00 - 18:00</small>
        </p>
        <p>
          <small><FontAwesomeIcon icon={faPhoneAlt} className="icon_telefone" /> (11) 93291-1121</small>
        </p>
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
            <br />
            {iconBooking && (
              <a href={iconBooking} target="_blank" rel="noopener noreferrer">
                <img src={booking_icon} alt="Booking" />
              </a>
            )}
                        <br />
            {iconIfood && (
              <a href={iconIfood} target="_blank" rel="noopener noreferrer">
                <img src={ifood_icon} alt="Ifood" />
              </a>
            )}
                        <br />
            {iconSite && (
              <a href={iconSite} target="_blank" rel="noopener noreferrer">
                <img src={site_icon} alt="Site" />
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
