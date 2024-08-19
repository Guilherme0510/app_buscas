import React from 'react';
import './styles/Dash.css'

interface SearchResultProps {
    title: string;
    subtitle: string;
    description: string;
    mapUrl: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({ title, subtitle, description, mapUrl }) => {
    return (
        <div className="search-result">
            <div className="text-content">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </div>
            <iframe
                src={mapUrl}
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`${title} - Mapa`}
            ></iframe>
        </div>
    );
};
