import React, { useState, useEffect } from "react";
import { Client } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { DeleteSelectedButton } from "./DeleteSelectedButton";
import { db } from "../../../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
interface ClientTableProps {
  clients: Client[];
  onDeleteClients: (ids: string[]) => void;
}

export const ClientTable: React.FC<ClientTableProps> = ({ clients, onDeleteClients }) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const auth = getAuth();
  const userId = auth.currentUser?.uid
  const Admin = (userId === 'QtWNWEPXcTMUPrQQrzYj1JjWJC73')

  useEffect(() => {
    const fetchFilteredClients = async () => {
      try {
        let filteredClientsList: Client[] = [];
        if (Admin) {
          filteredClientsList = clients;
        } else {
          filteredClientsList = clients.filter(client => client.createdBy === userId);
        }
        setFilteredClients(filteredClientsList);
      } catch (error) {
        console.error('Erro ao filtrar clientes: ', error);
      }
    };

    fetchFilteredClients();
  }, [clients, userId, Admin]);

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(new Set(filteredClients.map(client => client.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedRows(prevSelectedRows => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(id)) {
        newSelectedRows.delete(id);
      } else {
        newSelectedRows.add(id);
      }
      return newSelectedRows;
    });
  };

  const handleDeleteSelected = async () => {
    if (window.confirm("Tem certeza de que deseja excluir os clientes selecionados?")) {
      try {
        const deletePromises = Array.from(selectedRows).map(async id => {
          try {
            const clientDocRef = doc(db, "clientes", id);
            await deleteDoc(clientDocRef);
            console.log(`Cliente com ID ${id} excluído com sucesso.`);
          } catch (deleteError) {
            console.error(`Erro ao excluir cliente com ID ${id}: `, deleteError);
          }
        });

        await Promise.all(deletePromises);

        onDeleteClients(Array.from(selectedRows));
        setSelectedRows(new Set());
      } catch (error) {
        console.error("Erro ao excluir clientes: ", error);
      }
    }
  };

  const handleDeleteClient = async (id: string) => {
    if (window.confirm("Tem certeza de que deseja excluir este cliente?")) {
      try {
        const clientDocRef = doc(db, "clientes", id);
        await deleteDoc(clientDocRef);
        console.log(`Cliente com ID ${id} excluído com sucesso.`);
        onDeleteClients([id]); 
      } catch (error) {
        console.error("Erro ao excluir cliente: ", error);
      }
    }
  };


  return (
    <>
      {selectedRows.size > 0 && (
        <DeleteSelectedButton onDelete={handleDeleteSelected} />
      )}
      <table className="table client-table">
        <thead>
          <tr>
            <th className="text-white">
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectedRows.size === filteredClients.length && filteredClients.length > 0}
                className="checkbox-table form-check-input"
              />
            </th>
            <th className="text-white">Nome</th>
            <th className="text-white">CNPJ</th>
            <th className="text-white">Operador</th>
            <th className="text-white">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">Nenhum cliente encontrado</td>
            </tr>
          ) : (
            filteredClients.map(client => (
              <tr key={client.id}>
                <td
                  style={{
                    backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                    color: selectedRows.has(client.id) ? "#fff" : "",
                  }}
                >
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(client.id)}
                    checked={selectedRows.has(client.id)}
                    className="checkbox-table form-check-input"
                  />
                </td>
                <td
                  style={{
                    backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                    color: selectedRows.has(client.id) ? "#fff" : "",
                  }}
                >
                  {client.nome}
                </td>
                <td
                  style={{
                    backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                    color: selectedRows.has(client.id) ? "#fff" : "",
                  }}
                >
                  {client.cnpj}
                </td>
                <td
                  style={{
                    backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                    color: selectedRows.has(client.id) ? "#fff" : "",
                  }}
                >
                  {client.createdByName}
                </td>
                <td className="bg-secondary"
                  style={{
                    backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                    color: selectedRows.has(client.id) ? "#fff" : "",
                  }}
                >
                  <button
                    className="btn btn-edit text-white"
                    style={{ color: selectedRows.has(client.id) ? "#fff" : "" }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  {(Admin || userId === client.createdBy) && (
                    <button
                      className="btn btn-delete text-white border"
                      onClick={() => handleDeleteClient(client.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};
