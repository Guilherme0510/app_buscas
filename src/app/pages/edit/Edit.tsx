import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NavbarLeft } from "../../shared/components";
import { useAuth } from "../../shared/context/AuthContext";
import "./components/edit.css";

export const Edit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [clientData, setClientData] = useState<any>(null);
  const [mapVisible, setMapVisible] = useState<boolean>(false);
  const [mapUrl, setMapUrl] = useState<string>("");
  const [fotoEntrada, setFotoEntrada] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string>("");
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
            setMapUrl(docSnap.data().mapUrl || "");
            setMapVisible(!!docSnap.data().mapUrl);
            // Atualiza o preview da imagem se estiver disponível
            if (docSnap.data().fotoEntrada) {
              setFotoPreview(docSnap.data().fotoEntrada);
            }
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

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          fotoEntrada: fotoPreview, // Atualiza a URL da imagem no banco de dados
          updatedBy: nome,
          updatedAt: new Date().toISOString(),
        });

        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);

        // Limpa o formulário e o preview da imagem
        setClientData(null);
        setFotoEntrada(null);
        setFotoPreview("");
        setMapUrl("");
        setMapVisible(false);
        setErrorMessage("");

        navigate("/lista");
      }
    } catch (error) {
      console.error("Erro ao atualizar empresa: ", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFotoEntrada(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result as string); // Atualiza a URL da imagem para visualização
      };
      reader.readAsDataURL(file); // Converte o arquivo em URL para visualização
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
                  <label htmlFor="ifood">Ifood da Empresa</label>
                  <input
                    type="text"
                    id="ifood"
                    className="form-control"
                    value={clientData.ifood || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="booking">Booking da Empresa</label>
                  <input
                    type="text"
                    id="booking"
                    className="form-control"
                    value={clientData.booking || ""}
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
                  <label htmlFor="numero">Numero da Empresa</label>
                  <input
                    type="text"
                    id="numero"
                    className="form-control"
                    value={clientData.numero || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="whatsapp">Site da Empresa</label>
                  <input
                    type="text"
                    id="site"
                    className="form-control"
                    value={clientData.site || ""}
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
                <label htmlFor="descricao">
                  Horario de Funcionamento da Empresa
                </label>
                <textarea
                  id="horario"
                  className="form-control"
                  value={clientData.horario || ""}
                  onChange={handleInputChange}
                  required
                />
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
                  <img
                    src="https://via.placeholder.com/400x200.png?text=Imagem+do+Mapa"
                    alt="Mapa"
                  />
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
                <div className="form-group col-md-12 input-img">
                <label
                  htmlFor="img-input"
                  className="flex flex-col items-center justify-center w-full max-w-sm h-72 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full p-4">
                    {fotoPreview ? (
                      <img
                        id="image-preview-verso"
                        src={fotoPreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div
                        id="upload-icon-verso"
                        className="flex flex-col items-center text-gray-400"
                      >
                        <svg
                          className="h-12 w-12"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <p className="mt-2 text-sm text-gray-600">
                          Clique para adicionar a foto
                        </p>
                      </div>
                    )}
                    <input
                      id="img-input"
                      name="img-input"
                      type="file"
                      accept="image/*"
                      className="d-none"
                      onChange={handleImageChange}
                    />
                  </div>
                </label>
              </div>
              {errorMessage && (
                <p className="form-error-message">{errorMessage}</p>
              )}
              <button type="submit" className="btn-submit">
                Atualizar Empresa
              </button>
              {formSubmitted && (
                <p className="form-success-message">
                  Empresa atualizada com sucesso!
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
