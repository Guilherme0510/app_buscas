import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./perfil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../shared/context/AuthContext";
import { db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface PerfilData {
  nome: string;
  email: string;
  avatar: string;
}

const avatarOptions = [
  "https://grupomapscartaodigital.com.br/img/mps.jpg",
];

export const Perfil: React.FC = () => {
  const [perfilData, setPerfilData] = useState<PerfilData>({
    nome: "",
    email: "",
    avatar: avatarOptions[0],
  });

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      const email = user.email || "";
      const nome = email.split("@")[0];

      const loadPerfilData = async () => {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPerfilData({
            nome: nome,
            email: email,
            avatar: docSnap.data()?.avatar || avatarOptions[0],
          });
        } else {
          await setDoc(docRef, {
            nome: nome,
            email: email,
            avatar: avatarOptions[0],
          });
          setPerfilData({
            nome: nome,
            email: email,
            avatar: avatarOptions[0],
          });
        }
      };

      loadPerfilData();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Falha ao deslogar:", error);
    }
  };

  return (
    <div className="perfil-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="perfil-card">
        <div className="perfil-header">
          <div className="perfil-avatar-wrapper">
            <img
              src={perfilData.avatar}
              alt="Profile"
              className="perfil-avatar"
            />
          </div>
        </div>
        <div className="perfil-details">
          <h2 className="text-dark">
            <strong>{perfilData.nome}</strong>
          </h2>
          <p>
            <strong>Email:</strong> {perfilData.email}
          </p>
        </div>
        <button className="btn btn-danger mt-2" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Sair
        </button>
      </div>
    </div>
  );
};
