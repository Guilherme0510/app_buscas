import React, { useState } from "react";
import { NavbarLeft } from "../../shared/components";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import './components/add.css';
import { useAuth } from "../../context/AuthContext"; 

export const Add: React.FC = () => {
    const [mapVisible, setMapVisible] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [mapUrl, setMapUrl] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();
    const auth = getAuth();
    const userId = auth.currentUser?.uid 
    const { nome } = useAuth(); 

    const handleMapClick = () => {
        setMapVisible(true);
    };

    const handleMapUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMapUrl(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const cnpj = (document.getElementById('cnpj') as HTMLInputElement).value;
        const nomeEmpresa = (document.getElementById('nome') as HTMLInputElement).value;
        const ramo = (document.getElementById('ramo') as HTMLInputElement).value;
        const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
        const estado = (document.getElementById('estado') as HTMLInputElement).value;
        const cidade = (document.getElementById('cidade') as HTMLInputElement).value;
        const bairro = (document.getElementById('bairro') as HTMLInputElement).value;

        if (mapVisible && !mapUrl.startsWith("https://www.google.com/maps")) {
            setErrorMessage("Por favor, insira uma URL válida do Google Maps.");
            return;
        }

        try {
            await addDoc(collection(db, "clientes"), {
                cnpj,
                nome: nomeEmpresa,
                ramo,
                descricao,
                mapUrl,
                estado,
                cidade,
                bairro,
                createdBy: userId, 
                createdByName: nome,
                createdAt: new Date().toISOString(),
            });

            setFormSubmitted(true);
            setTimeout(() => setFormSubmitted(false), 3000);

            (document.getElementById('cnpj') as HTMLInputElement).value = "";
            (document.getElementById('nome') as HTMLInputElement).value = "";
            (document.getElementById('ramo') as HTMLInputElement).value = "";
            (document.getElementById('descricao') as HTMLInputElement).value = "";
            (document.getElementById('estado') as HTMLInputElement).value = "";
            (document.getElementById('cidade') as HTMLInputElement).value = "";
            (document.getElementById('bairro') as HTMLInputElement).value = "";

            setMapUrl("");
            setMapVisible(false);
            setErrorMessage("");
            navigate("/lista");
        } catch (error) {
            console.error("Erro ao adicionar empresa: ", error);
        }
    };
    return (
        <div>
            <NavbarLeft />
            <div className="banner-add">
                <div className="add-content-container">
                    <h2 className="form-title">Adicionar Empresa</h2>
                    <form className="add-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="cnpj">CNPJ</label>
                                <input type="text" id="cnpj" className="form-control" placeholder="Digite o CNPJ" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="nome">Nome da Empresa</label>
                                <input type="text" id="nome" className="form-control" placeholder="Digite o nome da empresa" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="ramo">Ramo da Empresa</label>
                                <input type="text" id="ramo" className="form-control" placeholder="Digite o ramo da empresa" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="estado">Estado da Empresa</label>
                                <input type="text" id="estado" className="form-control" placeholder="Digite o estado da empresa" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="cidade">Cidade da Empresa</label>
                                <input type="text" id="cidade" className="form-control" placeholder="Digite o cidade da empresa" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="bairro">Bairro da Empresa</label>
                                <input type="text" id="bairro" className="form-control" placeholder="Digite o bairro da empresa" required />
                            </div>
                        </div>
                        <div className="form-group col-md-12">
                                <label htmlFor="descricao">Descrição da Empresa</label>
                                <textarea id="descricao" className="form-control" placeholder="Digite a descrição da empresa" required />
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
                        {errorMessage && <p className="form-error-message">{errorMessage}</p>}
                        <button type="submit" className="btn-submit">Adicionar Empresa</button>
                        {formSubmitted && <p className="form-success-message">Empresa adicionada com sucesso!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};
