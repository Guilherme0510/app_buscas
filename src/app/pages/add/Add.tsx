import React, { useState } from "react";
import { NavbarLeft } from "../../shared/components";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "./components/add.css";
import { useAuth } from "../../shared/context/AuthContext";

export const Add: React.FC = () => {
  const [mapVisible, setMapVisible] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [mapUrl, setMapUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fotoEntrada, setFotoEntrada] = useState<File | null>(null); // Estado para armazenar o arquivo de imagem
  const [fotoPreview, setFotoPreview] = useState<string>(""); // Estado para armazenar a URL da imagem
  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const { nome } = useAuth();

  const handleMapClick = () => {
    setMapVisible(true);
  };

  const handleMapUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMapUrl(event.target.value);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cnpj = (document.getElementById("cnpj") as HTMLInputElement).value;
    const nomeEmpresa = (document.getElementById("nome") as HTMLInputElement)
      .value;
    const ramo = (document.getElementById("ramo") as HTMLInputElement).value;
    const descricao = (document.getElementById("descricao") as HTMLInputElement)
      .value;
    const estado = (document.getElementById("estado") as HTMLInputElement)
      .value;
    const cidade = (document.getElementById("cidade") as HTMLInputElement)
      .value;
    const bairro = (document.getElementById("bairro") as HTMLInputElement)
      .value;
    const facebook = (document.getElementById("facebook") as HTMLInputElement)
      .value;
    const instagram = (document.getElementById("instagram") as HTMLInputElement)
      .value;
    const whatsapp = (document.getElementById("whatsapp") as HTMLInputElement)
      .value;
    const endereco = (document.getElementById("endereco") as HTMLInputElement)
      .value;
    const ifood = (document.getElementById("ifood") as HTMLInputElement).value;
    const booking = (document.getElementById("booking") as HTMLInputElement)
      .value;
    const numero = (document.getElementById("numero") as HTMLInputElement)
      .value;
    const site = (document.getElementById("site") as HTMLInputElement).value;
    const horario = (document.getElementById("horario") as HTMLInputElement)
      .value;

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
        facebook,
        instagram,
        whatsapp,
        endereco,
        ifood,
        booking,
        numero,
        site,
        horario,
        fotoEntrada: fotoPreview, // Adiciona a URL da imagem
        createdBy: userId,
        createdByName: nome,
        createdAt: new Date().toISOString(),
      });

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);

      (document.getElementById("cnpj") as HTMLInputElement).value = "";
      (document.getElementById("nome") as HTMLInputElement).value = "";
      (document.getElementById("ramo") as HTMLInputElement).value = "";
      (document.getElementById("descricao") as HTMLInputElement).value = "";
      (document.getElementById("estado") as HTMLInputElement).value = "";
      (document.getElementById("cidade") as HTMLInputElement).value = "";
      (document.getElementById("bairro") as HTMLInputElement).value = "";
      (document.getElementById("facebook") as HTMLInputElement).value = "";
      (document.getElementById("instagram") as HTMLInputElement).value = "";
      (document.getElementById("whatsapp") as HTMLInputElement).value = "";
      (document.getElementById("endereco") as HTMLInputElement).value = "";
      (document.getElementById("ifood") as HTMLInputElement).value = "";
      (document.getElementById("booking") as HTMLInputElement).value = "";
      (document.getElementById("numero") as HTMLInputElement).value = "";
      (document.getElementById("site") as HTMLInputElement).value = "";
      (document.getElementById("horario") as HTMLInputElement).value = "";
      (document.getElementById("img-input") as HTMLInputElement).value = "";

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
                <input
                  type="text"
                  id="cnpj"
                  className="form-control"
                  placeholder="Digite o CNPJ"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="nome">Nome da Empresa</label>
                <input
                  type="text"
                  id="nome"
                  className="form-control"
                  placeholder="Digite o nome da empresa"
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
                  placeholder="Digite o ramo da empresa"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="estado">Estado da Empresa</label>
                <input
                  type="text"
                  id="estado"
                  className="form-control"
                  placeholder="Digite o estado da empresa"
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
                  placeholder="Digite o cidade da empresa"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="bairro">Bairro da Empresa</label>
                <input
                  type="text"
                  id="bairro"
                  className="form-control"
                  placeholder="Digite o bairro da empresa"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="instagram">Instagram</label>
                <input
                  type="text"
                  id="instagram"
                  className="form-control"
                  placeholder="Digite o instagram da empresa"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="facebook">Facebook</label>
                <input
                  type="text"
                  id="facebook"
                  className="form-control"
                  placeholder="Digite o facebook da empresa"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="ifood">Ifood</label>
                <input
                  type="text"
                  id="ifood"
                  className="form-control"
                  placeholder="Digite o ifood da empresa"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="booking">Booking</label>
                <input
                  type="text"
                  id="booking"
                  className="form-control"
                  placeholder="Digite o booking da empresa"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input
                  type="text"
                  id="whatsapp"
                  className="form-control"
                  placeholder="Digite o whatsapp da empresa"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  id="numero"
                  className="form-control"
                  placeholder="Digite o número da empresa"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="site">Site</label>
                <input
                  type="text"
                  id="site"
                  className="form-control"
                  placeholder="Digite o site da empresa"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="endereco">Endereço Completo</label>
                <input
                  type="text"
                  id="endereco"
                  className="form-control"
                  placeholder="Digite o endereço da empresa"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="horario">Horario de funcionamento</label>
              <textarea
                id="horario"
                className="form-control"
                placeholder="Digite o horário de funcionamento da empresa"
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="descricao">Descrição da Empresa</label>
              <textarea
                id="descricao"
                className="form-control"
                placeholder="Digite a descrição da empresa"
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
                    placeholder="Cole o link do Google Maps aqui"
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
              Adicionar Empresa
            </button>
            {formSubmitted && (
              <p className="form-success-message">
                Empresa adicionada com sucesso!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
