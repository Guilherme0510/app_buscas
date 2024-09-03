import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NavbarLeft } from "../../shared/components";
import { useAuth } from "../../context/AuthContext";
import './components/edit.css';

export const Edit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [clientData, setClientData] = useState<any>(null);
    const [mapVisible, setMapVisible] = useState<boolean>(false);
    const [mapUrl, setMapUrl] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();
    const { nome } = useAuth();

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                if (id) {
                    const docRef = doc(db, "clientes", id);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setClientData(docSnap.data());
                        setMapUrl(docSnap.data().mapUrl);
                        setMapVisible(!!docSnap.data().mapUrl);
                    } else {
                        console.log("No such document!");
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar os dados do cliente: ", error);
            }
        };

        fetchClientData();
    }, [id]);

    const handleMapClick = () => {
        setMapVisible(true);
    };

    const handleMapUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMapUrl(event.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setClientData((prevData: any) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (mapVisible && !mapUrl.startsWith("https://www.google.com/maps")) {
            setErrorMessage("Por favor, insira uma URL válida do Google Maps.");
            return;
        }

        try {
            if (id) {
                const docRef = doc(db, "clientes", id);
                await updateDoc(docRef, {
                    ...clientData,
                    mapUrl,
                    updatedBy: nome,
                    updatedAt: new Date().toISOString(),
                });

                setFormSubmitted(true);
                setTimeout(() => setFormSubmitted(false), 3000);

                navigate("/lista");
            }
        } catch (error) {
            console.error("Erro ao atualizar empresa: ", error);
        }
    };

    return (
        <div>
            <NavbarLeft />
            <div className="banner-edit">
                <div className="edit-content-container">
                    <h2 className="form-title">Editar Empresa</h2>
                    {clientData && (
                        <form className="edit-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="cnpj">CNPJ</label>
                                    <input
                                        type="text"
                                        id="cnpj"
                                        className="form-control"
                                        value={clientData.cnpj || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="nome">Nome da Empresa</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        className="form-control"
                                        value={clientData.nome || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="ramo">Ramo da Empresa</label>
                                    <input
                                        type="text"
                                        id="ramo"
                                        className="form-control"
                                        value={clientData.ramo || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="estado">Estado da Empresa</label>
                                    <input
                                        type="text"
                                        id="estado"
                                        className="form-control"
                                        value={clientData.estado || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="cidade">Cidade da Empresa</label>
                                    <input
                                        type="text"
                                        id="cidade"
                                        className="form-control"
                                        value={clientData.cidade || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="bairro">Bairro da Empresa</label>
                                    <input
                                        type="text"
                                        id="bairro"
                                        className="form-control"
                                        value={clientData.bairro || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="instagram">Instagram da Empresa</label>
                                    <input
                                        type="text"
                                        id="instagram"
                                        className="form-control"
                                        value={clientData.instagram || ""}
                                        onChange={handleInputChange}
                                        
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="facebook">Facebook da Empresa</label>
                                    <input
                                        type="text"
                                        id="facebook"
                                        className="form-control"
                                        value={clientData.facebook || ""}
                                        onChange={handleInputChange}
                                        
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="whatsapp">WhatsApp da Empresa</label>
                                    <input
                                        type="text"
                                        id="whatsapp"
                                        className="form-control"
                                        value={clientData.whatsapp || ""}
                                        onChange={handleInputChange}
                                        
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="endereco">Endereço da Empresa</label>
                                    <input
                                        type="text"
                                        id="endereco"
                                        className="form-control"
                                        value={clientData.endereco || ""}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="descricao">Descrição da Empresa</label>
                                <textarea
                                    id="descricao"
                                    className="form-control"
                                    value={clientData.descricao || ""}
                                    onChange={handleInputChange}
                                    required
                                />
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
                                        <input
                                            onChange={handleMapUrlChange}
                                            type="text"
                                            id="map-url"
                                            className="form-control"
                                            value={mapUrl}
                                            required
                                        />
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
                            {errorMessage && <p className="form-error-message">{errorMessage}</p>}
                            <button type="submit" className="btn-submit">Atualizar Empresa</button>
                            {formSubmitted && <p className="form-success-message">Empresa atualizada com sucesso!</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
