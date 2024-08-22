import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./perfil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface PerfilData {
  nome: string;
  email: string;
  empresa: string;
  cargo: string;
  avatar: string;
  opcaoSelecionada: string;
}

const avatarOptions = [
  "https://grupomapscartaodigital.com.br/img/mps.jpg",
];

export const Perfil: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [perfilData, setPerfilData] = useState<PerfilData>({
    nome: "Vitor Marques Silva",
    email: "vitor.marques@example.com",
    empresa: "G Maps",
    cargo: "Desenvolvedor",
    avatar: avatarOptions[0],
    opcaoSelecionada: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPerfilData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setPerfilData(prevState => ({
          ...prevState,
          avatar: reader.result as string
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    toggleEdit();
  };

  const options = [
    { value: '', label: 'Selecione Aqui', disabled: true }, // Desabilitado inicialmente
    { value: 'cobranca', label: 'Cobrança', disabled: false },
    { value: 'desenvolvedor', label: 'Desenvolvedor', disabled: false },
    { value: 'estagiario', label: 'Estagiário', disabled: false },
    { value: 'financeiro', label: 'Financeiro', disabled: false },
    { value: 'gestao', label: 'Gestão', disabled: false },
    { value: 'marketing', label: 'Marketing', disabled: false },
    { value: 'operador', label: 'Operador', disabled: false },
    { value: 'backoffice', label: 'Back Office', disabled: false },
  ];

  return (
    <div className="perfil-container">
      <button className="back-button" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft}/> </button>
      <div className="perfil-card">
        <div className="perfil-header">
          <div className="perfil-avatar-wrapper">
            <img
              src={perfilData.avatar}
              alt="Profile"
              className="perfil-avatar"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="perfil-avatar-input"
              />
            )}
          </div>
          {isEditing ? (
            <input
              type="text"
              name="nome"
              value={perfilData.nome}
              onChange={handleInputChange}
              className="perfil-input"
            />
          ) : (
            <h2 className="perfil-name">{perfilData.nome}</h2>
          )}
        </div>
        <div className="perfil-details">
          <p>
            <strong>Email:</strong> {isEditing ? (
              <input
                type="email"
                name="email"
                value={perfilData.email}
                onChange={handleInputChange}
                className="perfil-input"
              />
            ) : (
              perfilData.email
            )}
          </p>
          <p>
            <strong>Empresa:</strong> {isEditing ? (
              <input
                type="text"
                name="empresa"
                value={perfilData.empresa}
                onChange={handleInputChange}
                className="perfil-input"
              />
            ) : (
              perfilData.empresa
            )}
          </p>
          <p>
            <strong>Cargo:</strong> {isEditing ? (
              <select
                name="opcaoSelecionada"
                value={perfilData.opcaoSelecionada}
                onChange={handleInputChange}
                className="perfil-select form-select"
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
                <span className="perfil-option">{perfilData.opcaoSelecionada}</span>
            )}
          </p>
        </div>
        <button className="perfil-button" onClick={isEditing ? handleSave : toggleEdit}>
          {isEditing ? "Salvar" : "Editar Perfil"}
        </button>
      </div>
    </div>
  );
};
