import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Substitua useHistory por useNavigate
import "./perfil.css";

interface PerfilData {
    nome: string;
    email: string;
    empresa: string;
    cargo: string;
    avatar: string;
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
    });

    const navigate = useNavigate(); // Utilize useNavigate

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleAvatarSelect = (avatarUrl: string) => {
        setPerfilData(prevState => ({
            ...prevState,
            avatar: avatarUrl
        }));
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        toggleEdit();
    };

    return (
        <div className="perfil-container">
            <button className="back-button" onClick={() => navigate(-1)}>Voltar</button> {/* Botão de voltar */}
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
                            name="name"
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
                            <input
                                type="text"
                                name="cargo"
                                value={perfilData.cargo}
                                onChange={handleInputChange}
                                className="perfil-input"
                            />
                        ) : (
                            perfilData.cargo
                        )}
                    </p>
                </div>
                {isEditing && (
                    <div className="avatar-options">
                        <h3>Avatar Padrão:</h3>
                        <div className="avatar-selection">
                            {avatarOptions.map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}
                                    className={`avatar-option ${perfilData.avatar === avatar ? "selected" : ""}`}
                                    onClick={() => handleAvatarSelect(avatar)}
                                />
                            ))}
                        </div>
                    </div>
                )}
                <button className="perfil-button" onClick={isEditing ? handleSave : toggleEdit}>
                    {isEditing ? "Salvar" : "Editar Perfil"}
                </button>
            </div>
        </div>
    );
}
