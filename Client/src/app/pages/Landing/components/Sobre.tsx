import axios from "axios";
import { useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const Sobre = () => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [descricao, setDescricao] = useState("");
  const [temRedesSociais, setTemRedesSociais] = useState(false);
  const [temPaginaGoogle, setTemPaginaGoogle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Função para salvar os dados no Firestore
  const salvarInteressado = async () => {
    try {
      await addDoc(collection(db, "interessados"), {
        nome,
        empresa,
        email,
        telefone,
        cidade,
        estado,
        descricao,
        temRedesSociais,
        temPaginaGoogle,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Erro ao salvar no Firebase:", error);
      alert("Erro ao salvar os dados.");
    }
  };

  // Função para enviar a mensagem
  const Msg = async () => {
    try {
      const response = await axios.post("https://app-buscas-backend.vercel.app/api/enviar-texto", {
        phone: `55${telefone.replace(/\D/g, "")}`,
        message: `Olá, ${nome},
Sou o Felipe da G Maps Contact Center e gostaria de apresentar uma solução eficaz para aumentar a presença online do seu negócio: Criação e otimização de perfis no Google Maps.
📌 O que oferecemos:
✅ Criação ou otimização do perfil no Google Maps
✅ Inserção de fotos, vídeos e informações estratégicas
✅ Melhoria no ranqueamento para maior visibilidade
✅ Estratégias para receber mais avaliações positivas
*DIGITE "EU QUERO", PARA SABER MAIS*.
Atenciosamente,
G MAPS CONTACT CENTER`,
      });

      if (response.data.success) {
        salvarInteressado(); // Salvar no Firebase após o envio da mensagem
        setShowModal(true); // Exibir o modal de sucesso
      } else {
        alert("Falha ao enviar a mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Ocorreu um erro ao enviar a mensagem.");
    }
  };

  // Função para fechar o modal e limpar os inputs
  const closeModal = () => {
    setShowModal(false);
    setNome("");
    setEmpresa("");
    setEmail("");
    setTelefone("");
    setCidade("");
    setEstado("");
    setDescricao("");
    setTemRedesSociais(false);
    setTemPaginaGoogle(false);
  };

  return (
    <section id="formulario" className="landing-sobre">
      <div className="row container pb-5">
        <div className="col-md-6 col-12 order-2 order-md-1">
          <div className="form-sobre">
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="nome" className="form-label">Nome do Responsável</label>
                <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" 
                  onChange={(e) => setNome(e.target.value)} value={nome} />
              </div>
              <div className="col-md-6">
                <label htmlFor="empresa" className="form-label">Nome da Empresa</label>
                <input type="text" className="form-control" id="empresa" placeholder="Digite o nome da empresa" 
                  onChange={(e) => setEmpresa(e.target.value)} value={empresa} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" 
                  onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="col-md-6">
                <label htmlFor="telefone" className="form-label">WhatsApp</label>
                <input type="tel" className="form-control" id="telefone" placeholder="(xx) xxxxx-xxxx" 
                  onChange={(e) => setTelefone(e.target.value)} value={telefone} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="cidade" className="form-label">Cidade</label>
                <input type="text" className="form-control" id="cidade" placeholder="Digite sua cidade" 
                  onChange={(e) => setCidade(e.target.value)} value={cidade} />
              </div>
              <div className="col-md-6">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input type="text" className="form-control" id="estado" placeholder="Digite seu estado" 
                  onChange={(e) => setEstado(e.target.value)} value={estado} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="aceitaTermos" 
                    checked={temRedesSociais} onChange={(e) => setTemRedesSociais(e.target.checked)} />
                  <label className="form-check-label" htmlFor="aceitaTermos">Tenho redes sociais</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="receberNovidades" 
                    checked={temPaginaGoogle} onChange={(e) => setTemPaginaGoogle(e.target.checked)} />
                  <label className="form-check-label" htmlFor="receberNovidades">Tenho página no Google Maps</label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Descrição breve sobre a Empresa</label>
              <textarea className="form-control" id="mensagem" rows={4} placeholder="Digite sua mensagem" 
                onChange={(e) => setDescricao(e.target.value)} value={descricao}></textarea>
            </div>

            <button className="btn btn-primary" onClick={Msg}>Enviar</button>
          </div>
        </div>

        <div className="col-md-6 col-12 order-1 order-md-2">
          <div className="sobre-content">
            <h1><span className="text-laranja">Solução</span> completa para negócios locais</h1>
            <p className="text-sobre">
              Esteja presente nos principais canais de buscas e potencialize a presença da sua empresa nos resultados de buscas locais.
            </p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Dados Recebidos</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>Obrigado pela interação. O contato será solicitado pelo WhatsApp em alguns instantes!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={closeModal}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>

  );
};
