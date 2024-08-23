import React, { useState } from "react";
import { NavbarLeft } from "../../shared/components";
import './components/add.css';

export const Add: React.FC = () => {
    const [mapVisible, setMapVisible] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [mapUrl, setMapUrl] = useState<string>("");

    const handleMapClick = () => {
        setMapVisible(true);
    };

    const handleMapUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMapUrl(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
    };

    return (
        <div>
            <NavbarLeft />
            <div className="banner-add">
                <div className="add-content-container">
                    <h2 className="form-title">Adicionar Empresa</h2>
                    <form className="add-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6 ">
                                <label htmlFor="cnpj">CNPJ</label>
                                <input type="text" id="cnpj" className="form-control" placeholder="Digite o CNPJ" required />
                            </div>
                            <div className="form-group col-md-6 ">
                                <label htmlFor="name">Nome da Empresa</label>
                                <input type="text" id="name" className="form-control" placeholder="Digite o nome da empresa" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 ">
                                <label htmlFor="business">Ramo da Empresa</label>
                                <input type="text" id="business" className="form-control" placeholder="Digite o ramo da empresa" required />
                            </div>
                            <div className="form-group col-md-6 ">
                                <label htmlFor="description">Descrição da Empresa</label>
                                <textarea  id="description" className="form-control" placeholder="Digite a descrição da empresa" required />
                            </div>
                        </div>
                        {!mapVisible && (
                            <div className="map-placeholder" onClick={handleMapClick}>
                                <p>Clique para adicionar o mapa</p>
                                <img src="https://via.placeholder.com/400x200.png?text=Imagem+do+Mapa" alt="Mapa" />
                            </div>
                        )}
                        {mapVisible && (
                            <>
                                <div className="form-group form-group-url col-md-12">
                                    <label htmlFor="map-url">URL do Google Maps</label>
                                    <input onChange={handleMapUrlChange} type="text" id="map-url" className="form-control" placeholder="Cole o link do Google Maps aqui" required />
                                </div>
                                <iframe
                                    id="map"
                                    title="Google Maps"
                                    src={mapUrl}
                                    className="map-iframe"
                                    allowFullScreen={false}
                                    loading="lazy"
                                ></iframe>
                            </>
                        )}
                        <button type="submit" className="btn-submit">Adicionar Empresa</button>
                        {formSubmitted && <p className="form-success-message">Empresa adicionada com sucesso!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};
